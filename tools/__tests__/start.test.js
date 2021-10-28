import assert from 'assert'
import path from 'path'
import { killApp, waitApp, timeout, openBrowser } from 'test/utils/test-fns'
import { spawn } from '../lib/cp'
import { readFile, writeFile } from '../lib/fs'

const startApp = (cwd, port) =>
  spawn('yarn', ['start', '--silent'], {
    cwd,
    env: { PORT: String(port) },
  })

const waitBodyReady = page =>
  new Promise(resolve => {
    const timer = setInterval(async () => {
      const app = await page.$eval('div#app', element => element.innerHTML)
      if (app?.length) {
        clearInterval(timer)
        resolve()
      }
    }, 500)
  })

describe('yarn start', () => {
  const port = 3033
  const cwd = path.resolve(__dirname, '../..')
  const app = startApp(cwd, port)
  let browser
  let page

  beforeAll(async () => {
    await timeout(1000)
    await waitApp(port)
    await timeout(1000)
    ;[browser, page] = await openBrowser(port)
    await waitBodyReady(page)
    await timeout(1000)
  }, 60 * 1000)

  afterAll(async () => {
    await browser.close()
    await killApp(app)
  })

  test('launches the App', async () => {
    const expect = 'React.js News'
    const actual = await page.$$eval('h1', es => es[1].textContent)
    assert.deepStrictEqual(actual, expect)
  })

  test(
    'does Hot Module Reload',
    async () => {
      const sourcePath = 'src/routes/home/components/Home.js'
      const sourceAbsPath = path.join(cwd, sourcePath)
      const expect = 'HMR!!!'
      const defaultH1 = '<h1>React.js News</h1>'
      const modifiedH1 = `<h1>${expect}</h1>`

      const modifySource = async () => {
        const content = await readFile(sourceAbsPath)
        if (!content.includes(defaultH1))
          throw new Error('This test cannot run. Check "defaultH1".')
        await writeFile(sourceAbsPath, content.replace(defaultH1, modifiedH1))
      }

      const resetSource = async () => {
        const content = await readFile(sourceAbsPath)
        await writeFile(sourceAbsPath, content.replace(modifiedH1, defaultH1))
      }

      try {
        await modifySource()
        await timeout(10 * 1000)
        const actual = await page.$$eval('h1', es => es[1].textContent)

        assert.deepStrictEqual(actual, expect)
      } finally {
        await resetSource()
      }
    },
    60 * 1000,
  )

  test(
    'open privacy modal and close it',
    // TODO: move integration test to src/
    async () => {
      const [, , privacyLink] = await page.$$('.Footer-link')
      privacyLink.click()
      await timeout(100)

      expect(
        await page.$eval(
          '.ModalWrapper-root .PrivacyModal-container .PrivacyModal-content',
          e => e.innerHTML,
        ),
      ).not.toBeEmpty()
      await timeout(100)

      const [closeButton] = await page.$$('.PrivacyModal-close-button')
      closeButton.click()
      await timeout(100)

      expect(
        await page.$('.ModalWrapper-root .PrivacyModal-container'),
      ).toBeNull()
    },
    60 * 1000,
  )
})

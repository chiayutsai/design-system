import i from 'log-symbols'
import puppeteer from 'puppeteer'
import terminate from 'terminate'
import waitOn from 'wait-on'

export function success(...args) {
  return console.info(i.success, ...args)
}

export function info(...args) {
  return console.info(i.info, ...args)
}

export function getUrl(port) {
  return `http://localhost:${port}`
}

export async function waitApp(port) {
  const url = getUrl(port)
  await waitOn({
    resources: [url],
    timeout: 60 * 1000,
  })
}

export async function killApp(app) {
  info(`Terminating app ${app.pid}...`)
  await new Promise((resolve, reject) => {
    terminate(app.pid, err => {
      if (err) return reject(err)
      return resolve()
    })
  })
  success(`App ${app.pid} was terminated`)
}

export function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function openBrowser(port) {
  const browser = await puppeteer.launch({
    // devtools: true,
    // headless: false,
  })
  const page = await browser.newPage()
  global.page = page
  page.on('pageerror', err => {
    throw new Error(`The page got an error: ${err}`)
  })
  // page.on('console', msg => console.log('PAGE LOG:', msg.text()))
  const url = getUrl(port)
  await page.goto(url)
  return [browser, page]
}

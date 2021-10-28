import { updateMeta, updateCustomMeta, updateLink } from 'utils/domUtils'

describe('DOMUtils', () => {
  beforeEach(() => {
    document.head.innerHTML = ''
  })

  test('add meta "description" correctly', () => {
    const name = 'description'
    const content = 'description'
    updateMeta(name, content)

    expect(document.head.innerHTML).toBe(
      `<meta name="${name}" content="${content}">`,
    )
  })

  test('update meta "description" correctly', () => {
    const name = 'description'
    const content = 'description'
    updateMeta(name, '') // add
    updateMeta(name, content) // update

    expect(document.head.innerHTML).toBe(
      `<meta name="${name}" content="${content}">`,
    )
  })

  test('update meta "description" twice correctly', () => {
    const name = 'description'
    const content = 'description'
    updateMeta(name, '') // add
    updateMeta(name, content) // update
    updateMeta(name, content) // update 2nd

    expect(document.head.innerHTML).toBe(
      `<meta name="${name}" content="${content}">`,
    )
  })

  test('add custom meta "og:url" correctly', () => {
    const property = 'og:url'
    const content = 'https://www.example.com/dresses/green/greendresss.html'
    updateCustomMeta(property, content)

    expect(document.head.innerHTML).toBe(
      `<meta property="${property}" content="${content}">`,
    )
  })

  test('update custom meta "og:url" correctly', () => {
    const property = 'og:url'
    const content = 'https://www.example.com/dresses/green/greendresss.html'
    updateCustomMeta(property, '') // add
    updateCustomMeta(property, content) // update

    expect(document.head.innerHTML).toBe(
      `<meta property="${property}" content="${content}">`,
    )
  })

  test('add link "canonical" correctly', () => {
    const rel = 'canonical'
    const href = 'https://www.example.com/dresses/green/greendresss.html'
    updateLink(rel, href)

    expect(document.head.innerHTML).toBe(`<link rel="${rel}" href="${href}">`)
  })

  test('update link "canonical" correctly', () => {
    const rel = 'canonical'
    const href = 'https://www.example.com/dresses/green/greendresss.html'
    updateLink(rel, '') // add
    updateLink(rel, href) // update

    expect(document.head.innerHTML).toBe(`<link rel="${rel}" href="${href}">`)
  })
})

import APP_REQUEST_TIMEOUT from 'constants/index'

class MemberSiteEmitter {
  constructor() {
    this.initialized = false

    this.memberSite = window.parent
    this.memberSiteOrigin = null

    this.callbacks = {}

    window.addEventListener('message', this.#handleGetMessage)
  }

  #isFromMemberSite = origin =>
    !this.initialized || origin === this.memberSiteOrigin

  #handleGetMessage = event => {
    const { origin, data: eventData } = event

    if (!this.#isFromMemberSite(origin)) {
      return
    }

    if (this.initialized) console.log('MemberSiteEmitter onMessage: ', event)

    const { eventType = '', data } = eventData
    const topic = eventType.replace('.response', '')

    const callback = this.callbacks[topic]
    if (callback) {
      callback(data)
    }
  }

  #postMessage = data => {
    console.log('postMessage', data)
    this.memberSite.postMessage(data, '*')
  }

  on = (topic, callback) => {
    this.callbacks[topic] = callback
  }

  off = topic => {
    delete this.callbacks[topic]
  }

  request = topic =>
    new Promise((resolve, reject) => {
      setTimeout(
        () =>
          reject(
            new Error(`MemberSiteEmitter request timeout, topic: ${topic}`),
          ),
        APP_REQUEST_TIMEOUT,
      )
      this.on(topic, resolve)

      const data = {
        eventType: `${topic}.request`,
      }
      this.#postMessage(data)
    })

  send = data => {
    this.#postMessage(data)
  }

  init = async () => {
    const response = await this.request('initialize')
    this.memberSiteOrigin = response.origin

    this.initialized = true
    return response
  }
}

export default new MemberSiteEmitter()

const useragent = require('useragent')
const fetch = require('node-fetch')
const CONST = require('../constants')
const TopTemplateBuilder = require('./TopTemplateBuilder')
const PostTemplateBuilder = require('./PostTemplateBuilder')
const PostPathValidator = require('../PostPathValidator')
const ServiceWorkerTemplateBuilder = require('./ServiceWorkerTemplateBuilder')

class TemplateBuilderFactory {
  constructor(url, path, UA) {
    if (!path || !UA) return
    console.log('url:' + url)
    console.log('UA:' + UA)
    const detectCompatMode = UA => {
      const browserList = useragent.is(UA)
      let isWebCompoenentCompat = false
      let isIntersectionOberverCompat = false
      for (const key in browserList) {
        if (browserList[key]) {
          const browserName = CONST.USERAGENT_BROWSER_MAPPING[key]
          const browserVersion = parseFloat(useragent.lookup(UA).toVersion())
          const webComponentsCompatVersion =
            CONST.WEB_COMPONENTS_COMPAT_TABLE[browserName]
          const intersectionObserverCompatVersion =
            CONST.INTERSECTION_OBSERVER_COMPAT_TABLE[browserName]
          if (!browserName) {
            break
          }
          console.log('browserName: ' + browserName)
          console.log('browserVersion: ' + browserVersion)
          console.log(
            'webComponentsCompatVersion: ' + webComponentsCompatVersion
          )
          console.log(
            'intersectionObserverCompatVersion: ' +
              intersectionObserverCompatVersion
          )
          isWebCompoenentCompat =
            webComponentsCompatVersion &&
            webComponentsCompatVersion <= browserVersion
          isIntersectionOberverCompat =
            intersectionObserverCompatVersion &&
            intersectionObserverCompatVersion <= browserVersion
          break
        }
      }
      if (isWebCompoenentCompat && isIntersectionOberverCompat) {
        return CONST.COMPAT_MODE_KEY_MODERN_BROWSER
      }
      if (isWebCompoenentCompat && !isIntersectionOberverCompat) {
        return CONST.COMPAT_MODE_KEY_MODERN_SAFARI
      }
      return CONST.COMPAT_MODE_KEY_ES5_COMPAT
    }
    this.url = url
    this.path = path
    this.isBot = CONST.CRAWLER_UA_REGEX.test(UA)
    this.isRendertron = CONST.RENDERTRON_UA_REGEX.test(UA)
    console.log('isBot: ' + this.isBot)
    console.log('isRendertron: ' + this.isRendertron)
    this.templateData = {
      path: path,
      compatMode: this.isRendertron
        ? CONST.COMPAT_MODE_KEY_ES5_COMPAT
        : detectCompatMode(UA)
    }
  }

  getTemplate() {
    if (this.path === '/') {
      if (this.isBot) return this.getRendertronPromise()
      return new TopTemplateBuilder(this.templateData).getTemplate()
    }
    if (this.path.startsWith('/post/')) {
      if (this.isBot) return this.getRendertronPromise()
      if (new PostPathValidator(this.path).isValid()) {
        return new PostTemplateBuilder(this.templateData).getTemplate()
      }
      return null
    }
    if (this.path === '/sw.js') {
      return new ServiceWorkerTemplateBuilder(this.templateData).getTemplate()
    }
    if (this.path === '/offline') {
      return this.getOfflineTemplate()
    }
    return null
  }

  getRendertronPromise() {
    return new Promise(resolve => {
      fetch(
        `https://render-tron.appspot.com/render/https://archive-5c32d.firebaseapp.com${
          this.url
        }%3Frenderall=true?wc-inject-shadydom=true`
      ).then(res => {
        res.text().then(body => resolve(body))
      })
    })
  }

  get404Template() {
    return CONST.getErrorTemplate('404')
  }

  get500Template() {
    return CONST.getErrorTemplate('500')
  }

  getOfflineTemplate() {
    return CONST.getErrorTemplate('offline')
  }
}
module.exports = TemplateBuilderFactory

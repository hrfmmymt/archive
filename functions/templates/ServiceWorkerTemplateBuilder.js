const CONST = require('../constants.js')
const PostPathValidator = require('../PostPathValidator')
const BuildVersion = require('../BuildVersion')

class ServiceWorkerTemplateBuilder {
  constructor(data) {
    this.compatMode = data.compatMode
    this.URLSet = new Set()
    this.addAllJsURLSet = _ => {
      Object.keys(CONST.REQUIRED_SCRIPT).map(key => {
        CONST.REQUIRED_SCRIPT[key][this.compatMode]
          .match(CONST.REQUIRED_SCRIPT_URL_REGEX)
          .map(url => this.URLSet.add(url))
      })
    }
    this.addMiscURLSet = _ => {
      this.URLSet.add('/offline')
    }
    this.addPageURLSet = _ => {
      const pathSet = new PostPathValidator().getAllPathSet()
      ;[...pathSet].filter(path => path.startsWith('/post/')).map(path => {
        this.URLSet.add(`${path.replace('post', 'posts')}.md`)
      })
    }
    this.getInstallURLs = _ => {
      this.addAllJsURLSet()
      this.addPageURLSet()
      this.addMiscURLSet()
      return `'${[...this.URLSet].join("','")}'`
    }
    this.getServiceWorkerVersion = _ => {
      return new BuildVersion().getVersion()
    }
  }

  getTemplate() {
    return `
      const CACHE_NAME = '${this.getServiceWorkerVersion()}';
      const urlsToCache = [
        ${this.getInstallURLs()}
      ];

      addEventListener('install', event => {
        event.waitUntil(caches.open(CACHE_NAME).then(async cache => {
          skipWaiting();
          return cache.addAll(urlsToCache);
        }));
      });

      addEventListener('activate', event => {
        event.waitUntil(async function() {
          const oldCacheKeys = await caches.keys();
          oldCacheKeys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key));

          if (self.registration.navigationPreload) {
            // await self.registration.navigationPreload.enable();
          }
          clients.claim();
        }());
      });

      addEventListener('fetch', event => {
        event.respondWith(async function() {
          const cachedResponse = await caches.match(event.request);
          if (cachedResponse) return cachedResponse;

          // const response = await event.preloadResponse;
          // if (response) return response;

          const isHTML = event.request.headers.get('accept').includes('text/html');
          return fetch(event.request).catch(error => {
            if(!isHTML) {
              return;
            }
            return caches.open(CACHE_NAME).then(cache => {
              return cache.match('/offline')
            })
          })
        }());
      });
    `
  }
}
module.exports = ServiceWorkerTemplateBuilder

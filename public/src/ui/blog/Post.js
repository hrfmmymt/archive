import { MarkdownParser } from './MarkdownParser.js'
import { _Gist } from './Gist.js'
import { _PostHeader } from './PostHeader.js'
import { _PostFooter } from './PostFooter.js'
import { App } from './App.js'

const COMPONENT_NAME = 'my-post'
export class Post extends App {
  getComponentName() {
    return COMPONENT_NAME
  }

  connectedCallback() {
    this.firstFetchEndpoint = `/posts/dist/${
      location.pathname.match(/^\/post\/([a-zA-Z0-9-]+)/)[1]
    }-1.md`
    this.secondFetchEndpoint = `/posts/dist/${
      location.pathname.match(/^\/post\/([a-zA-Z0-9-]+)/)[1]
    }-2.md`
    super.render().then(_ => {
      if (!this.shadowRoot.querySelector(`#show-more`)) {
        return
      }
      this.isSecondFetchRequired = true
      if (location.search.includes('renderall=true')) {
        this.secondFetch()
        return
      }
      if (window.requestIdleCallback) {
        requestIdleCallback(_ => {
          this.hookIntersectionObserver()
          this.preloadSecondFetch()
        })
        return
      }
      this.hookIntersectionObserver()
      this.preloadSecondFetch()
    })
  }

  getStyle() {
    return
  }

  getTemplate() {
    return this.firstFetch()
  }

  firstFetch() {
    return new Promise(resolve => {
      fetch(this.firstFetchEndpoint, { credentials: 'include' }).then(res => {
        res.text().then(text => {
          const markup = new MarkdownParser(text).getMarkUp()
          const dummy = document.getElementById('dummyPost')
          if (dummy) dummy.style.display = 'none'
          resolve(markup)
        })
      })
    })
  }

  secondFetch() {
    const showMoreDOM = this.shadowRoot.getElementById('show-more')
    if (showMoreDOM) {
      fetch(this.secondFetchEndpoint, { credentials: 'include' }).then(res => {
        res.text().then(text => {
          const markup = new MarkdownParser(text).getMarkUp()
          this.shadowRoot.getElementById('show-more').innerHTML = markup
          document.body.appendChild(document.createElement('my-profile'))
          document.body.appendChild(document.createElement('global-footer'))
        })
      })
    }
  }

  hookIntersectionObserver() {
    const callback = (entries, observer) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          if (e.target.id === 'show-more') {
            observer.unobserve(e.target)
          }
          if (this.isSecondFetchRequired) {
            this.isSecondFetchRequired = false
            this.secondFetch()
          }
        }
      })
    }
    const observer = new IntersectionObserver(callback)
    observer.observe(this.shadowRoot.getElementById('show-more'))
  }

  preloadSecondFetch() {
    const createLinkPreload = (href, as, crossorigin) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = href
      link.crossOrigin = crossorigin ? crossorigin : ''
      link.as = as
      return link
    }
    document.head.appendChild(
      createLinkPreload(this.secondFetchEndpoint, 'fetch', 'use-credentials')
    )
  }
}

customElements.define(COMPONENT_NAME, Post)

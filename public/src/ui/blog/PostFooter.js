import { App } from './App.js'
import { _TwitterShare } from './TwitterShare.js'
import { _FacebookShare } from './FacebookShare.js'
import { _WebShare } from './WebShare.js'

const COMPONENT_NAME = 'post-footer'
export class _PostFooter extends App {
  getComponentName() {
    return COMPONENT_NAME
  }

  connectedCallback() {
    const data = {
      title: this.getAttribute('data-title'),
      text: this.getAttribute('data-text'),
      url: this.getAttribute('data-url')
    }
    super.render(data)
  }

  getStyle() {
    return
  }

  getTemplate(data) {
    if (navigator.share) {
      return `
        <archive-web-share class="share-button" data-title="${
          data.title
        }" data-text="${data.text}" data-url="${
          data.url
        }"></archive-web-share>
      `
    }
    return `
      <archive-twitter-share class="share-button" data-title="${
        data.title
      }" data-text="${data.text}" data-url="${
        data.url
      }">twitter</archive-twitter-share> 
      <archive-facebook-share class="share-button" data-title="${
        data.title
      }" data-text="${data.text}" data-url="${
        data.url
      }">facebook</archive-facebook-share>
    `
  }
}

customElements.define(COMPONENT_NAME, _PostFooter)

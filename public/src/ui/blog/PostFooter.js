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
    return `
      :host {
        display: block;
      }

      .share-button {
        display: inline-block;
        height: 25px;
        margin-right: 20px;
        width: 25px;
      }
    `
  }

  getTemplate(data) {
    if (navigator.share) {
      return `
        <web-share class="share-button" data-title="${data.title}" data-text="${
        data.text
      }" data-url="${data.url}"></web-share>
      `
    }

    return `
      <twitter-share class="share-button" data-title="${
        data.title
      }" data-text="${data.text}" data-url="${data.url}"></twitter-share>
      <facebook-share class="share-button" data-title="${
        data.title
      }" data-text="${data.text}" data-url="${data.url}"></facebook-share>
    `
  }
}

customElements.define(COMPONENT_NAME, _PostFooter)

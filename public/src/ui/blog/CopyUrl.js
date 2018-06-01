import { _WebShare } from './WebShare.js'
import { App } from './App.js'

export class _CopyUrl extends App {
  getComponentName() {
    return 'copy-url'
  }

  getStyle() {
    return
  }

  connectedCallback() {
    super.render({})
  }

  getTemplate() {
    return `
    <div class="copy-link__wrapper" aria-labelledby="copy-popover-icon" role="dialog" tabindex="-1" aria-hidden="false">
      <input class="copy-link__url" value="https://saikounoblog/${
        this.url
      }" id="copy-link" readonly="readonly" type="text">
      <button type="button" class="copy-link__copy-btn cta">Copy link</button>
      <div class="popover__close-btn" aria-label="Close" role="button" tabindex="0">×</div>
    </div>`
  }

  addEvents() {}
}

customElements.define('copy-url', _CopyUrl)

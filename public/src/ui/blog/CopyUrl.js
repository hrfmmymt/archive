import { _WebShare } from './WebShare.js'
import { App } from './App.js'

export class _CopyUrl extends App {
  getComponentName() {
    return 'copy-url'
  }

  getStyle() {
    return `
    :host {
      display: block;
    }

    :host input {
      border: 0;
      border-right: 1px solid #d7d7d7;
      width: 100%;
      font-size: 14px;
      letter-spacing: .25px;
      line-height: 24px;
    }

    :host button {
      -moz-appearance: none;
      -webkit-appearance: none;
      background: 0 0;
      border: 0;
      border-top: 1px solid #d7d7d7;
      margin-top: 10px;
      outline: 0;
      padding: 5px 0 0;
      text-align: left;
      width: 100%;
      color: #3367d6;
      display: table;
      font-weight: 500;
      letter-spacing: .02778em;
      text-transform: uppercase;
      font-size: 1.2rem;
      cursor: pointer;
    }
    `
  }

  connectedCallback() {
    const data = {
      state: this.parentNode.host
    }
    super.render(data)
  }

  getTemplate(data) {
    console.log(data)
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

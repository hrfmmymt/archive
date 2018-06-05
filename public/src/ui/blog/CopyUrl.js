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
      background-color: #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, .5);
      min-width: 230px;
    }

    :host .inner {
      padding: .4rem;
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
      background: 0;
      border: 0;
      border-top: 1px solid #d7d7d7;
      margin-top: 10px;
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

    :host button.copied {
      color: inherit;
      font-weight: inherit;
      letter-spacing: normal;
      text-transform: uppercase;
    }
    `
  }

  connectedCallback() {
    const data = {
      state: 'closed'
    }
    super.render(data)
  }

  addEvents() {
    const btn = this.shadowRoot.getElementById('copy-btn')
    btn.addEventListener('click', el => {
      const elTarget = el.target
      this.shadowRoot.getElementById('copy-input').select()
      document.execCommand('copy')
      elTarget.innerText = 'COPIED TO CLIPBOARD'
      elTarget.classList.add('copied')
    })
  }

  getTemplate() {
    return `
    <div class="inner" aria-labelledby="copy-popover-icon" role="dialog" tabindex="-1" aria-hidden="false" id="copy-link">
      <input class="copy-link__url" value="https://saikounoblog/${
        this.url
      }" id="copy-input" readonly="readonly" type="text">
      <button type="button" id="copy-btn" class="copy-link__copy-btn cta">Copy link</button>
    </div>`
  }
}

customElements.define('copy-url', _CopyUrl)

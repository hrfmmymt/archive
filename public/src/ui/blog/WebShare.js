import { SocialShare } from './SocialShare.js'
import { _CopyUrl } from './CopyUrl.js'

const COMPONENT_NAME = 'web-share'
export class _WebShare extends SocialShare {
  getComponentName() {
    return COMPONENT_NAME
  }

  connectedCallback() {
    this.state = {
      active: 'isClose'
    }
    const data = {
      imgURL: '/img/webshare.svg'
    }
    super.render(data)
  }

  getStyle() {
    return `
    :host {
      position: relative;
      cursor: pointer;
    }

    :host copy-url,
    :host([data-active='isClose']) copy-url {
      display: none;
    }

    :host([data-active='isOpen']) copy-url {
      display: block;
    }

    :host copy-url {
      position: absolute;
      z-index: 10;
      width: 180px;
    }

    :host button {
      padding: 0;
      -moz-appearance: none;
      -webkit-appearance: none;
      background: 0;
      border: 0;
      cursor: pointer;
    }
    `
  }

  addEvents() {
    this.shadowRoot.getElementById('open-btn').addEventListener('click', _ => {
      const active = this.state.active
      if (active === 'isClose') {
        this.setAttribute('data-active', 'isOpen')
        this.state.active = 'isOpen'
      } else {
        this.setAttribute('data-active', 'isClose')
        this.state.active = 'isClose'
      }
    })
  }

  getTemplate(data) {
    return `
      <button type="button" id="open-btn">
        <archive-img class="social-share-icon" data-src="${
          data.imgURL
        }" data-width="30" data-height="30"></archive-img>
      </button>
      <copy-url></copy-url>
    `
  }
}

customElements.define(COMPONENT_NAME, _WebShare)

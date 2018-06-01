import { SocialShare } from './SocialShare.js'
import { _CopyUrl } from './CopyUrl.js'

const COMPONENT_NAME = 'web-share'
export class _WebShare extends SocialShare {
  getComponentName() {
    return COMPONENT_NAME
  }

  connectedCallback() {
    this.title = this.getAttribute('data-title')
    this.text = this.getAttribute('data-text')
    this.url = this.getAttribute('data-url')
    super.render({
      imgURL: '/img/webshare.svg'
    })
  }

  getTemplate(data) {
    return `<archive-img class="social-share-icon" data-src="${
      data.imgURL
    }" data-width="30" data-height="30"></archive-img>
    <copy-url></copy-url> `
  }

  addEvents() {
    this.shadowRoot.addEventListener('click', _ => {
      console.log(this)
    })
  }
}

customElements.define(COMPONENT_NAME, _WebShare)

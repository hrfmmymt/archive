import { SocialShare } from './SocialShare.js'

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

  addEvents() {
    this.shadowRoot.addEventListener('click', _ => {
      navigator.share({
        title: this.title,
        text: this.text,
        url: this.url
      })
    })
  }
}

customElements.define(COMPONENT_NAME, _WebShare)

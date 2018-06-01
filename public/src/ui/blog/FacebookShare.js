import { SocialShare } from './SocialShare.js'

const COMPONENT_NAME = 'facebook-share'
export class _FacebookShare extends SocialShare {
  getComponentName() {
    return COMPONENT_NAME
  }

  connectedCallback() {
    this.title = this.getAttribute('data-title')
    this.text = this.getAttribute('data-text')
    this.url = this.getAttribute('data-url')
    super.render({
      shareUrl: `https://www.facebook.com/sharer/sharer.php?display=popup&u=weieweiwei${
        this.url
      }&t=${encodeURI(this.title)} - ${encodeURI(this.text)}`,
      imgURL: '/img/facebook.svg',
      label: 'facebook'
    })
  }

  getStyle() {
    return `
      :host {
        background-color: #000;
      }

      :host a {
        display: block;
      }
    `
  }

  getLinkURL() {
    return `https://www.facebook.com/sharer/sharer.php?display=popup&u=weieweiwei${
      this.url
    }&t=${encodeURI(this.title)} - ${encodeURI(this.text)}`
  }
}

customElements.define(COMPONENT_NAME, _FacebookShare)

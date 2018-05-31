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
      imgURL: '/img/facebook.svg'
    })
  }

  getStyle() {
    return `
      :host {
        background-color: #000;
      }
    `
  }

  getLinkURL() {
    return `
      https://www.facebook.com/sharer/sharer.php?display=popup&u=weieweiwei${
        this.url
      }&t=${encodeURI(this.title)} - ${encodeURI(this.text)}
    `
  }
}

customElements.define(COMPONENT_NAME, _FacebookShare)

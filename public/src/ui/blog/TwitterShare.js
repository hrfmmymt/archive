import { SocialShare } from './SocialShare.js'

const COMPONENT_NAME = 'twitter-share'
export class _TwitterShare extends SocialShare {
  getComponentName() {
    return COMPONENT_NAME
  }

  connectedCallback() {
    this.title = this.getAttribute('data-title')
    this.text = this.getAttribute('data-text')
    this.url = this.getAttribute('data-url')
    super.render({
      imgURL: '/img/twitter_bk.svg'
    })
  }

  getStyle() {
    return `
      :host {
        background-color: transparent;
      }
    `
  }

  getLinkURL() {
    return `
      https://twitter.com/intent/tweet?text=${encodeURI(
        this.title
      )} - ${encodeURI(this.text)}&url=weiweiwei${
      this.url
    }&via=hrfmmymt`
  }
}

customElements.define(COMPONENT_NAME, _TwitterShare)

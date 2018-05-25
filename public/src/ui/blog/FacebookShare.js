import { SocialShare } from './SocialShare.js'

const COMPONENT_NAME = 'archive-facebook-share'
export class _FacebookShare extends SocialShare {
  getComponentName() {
    return COMPONENT_NAME
  }

  connectedCallback() {
    this.title = this.getAttribute('data-title')
    this.text = this.getAttribute('data-text')
    this.url = this.getAttribute('data-url')
    super.render({
      backgroundColor: '#395a9a',
      imgURL: ''
    })
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

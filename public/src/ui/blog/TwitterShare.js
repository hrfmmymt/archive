import { SocialShare } from './SocialShare.js'

const COMPONENT_NAME = 'twitter-share'
export class _TwitterShare extends SocialShare {
  getComponentName() {
    return COMPONENT_NAME
  }

  connectedCallback() {
    this.title = this.getAttribute('data-title')
    this.url = this.getAttribute('data-url')
    super.render({
      shareUrl: `https://twitter.com/intent/tweet?text=archive - hrfmmymt's blog: &#34;${encodeURI(
        this.title
      )}&#34;&url=https://archive.hrfmmymt.com${this.url}&via=hrfmmymt`,
      imgURL: '/img/twitter_bk.svg',
      label: 'twitter'
    })
  }

  getStyle() {
    return `
      :host {
        background-color: transparent;
      }

      :host a {
        display: block;
      }
    `
  }
}

customElements.define(COMPONENT_NAME, _TwitterShare)

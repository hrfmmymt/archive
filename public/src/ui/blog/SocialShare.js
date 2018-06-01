import { App } from './App.js'

export class SocialShare extends App {
  getStyle(data) {
    return `
      :host {
        background-color: ${data.backgroundColor};
        cursor: pointer;
      }
    `
  }

  getTemplate(data) {
    return `
      <a aria-label="Share on ${
        data.label
      }" href="${data.shareUrl ? data.shareUrl : '#'}" target="${data.shareUrl ? '_blank' : ''}">
        <archive-img class="social-share-icon ${data.label}" data-src="${
      data.imgURL
    }" data-width="30" data-height="30" data-background-color="transparent" data-social="${
      data.label
    }"></archive-img>
      </a>
    `
  }
}

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
      <archive-img class="social-share-icon" data-src="${
        data.imgURL
      }" data-width="30" data-height="30" data-background-color="transparent"></archive-img>
    `
  }

  addEvents() {
    this.shadowRoot.addEventListener('click', _ => {
      window.open(
        this.getLinkURL(),
        'newwindow',
        'location=yes,height=570,width=520,scrollbars=yes,status=yes'
      )
    })
  }
}

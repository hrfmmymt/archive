import { App } from './App.js'

const COMPONENT_NAME = 'archive-img'
export class _Img extends App {
  getComponentName() {
    return COMPONENT_NAME
  }

  connectedCallback() {
    this.src = this.getAttribute('data-src')
    this.alt = this.getAttribute('data-alt')
    this.layout = this.getAttribute('data-layout')
    this.randomID = `IMG${parseInt(Math.random() * 1000)}`
    const data = {
      randomId: this.randomID,
      height: this.getAttribute('data-height'),
      width: this.getAttribute('data-width'),
      backgroundColor: this.getAttribute('data-background-color')
        ? this.getAttribute('data-background-color')
        : '#222'
    }
    super.render(data)
  }

  getStyle(data) {
    return `
      :host {
        display: block;
        width: 100%;
      }

      :host picture {
        display: block;
      }

      .image-${data.randomId} {
        width: 100%;
        background-color: ${data.backgroundColor};
      }

      .image-${data.randomId} img {
      }
    `
  }

  getTemplate(data) {
    return `<picture id=${data.randomId} class="image-${
      data.randomId
    }"></picture>`
  }

  addEvents() {
    const renderImg = _ => {
      const img = document.createElement('img')
      img.src = this.src
      img.alt = this.alt
      if (this.layout === 'fixed-height') {
        img.style.height = '100%'
      } else {
        img.style.width = '100%'
      }
      const shadow = this.shadowRoot
      const randomID = this.randomID
      img.onload = function() {
        shadow.querySelector(`#${randomID}`).appendChild(this)
        shadow.querySelector(`#${randomID}`).style.backgroundColor =
          'transparent'
      }
    }

    const callback = (entries, observer) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          if (this.shadowRoot.querySelector(`#${this.randomID} img`)) {
            observer.unobserve(e.target)
            return
          }
          renderImg()
        }
      })
    }

    const observer = new IntersectionObserver(callback)
    observer.observe(this.shadowRoot.getElementById(`${this.randomID}`))
  }
}

customElements.define(COMPONENT_NAME, _Img)

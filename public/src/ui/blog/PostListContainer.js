import { _PostList } from './PostList.js'
import { App } from './App.js'

const COMPONENT_NAME = 'post-list-container'
export class PostListContainer extends App {
  getComponentName() {
    return COMPONENT_NAME
  }

  connectedCallback() {
    super.render()
  }

  getStyle() {
    return `
      :host {
        display: block;
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
      }
    `
  }

  getTemplate() {
    return this.fetchPostListContainer()
  }

  fetchPostListContainer() {
    return new Promise(resolve => {
      fetch('/json/posts.json', { credentials: 'include' }).then(res => {
        res.json().then(json => {
          const postList = []
          json.posts.map((post, index) => {
            const template = `<post-list
              data-format="${post.format}"
              data-title="${post.title}"
              data-subtitle="${post.subtitle}"
              data-date="${post.date}"
              data-link="${post.link}"
              data-imgsrc="${post.imgsrc}"
              data-class=${index === 0 ? 'headline' : ''}
              ></post-list>`
            postList.push(template)
          })
          const dummy = document.getElementById('dummyBody')
          if (dummy) dummy.style.display = 'none'
          resolve(`
            <div class="list">
              ${postList.join('')}
            </div>
          `)
        })
      })
    })
  }
}

customElements.define(COMPONENT_NAME, PostListContainer)

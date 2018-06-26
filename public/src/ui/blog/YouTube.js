export class _YouTube extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' })
    const ytId = this.getAttribute('data-ytId')

    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    const player
    // function onYouTubeIframeAPIReady() {
    //   player = new YT.Player('player', {
    //     height: '360',
    //     width: '640',
    //     videoId: ytId,
    //     events: {
    //       onReady: onPlayerReady,
    //       onStateChange: onPlayerStateChange
    //     }
    //   })
    // }

    function onPlayerReady(event) {
      event.target.playVideo()
    }

    let done = false
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000)
        done = true
      }
    }
    function stopVideo() {
      player.stopVideo()
    }
  }
}
customElements.define('archive-yt', _YouTube)

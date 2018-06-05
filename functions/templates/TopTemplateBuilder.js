const CONST = require('../constants.js')

class TopTemplateBuilder {
  constructor(data) {
    this.compatMode = data.compatMode
    this.getScripts = compatMode => {
      return CONST.REQUIRED_SCRIPT['top'][compatMode]
    }
  }

  getTemplate() {
    console.log(this)
    return `
      <!DOCTYPE html>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="/img/favicon.ico" rel="shortcut icon">
      <meta name="theme-color" content="#fff">
      <meta property="og:title" content="archive" />
      <meta property="og:type" content="post" />
      <meta property="og:url" content="/" />
      <meta property="og:image" content="" />
      <meta property="og:site_name" content="archive" />
      <meta property="og:description" content="" />
      <meta property="fb:app_id" content="" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="hrfmmymt" />
      <meta name="twitter:creator" content="hrfmmymt" />
      <title>archive</title>
      <link rel="manifest" href="/manifest.json">
      <link rel="preload" href="/json/posts.json" as="fetch" crossorigin=use-credentials></link>
      <link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet">
      ${this.getScripts(this.compatMode)}
      <style>
        * {
          box-sizing: border-box;
        }
        html, body {
          padding: 0px;
          margin: 0px;
          width: 100%;
          height: 100%;
        }
        wrapper {
          display: block;
          width: 100%;
          padding: 0 2rem;
        }
      </style>
      <noscript>noscript</noscript>
      <wrapper>
      <global-header></global-header>
      <div id="dummyHeader"></div>
      <div id="dummyBody"></div>
      <post-list-container></post-list-container>
      </wrapper>
      <global-footer></global-footer>
      <script>
        window.addEventListener("load", _ => {
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js');
          }
        });
        var deferredPrompt;
        window.addEventListener('beforeinstallprompt', function(e) {
          e.preventDefault();
          deferredPrompt = e;
          return false;
        });
        // GA
      </script>
    `
  }
}

module.exports = TopTemplateBuilder

const CONST = require('../constants.js')
const MetaTagUtil = require('../MetaTagUtil.js')

class PostTemplateBuilder {
  constructor(data) {
    this.compatMode = data.compatMode
    this.postId = data.path.match(/^\/post\/([a-zA-Z0-9-]+)/)[1]
    this.getScripts = compatMode => {
      return CONST.REQUIRED_SCRIPT['post'][compatMode]
    }
    this.metaTag = new MetaTagUtil().getMetaTag(data.path)
  }

  getTemplate() {
    return `
      <!DOCTYPE html>
      <html lang="ja" prefix="og: http://ogp.me/ns#">
        <head>
          <meta charset="UTF-8">
          <link href="/img/icon_16x16.png" rel="shortcut icon">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta name="theme-color" content="#fff">
          ${this.metaTag}
          <link rel="manifest" href="/manifest.json">
          <link rel="preload" href="/posts/${
            this.postId
          }.md" as="fetch" crossorigin=use-credentials></link>
          <link href="https://fonts.googleapis.com/css?family=Give+You+Glory" rel="stylesheet">
          ${this.getScripts(this.compatMode)}
          <style>
            * {
              box-sizing: border-box;
            }

            html, body {
              padding: 0px;
              margin: 0px;
              width: 100%;
            }

            html {
              font-size: calc(1em + .5vw);
            }

            body {
              font-family: -apple-system, BlinkMacSystemFont, Roboto, Arial, Helvetica, sans-serif;
            }

            wrapper {
              display: block;
              width: 100%;
              padding: 0 2rem;
            }

            #dummyHeader {
            }

            #dummyPost {
            }

            #dummyPost .dummyTitle {
              height:1rem;
              background-color:#ddd;
            }
            #dummyPost .dummySubTitle {
              height:1rem;
              background-color:#ddd;
            }
            #dummyPost .dummyDate {
              height:1rem;
              background-color:#ddd;
            }
            #dummyPost .dummySpacer {
              height: 1rem;
            }
            #dummyPost .dummyLine {
              height: 1rem;
              background-color:#ddd;
            }
            #dummyPost .dummyImg {
              background-color: #ddd;
            }
            @media (max-width: 699px) {
              #dummyHeader {
                  height: 1rem;
              }
              #dummyPost {
              }
            }
          </style>
        </head>
        <body>
          <noscript>noscript</noscript>
          <wrapper>
            <global-header></global-header>
            <div id="dummyHeader"></div>
            <div id="dummyPost">
              <div class="dummyTitle"></div>
              <div class="dummySubTitle"></div>
              <div class="dummyDate"></div>
              <div class="dummySpacer"></div>
              <div class="dummyLine"></div>
              <div class="dummyLine"></div>
              <div class="dummyLine"></div>
              <div class="dummyImg"></div>
              <div class="dummyLine"></div>
              <div class="dummyLine"></div>
              <div class="dummyLine"></div>
              <div class="dummyLine"></div>
              <div class="dummyLine"></div>
              <div class="dummyLine"></div>
              <div class="dummyLine"></div>
              <div class="dummyLine"></div>
              <div class="dummyLine"></div>
              <div class="dummyLine"></div>
              <div class="dummyLine"></div>
              <div class="dummyLine"></div>
              <div class="dummyLine"></div>
            </div>
            <my-post></my-post>
          </wrapper>
          <!-- Global site tag (gtag.js) - Google Analytics -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-62083994-2"></script>
          <script>
            window.addEventListener('load', _ => {
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

            // ga
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-62083994-2');
          </script>
        </body>
      </html>
    `
  }
}

module.exports = PostTemplateBuilder

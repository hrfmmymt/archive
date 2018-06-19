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
          <link href="/img/favicon.ico" rel="shortcut icon">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta name="theme-color" content="#fff">
          ${this.metaTag}
          <link rel="manifest" href="/manifest.json">
          <link rel="preload" href="/posts/${
            this.postId
          }.md" as="fetch" crossorigin=use-credentials></link>
          <link href="https://fonts.googleapis.com/css?family=Give+You+Glory" rel="stylesheet">
          <link href="/img/icon_192x192.png" rel="apple-touch-icon">
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

            .mask-header {
              height: 5rem;
              background-color: #ddd;
              line-height: 2;
              width: 14rem;
              margin: 2rem 0 2rem;
            }

            .mask-content {
              max-width: 40rem;
              margin: 2.8rem auto 0;
            }

            .mask-title,
            .mask-subtitle,
            .mask-date,
            .mask-line {
              height: calc(1em + .5vw);
              background-color: #ddd;
              font-size: calc(1em + .5vw);
              line-height: 2;
              margin: 1rem 0;
            }

            .mask-title {
              height: calc(1.5rem + .5vw);
              margin-bottom: 2rem;
            }

            .mask-subtitle,
            .mask-date {
              margin-bottom: 1.4rem;
            }

            .mask-img {
              background-color: #ddd;
            }

            /* for mobile */
            @media (max-width: 414px) {
              .mask-header {
                height: 4rem;
                margin: 2rem auto 0;
              }

              .mask-content {
                margin-top: 2rem;
              }

              .mask-title {
                margin-bottom: 2.3rem;
              }

              .mask-subtitle {
                margin-bottom: 1.6rem;
              }

              .mask-date {
                margin-bottom: 1.83rem;
              }
            }
          </style>
        </head>
        <body>
          <noscript>
            <style>
              .noscript,
              .noscript img {
                width: 100vw;
                height: 100vh;
              }

              .noscript {
                position: relative;
                overflow: hidden;
                display: flex;
                justify-content: center;
              }

              .noscript p {
                position: absolute;
                top: 10%;
                width: 80%;
                text-align: center;
                background: #000;
                padding: 1rem;
                color: #fff;
                font-size: 6vw;
              }

              .noscript img {
                z-index: -1;
              }

              wrapper {
                display: none;
              }
            </style>
            <div class="noscript">
              <p>JavaScript required.</p>
              <img src="https://media.giphy.com/media/mc19PEWvaclAk/giphy.gif" width="100%">
            </div>
          </noscript>
          <wrapper>
            <global-header></global-header>
            <div id="maskHeader" class="mask-header"></div>
            <div id="maskContent" class="mask-content">
              <div class="mask-title"></div>
              <div class="mask-subtitle"></div>
              <div class="mask-date"></div>
              <div class="mask-line"></div>
              <div class="mask-line"></div>
              <div class="mask-line"></div>
              <div class="mask-img"></div>
              <div class="mask-line"></div>
              <div class="mask-line"></div>
              <div class="mask-line"></div>
              <div class="mask-line"></div>
              <div class="mask-line"></div>
              <div class="mask-line"></div>
              <div class="mask-line"></div>
              <div class="mask-line"></div>
              <div class="mask-line"></div>
              <div class="mask-line"></div>
              <div class="mask-line"></div>
              <div class="mask-line"></div>
              <div class="mask-line"></div>
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

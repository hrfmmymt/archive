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
          <link rel="apple-touch-icon" href="/img/icon_192x192.png">
          <link rel="preconnect" href="//fonts.googleapis.com" crossorigin>
          <link rel="preload" href="/posts/${
            this.postId
          }.md" as="fetch" crossorigin=use-credentials></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Give+You+Glory">
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

            .skeleton {
              position: relative;
              overflow: hidden;
            }

            .skeleton::after {
              display: block;
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              transform: translateX(-100%);
              background: linear-gradient(90deg, transparent, rgba(255, 255, 255, .4), transparent);
              animation: loading 1.5s infinite;
            }

            @keyframes loading {
              100% {
                transform: translateX(100%);
              }
            }

            .skeleton-header {
              height: 5rem;
              background-color: #ddd;
              line-height: 2;
              width: 14rem;
              margin: 2rem 0 2rem;
            }

            .skeleton-content {
              max-width: 40rem;
              margin: 2.8rem auto 0;
            }

            .skeleton-title,
            .skeleton-subtitle,
            .skeleton-date,
            .skeleton-line {
              height: calc(1em + .5vw);
              background-color: #ddd;
              font-size: calc(1em + .5vw);
              line-height: 2;
              margin: 1rem 0;
            }

            .skeleton-title {
              height: calc(1.5rem + .5vw);
              margin-bottom: 2rem;
            }

            .skeleton-subtitle,
            .skeleton-date {
              margin-bottom: 1.4rem;
            }

            .skeleton-bottom {
              background-color: #ddd;
              height: 40vh;
            }

            /* for mobile */
            @media (max-width: 414px) {
              .skeleton-header {
                height: 4rem;
                margin: 2rem auto 0;
              }

              .skeleton-content {
                margin-top: 1rem;
              }

              .skeleton-title {
                margin-bottom: 2.3rem;
              }

              .skeleton-subtitle {
                margin-bottom: 1.6rem;
              }

              .skeleton-date {
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
            <div id="skeletonHeader" class="skeleton skeleton-header"></div>
            <div id="skeletonContent" class="skeleton skeleton-content">
              <div class="skeleton skeleton-title"></div>
              <div class="skeleton skeleton-subtitle"></div>
              <div class="skeleton skeleton-date"></div>
              <div class="skeleton skeleton-line"></div>
              <div class="skeleton skeleton-line"></div>
              <div class="skeleton skeleton-line"></div>
              <div class="skeleton skeleton-line"></div>
              <div class="skeleton skeleton-line"></div>
              <div class="skeleton skeleton-line"></div>
              <div class="skeleton skeleton-bottom"></div>
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

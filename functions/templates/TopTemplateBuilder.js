const CONST = require('../constants.js')

class TopTemplateBuilder {
  constructor(data) {
    this.compatMode = data.compatMode
    this.getScripts = compatMode => {
      return CONST.REQUIRED_SCRIPT['top'][compatMode]
    }
  }

  getTemplate() {
    return `
      <!DOCTYPE html>
      <html lang="ja" prefix="og: http://ogp.me/ns#">
        <head>
          <meta charset="UTF-8">
          <meta name="author" content="hrfmmymt">
          <meta name="copyright" content="Copyright(c)hrfmmymt. 2018 All Rights Reserved.">
          <meta name="description" content="hrfmmymt による新しいブログ。読んで。">
          <meta name="format-detection" content="telephone=no,address=no,email=no">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link href="/img/favicon.ico" rel="shortcut icon">
          <meta name="theme-color" content="#fff">
          <meta property="og:site_name" content="archive">
          <meta property="og:description" content="hrfmmymt による新しいブログ。読んで。">
          <meta property="og:title" content="archive - hrfmmymt&#39;s blog">
          <meta property="og:url" content="https://archive.hrfmmymt.com">
          <meta property="og:image" content="/img/icon.png">
          <meta property="og:type" content="website">
          <meta property="og:locale" content="ja_JP">
          <meta name="twitter:title" content="archive - hrfmmymt&#39;s blog">
          <meta name="twitter:description" content="hrfmmymt による新しいブログ。読んで。">
          <meta name="twitter:image" content="https://archive.hrfmmymt.com/img/icon.png">
          <meta name="twitter:card" content="summary">
          <meta name="twitter:site" content="hrfmmymt">
          <meta name="twitter:creator" content="hrfmmymt">
          <title>archive | hrfmmymt&#39;s blog</title>
          <link rel="manifest" href="/manifest.json">
          <link rel="preload" href="/json/posts.json" as="fetch" crossorigin=use-credentials></link>
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
              height: 100%;
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

            .skeleton-body {
              width: 100%;
              height: 100vh;
              background-color: #ddd;
            }

            /* for mobile */
            @media (max-width: 414px) {
              .skeleton-header {
                margin: 1rem auto 2rem;
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
            </style>
            <div class="noscript">
              <p>JavaScript required.</p>
              <img src="https://media.giphy.com/media/mc19PEWvaclAk/giphy.gif" width="100%">
            </div>
          </noscript>
          <wrapper>
            <global-header></global-header>
            <div id="skeletonHeader" class="skeleton skeleton-header"></div>
            <div id="skeletonBody" class="skeleton skeleton-body"></div>
            <post-list-container></post-list-container>
          </wrapper>
          <global-footer></global-footer>
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

module.exports = TopTemplateBuilder

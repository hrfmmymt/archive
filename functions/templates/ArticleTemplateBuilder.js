const CONST = require('../constants.js')
const MetaTagUtil = require('../MetaTagUtil.js')

class ArticleTemplateBuilder {
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
      <meta charset="UTF-8">
      <link href="/img/favicon.ico" rel="shortcut icon">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#fff">
      ${this.metaTag}
      <link rel="manifest" href="/manifest.json">
      <link rel="preload" href="/posts/${
        this.postId
      }.md" as="fetch" crossorigin=use-credentials></link>
      ${this.getScripts(this.compatMode)}
      <style>
        html, body {
          padding: 0px;
          margin: 0px;
          width: 100%;
        }
        #dummyHeader {
        }
        #dummyArticle {
        }
        #dummyArticle .dummyTitle {
          height:1rem;
          background-color:#ddd;
        }
        #dummyArticle .dummySubTitle {
          height:1rem;
          background-color:#ddd;
        }
        #dummyArticle .dummyDate {
          height:1rem;
          background-color:#ddd;
        }
        #dummyArticle .dummySpacer {
          height: 1rem;
        }
        #dummyArticle .dummyLine {
          height: 1rem;
          background-color:#ddd;
        }
        #dummyArticle .dummyImg {
          background-color: #ddd;
        }
        @media (max-width: 699px) {
          #dummyHeader {
              height: 1rem;
          }
          #dummyArticle {
          }
        }
      </style>
      <script defer src="https://www.googletagmanager.com/gtag/js?id=UA-63868653-2"></script>
      <noscript>noscript</noscript>
      <background></background>
      <global-header></global-header>
      <div id="dummyHeader"></div>
      <div id="dummyArticle">
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

module.exports = ArticleTemplateBuilder

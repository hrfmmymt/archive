module.exports = {
  COMPAT_MODE_KEY_MODERN_BROWSER: 'MODERN_BROWSER',
  COMPAT_MODE_KEY_MODERN_SAFARI: 'MODERN_SAFARI',
  COMPAT_MODE_KEY_ES5_COMPAT: 'ES5_COMPAT',
  WEB_COMPONENTS_COMPAT_TABLE: {
    chrome: 61,
    safari: 10.1,
    ios_safari: 10.2
  },
  INTERSECTION_OBSERVER_COMPAT_TABLE: {
    chrome: 61,
    firefox: 58,
    edge: 15
  },
  USERAGENT_BROWSER_MAPPING: {
    chrome: 'chrome',
    firefox: 'firefox',
    safari: 'safari',
    mobile_safari: 'ios_safari',
    edge: 'edge'
  },
  //"CRAWLER_UA_REGEX": /bot|googlebot|facebookexternalhit/i,
  CRAWLER_UA_REGEX: /googlebot/i, // Since Rendertron is out of service, for Twitter/Facebook use non-rendered results
  RENDERTRON_UA_REGEX: /HeadlessChrome/,
  REQUIRED_SCRIPT_URL_REGEX: /\/src.+\.js/g,
  REQUIRED_SCRIPT: {
    top: {
      MODERN_BROWSER: `
        <!-- Modern Browser -->
        <link rel="preload" href="/src/ui/blog/GlobalHeader.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/PostListContainer.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/PostList.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/GlobalFooter.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/App.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/Img.js" as="script" crossorigin>
        <script type="module" src="/src/ui/blog/GlobalHeader.js" crossorigin></script>
        <script type="module" src="/src/ui/blog/PostListContainer.js" crossorigin></script>
        <script type="module" src="/src/ui/blog/GlobalFooter.js" crossorigin></script>
      `,
      MODERN_SAFARI: `
        <!-- Modern Safari -->
        <script src="/src/lib/intersection-observer.js" defer></script>
        <script type="module" src="/src/ui/blog/GlobalHeader.js"></script>
        <script type="module" src="/src/ui/blog/PostListContainer.js"></script>
        <script type="module" src="/src/ui/blog/GlobalFooter.js"></script>
      `,
      ES5_COMPAT: `
        <!-- ES5 compatible -->
        <script src="/src/lib/fetch.js" defer></script>
        <script src="/src/lib/intersection-observer.js" defer></script>
        <script src="/src/lib/webcomponents-bundle.js" defer></script>
        <script src="/src/ui/blog/bundle/common.bundle.js" defer></script>
        <script src="/src/ui/blog/bundle/top.bundle.js" defer></script>
      `
    },
    post: {
      MODERN_BROWSER: `
        <!-- Modern Browser -->
        <link rel="preload" href="/src/ui/blog/GlobalHeader.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/Post.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/GlobalFooter.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/App.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/Img.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/MarkdownParser.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/Gist.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/PostHeader.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/PostFooter.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/TwitterShare.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/FacebookShare.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/WebShare.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/SocialShare.js" as="script" crossorigin>
        <script type="module" src="/src/ui/blog/GlobalHeader.js" crossorigin></script>
        <script type="module" src="/src/ui/blog/Post.js" crossorigin></script>
        <script type="module" src="/src/ui/blog/GlobalFooter.js" crossorigin></script>
      `,
      MODERN_SAFARI: `
        <!-- Modern Safari -->
        <script src="/src/lib/intersection-observer.js" defer></script>
        <script type="module" src="/src/ui/blog/GlobalHeader.js"></script>
        <script type="module" src="/src/ui/blog/Post.js"></script>
        <script type="module" src="/src/ui/blog/GlobalFooter.js"></script>
      `,
      ES5_COMPAT: `
        <!-- ES5 compatible -->
        <script src="/src/lib/fetch.js" defer></script>
        <script src="/src/lib/intersection-observer.js" defer></script>
        <script src="/src/lib/webcomponents-bundle.js" defer></script>
        <script src="/src/ui/blog/bundle/common.bundle.js" defer></script>
        <script src="/src/ui/blog/bundle/post.bundle.js" defer></script>
      `
    }
  },
  getErrorTemplate(res) {
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
          <meta property="og:url" content="https://archive.hrfmmymt.com/${res}">
          <meta property="og:image" content="/img/icon.png">
          <meta property="og:type" content="website">
          <meta property="og:locale" content="ja_JP">
          <meta name="twitter:title" content="archive - hrfmmymt&#39;s blog">
          <meta name="twitter:description" content="hrfmmymt による新しいブログ。読んで。">
          <meta name="twitter:image" content="/img/icon.png">
          <meta name="twitter:card" content="summary">
          <meta name="twitter:site" content="hrfmmymt">
          <meta name="twitter:creator" content="hrfmmymt">
          <title>${res} | archive - hrfmmymt&#39;s blog</title>
          <style>
            html, body {
              padding: 0px;
              margin: 0px;
            }

            .wrapper {
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: rgba(0, 0, 0, .2);
              height: 100vh;
            }

            h1 {
              font-size: 13rem;
              line-height: 1;
              font-family: 'Futura', sans-serif;
              font-weight: 700;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              margin: 0;
              text-decoration: none;
              color: #fff;
            }

            h1::before,
            h1::after {
              display: block;
              content: '${res}';
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
              opacity: .8;
            }

            h1::before {
              color: #0ff;
              z-index: -1;
              animation: glitch .3s cubic-bezier(.25, .46, .45, .94) both infinite;
            }

            h1::after {
              color: #f0f;
              z-index: -2;
              animation: glitch .3s cubic-bezier(.25, .46, .45, .94) reverse both infinite;
            }

            @keyframes glitch {
              0% {
                transform: translate(0)
              }
              20% {
                transform: translate(-5px, 5px)
              }
              40% {
                transform: translate(-5px, -5px)
              }
              60% {
                transform: translate(5px, 5px)
              }
              80% {
                transform: translate(5px, -5px)
              }
              to {
                transform: translate(0)
              }
            }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <h1>${res}</h1>
          </div>
        </body>
      </html>
    `
  }
}

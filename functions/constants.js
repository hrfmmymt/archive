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
        <link rel="preload" href="/src/ui/blog/PostContainer.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/PostList.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/Profile.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/GlobalFooter.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/App.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/Img.js" as="script" crossorigin>
        <script type="module" src="/src/ui/blog/GlobalHeader.js" crossorigin></script>
        <script type="module" src="/src/ui/blog/PostContainer.js" crossorigin></script>
        <script type="module" src="/src/ui/blog/Profile.js" crossorigin></script>
        <script type="module" src="/src/ui/blog/GlobalFooter.js" crossorigin></script>
      `,
      MODERN_SAFARI: `
        <!-- Modern Safari -->
        <script src="/src/lib/intersection-observer.js" defer></script>
        <script type="module" src="/src/ui/blog/GlobalHeader.js"></script>
        <script type="module" src="/src/ui/blog/PostContainer.js"></script>
        <script type="module" src="/src/ui/blog/Profile.js"></script>
        <script type="module" src="/src/ui/blog/GlobalFooter.js"></script>
      `,
      ES5_COMPAT: `
        <!-- ES5 compatible -->
        <script src="/src/lib/fetch.js" defer></script>
        <script src="/src/lib/intersection-observer.js" defer></script>
        <script src="/src/lib/webcomponents-lite.js" defer></script>
        <script src="/src/ui/blog/bundle/common.bundle.js" defer></script>
        <script src="/src/ui/blog/bundle/top.bundle.js" defer></script>
      `
    },
    post: {
      MODERN_BROWSER: `
        <!-- Modern Browser -->
        <link rel="preload" href="/src/ui/blog/GlobalHeader.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/Post.js" as="script" crossorigin>
        <link rel="preload" href="/src/ui/blog/Profile.js" as="script" crossorigin>
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
        <script type="module" src="/src/ui/blog/Profile.js" crossorigin></script>
        <script type="module" src="/src/ui/blog/GlobalFooter.js" crossorigin></script>
      `,
      MODERN_SAFARI: `
        <!-- Modern Safari -->
        <script src="/src/lib/intersection-observer.js" defer></script>
        <script type="module" src="/src/ui/blog/GlobalHeader.js"></script>
        <script type="module" src="/src/ui/blog/Post.js"></script>
        <script type="module" src="/src/ui/blog/Profile.js"></script>
        <script type="module" src="/src/ui/blog/GlobalFooter.js"></script>
      `,
      ES5_COMPAT: `
        <!-- ES5 compatible -->
        <script src="/src/lib/fetch.js" defer></script>
        <script src="/src/lib/intersection-observer.js" defer></script>
        <script src="/src/lib/webcomponents-lite.js" defer></script>
        <script src="/src/ui/blog/bundle/common.bundle.js" defer></script>
        <script src="/src/ui/blog/bundle/post.bundle.js" defer></script>
      `
    }
  },
  getErrorTemplate: function(message) {
    return `
      <!DOCTYPE html>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <div class="message">
        <h1>404</h1>
      </div>
    `
  }
}

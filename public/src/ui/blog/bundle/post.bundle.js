!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=136)}({128:function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t,e,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function u(t){return(u=Object.getPrototypeOf||function(t){return t.__proto__})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e._CopyUrl=void 0,n(92);var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,u(e).apply(this,arguments))}var n,o;return n=e,(o=[{key:"getComponentName",value:function(){return"copy-url"}},{key:"getStyle",value:function(){return"\n    :host {\n      display: block;\n      background-color: #fff;\n      box-shadow: 0 2px 8px rgba(0, 0, 0, .5);\n      min-width: 230px;\n    }\n\n    :host .inner {\n      padding: .4rem;\n    }\n\n    :host input {\n      border: 0;\n      border-right: 1px solid #d7d7d7;\n      width: 100%;\n      font-size: 14px;\n      letter-spacing: .25px;\n      line-height: 24px;\n    }\n\n    :host button {\n      -moz-appearance: none;\n      -webkit-appearance: none;\n      background: 0;\n      border: 0;\n      border-top: 1px solid #d7d7d7;\n      margin-top: 10px;\n      padding: 5px 0 0;\n      text-align: left;\n      width: 100%;\n      color: #3367d6;\n      display: table;\n      font-weight: 500;\n      letter-spacing: .02778em;\n      text-transform: uppercase;\n      font-size: 1.2rem;\n      cursor: pointer;\n    }\n\n    :host button.copied {\n      color: inherit;\n      font-weight: inherit;\n      letter-spacing: normal;\n      text-transform: uppercase;\n    }\n    "}},{key:"connectedCallback",value:function(){this.url=this.getAttribute("data-url"),c(u(e.prototype),"render",this).call(this,{state:"closed"})}},{key:"addEvents",value:function(){var t=this;this.shadowRoot.getElementById("copy-btn").addEventListener("click",function(e){var n=e.target;t.shadowRoot.getElementById("copy-input").select(),document.execCommand("copy"),n.innerText="COPIED TO CLIPBOARD",n.classList.add("copied")})}},{key:"getTemplate",value:function(){return'\n    <div class="inner" aria-labelledby="copy-popover-icon" role="dialog" tabindex="-1" aria-hidden="false" id="copy-link">\n      <input class="copy-link__url" value="https://archive.hrfmmymt.com'.concat(this.url,'" id="copy-input" readonly="readonly" type="text">\n      <button type="button" id="copy-btn" class="copy-link__copy-btn cta">Copy link</button>\n    </div>')}}])&&i(n.prototype,o),function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r(t.prototype,e&&e.prototype),e&&r(t,e)}(e,t),e}(n(14).App);e._CopyUrl=s,customElements.define("copy-url",s)},129:function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t,e,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function u(t){return(u=Object.getPrototypeOf||function(t){return t.__proto__})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e._FacebookShare=void 0;var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,u(e).apply(this,arguments))}var n,o;return n=e,(o=[{key:"getComponentName",value:function(){return"facebook-share"}},{key:"connectedCallback",value:function(){this.title=this.getAttribute("data-title"),this.text=this.getAttribute("data-text"),this.url=this.getAttribute("data-url"),c(u(e.prototype),"render",this).call(this,{shareUrl:"https://www.facebook.com/sharer/sharer.php?display=popup&u=https://archive.hrfmmymt.com".concat(this.url,"&t=").concat(encodeURI(this.title)," - ").concat(encodeURI(this.text)),imgURL:"/img/facebook.svg",label:"facebook"})}},{key:"getStyle",value:function(){return"\n      :host {\n        background-color: #000;\n      }\n\n      :host a {\n        display: block;\n      }\n    "}},{key:"getLinkURL",value:function(){return"https://www.facebook.com/sharer/sharer.php?display=popup&u=https://archive.hrfmmymt.com".concat(this.url,"&t=").concat(encodeURI(this.title)," - ").concat(encodeURI(this.text))}}])&&i(n.prototype,o),function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r(t.prototype,e&&e.prototype),e&&r(t,e)}(e,t),e}(n(65).SocialShare);e._FacebookShare=s,customElements.define("facebook-share",s)},130:function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t,e,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function u(t){return(u=Object.getPrototypeOf||function(t){return t.__proto__})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e._TwitterShare=void 0;var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,u(e).apply(this,arguments))}var n,o;return n=e,(o=[{key:"getComponentName",value:function(){return"twitter-share"}},{key:"connectedCallback",value:function(){this.title=this.getAttribute("data-title"),this.url=this.getAttribute("data-url"),c(u(e.prototype),"render",this).call(this,{shareUrl:"https://twitter.com/intent/tweet?text=archive - hrfmmymt's blog: &#34;".concat(encodeURI(this.title),"&#34;&url=https://archive.hrfmmymt.com").concat(this.url,"&via=hrfmmymt"),imgURL:"/img/twitter_bk.svg",label:"twitter"})}},{key:"getStyle",value:function(){return"\n      :host {\n        background-color: transparent;\n      }\n\n      :host a {\n        display: block;\n      }\n    "}}])&&i(n.prototype,o),function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r(t.prototype,e&&e.prototype),e&&r(t,e)}(e,t),e}(n(65).SocialShare);e._TwitterShare=s,customElements.define("twitter-share",s)},131:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e._PostFooter=void 0;var o=n(14);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t,e,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function s(t){return(s=Object.getPrototypeOf||function(t){return t.__proto__})(t)}n(130),n(129),n(92);var l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,s(e).apply(this,arguments))}var n,o;return n=e,(o=[{key:"getComponentName",value:function(){return"post-footer"}},{key:"connectedCallback",value:function(){var t={title:this.getAttribute("data-title"),text:this.getAttribute("data-text"),url:this.getAttribute("data-url")};u(s(e.prototype),"render",this).call(this,t)}},{key:"getStyle",value:function(){return"\n      :host {\n        display: block;\n      }\n\n      .share-button {\n        display: inline-block;\n        height: 25px;\n        margin: 2rem 1rem 0 0;\n        width: 25px;\n      }\n    "}},{key:"getTemplate",value:function(t){return'\n      <twitter-share class="share-button" data-title="'.concat(t.title,'" data-text="').concat(t.text,'" data-url="').concat(t.url,'"></twitter-share>\n      <facebook-share class="share-button" data-title="').concat(t.title,'" data-text="').concat(t.text,'" data-url="').concat(t.url,'"></facebook-share>\n      <web-share class="share-button" data-title="').concat(t.title,'" data-text="').concat(t.text,'" data-url="').concat(t.url,'"></web-share>\n    ')}}])&&a(n.prototype,o),function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");i(t.prototype,e&&e.prototype),e&&i(t,e)}(e,t),e}(o.App);e._PostFooter=l,customElements.define("post-footer",l)},132:function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t,e,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function u(t){return(u=Object.getPrototypeOf||function(t){return t.__proto__})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e._PostHeader=void 0;var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,u(e).apply(this,arguments))}var n,o;return n=e,(o=[{key:"getComponentName",value:function(){return"post-header"}},{key:"connectedCallback",value:function(){var t={title:this.getAttribute("data-title"),subtitle:this.getAttribute("data-subtitle"),date:this.getAttribute("data-date")};c(u(e.prototype),"render",this).call(this,t)}},{key:"getStyle",value:function(){return"\n      :host h3 {\n        font-size: inherit;\n        font-weight: normal;\n        color: #666;\n      }\n\n      :host time {\n        color: #666;\n      }\n    "}},{key:"getTemplate",value:function(t){return"\n      <header>\n        <h2>".concat(t.title,"</h2>\n        <h3>").concat(t.subtitle,"</h3>\n        <time>").concat(t.date,"</time>\n      </header>\n    ")}}])&&i(n.prototype,o),function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r(t.prototype,e&&e.prototype),e&&r(t,e)}(e,t),e}(n(14).App);e._PostHeader=s,customElements.define("post-header",s)},133:function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.getPrototypeOf||function(t){return t.__proto__})(t)}function u(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.defineProperty(e,"__esModule",{value:!0}),e._Gist=void 0,Object.setPrototypeOf(u.prototype,HTMLElement.prototype),Object.setPrototypeOf(u,HTMLElement);var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,c(e).apply(this,arguments))}var n,o;return n=e,(o=[{key:"connectedCallback",value:function(){var t,e=this.attachShadow({mode:"closed"});(t=this.getAttribute("data-gistId"),new Promise(function(n){var o=document.createElement("script"),r=function(e){return"cb"+t};window.__GistJsonpCallback||(window.__GistJsonpCallback={}),window.__GistJsonpCallback[r()]=function(t){return n(t)},o.setAttribute("src","https://gist.github.com/".concat(t,".json?callback=").concat("__GistJsonpCallback",".").concat(r())),o.setAttribute("defer",!0),e.appendChild(o)})).then(function(t){fetch(t.stylesheet).then(function(n){n.text().then(function(n){e.innerHTML="<style>".concat(n,"</style>");var o=document.createElement("div");o.innerHTML=t.div.replace('class="gist"','class="gist" style="-webkit-text-size-adjust: 100%;"'),e.appendChild(o)})})})}}])&&i(n.prototype,o),function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r(t.prototype,e&&e.prototype),e&&r(t,e)}(e,t),e}(u);e._Gist=s,customElements.define("archive-gist",s)},134:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.MarkdownParser=void 0;var a=function(){function t(e){o(this,t),this.md=e.replace(/</g,"&lt;").replace(/>/g,"&gt;"),this.previouseRow,this.Row=function(){function t(e,n,r,i){o(this,t),this.row=e,this.isOl=void 0!==n&&n,this.isUl=void 0!==r&&r,this.isBlock=i}return i(t,[{key:"getInnerHTML",value:function(){return!0===this.isOl||!0===this.isUl||!0===this.isBlock?this.row:"<p>".concat(this.row,"</p>")}},{key:"createNewRow",value:function(e,n){return new t(this.row.replace(e,n),this.isOl,this.isUl,this.isBlock)}},{key:"parsePostHeader",value:function(){var e=this.row.match(/^{"header":(.+)}$/);if(e){this.isBlock=!0;var n=JSON.parse(e[1]);return new t('<post-header data-title="'.concat(n.title,'" data-subtitle="').concat(n.subtitle,'" data-date="').concat(n.date,'"></post-header>'))}return this}},{key:"parsePostFooter",value:function(){var e=this.row.match(/^{"footer":(.+)}$/);if(e){this.isBlock=!0;var n=JSON.parse(e[1]);return new t('<post-footer data-title="'.concat(n.title,'" data-text="').concat(n.text,'" data-url="').concat(n.url,'"></post-footer>'))}return this}},{key:"parseH1",value:function(){var t=/^#\s(.+)/;return this.row.match(t)?(this.isBlock=!0,this.createNewRow(t,"<h1>$1</h1>")):this}},{key:"parseH2",value:function(){var t=/^##\s(.+)/;return this.row.match(t)?(this.isBlock=!0,this.createNewRow(t,"<h2>$1</h2>")):this}},{key:"parseH3",value:function(){var t=/^###\s(.+)/;return this.row.match(t)?(this.isBlock=!0,this.createNewRow(t,"<h3>$1</h3>")):this}},{key:"parseBr",value:function(){return this.createNewRow(/  /g,"<br>")}},{key:"parseHR",value:function(){var t=/^----$/;return this.row.match(t)?(this.isBlock=!0,this.createNewRow(t,"<hr>")):this}},{key:"parseShowMore",value:function(){var t=/^---$/;return this.row.match(t)?(this.isBlock=!0,this.createNewRow(t,'<div id="show-more">\n          <div style="text-align:center;margin-top:50px;">\n            Loading...\n          </div>\n        </div>')):this}},{key:"parseBlockQuote",value:function(){var t=/^>(.+)/;return this.row.match(t)?(this.isBlock=!0,this.createNewRow(t,"<blockquote>$1</blockquote>")):this}},{key:"parseGist",value:function(){var t=/^```gist\s(.+)```$/;return this.row.match(t)?(this.isBlock=!0,this.createNewRow(t,"<archive-gist data-gistId=$1></archive-gist>")):this}},{key:"parseImg",value:function(){var t=/^!\[(.+?)\]\((.+)\s(\d+)x(\d+)\)$/;return this.row.match(t)?(this.isBlock=!0,this.createNewRow(t,'<archive-img data-alt="$1" data-src="$2" data-width="$3" data-height="$4"></archive-img>')):this}},{key:"parseStrong",value:function(){return this.createNewRow(/\*\*(.+?)\*\*/g,"<strong>$1</strong>")}},{key:"parseEmphasis",value:function(){return this.createNewRow(/\*(.+?)\*/g,"<em>$1</em>")}},{key:"parseLink",value:function(){return this.createNewRow(/\[(.+?)\]\((https?:\/\/.+?)\)/g,'<a href="$2" target="_blank">$1</a>')}},{key:"parseUnCheckedbox",value:function(){return this.createNewRow(/\[\](.+)/g,'<p>\n            <input type="checkbox" disabled>\n            <label>$1</label>\n           </p>')}},{key:"parseCheckedbox",value:function(){return this.createNewRow(/\[x\](.+)/g,'<p>\n            <input type="checkbox" disabled checked>\n            <label>$1</label>\n           </p>')}},{key:"parseCode",value:function(){return this.createNewRow(/`(.+?)`/g,"<code>$1</code>")}},{key:"parseList",value:function(){var t=/^[00-99]\.\s(.+)$/,e=/^-\s(.+)$/,n="<li>$1</li>";return this.row.match(t)?!1===this.isOl?(this.isOl=!0,this.createNewRow(t,"<ol>".concat(n))):this.createNewRow(t,n):this.row.match(e)?!1===this.isUl?(this.isUl=!0,this.createNewRow(e,"<ul>".concat(n))):this.createNewRow(e,n):!0===this.isOl?(this.isOl=!1,this.createNewRow(/^/,"</ul>")):!0===this.isUl?(this.isUl=!1,this.createNewRow(/^/,"</ul>")):this}}]),t}()}return i(t,[{key:"getMarkUp",value:function(){var t=this,e=[];return this.md.split("\n").forEach(function(n){var o=t.createRow(n);e.push(o.getInnerHTML()),t.previouseRow=o}),e.join("")}},{key:"createRow",value:function(t){var e=!1,n=!1;return this.previouseRow&&(e=this.previouseRow.isOl,n=this.previouseRow.isUl),new this.Row(t,e,n,!1).parsePostHeader().parsePostFooter().parseH1().parseH2().parseH3().parseBr().parseHR().parseShowMore().parseGist().parseBlockQuote().parseImg().parseStrong().parseLink().parseEmphasis().parseCode().parseList().parseUnCheckedbox().parseCheckedbox()}}]),t}();e.MarkdownParser=a},135:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Post=void 0;var o=n(134);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t,e,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function s(t){return(s=Object.getPrototypeOf||function(t){return t.__proto__})(t)}n(133),n(132),n(131);var l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,s(e).apply(this,arguments))}var n,r;return n=e,(r=[{key:"getComponentName",value:function(){return"my-post"}},{key:"connectedCallback",value:function(){var t=this;this.firstFetchEndpoint="/posts/dist/".concat(location.pathname.match(/^\/post\/([a-zA-Z0-9-]+)/)[1],"-1.md"),this.secondFetchEndpoint="/posts/dist/".concat(location.pathname.match(/^\/post\/([a-zA-Z0-9-]+)/)[1],"-2.md"),u(s(e.prototype),"render",this).call(this).then(function(e){t.shadowRoot.querySelector("#show-more")&&(t.isSecondFetchRequired=!0,location.search.includes("renderall=true")?t.secondFetch():window.requestIdleCallback?requestIdleCallback(function(e){t.hookIntersectionObserver(),t.preloadSecondFetch()}):(t.hookIntersectionObserver(),t.preloadSecondFetch()))})}},{key:"getStyle",value:function(){return"\n      :host {\n        display: block;\n        max-width: 40rem;\n        margin: 0 auto;\n        line-height: 2;\n        letter-spacing: .4px;\n        font-kerning: normal;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n      }\n\n      :host pre {\n        font-size: .9em;\n        line-height: 1.6em;\n        overflow-x: auto;\n        width: calc(100% - 2em);\n        padding: 1em;\n        white-space: pre;\n        border-radius: 3px;\n        background-color: rgba(27, 31, 35, .05);\n      }\n\n      :host code {\n        font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;\n        padding: .2em .4em;\n        margin: 0;\n        font-size: 85%;\n        background-color: rgba(27, 31, 35, .05);\n        border-radius: 3px;\n      }\n\n      :host blockquote {\n        margin-left: 0;\n        padding: 0 1em;\n        color: #777;\n        border-left: .5em solid #ddd;\n      }\n    "}},{key:"getTemplate",value:function(){return this.firstFetch()}},{key:"firstFetch",value:function(){var t=this;return new Promise(function(e){fetch(t.firstFetchEndpoint,{credentials:"include"}).then(function(t){t.text().then(function(t){var n=new o.MarkdownParser(t).getMarkUp(),r=document.getElementById("dummyPost");r&&(r.style.display="none"),e(n)})})})}},{key:"secondFetch",value:function(){var t=this;this.shadowRoot.getElementById("show-more")&&fetch(this.secondFetchEndpoint,{credentials:"include"}).then(function(e){e.text().then(function(e){var n=new o.MarkdownParser(e).getMarkUp();t.shadowRoot.getElementById("show-more").innerHTML=n,document.body.appendChild(document.createElement("global-footer"))})})}},{key:"hookIntersectionObserver",value:function(){var t=this;new IntersectionObserver(function(e,n){e.forEach(function(e){e.isIntersecting&&("show-more"===e.target.id&&n.unobserve(e.target),t.isSecondFetchRequired&&(t.isSecondFetchRequired=!1,t.secondFetch()))})}).observe(this.shadowRoot.getElementById("show-more"))}},{key:"preloadSecondFetch",value:function(){var t,e,n,o;document.head.appendChild((t=this.secondFetchEndpoint,e="fetch",n="use-credentials",(o=document.createElement("link")).rel="preload",o.href=t,o.crossOrigin=n,o.as=e,o))}}])&&a(n.prototype,r),function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");i(t.prototype,e&&e.prototype),e&&i(t,e)}(e,t),e}(n(14).App);e.Post=l,customElements.define("my-post",l)},136:function(t,e,n){t.exports=n(135)},14:function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.getPrototypeOf||function(t){return t.__proto__})(t)}function u(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.defineProperty(e,"__esModule",{value:!0}),e.App=void 0,Object.setPrototypeOf(u.prototype,HTMLElement.prototype),Object.setPrototypeOf(u,HTMLElement);var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,c(e).apply(this,arguments))}var n,o;return n=e,(o=[{key:"render",value:function(t){var e=this;return new Promise(function(n){var o=e.getStyle(t),r=e.getTemplate(t);r.then?r.then(function(t){e._render(o,t),n()}):(e._render(o,r),n())})}},{key:"_render",value:function(t,e){var n=document.createElement("template");n.innerHTML="<style>".concat(t,"</style>").concat(e),window.ShadyCSS&&(ShadyCSS.prepareTemplate(n,this.getComponentName()),ShadyCSS.styleElement(this)),this.attachShadow({mode:"open"}).appendChild(document.importNode(n.content,!0)),this.addEvents&&this.addEvents()}}])&&i(n.prototype,o),function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r(t.prototype,e&&e.prototype),e&&r(t,e)}(e,t),e}(u);e.App=s},65:function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.getPrototypeOf||function(t){return t.__proto__})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.SocialShare=void 0;var u=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,c(e).apply(this,arguments))}var n,o;return n=e,(o=[{key:"getStyle",value:function(t){return"\n      :host {\n        background-color: ".concat(t.backgroundColor,";\n        cursor: pointer;\n      }\n    ")}},{key:"getTemplate",value:function(t){return'\n      <a aria-label="Share on '.concat(t.label,'" href="').concat(t.shareUrl?t.shareUrl:"#",'" target="').concat(t.shareUrl?"_blank":"",'" rel="noopener">\n        <archive-img class="social-share-icon ').concat(t.label,'" data-src="').concat(t.imgURL,'" data-width="30" data-height="30" data-background-color="transparent" data-social="').concat(t.label,'"></archive-img>\n      </a>\n    ')}}])&&i(n.prototype,o),function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r(t.prototype,e&&e.prototype),e&&r(t,e)}(e,t),e}(n(14).App);e.SocialShare=u},92:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e._WebShare=void 0;var o=n(65);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t,e,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function s(t){return(s=Object.getPrototypeOf||function(t){return t.__proto__})(t)}n(128);var l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,s(e).apply(this,arguments))}var n,o;return n=e,(o=[{key:"getComponentName",value:function(){return"web-share"}},{key:"connectedCallback",value:function(){this.state={active:"isClose"},this.url=this.getAttribute("data-url"),u(s(e.prototype),"render",this).call(this,{imgURL:"/img/webshare.svg"})}},{key:"getStyle",value:function(){return"\n    :host {\n      position: relative;\n      cursor: pointer;\n    }\n\n    :host copy-url,\n    :host([data-active='isClose']) copy-url {\n      display: none;\n    }\n\n    :host([data-active='isOpen']) copy-url {\n      display: block;\n    }\n\n    :host copy-url {\n      position: absolute;\n      z-index: 10;\n      width: 14rem;\n    }\n\n    :host button {\n      padding: 0;\n      -moz-appearance: none;\n      -webkit-appearance: none;\n      background: 0;\n      border: 0;\n      cursor: pointer;\n    }\n    "}},{key:"addEvents",value:function(){var t=this,e=this.shadowRoot.getElementById("open-btn"),n=this.shadowRoot.querySelector("copy-url").shadowRoot.getElementById("copy-link"),o=function(){t.setAttribute("data-active","isClose"),t.state.active="isClose",n.setAttribute("tabindex","-1"),e.setAttribute("tabindex",0),e.focus()};e.addEventListener("click",function(){"isClose"===t.state.active?(t.setAttribute("data-active","isOpen"),t.state.active="isOpen",n.setAttribute("tabindex",0),n.focus()):o()}),document.onkeydown=function(t){27===(t=t||window.event).keyCode&&o()}}},{key:"getTemplate",value:function(t){return'\n      <button type="button" id="open-btn">\n        <archive-img class="social-share-icon" data-src="'.concat(t.imgURL,'" data-width="30" data-height="30"></archive-img>\n      </button>\n      <copy-url data-url="').concat(this.url,'"></copy-url>\n    ')}}])&&a(n.prototype,o),function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");i(t.prototype,e&&e.prototype),e&&i(t,e)}(e,t),e}(o.SocialShare);e._WebShare=l,customElements.define("web-share",l)}});
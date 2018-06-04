!function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=139)}({137:function(t,n,e){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){return(r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function a(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,n){return!n||"object"!==o(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function c(t,n,e){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,n,e){var o=function(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=s(t)););return t}(t,n);if(o){var r=Object.getOwnPropertyDescriptor(o,n);return r.get?r.get.call(e):r.value}})(t,n,e||t)}function s(t){return(s=Object.getPrototypeOf||function(t){return t.__proto__})(t)}Object.defineProperty(n,"__esModule",{value:!0}),n._PostList=void 0;var u=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),i(this,s(n).apply(this,arguments))}var e,o;return e=n,(o=[{key:"getComponentName",value:function(){return"post-list"}},{key:"connectedCallback",value:function(){var t={format:this.getAttribute("data-format"),title:this.getAttribute("data-title"),subtitle:this.getAttribute("data-subtitle"),date:this.getAttribute("data-date"),imgsrc:this.getAttribute("data-imgsrc"),className:this.getAttribute("data-class")};this.dataLink=this.getAttribute("data-link"),c(s(n.prototype),"render",this).call(this,t)}},{key:"getStyle",value:function(){return"\n      :host {\n        display: block;\n        margin: 0 auto 1%;\n        cursor: pointer;\n      }\n\n      :host a {\n        display: flex;\n        color: #000;\n        text-decoration: none;\n        border-bottom: 1px solid #999;\n      }\n\n      :host a.headline {\n        margin-bottom: 8%;\n        padding: 0;\n        border-bottom: none;\n      }\n\n      :host a.headline h3 {\n        order: 2;\n        font-size: 3rem;\n      }\n\n      :host a.headline archive-img {\n        order: 0;\n        align-self: stretch;\n        margin-right: 2%;\n        max-width: 65%;\n      }\n\n      :host a.headline h4 {\n        order: 3;\n      }\n\n      :host a.headline time {\n        order: 1;\n        align-self: stretch;\n      }\n\n      :host a.headline .data {\n        display: block;\n        max-width: 35%;\n      }\n\n      :host a {\n        padding: 2%;\n      }\n\n      :host a archive-img {\n        order: 1;\n        max-width: 20%;\n      }\n\n      :host a .data {\n        display: flex;\n        flex-flow: column wrap;\n        width: 80%;\n        order: 0;\n      }\n\n      :host a h3 {\n        order: 1;\n        font-size: 2rem;\n        font-weight: 400;\n        margin: 1rem 0 0;\n      }\n\n      :host a time {\n        order: 0;\n      }\n\n      :host a h4 {\n        order: 2;\n        font-weight: 400;\n        margin: 1rem 0 0;\n      }\n\n      /* for mobile */\n      @media (max-width: 414px) {\n        :host {\n          margin-bottom: 2rem;\n        }\n\n        :host a {\n          display: block;\n          margin-bottom: inherit;\n          position: relative;\n          border-bottom: none;\n        }\n\n        :host a.headline archive-img,\n        :host a archive-img,\n        :host a.headline .data,\n        :host a .data {\n          max-width: 100%;\n          width: 100%;\n        }\n\n        :host a.headline h3 {\n          font-size: 1.2rem;\n        }\n\n        :host a.headline .data,\n        :host a .data {\n          display: block;\n        }\n\n        :host a::after {\n          position: absolute;\n          content: '';\n          left: 50%;\n          bottom: -15px;\n          display: inline-block;\n          width: 50%;\n          height: 1px;\n          -moz-transform: translateX(-50%);\n          -webkit-transform: translateX(-50%);\n          -ms-transform: translateX(-50%);\n          transform: translateX(-50%);\n          background-color: #999;\n        }\n\n        :host a.headline::after {\n          bottom: -30px;\n          width: 100%;\n        }\n\n        :host a.last::after {\n          display: none;\n        }\n\n        :host a.headline {\n          margin-bottom: 4rem;\n        }\n\n        :host a h3 {\n          font-size: 1rem;\n        }\n      }\n    "}},{key:"getTemplate",value:function(t){return"\n      <a href=".concat(this.dataLink,' class="').concat(t.className&&t.className,'">\n        ').concat(t.imgsrc&&'\n          <archive-img\n            data-src="'.concat(t.imgsrc,'",\n            data-alt="image ').concat(t.title,'",\n            data-width="').concat("large"===t.format?"2":"1",'",\n            data-height="').concat((t.format,"1"),'",\n            data-layout="').concat("large"===t.format?"":"fixed-layout",'"\n          ></archive-img>'),'\n        <div class="data">\n          <h3>').concat(t.title,"</h3>\n          <h4>").concat(t.subtitle,"</h4>\n          <time>").concat(t.date,"</time>\n        </div>\n      </a>\n    ")}}])&&a(e.prototype,o),function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");r(t.prototype,n&&n.prototype),n&&r(t,n)}(n,t),n}(e(14).App);n._PostList=u,customElements.define("post-list",u)},138:function(t,n,e){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){return(r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function a(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,n){return!n||"object"!==o(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function c(t,n,e){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,n,e){var o=function(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=s(t)););return t}(t,n);if(o){var r=Object.getOwnPropertyDescriptor(o,n);return r.get?r.get.call(e):r.value}})(t,n,e||t)}function s(t){return(s=Object.getPrototypeOf||function(t){return t.__proto__})(t)}Object.defineProperty(n,"__esModule",{value:!0}),n.PostListContainer=void 0,e(137);var u=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),i(this,s(n).apply(this,arguments))}var e,o;return e=n,(o=[{key:"getComponentName",value:function(){return"post-list-container"}},{key:"connectedCallback",value:function(){c(s(n.prototype),"render",this).call(this)}},{key:"getStyle",value:function(){return"\n      :host {\n        display: block;\n        width: 100%;\n        max-width: 1280px;\n        margin: 0 auto;\n      }\n\n      /* for mobile */\n      @media (max-width: 414px) {\n        :host {\n          margin-bottom: 4rem;\n        }\n      }\n    "}},{key:"getTemplate",value:function(){return this.fetchPostListContainer()}},{key:"fetchPostListContainer",value:function(){return new Promise(function(t){fetch("/json/posts.json",{credentials:"include"}).then(function(n){n.json().then(function(n){var e=[];n.posts.map(function(t,n,o){var r='<post-list\n              data-format="'.concat(t.format,'"\n              data-title="').concat(t.title,'"\n              data-subtitle="').concat(t.subtitle,'"\n              data-date="').concat(t.date,'"\n              data-link="').concat(t.link,'"\n              data-imgsrc="').concat(t.imgsrc,'"\n              data-class=').concat(0===n?"headline":n===o.length-1?"last":"","\n              ></post-list>");e.push(r)});var o=document.getElementById("dummyBody");o&&(o.style.display="none"),t('\n            <div class="list">\n              '.concat(e.join(""),"\n            </div>\n          "))})})})}}])&&a(e.prototype,o),function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");r(t.prototype,n&&n.prototype),n&&r(t,n)}(n,t),n}(e(14).App);n.PostListContainer=u,customElements.define("post-list-container",u)},139:function(t,n,e){t.exports=e(138)},14:function(t,n,e){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){return(r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function a(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,n){return!n||"object"!==o(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function c(t){return(c=Object.getPrototypeOf||function(t){return t.__proto__})(t)}function s(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.defineProperty(n,"__esModule",{value:!0}),n.App=void 0,Object.setPrototypeOf(s.prototype,HTMLElement.prototype),Object.setPrototypeOf(s,HTMLElement);var u=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),i(this,c(n).apply(this,arguments))}var e,o;return e=n,(o=[{key:"render",value:function(t){var n=this;return new Promise(function(e){var o=n.getStyle(t),r=n.getTemplate(t);r.then?r.then(function(t){n._render(o,t),e()}):(n._render(o,r),e())})}},{key:"_render",value:function(t,n){var e=document.createElement("template");e.innerHTML="<style>".concat(t,"</style>").concat(n),window.ShadyCSS&&(ShadyCSS.prepareTemplate(e,this.getComponentName()),ShadyCSS.styleElement(this)),this.attachShadow({mode:"open"}).appendChild(document.importNode(e.content,!0)),this.addEvents&&this.addEvents()}}])&&a(e.prototype,o),function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");r(t.prototype,n&&n.prototype),n&&r(t,n)}(n,t),n}(s);n.App=u}});
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"CrKI":[function(require,module,exports) {
module.exports="/image.61dd97e5.png";
},{}],"FOZT":[function(require,module,exports) {
"use strict";function n(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'<div class="row" style="'.concat(o,'">').concat(n,"</div>")}function o(n){return'<div class="col-sm">'.concat(n,"</div>")}function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("string"==typeof n)return n;return Object.keys(n).map(function(o){return"".concat(o,": ").concat(n[o])}).join(";")}function r(n){return'\n    <form name="'.concat(n,'">\n    <h5>').concat(n,'</h5>\n    <div class="form-group">\n    <input class="form-control form-control-sm" name="value" placeholder="value">\n    </div>\n    <div class="form-group">\n    <input class="form-control form-control-sm" name="styles" placeholder="styles">\n    </div>\n    <button type="sibmit" class="btn btn-primary btn-sm">Добавить</button>\n    </form>\n    <hr />\n    ')}Object.defineProperty(exports,"__esModule",{value:!0}),exports.block=r,exports.col=o,exports.css=t,exports.row=n;
},{}],"dDFO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TitleBlock=exports.TextBlock=exports.ImageBlock=exports.ColumnsBlock=void 0;var t=require("../utils");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)}function r(t,e){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function n(t){var e=u();return function(){var o,r=s(t);if(e){var n=s(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return c(this,o)}}function c(t,o){if(o&&("object"===e(o)||"function"==typeof o))return o;if(void 0!==o)throw new TypeError("Derived constructors may only return object or undefined");return i(t)}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,o){return e&&f(t.prototype,e),o&&f(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}var p=function(){function t(e,o){l(this,t),this.value=e,this.options=o}return a(t,[{key:"toHTML",value:function(){throw new Error("Метод toHTML должен быть реализован")}}]),t}(),y=function(e){o(c,p);var r=n(c);function c(t,e){return l(this,c),r.call(this,t,e)}return a(c,[{key:"toHTML",value:function(){var e=this.options,o=e.tag,r=void 0===o?"h1":o,n=e.styles;return(0,t.row)((0,t.col)("<".concat(r,">").concat(this.value,"</").concat(r,">")),(0,t.css)(n))}}]),c}();exports.TitleBlock=y;var v=function(e){o(c,p);var r=n(c);function c(t,e){return l(this,c),r.call(this,t,e)}return a(c,[{key:"toHTML",value:function(){var e=this.options,o=e.imageStyles,r=e.alt,n=e.styles;return(0,t.row)('<img src="'.concat(this.value,'" alt="').concat(r,'" style="').concat((0,t.css)(o),'" />'),(0,t.css)(n))}}]),c}();exports.ImageBlock=v;var h=function(e){o(c,p);var r=n(c);function c(t,e){return l(this,c),r.call(this,t,e)}return a(c,[{key:"toHTML",value:function(){var e=this.value.map(t.col).join("");return(0,t.row)(e,(0,t.css)(this.options.styles))}}]),c}();exports.ColumnsBlock=h;var b=function(e){o(c,p);var r=n(c);function c(t,e){return l(this,c),r.call(this,t,e)}return a(c,[{key:"toHTML",value:function(){return(0,t.row)((0,t.col)("<p>".concat(this.value,"</p>")),(0,t.css)(this.options.styles))}}]),c}();exports.TextBlock=b;
},{"../utils":"FOZT"}],"JDu1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var e=a(require("./assets/image.png")),t=require("./classes/blocks");function a(e){return e&&e.__esModule?e:{default:e}}var r='Практика написания JS без библиотек <p>Я создал ссылку на\n<a href="https://www.mozilla.org/ru/">домашнюю страницу Mozilla</a>.\n</p>',o=[new t.TitleBlock("КОНСТРУКТОР САЙТА",{tag:"h2",styles:{background:"linear-gradient(to right, #ff0099, #493240)",color:"green",padding:"1.5rem","text-align":"center"}}),new t.ImageBlock(e.default,{styles:{padding:"2rem 0",display:"flex","justify-content":"center"},imageStyles:{width:"500px",height:"auto"},alt:"Это картинка"}),new t.ColumnsBlock(["Приложение на чистом JavaScript, без использования библиотек","Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс","JavaScript - это просто, интересно. Научись создавать любые UI своими руками"],{styles:{background:"linear-gradient(to bottom, #8e2de2, #4a00e0)",padding:"2rem",color:"#FFC0CB","font-weight":"bold"}}),new t.TextBlock(r,{styles:{background:"linear-gradient(to left, #f2994a, #f2c94c)",padding:"1rem","font-weight":"bold"}})];exports.model=o;
},{"./assets/image.png":"CrKI","./classes/blocks":"dDFO"}],"V48B":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Site=void 0;var r=function(){function t(n){e(this,t),this.$el=document.querySelector(n)}return n(t,[{key:"render",value:function(e){var t=this;this.$el.innerHTML="",e.forEach(function(e){t.$el.insertAdjacentHTML("beforeend",e.toHTML())})}}]),t}();exports.Site=r;
},{}],"idI0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Sidebar=void 0;var e=require("../utils"),t=require("./blocks");function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var a=function(){function n(e,t){r(this,n),this.$el=document.querySelector(e),this.update=t,this.init()}return i(n,[{key:"init",value:function(){this.$el.insertAdjacentHTML("afterbegin",this.template),this.$el.addEventListener("submit",this.add.bind(this))}},{key:"template",get:function(){return[(0,e.block)("text"),(0,e.block)("title")].join("")}},{key:"add",value:function(e){e.preventDefault();var r=e.target.name,n=e.target.value.value,i=e.target.styles.value,a="text"===r?new t.TextBlock(n,{styles:i}):new t.TitleBlock(n,{styles:i});this.update(a),e.target.value.value="",e.target.styles.value=""}}]),n}();exports.Sidebar=a;
},{"../utils":"FOZT","./blocks":"dDFO"}],"Z1kE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.App=void 0;var e=require("./site"),r=require("./sidebar");function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function n(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}var o=function(){function n(e){t(this,n),this.model=e}return i(n,[{key:"init",value:function(){var t=this,n=new e.Site("#site");n.render(this.model);new r.Sidebar("#panel",function(e){t.model.push(e),n.render(t.model)})}}]),n}();exports.App=o;
},{"./site":"V48B","./sidebar":"idI0"}],"jExt":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./model"),s=require("./classes/app");require("./styles/main.css"),new s.App(e.model).init();
},{"./model":"JDu1","./classes/app":"Z1kE","./styles/main.css":"jExt"}]},{},["Focm"], null)
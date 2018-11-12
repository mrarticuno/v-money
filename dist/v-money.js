var VMoney=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=".",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);var r={prefix:"",suffix:"",thousands:",",decimal:".",cents:!1,precision:2};function o(e,t=r){"number"==typeof e&&(t.cents&&(e/=100),e=e.toFixed(u(t.precision)));var n=e.indexOf("-")>=0?"-":"",o=s(a(i(e),t.precision)).split("."),c=o[0],f=o[1];return c=function(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,`$1${t}`)}(c,t.thousands),t.prefix+n+function(e,t,n){return t?e+n+t:e}(c,f,t.decimal)+t.suffix}function i(e){return s(e).replace(/\D+/g,"")||"0"}function u(e){return function(e,t,n){return Math.max(e,Math.min(t,n))}(0,e,20)}function a(e,t){var n=Math.pow(10,t);return(parseFloat(e)/n).toFixed(u(t))}function s(e){return e?e.toString():""}function c(e,t){var n=function(){e.setSelectionRange(t,t)};e===document.activeElement&&(n(),setTimeout(n,1))}function f(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var l=function(e,t){if(t.value){var n=function(e,t){return e=e||{},t=t||{},Object.keys(e).concat(Object.keys(t)).reduce(function(n,r){return n[r]=void 0===t[r]?e[r]:t[r],n},{})}(r,t.value);if("INPUT"!==e.tagName.toLocaleUpperCase()){var i=e.getElementsByTagName("input");1!==i.length||(e=i[0])}e.oninput=function(){var t=e.value.length-e.selectionEnd;e.value=o(e.value,n),t=Math.max(t,n.suffix.length),t=e.value.length-t,t=Math.max(t,n.prefix.length+1),c(e,t),e.dispatchEvent(f("change"))},e.onfocus=function(){c(e,e.value.length-n.suffix.length)},e.oninput(),e.dispatchEvent(f("input"))}};var d=function(e,t,n,r,o,i,u,a){var s,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),u?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},c._ssrRegister=s):o&&(s=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(c.functional){c._injectStyles=s;var f=c.render;c.render=function(e,t){return s.call(t),f(e,t)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,s):[s]}return{exports:e,options:c}}({name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:()=>r.precision},cents:{type:Boolean,default:!1},decimal:{type:String,default:()=>r.decimal},thousands:{type:String,default:()=>r.thousands},prefix:{type:String,default:()=>r.prefix},suffix:{type:String,default:()=>r.suffix}},directives:{money:l},data:()=>({formattedValue:""}),watch:{value:{immediate:!0,handler(e,t){var n=o(e,this.$props);n!==this.formattedValue&&(this.formattedValue=n)}}},methods:{change(e){this.$emit("input",this.masked?e.target.value:function(e,t=r){var n=e.indexOf("-")>=0?-1:1,o=a(i(e),t.precision),u=parseFloat(o)*n;return t.cents,u}(e.target.value,this.$props))}}},function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:e.precision,decimal:e.decimal,thousands:e.thousands,prefix:e.prefix,suffix:e.suffix,cents:e.cents},expression:"{precision, decimal, thousands, prefix, suffix, cents}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:e.formattedValue},on:{change:e.change}})},[],!1,null,null,null);d.options.__file="component.vue";var p=d.exports;n.d(t,"VERSION",function(){return v}),n.d(t,"Money",function(){return p}),n.d(t,"VMoney",function(){return l}),n.d(t,"options",function(){return r});const v="0.8.1";function m(e,t){t&&Object.keys(t).map(function(e){r[e]=t[e]}),e.directive("money",l),e.component("money",p)}t.default=m;"undefined"!=typeof window&&window.Vue&&window.Vue.use(m)}]);
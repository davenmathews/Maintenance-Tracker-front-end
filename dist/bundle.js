!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r="http://localhost:5000/api/v1",o=document.querySelector("form"),s=document.querySelector("#email"),u=document.querySelector("#password"),a=document.querySelector(".message");o&&o.addEventListener("submit",function(e){e.preventDefault(),function(e,t){let n={email:e,password:t},o=new Request(r+"/auth/login",{method:"POST",mode:"cors",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(n)});fetch(o).then(e=>{e.json().then(t=>{e.ok?(a.className="btn-success",a.innerHTML=t.message,function(e,t){sessionStorage.setItem("access_token",t),sessionStorage.setItem("user",e.email),"Administrator"===e.role?window.location="../admin-dashboard/index-admin.html":"Consumer"===e.role&&(window.location="../user-dashboard/index-user.html")}(t.user,t.access_token)):(a.className="btn-danger",a.innerHTML=t.message)})})}(s.value,u.value)})}]);
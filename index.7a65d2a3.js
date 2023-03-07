function e(e,t,n,s){Object.defineProperty(e,t,{get:n,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},r={},i=n.parcelRequire501b;null==i&&((i=function(e){if(e in s)return s[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return s[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequire501b=i),i.register("27Lyk",(function(t,n){var s,r;e(t.exports,"register",(()=>s),(e=>s=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var i={};s=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("27Lyk").register(JSON.parse('{"f9fpV":"index.7a65d2a3.js","7jCQ3":"error.c323c1c3.png","5A7to":"check.7a224f18.png","aSoqU":"arroba.73eaa054.png","jo1fY":"send.3cc8cad9.png","ad4o0":"msg_area.58d95587.png","wLPpY":"sendbg.7d49f120.jpg","6WAvX":"left-chevron.f151d451.png","gVcnR":"profileman.60a0100a.png","2u0tW":"profilewoman.abd69f1b.png"}'));var o;o=new URL(i("27Lyk").resolve("7jCQ3"),import.meta.url).toString();var a;a=new URL(i("27Lyk").resolve("5A7to"),import.meta.url).toString();var c;c=new URL(i("27Lyk").resolve("aSoqU"),import.meta.url).toString();var u=new class{_btnParentContainer=document.querySelector(".btn-group");mainContent=document.querySelector(".main-content");_spinnerParent=document.querySelector(".spinner");constructor(){this._btnTryAgain()}_render(){const e=this.signInPageMarkUp();this._clear(),this.mainContent.insertAdjacentHTML("afterbegin",e),this.mainContent.addEventListener("click",(function(e){const t=e.target.closest("i");if(!t)return;console.log(t),t.classList.toggle("fa-eye-slash"),t.classList.toggle("fa-eye");const n=document.getElementById("password");"password"===n.type?n.type="text":n.type="password"}))}_renderSpinner(){this._clear(),this.mainContent.insertAdjacentHTML("afterbegin",'\n      <section class="spinner">\n      <div class="lds-ripple">\n        <div></div>\n        <div></div>\n      </div>\n    </section> \n  ')}_addHandlerEmail(e){this._btnParentContainer.addEventListener("click",(function(t){t.target.closest("#email")&&e()}))}_addHandlerSignUp(e,t){this.mainContent?.addEventListener("click",(function(n){n.preventDefault();n.target.closest("#submit")&&(e(),t())}))}_btnTryAgain(){this.mainContent.addEventListener("click",(function(e){e.preventDefault();e.target.closest("#btn")&&location.reload()}))}_clear(){this.mainContent.innerHTML=""}_errorMessage(e){const n=`\n    <section class="err_message">\n    <img src="${t(o)}" alt="img" />\n    <h1>Whoops!!</h1>\n    <p>Something went wrong</p>\n    <p>${e}</p>\n    <button id="btn">Try Again</button>\n  </section>   \n    `;this._clear(),this.mainContent.insertAdjacentHTML("afterbegin",n)}_successMessage(){const e=`\n    <section class="err_message">\n    <img src="${t(a)}" alt="img" />\n    <h1>Saved!</h1>\n    <p>Congratulations</p>\n    <p>Account Successfully Created!</p>\n    <button id="btn"  style="background-color: green;">Okay</button>\n  </section>   \n    `;this._clear(),this.mainContent.insertAdjacentHTML("afterbegin",e)}signInPageMarkUp(){return`\n          <form action="" id="createacc" >\n          <section class="logo">\n          <h2>Chat</h2>\n          <img src="${t(c)}" alt="" width="40px" />\n          </section>\n          <section>\n          <p class="p-1">Create an account</p>\n          </section>\n          <section class="username">\n          <label for="">Username   <i class="fa-solid fa-asterisk"></i></label>\n          <input type="text" name="" id="username" value="" />\n          </section>\n          <section class="email">\n          <label for="">Email  <i class="fa-solid fa-asterisk"></i></label>\n          <input type="email" name="" id="email" value="" />\n          </section>\n          <section class="phone">\n          <label for="">Phone Number  <i class="fa-solid fa-asterisk"></i></label>\n          <input type="text" name="" id="number" value="" />\n          </section>\n          <section class="sex">\n          <label for="">Gender  <i class="fa-solid fa-asterisk"></i></label>\n          <select name="" id="option">\n            <option value="Male">Male</option>\n            <option value="female">Female</option>\n          </select>\n        </section>\n          <section class="password">\n          <label for="">Password  <i class="fa-solid fa-asterisk"></i></label>\n          <input type="password" name="" id="password"  value=""/>\n          <i class="fa-solid fa-eye"></i>\n         \n          </section>\n          <input type="submit" id="submit" value="Sign Up" />\n          </form>\n  `}};var l,h=new class{_btnParentContainer=document.querySelector(".btn-group");mainContent=document.querySelector(".main-content");_spinnerParent=document.querySelector(".spinner");_body=document.querySelector(".whole");_parent=document.querySelector("body");_addHandlerShowLoginForm(e){document.querySelector(".sp-1").addEventListener("click",(function(){e()}))}_clear(){this.mainContent.innerHTML=""}_errorMessage(e){const n=`\n    <section class="err_message">\n    <img src="${t(o)}" alt="img" id="errIcon" />\n    <h1>Whoops!</h1>\n    <p>Something went wrong</p>\n    <p>${e}</p>\n    <button id="btn">Try Again</button>\n  </section>   \n    `;this._clear(),this.mainContent.insertAdjacentHTML("afterbegin",n)}_successMessage(){const e=`\n    <section class="err_message">\n    <img src="${t(a)}" alt="img" />\n    <h1>Saved!</h1>\n    <p>Congratulations</p>\n    <p>Login Successfull!</p>\n    <button id="btn"  style="background-color: green;">Okay</button>\n  </section>   \n    `;this._clear(),this.mainContent.insertAdjacentHTML("afterbegin",e)}_renderSpinner(){this._clear(),this.mainContent.insertAdjacentHTML("afterbegin",'\n      <section class="spinner">\n      <div class="lds-ripple">\n        <div></div>\n        <div></div>\n      </div>\n    </section> \n  ')}logInMarkUp(){return'\n    <form id="form-login">\n    <h1>Log In</h1>\n    <section class="email-login">\n      <label for="">Email</label>\n      <input type="email" name="" id="email-login" value="" />\n    </section>\n\n    <section class="password-login">\n      <label for="">Password</label>\n      <input type="password" name="" id="password-login" value="" />\n      <i class="fa-solid fa-eye"></i>\n    </section>\n    <input type="submit" id="login" value="Log In" />\n  </form>    \n    '}_renderLoginMakup(){const e=this.logInMarkUp();this._clear(),this.mainContent.insertAdjacentHTML("afterbegin",e),this.mainContent.addEventListener("click",(function(e){const t=e.target.closest("i");if(!t)return;t.classList.toggle("fa-eye-slash"),t.classList.toggle("fa-eye");const n=document.getElementById("password-login");"password"===n.type?n.type="text":n.type="password"}))}_addHandlerlogin(e,t){this.mainContent.addEventListener("click",(function(n){n.preventDefault();n.target.closest("#login")&&(e(),t())}))}};l=new URL(i("27Lyk").resolve("jo1fY"),import.meta.url).toString();var d;d=new URL(i("27Lyk").resolve("ad4o0"),import.meta.url).toString();new URL(i("27Lyk").resolve("wLPpY"),import.meta.url).toString();var f;f=new URL(i("27Lyk").resolve("6WAvX"),import.meta.url).toString();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const p=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&s+1<e.length&&56320==(64512&e.charCodeAt(s+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++s)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},m={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let t=0;t<e.length;t+=3){const r=e[t],i=t+1<e.length,o=i?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=r>>2,l=(3&r)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),s.push(n[u],n[l],n[h],n[d])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(p(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[s++]=String.fromCharCode(55296+(i>>10)),t[s++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==i||null==o||null==a)throw Error();const c=r<<2|i>>4;if(s.push(c),64!==o){const e=i<<4&240|o>>2;if(s.push(e),64!==a){const e=o<<6&192|a;s.push(e)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},g=function(e){return function(e){const t=p(e);return m.encodeByteArray(t,!0)}(e).replace(/\./g,"")},y=function(e){try{return m.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function w(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function b(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function E(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function I(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function T(){const e=w();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _(){return"object"==typeof indexedDB}class S extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],i=r?function(e,t){return e.replace(C,((e,n)=>{const s=t[n];return null!=s?String(s):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${i} (${s}).`;return new S(s,o,n)}}const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function D(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const n=e[r],i=t[r];if(N(n)&&N(i)){if(!D(n,i))return!1}else if(n!==i)return!1}for(const e of s)if(!n.includes(e))return!1;return!0}function N(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function O(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,s]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(s)}})),t}function L(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,t){const n=new P(e,t);return n.subscribe.bind(n)}class P{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let s;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");s=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===s.next&&(s.next=x),void 0===s.error&&(s.error=x),void 0===s.complete&&(s.complete=x);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(e){}})),this.observers.push(s),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function x(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e){return e&&e._delegate?e._delegate:e}class F{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new v;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),s=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(s)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=e,"[DEFAULT]"===s?void 0:s),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var s;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class j{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new V(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=[];var q,H;(H=q||(q={}))[H.DEBUG=0]="DEBUG",H[H.VERBOSE=1]="VERBOSE",H[H.INFO=2]="INFO",H[H.WARN=3]="WARN",H[H.ERROR=4]="ERROR",H[H.SILENT=5]="SILENT";const $={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},K=q.INFO,z={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},G=(e,t,...n)=>{if(t<e.logLevel)return;const s=(new Date).toISOString(),r=z[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${s}]  ${e.name}:`,...n)};class W{constructor(e){this.name=e,this._logLevel=K,this._logHandler=G,this._userLogHandler=null,B.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?$[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}let Q,X;const Y=new WeakMap,J=new WeakMap,Z=new WeakMap,ee=new WeakMap,te=new WeakMap;let ne={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return J.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Z.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ie(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function se(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(X||(X=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(oe(this),t),ie(Y.get(this))}:function(...t){return ie(e.apply(oe(this),t))}:function(t,...n){const s=e.call(oe(this),t,...n);return Z.set(s,t.sort?t.sort():[t]),ie(s)}}function re(e){return"function"==typeof e?se(e):(e instanceof IDBTransaction&&function(e){if(J.has(e))return;const t=new Promise(((t,n)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),s()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)}));J.set(e,t)}(e),t=e,(Q||(Q=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,ne):e);var t}function ie(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(ie(e.result)),s()},i=()=>{n(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&Y.set(t,e)})).catch((()=>{})),te.set(t,e),t}(e);if(ee.has(e))return ee.get(e);const t=re(e);return t!==e&&(ee.set(e,t),te.set(t,e)),t}const oe=e=>te.get(e);function ae(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=ie(o);return s&&o.addEventListener("upgradeneeded",(e=>{s(ie(o.result),e.oldVersion,e.newVersion,ie(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{i&&e.addEventListener("close",(()=>i())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const ce=["get","getKey","getAll","getAllKeys","count"],ue=["put","add","delete","clear"],le=new Map;function he(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(le.get(t))return le.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=ue.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!ce.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,r?"readwrite":"readonly");let o=i.store;return s&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&i.done]))[0]};return le.set(t,i),i}ne=(e=>({...e,get:(t,n,s)=>he(t,n)||e.get(t,n,s),has:(t,n)=>!!he(t,n)||e.has(t,n)}))(ne);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const fe=new W("@firebase/app"),pe={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},me=new Map,ge=new Map;function ye(e,t){try{e.container.addComponent(t)}catch(n){fe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ve(e){const t=e.name;if(ge.has(t))return fe.debug(`There were multiple attempts to register component ${t}.`),!1;ge.set(t,e);for(const t of me.values())ye(t,e);return!0}function we(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const be=new k("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new F("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw be.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),s=n.name;if("string"!=typeof s||!s)throw be.create("bad-app-name",{appName:String(s)});const r=me.get(s);if(r){if(D(e,r.options)&&D(n,r.config))return r;throw be.create("duplicate-app",{appName:s})}const i=new j(s);for(const e of ge.values())i.addComponent(e);const o=new Ee(e,n,i);return me.set(s,o),o}function Te(e="[DEFAULT]"){const t=me.get(e);if(!t)throw be.create("no-app",{appName:e});return t}function _e(e,t,n){var s;let r=null!==(s=pe[e])&&void 0!==s?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${r}" with version "${t}":`];return i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void fe.warn(e.join(" "))}ve(new F(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}let Se=null;function ke(){return Se||(Se=ae("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw be.create("idb-open",{originalErrorMessage:e.message})}))),Se}async function Ce(e,t){var n;try{const n=(await ke()).transaction("firebase-heartbeat-store","readwrite"),s=n.objectStore("firebase-heartbeat-store");return await s.put(t,Ae(e)),n.done}catch(e){if(e instanceof S)fe.warn(e.message);else{const t=be.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});fe.warn(t.message)}}}function Ae(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Re(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Ne();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ne(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let s=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Oe(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Oe(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=g(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ne(){return(new Date).toISOString().substring(0,10)}class Re{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!_()&&new Promise(((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await ke()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Ae(e))}catch(e){if(e instanceof S)fe.warn(e.message);else{const n=be.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});fe.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ce(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ce(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Oe(e){return g(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le;Le="",ve(new F("platform-logger",(e=>new de(e)),"PRIVATE")),ve(new F("heartbeat",(e=>new De(e)),"PRIVATE")),_e("@firebase/app","0.7.31",Le),_e("@firebase/app","0.7.31","esm2017"),_e("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
_e("firebase","9.9.3","app");function Me(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n}Object.create;Object.create;function Pe(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xe=Pe,Ue=new k("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Fe=new W("@firebase/auth");function Ve(e,...t){Fe.logLevel<=q.ERROR&&Fe.error(`Auth (9.9.3): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e,...t){throw He(e,...t)}function Be(e,...t){return He(e,...t)}function qe(e,t,n){const s=Object.assign(Object.assign({},xe()),{[t]:n});return new k("auth","Firebase",s).create(t,{appName:e.name})}function He(e,...t){if("string"!=typeof e){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return Ue.create(e,...t)}function $e(e,t,...n){if(!e)throw He(t,...n)}function Ke(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ve(t),new Error(t)}function ze(e,t){e||Ke(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new Map;function We(e){ze(e instanceof Function,"Expected a class definition");let t=Ge.get(e);return t?(ze(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ge.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qe(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Xe(){return"http:"===Ye()||"https:"===Ye()}function Ye(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je{constructor(e,t){this.shortDelay=e,this.longDelay=t,ze(t>e,"Short delay should be less than long delay!"),this.isMobile=b()||I()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Xe()||E()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e,t){ze(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},nt=new Je(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function rt(e,t,n,s,r={}){return it(e,r,(async()=>{let r={},i={};s&&("GET"===t?i=s:r={body:JSON.stringify(s)});const o=R(Object.assign({key:e.config.apiKey},i)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),et.fetch()(at(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function it(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},tt),t);try{const t=new ct(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw ut(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ut(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw ut(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw ut(e,"user-disabled",i);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw qe(e,a,o);je(e,a)}}catch(t){if(t instanceof S)throw t;je(e,"network-request-failed")}}async function ot(e,t,n,s,r={}){const i=await rt(e,t,n,s,r);return"mfaPendingCredential"in i&&je(e,"multi-factor-auth-required",{_serverResponse:i}),i}function at(e,t,n,s){const r=`${t}${n}?${s}`;return e.config.emulator?Ze(e.config,r):`${e.config.apiScheme}://${r}`}class ct{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Be(this.auth,"network-request-failed"))),nt.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function ut(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Be(e,t,s);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e){return 1e3*Number(e)}function dt(e){var t;const[n,s,r]=e.split(".");if(void 0===n||void 0===s||void 0===r)return Ve("JWT malformed, contained fewer than 3 sections"),null;try{const e=y(s);return e?JSON.parse(e):(Ve("Failed to decode base64 JWT payload"),null)}catch(e){return Ve("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ft(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof S&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class pt{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=lt(this.lastLoginAt),this.creationTime=lt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(e){var t;const n=e.auth,s=await e.getIdToken(),r=await ft(e,async function(e,t){return rt(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:s}));$e(null==r?void 0:r.users.length,n,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const o=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?i.providerUserInfo.map((e=>{var{providerId:t}=e,n=Me(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,u=o,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const l=e.isAnonymous,h=!(e.email&&i.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new mt(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$e(e.idToken,"internal-error"),$e(void 0!==e.idToken,"internal-error"),$e(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=dt(e);return $e(t,"internal-error"),$e(void 0!==t.exp,"internal-error"),$e(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return $e(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await it(e,{},(async()=>{const n=R({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,i=at(e,s,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",et.fetch()(i,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,s,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:r}=t,i=new yt;return n&&($e("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),s&&($e("string"==typeof s,"internal-error",{appName:e}),i.accessToken=s),r&&($e("number"==typeof r,"internal-error",{appName:e}),i.expirationTime=r),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yt,this.toJSON())}_performRefresh(){return Ke("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(e,t){$e("string"==typeof e||void 0===e,"internal-error",{appName:t})}class wt{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,r=Me(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new mt(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ft(this,this.stsTokenManager.getToken(this.auth,e));return $e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=U(e),s=await n.getIdToken(t),r=dt(s);$e(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i="object"==typeof r.firebase?r.firebase:void 0,o=null==i?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:lt(ht(r.auth_time)),issuedAtTime:lt(ht(r.iat)),expirationTime:lt(ht(r.exp)),signInProvider:o||null,signInSecondFactor:(null==i?void 0:i.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=U(e);await gt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&($e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await gt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ft(this,async function(e,t){return rt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,r,i,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(s=t.email)&&void 0!==s?s:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:I}=t;$e(v&&I,e,"internal-error");const T=yt.fromJSON(this.name,I);$e("string"==typeof v,e,"internal-error"),vt(l,e.name),vt(h,e.name),$e("boolean"==typeof w,e,"internal-error"),$e("boolean"==typeof b,e,"internal-error"),vt(d,e.name),vt(f,e.name),vt(p,e.name),vt(m,e.name),vt(g,e.name),vt(y,e.name);const _=new wt({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(_.providerData=E.map((e=>Object.assign({},e)))),m&&(_._redirectEventId=m),_}static async _fromIdTokenResponse(e,t,n=!1){const s=new yt;s.updateFromServerResponse(t);const r=new wt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await gt(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}bt.type="NONE";const Et=bt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e,t,n){return`firebase:${e}:${t}:${n}`}class Tt{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:r}=this.auth;this.fullUserKey=It(this.userKey,s.apiKey,r),this.fullPersistenceKey=It("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Tt(We(Et),e,n);const s=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=s[0]||We(Et);const i=It(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(i);if(t){const s=wt._fromJSON(e,t);n!==r&&(o=s),r=n;break}}catch(e){}const a=s.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(i,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(i)}catch(e){}}))),new Tt(r,e,n)):new Tt(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(At(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(St(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Nt(t))return"Blackberry";if(Rt(t))return"Webos";if(kt(t))return"Safari";if((t.includes("chrome/")||Ct(t))&&!t.includes("edge/"))return"Chrome";if(Dt(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function St(e=w()){return/firefox\//i.test(e)}function kt(e=w()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ct(e=w()){return/crios\//i.test(e)}function At(e=w()){return/iemobile/i.test(e)}function Dt(e=w()){return/android/i.test(e)}function Nt(e=w()){return/blackberry/i.test(e)}function Rt(e=w()){return/webos/i.test(e)}function Ot(e=w()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Lt(e=w()){return Ot(e)||Dt(e)||Rt(e)||Nt(e)||/windows phone/i.test(e)||At(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mt(e,t=[]){let n;switch(e){case"Browser":n=_t(w());break;case"Worker":n=`${_t(w())}-${e}`;break;default:n=e}return`${n}/JsCore/9.9.3/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,s)=>{try{n(e(t))}catch(e){s(e)}}));n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ft(this),this.idTokenSubscription=new Ft(this),this.beforeStateQueue=new Pt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ue,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=We(t)),this._initializationPromise=this.queue((async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await Tt.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(s=this.currentUser)||void 0===s?void 0:s.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==s?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==i||!(null==o?void 0:o.user)||(s=o.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(e){s=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await gt(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?U(e):null;return t&&$e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(We(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new k("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&We(e)||this._popupRedirectResolver;$e(t,this,"argument-error"),this.redirectPersistenceManager=await Tt.create(this,[We(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return $e(i,this,"internal-error"),i.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Ut(e){return U(e)}class Ft{constructor(e){this.auth=e,this.observer=null,this.addObserver=M((e=>this.observer=e))}get next(){return $e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ke("not implemented")}_getIdTokenResponse(e){return Ke("not implemented")}_linkToIdToken(e,t){return Ke("not implemented")}_getReauthenticationResolver(e){return Ke("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(e,t){return rt(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt extends Vt{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Bt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Bt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return ot(e,"POST","/v1/accounts:signInWithPassword",st(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return ot(e,"POST","/v1/accounts:signInWithEmailLink",st(e,t))}(e,{email:this._email,oobCode:this._password});default:je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return jt(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ot(e,"POST","/v1/accounts:signInWithEmailLink",st(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(e,t){return ot(e,"POST","/v1/accounts:signInWithIdp",st(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Vt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,r=Me(t,["providerId","signInMethod"]);if(!n||!s)return null;const i=new Ht(n,s);return i.idToken=r.idToken||void 0,i.accessToken=r.accessToken||void 0,i.secret=r.secret,i.nonce=r.nonce,i.pendingToken=r.pendingToken||null,i}_getIdTokenResponse(e){return qt(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,qt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qt(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=R(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt extends Vt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Kt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Kt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return ot(e,"POST","/v1/accounts:signInWithPhoneNumber",st(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await ot(e,"POST","/v1/accounts:signInWithPhoneNumber",st(e,t));if(n.temporaryProof)throw ut(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return ot(e,"POST","/v1/accounts:signInWithPhoneNumber",st(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),$t)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:s,temporaryProof:r}=e;return n||t||s||r?new Kt({verificationId:t,verificationCode:n,phoneNumber:s,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){var t,n,s,r,i,o;const a=O(L(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(s=a.mode)&&void 0!==s?s:null);$e(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(i=a.languageCode)&&void 0!==i?i:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=O(L(e)).link,n=t?O(L(t)).deep_link_id:null,s=O(L(e)).deep_link_id;return(s?O(L(s)).link:null)||s||n||t||e}(e);try{return new zt(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt{constructor(){this.providerId=Gt.PROVIDER_ID}static credential(e,t){return Bt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=zt.parseLink(t);return $e(n,"argument-error"),Bt._fromEmailAndCode(e,n.code,n.tenantId)}}Gt.PROVIDER_ID="password",Gt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Gt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Wt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends Qt{constructor(){super("facebook.com")}static credential(e){return Ht._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch(e){return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Xt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends Qt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ht._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Yt.credential(t,n)}catch(e){return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com",Yt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt extends Qt{constructor(){super("github.com")}static credential(e){return Ht._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch(e){return null}}}Jt.GITHUB_SIGN_IN_METHOD="github.com",Jt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt extends Qt{constructor(){super("twitter.com")}static credential(e,t){return Ht._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Zt.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function en(e,t){return ot(e,"POST","/v1/accounts:signUp",st(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt.TWITTER_SIGN_IN_METHOD="twitter.com",Zt.PROVIDER_ID="twitter.com";class tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const r=await wt._fromIdTokenResponse(e,n,s),i=nn(n);return new tn({user:r,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=nn(n);return new tn({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function nn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sn extends S{constructor(e,t,n,s){var r;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,sn.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new sn(e,t,n,s)}}function rn(e,t,n,s){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw sn._fromErrorAndOperation(e,n,t,s);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(e,t,n=!1){const s=await ft(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return tn._forOperation(e,"link",s)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function an(e,t,n=!1){var s;const{auth:r}=e,i="reauthenticate";try{const s=await ft(e,rn(r,i,t,e),n);$e(s.idToken,r,"internal-error");const o=dt(s.idToken);$e(o,r,"internal-error");const{sub:a}=o;return $e(e.uid===a,r,"user-mismatch"),tn._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null===(s=e)||void 0===s?void 0:s.code)&&je(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(e,t,n=!1){const s="signIn",r=await rn(e,s,t),i=await tn._fromIdTokenResponse(e,s,r);return n||await e._updateCurrentUser(i.user),i}async function un(e,t){return cn(Ut(e),t)}async function ln(e,t,n){const s=Ut(e),r=await en(s,{returnSecureToken:!0,email:t,password:n}),i=await tn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function hn(e,t,n){return un(U(e),Gt.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends dn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=w();return kt(e)||Ot(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Lt(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(n);if(e.newValue!==s)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const s=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);T()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fn.type="LOCAL";const pn=fn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends dn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}mn.type="SESSION";const gn=mn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new yn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:r}=t.data,i=this.handlersMap[s];if(!(null==i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const o=Array.from(i).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn.receivers=[];class wn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,i;return new Promise(((o,a)=>{const c=vn("",20);s.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:s,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function En(){return void 0!==bn().WorkerGlobalScope&&"function"==typeof bn().importScripts}class In{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Tn(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function _n(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new In(e).toPromise()}(),t(await _n()))}))}))}async function Sn(e,t,n){const s=Tn(e,!0).put({fbase_key:t,value:n});return new In(s).toPromise()}function kn(e,t){const n=Tn(e,!0).delete(t);return new In(n).toPromise()}class Cn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await _n()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return En()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yn._getInstance(En()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new wn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _n();return await Sn(e,"__sak","1"),await kn(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Sn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Tn(e,!1).get(t),s=await new In(n).toPromise();return void 0===s?null:s.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>kn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Tn(e,!1).getAll();return new In(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:s,value:r}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Cn.type="LOCAL";const An=Cn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(e){return new Promise(((t,n)=>{const s=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,i;s.setAttribute("src",e),s.onload=t,s.onerror=e=>{const t=Be("internal-error");t.customData=e,n(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(s)}))}function Nn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Nn("rcb"),new Je(3e4,6e4);async function Rn(e,t,n){var s;const r=await n.verify();try{let i;if($e("string"==typeof r,e,"argument-error"),$e("recaptcha"===n.type,e,"argument-error"),i="string"==typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){$e("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return rt(e,"POST","/v2/accounts/mfaEnrollment:start",st(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{$e("signin"===t.type,e,"internal-error");const n=(null===(s=i.multiFactorHint)||void 0===s?void 0:s.uid)||i.multiFactorUid;$e(n,e,"missing-multi-factor-info");const o=await function(e,t){return rt(e,"POST","/v2/accounts/mfaSignIn:start",st(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return rt(e,"POST","/v1/accounts:sendVerificationCode",st(e,t))}(e,{phoneNumber:i.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class On{constructor(e){this.providerId=On.PROVIDER_ID,this.auth=Ut(e)}verifyPhoneNumber(e,t){return Rn(this.auth,e,U(t))}static credential(e,t){return Kt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return On.credentialFromTaggedObject(t)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Kt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ln(e,t){return t?We(t):($e(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On.PROVIDER_ID="phone",On.PHONE_SIGN_IN_METHOD="phone";class Mn extends Vt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return qt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pn(e){return cn(e.auth,new Mn(e),e.bypassAuthState)}function xn(e){const{auth:t,user:n}=e;return $e(n,t,"internal-error"),an(n,new Mn(e),e.bypassAuthState)}async function Un(e){const{auth:t,user:n}=e;return $e(n,t,"internal-error"),on(n,new Mn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t,n,s,r=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:r,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pn;case"linkViaPopup":case"linkViaRedirect":return Un;case"reauthViaPopup":case"reauthViaRedirect":return xn;default:je(this.auth,"internal-error")}}resolve(e){ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new Je(2e3,1e4);class jn extends Fn{constructor(e,t,n,s,r){super(e,t,s,r),this.provider=n,this.authWindow=null,this.pollId=null,jn.currentPopupAction&&jn.currentPopupAction.cancel(),jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $e(e,this.auth,"internal-error"),e}async onExecution(){ze(1===this.filter.length,"Popup operations only handle one event");const e=vn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Be(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Vn.get())};e()}}jn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bn=new Map;class qn extends Fn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Bn.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Kn(t),s=$n(e);if(!await s._isAvailable())return!1;const r="true"===await s._get(n);return await s._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Bn.set(this.auth._key(),e)}return this.bypassAuthState||Bn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Hn(e,t){Bn.set(e._key(),t)}function $n(e){return We(e._redirectPersistence)}function Kn(e){return It("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(e,t,n=!1){const s=Ut(e),r=Ln(s,t),i=new qn(s,r,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}class Gn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Qn(e)){const s=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Be(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wn(e))}saveEventToCache(e){this.cachedEventUids.add(Wn(e)),this.lastProcessedEventTime=Date.now()}}function Wn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Qn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yn=/^https?/;async function Jn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return rt(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Zn(e))return}catch(e){}je(e,"unauthorized-domain")}function Zn(e){const t=Qe(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===s?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===s}if(!Yn.test(n))return!1;if(Xn.test(e))return s===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new Je(3e4,6e4);function ts(){const e=bn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let ns=null;function ss(e){return ns=ns||function(e){return new Promise(((t,n)=>{var s,r,i;function o(){ts(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ts(),n(Be(e,"network-request-failed"))},timeout:es.get()})}if(null===(r=null===(s=bn().gapi)||void 0===s?void 0:s.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=bn().gapi)||void 0===i?void 0:i.load)){const t=Nn("iframefcb");return bn()[t]=()=>{gapi.load?o():n(Be(e,"network-request-failed"))},Dn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw ns=null,e}))}(e),ns}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=new Je(5e3,15e3),is={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},os=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function as(e){const t=e.config;$e(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ze(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,s={apiKey:t.apiKey,appName:e.name,v:"9.9.3"},r=os.get(e.config.apiHost);r&&(s.eid=r);const i=e._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${R(s).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cs={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class us{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ls(e,t,n,s=500,r=600){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},cs),{width:s.toString(),height:r.toString(),top:i,left:o}),u=w().toLowerCase();n&&(a=Ct(u)?"_blank":n),St(u)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=w()){var t;return Ot(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new us(null);const h=window.open(t||"",a,l);$e(h,e,"popup-blocked");try{h.focus()}catch(e){}return new us(h)}function hs(e,t,n,s,r,i){$e(e.config.authDomain,e,"auth-domain-config-required"),$e(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:"9.9.3",eventId:r};if(t instanceof Wt){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",A(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(i||{}))o[e]=t}if(t instanceof Qt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Ze(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${R(a).slice(1)}`}const ds=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gn,this._completeRedirectFn=zn,this._overrideRedirectResult=Hn}async _openPopup(e,t,n,s){var r;ze(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return ls(e,hs(e,t,n,Qe(),s),vn())}async _openRedirect(e,t,n,s){var r;return await this._originValidation(e),r=hs(e,t,n,Qe(),s),bn().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(ze(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await ss(e),n=bn().gapi;return $e(n,e,"internal-error"),t.open({where:document.body,url:as(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:is,dontclear:!0},(t=>new Promise((async(n,s)=>{await t.restyle({setHideOnLeave:!1});const r=Be(e,"network-request-failed"),i=bn().setTimeout((()=>{s(r)}),rs.get());function o(){bn().clearTimeout(i),n(t)}t.ping(o).then(o,(()=>{s(r)}))}))))}(e),n=new Gn(e);return t.register("authEvent",(t=>{$e(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var s;const r=null===(s=null==n?void 0:n[0])||void 0===s?void 0:s.webStorageSupport;void 0!==r&&t(!!r),je(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Jn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Lt()||kt()||Ot()}};var fs;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ps{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fs="Browser",ve(new F("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:i}=n.options;return((e,n)=>{$e(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),$e(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const s={apiKey:r,authDomain:i,clientPlatform:fs,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mt(fs)},o=new xt(e,n,s);return function(e,t){const n=(null==t?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(We);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,s)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),ve(new F("auth-internal",(e=>(e=>new ps(e))(Ut(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),_e("@firebase/auth","0.20.5",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(fs)),_e("@firebase/auth","0.20.5","esm2017");var ms,gs="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},ys={},vs=vs||{},ws=gs||self;function bs(){}function Es(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Is(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Ts="closure_uid_"+(1e9*Math.random()>>>0),_s=0;function Ss(e,t,n){return e.call.apply(e.bind,arguments)}function ks(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Cs(e,t,n){return(Cs=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ss:ks).apply(null,arguments)}function As(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Ds(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return t.prototype[n].apply(e,r)}}function Ns(){this.s=this.s,this.o=this.o}var Rs={};Ns.prototype.s=!1,Ns.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,Ts)&&e[Ts]||(e[Ts]=++_s)}(this);delete Rs[e]}},Ns.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Os=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Ls=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,r="string"==typeof e?e.split(""):e;for(let i=0;i<s;i++)i in r&&t.call(n,r[i],i,e)};function Ms(e){return Array.prototype.concat.apply([],arguments)}function Ps(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function xs(e){return/^[\s\xa0]*$/.test(e)}var Us,Fs=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Vs(e,t){return-1!=e.indexOf(t)}function js(e,t){return e<t?-1:e>t?1:0}e:{var Bs=ws.navigator;if(Bs){var qs=Bs.userAgent;if(qs){Us=qs;break e}}Us=""}function Hs(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function $s(e){const t={};for(const n in e)t[n]=e[n];return t}var Ks="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zs(e,t){let n,s;for(let t=1;t<arguments.length;t++){for(n in s=arguments[t],s)e[n]=s[n];for(let t=0;t<Ks.length;t++)n=Ks[t],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Gs(e){return Gs[" "](e),e}Gs[" "]=bs;var Ws,Qs,Xs=Vs(Us,"Opera"),Ys=Vs(Us,"Trident")||Vs(Us,"MSIE"),Js=Vs(Us,"Edge"),Zs=Js||Ys,er=Vs(Us,"Gecko")&&!(Vs(Us.toLowerCase(),"webkit")&&!Vs(Us,"Edge"))&&!(Vs(Us,"Trident")||Vs(Us,"MSIE"))&&!Vs(Us,"Edge"),tr=Vs(Us.toLowerCase(),"webkit")&&!Vs(Us,"Edge");function nr(){var e=ws.document;return e?e.documentMode:void 0}e:{var sr="",rr=(Qs=Us,er?/rv:([^\);]+)(\)|;)/.exec(Qs):Js?/Edge\/([\d\.]+)/.exec(Qs):Ys?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Qs):tr?/WebKit\/(\S+)/.exec(Qs):Xs?/(?:Version)[ \/]?(\S+)/.exec(Qs):void 0);if(rr&&(sr=rr?rr[1]:""),Ys){var ir=nr();if(null!=ir&&ir>parseFloat(sr)){Ws=String(ir);break e}}Ws=sr}var or,ar={};function cr(){return function(e){var t=ar;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=Fs(String(Ws)).split("."),n=Fs("9").split("."),s=Math.max(t.length,n.length);for(let o=0;0==e&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==r[0].length&&0==i[0].length)break;e=js(0==r[1].length?0:parseInt(r[1],10),0==i[1].length?0:parseInt(i[1],10))||js(0==r[2].length,0==i[2].length)||js(r[2],i[2]),r=r[3],i=i[3]}while(0==e)}return 0<=e}))}if(ws.document&&Ys){var ur=nr();or=ur||(parseInt(Ws,10)||void 0)}else or=void 0;var lr=or,hr=function(){if(!ws.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{ws.addEventListener("test",bs,t),ws.removeEventListener("test",bs,t)}catch(e){}return e}();function dr(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function fr(e,t){if(dr.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(er){e:{try{Gs(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:pr[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&fr.Z.h.call(this)}}dr.prototype.h=function(){this.defaultPrevented=!0},Ds(fr,dr);var pr={2:"touch",3:"pen",4:"mouse"};fr.prototype.h=function(){fr.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var mr="closure_listenable_"+(1e6*Math.random()|0),gr=0;function yr(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=r,this.key=++gr,this.ca=this.fa=!1}function vr(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function wr(e){this.src=e,this.g={},this.h=0}function br(e,t){var n=t.type;if(n in e.g){var s,r=e.g[n],i=Os(r,t);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(vr(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Er(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==s)return r}return-1}wr.prototype.add=function(e,t,n,s,r){var i=e.toString();(e=this.g[i])||(e=this.g[i]=[],this.h++);var o=Er(e,t,s,r);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new yr(t,this.src,i,!!s,r)).fa=n,e.push(t)),t};var Ir="closure_lm_"+(1e6*Math.random()|0),Tr={};function _r(e,t,n,s,r){if(s&&s.once)return kr(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)_r(e,t[i],n,s,r);return null}return n=Lr(n),e&&e[mr]?e.N(t,n,Is(s)?!!s.capture:!!s,r):Sr(e,t,n,!1,s,r)}function Sr(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=Is(r)?!!r.capture:!!r,a=Rr(e);if(a||(e[Ir]=a=new wr(e)),(n=a.add(t,n,s,o,i)).proxy)return n;if(s=function(){function e(n){return t.call(e.src,e.listener,n)}var t=Nr;return e}(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)hr||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Dr(t.toString()),s);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(s)}return n}function kr(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)kr(e,t[i],n,s,r);return null}return n=Lr(n),e&&e[mr]?e.O(t,n,Is(s)?!!s.capture:!!s,r):Sr(e,t,n,!0,s,r)}function Cr(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Cr(e,t[i],n,s,r);else s=Is(s)?!!s.capture:!!s,n=Lr(n),e&&e[mr]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Er(i=e.g[t],n,s,r))&&(vr(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=Rr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Er(t,n,s,r)),(n=-1<e?t[e]:null)&&Ar(n))}function Ar(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[mr])br(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Dr(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Rr(t))?(br(n,e),0==n.h&&(n.src=null,t[Ir]=null)):vr(e)}}}function Dr(e){return e in Tr?Tr[e]:Tr[e]="on"+e}function Nr(e,t){if(e.ca)e=!0;else{t=new fr(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&Ar(e),e=n.call(s,t)}return e}function Rr(e){return(e=e[Ir])instanceof wr?e:null}var Or="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lr(e){return"function"==typeof e?e:(e[Or]||(e[Or]=function(t){return e.handleEvent(t)}),e[Or])}function Mr(){Ns.call(this),this.i=new wr(this),this.P=this,this.I=null}function Pr(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,"string"==typeof t)t=new dr(t,e);else if(t instanceof dr)t.target=t.target||e;else{var r=t;zs(t=new dr(s,e),r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=xr(o,s,!0,t)&&r}if(r=xr(o=t.g=e,s,!0,t)&&r,r=xr(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)r=xr(o=t.g=n[i],s,!1,t)&&r}function xr(e,t,n,s){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&br(e.i,o),r=!1!==a.call(c,s)&&r}}return r&&!s.defaultPrevented}Ds(Mr,Ns),Mr.prototype[mr]=!0,Mr.prototype.removeEventListener=function(e,t,n,s){Cr(this,e,t,n,s)},Mr.prototype.M=function(){if(Mr.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)vr(n[s]);delete t.g[e],t.h--}}this.I=null},Mr.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)},Mr.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};var Ur=ws.JSON.stringify;function Fr(){var e=Kr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Vr,jr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Br),(e=>e.reset()));class Br{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function qr(e){ws.setTimeout((()=>{throw e}),0)}function Hr(e,t){Vr||function(){var e=ws.Promise.resolve(void 0);Vr=function(){e.then(zr)}}(),$r||(Vr(),$r=!0),Kr.add(e,t)}var $r=!1,Kr=new class{constructor(){this.h=this.g=null}add(e,t){const n=jr.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function zr(){for(var e;e=Fr();){try{e.h.call(e.g)}catch(e){qr(e)}var t=jr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}$r=!1}function Gr(e,t){Mr.call(this),this.h=e||1,this.g=t||ws,this.j=Cs(this.kb,this),this.l=Date.now()}function Wr(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Qr(e,t,n){if("function"==typeof e)n&&(e=Cs(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Cs(e.handleEvent,e)}return 2147483647<Number(t)?-1:ws.setTimeout(e,t||0)}function Xr(e){e.g=Qr((()=>{e.g=null,e.i&&(e.i=!1,Xr(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Ds(Gr,Mr),(ms=Gr.prototype).da=!1,ms.S=null,ms.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Pr(this,"tick"),this.da&&(Wr(this),this.start()))}},ms.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ms.M=function(){Gr.Z.M.call(this),Wr(this),delete this.g};class Yr extends Ns{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Xr(this)}M(){super.M(),this.g&&(ws.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jr(e){Ns.call(this),this.h=e,this.g={}}Ds(Jr,Ns);var Zr=[];function ei(e,t,n,s){Array.isArray(n)||(n&&(Zr[0]=n.toString()),n=Zr);for(var r=0;r<n.length;r++){var i=_r(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function ti(e){Hs(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Ar(e)}),e),e.g={}}function ni(){this.g=!0}function si(e,t,n,s){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return Ur(n)}catch(e){return t}}(e,n)+(s?" "+s:"")}))}Jr.prototype.M=function(){Jr.Z.M.call(this),ti(this)},Jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ni.prototype.Aa=function(){this.g=!1},ni.prototype.info=function(){};var ri={},ii=null;function oi(){return ii=ii||new Mr}function ai(e){dr.call(this,ri.Ma,e)}function ci(e){const t=oi();Pr(t,new ai(t,e))}function ui(e,t){dr.call(this,ri.STAT_EVENT,e),this.stat=t}function li(e){const t=oi();Pr(t,new ui(t,e))}function hi(e,t){dr.call(this,ri.Na,e),this.size=t}function di(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return ws.setTimeout((function(){e()}),t)}ri.Ma="serverreachability",Ds(ai,dr),ri.STAT_EVENT="statevent",Ds(ui,dr),ri.Na="timingevent",Ds(hi,dr);var fi={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},pi={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function mi(){}function gi(e){return e.h||(e.h=e.i())}function yi(){}mi.prototype.h=null;var vi,wi={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function bi(){dr.call(this,"d")}function Ei(){dr.call(this,"c")}function Ii(){}function Ti(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new Jr(this),this.P=Si,e=Zs?125:void 0,this.W=new Gr(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new _i}function _i(){this.i=null,this.g="",this.h=!1}Ds(bi,dr),Ds(Ei,dr),Ds(Ii,mi),Ii.prototype.g=function(){return new XMLHttpRequest},Ii.prototype.i=function(){return{}},vi=new Ii;var Si=45e3,ki={},Ci={};function Ai(e,t,n){e.K=1,e.v=Yi(Ki(t)),e.s=n,e.U=!0,Di(e,null)}function Di(e,t){e.F=Date.now(),Li(e),e.A=Ki(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),lo(n.h,"t",s),e.C=0,n=e.l.H,e.h=new _i,e.g=ha(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Yr(Cs(e.Ia,e,e.g),e.O)),ei(e.V,e.g,"readystatechange",e.gb),t=e.H?$s(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ci(1),function(e,t,n,s,r,i){e.info((function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function Ni(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Ri(e,t,n){let s,r=!0;for(;!e.I&&e.C<n.length;){if(s=Oi(e,n),s==Ci){4==t&&(e.o=4,li(14),r=!1),si(e.j,e.m,null,"[Incomplete Response]");break}if(s==ki){e.o=4,li(15),si(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}si(e.j,e.m,s,null),Fi(e,s)}Ni(e)&&s!=Ci&&s!=ki&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,li(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),sa(t),t.L=!0,li(11))):(si(e.j,e.m,n,"[Invalid Chunked Response]"),Ui(e),xi(e))}function Oi(e,t){var n=e.C,s=t.indexOf("\n",n);return-1==s?Ci:(n=Number(t.substring(n,s)),isNaN(n)?ki:(s+=1)+n>t.length?Ci:(t=t.substr(s,n),e.C=s+n,t))}function Li(e){e.Y=Date.now()+e.P,Mi(e,e.P)}function Mi(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=di(Cs(e.eb,e),t)}function Pi(e){e.B&&(ws.clearTimeout(e.B),e.B=null)}function xi(e){0==e.l.G||e.I||oa(e.l,e)}function Ui(e){Pi(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Wr(e.W),ti(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Fi(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||yo(n.i,e)))if(n.I=e.N,!e.J&&yo(n.i,e)&&3==n.G){try{var s=n.Ca.g.parse(t)}catch(e){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;ia(n),Wo(n)}na(n),li(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=di(Cs(n.ab,n),6e3));if(1>=go(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else ca(n,11)}else if((e.J||n.g==e)&&ia(n),!xs(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const r=u[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(s=1.5*l,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=s.i;!i.g&&(Vs(e,"spdy")||Vs(e,"quic")||Vs(e,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(vo(i,i.h),i.h=null))}if(s.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(s.sa=e,Xi(s.F,s.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((s=n).oa=la(s,s.H?s.la:null,s.W),o.J){wo(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Pi(a),Li(a)),s.g=o}else ta(s);0<n.l.length&&Yo(n)}else"stop"!=u[0]&&"close"!=u[0]||ca(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ca(n,7):Go(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ci(4)}catch(e){}}function Vi(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Es(e)||"string"==typeof e)Ls(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(Es(e)||"string"==typeof e){n=[];for(var s=e.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,e)n[s++]=r;s=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(Es(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}for(s in t=[],n=0,e)t[n++]=e[s];return t}(e),r=s.length;for(var i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}}function ji(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof ji)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}function Bi(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];qi(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)qi(r,s=e.g[t])||(e.g[n++]=s,r[s]=1),t++;e.g.length=n}}function qi(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(ms=Ti.prototype).setTimeout=function(e){this.P=e},ms.gb=function(e){e=e.target;const t=this.L;t&&3==qo(e)?t.l():this.Ia(e)},ms.Ia=function(e){try{if(e==this.g)e:{const l=qo(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>l)&&(3!=l||Zs||this.g&&(this.h.h||this.g.ga()||Ho(this.g)))){this.I||4!=l||7==t||ci(8==t||0>=h?3:2),Pi(this);var n=this.g.ba();this.N=n;t:if(Ni(this)){var s=Ho(this.g);e="";var r=s.length,i=4==qo(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ui(this),xi(this);var o="";break t}this.h.i=new ws.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,s,r,i,o){e.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+i+" "+o}))}(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xs(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,li(12),Ui(this),xi(this);break e}si(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fi(this,n)}this.U?(Ri(this,l,o),Zs&&this.i&&3==l&&(ei(this.V,this.W,"tick",this.fb),this.W.start())):(si(this.j,this.m,o,null),Fi(this,o)),4==l&&Ui(this),this.i&&!this.I&&(4==l?oa(this.l,this):(this.i=!1,Li(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,li(12)):(this.o=0,li(13)),Ui(this),xi(this)}}}catch(e){}},ms.fb=function(){if(this.g){var e=qo(this.g),t=this.g.ga();this.C<t.length&&(Pi(this),Ri(this,e,t),this.i&&4!=e&&Li(this))}},ms.cancel=function(){this.I=!0,Ui(this)},ms.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(ci(3),li(17)),Ui(this),this.o=2,xi(this)):Mi(this,this.Y-e)},(ms=ji.prototype).R=function(){Bi(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},ms.T=function(){return Bi(this),this.g.concat()},ms.get=function(e,t){return qi(this.h,e)?this.h[e]:t},ms.set=function(e,t){qi(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},ms.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);e.call(t,i,r,this)}};var Hi=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function $i(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof $i){this.g=void 0!==t?t:e.g,zi(this,e.j),this.s=e.s,Gi(this,e.i),Wi(this,e.m),this.l=e.l,t=e.h;var n=new oo;n.i=t.i,t.g&&(n.g=new ji(t.g),n.h=t.h),Qi(this,n),this.o=e.o}else e&&(n=String(e).match(Hi))?(this.g=!!t,zi(this,n[1]||"",!0),this.s=Ji(n[2]||""),Gi(this,n[3]||"",!0),Wi(this,n[4]),this.l=Ji(n[5]||"",!0),Qi(this,n[6]||"",!0),this.o=Ji(n[7]||"")):(this.g=!!t,this.h=new oo(null,this.g))}function Ki(e){return new $i(e)}function zi(e,t,n){e.j=n?Ji(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Gi(e,t,n){e.i=n?Ji(t,!0):t}function Wi(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Qi(e,t,n){t instanceof oo?(e.h=t,function(e,t){t&&!e.j&&(ao(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(co(this,t),lo(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=Zi(t,ro)),e.h=new oo(t,e.g))}function Xi(e,t,n){e.h.set(t,n)}function Yi(e){return Xi(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ji(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Zi(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,eo),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function eo(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}$i.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Zi(t,to,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Zi(t,to,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Zi(n,"/"==n.charAt(0)?so:no,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Zi(n,io)),e.join("")};var to=/[#\/\?@]/g,no=/[#\?:]/g,so=/[#\?]/g,ro=/[#\?@]/g,io=/#/g;function oo(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ao(e){e.g||(e.g=new ji,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function co(e,t){ao(e),t=ho(e,t),qi(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,qi((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Bi(e)))}function uo(e,t){return ao(e),t=ho(e,t),qi(e.g.h,t)}function lo(e,t,n){co(e,t),0<n.length&&(e.i=null,e.g.set(ho(e,t),Ps(n)),e.h+=n.length)}function ho(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(ms=oo.prototype).add=function(e,t){ao(this),this.i=null,e=ho(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},ms.forEach=function(e,t){ao(this),this.g.forEach((function(n,s){Ls(n,(function(n){e.call(t,n,s,this)}),this)}),this)},ms.T=function(){ao(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var r=e[s],i=0;i<r.length;i++)n.push(t[s]);return n},ms.R=function(e){ao(this);var t=[];if("string"==typeof e)uo(this,e)&&(t=Ms(t,this.g.get(ho(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Ms(t,e[n])}return t},ms.set=function(e,t){return ao(this),this.i=null,uo(this,e=ho(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},ms.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},ms.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;""!==s[i]&&(o+="="+encodeURIComponent(String(s[i]))),e.push(o)}}return this.i=e.join("&")};function fo(e){this.l=e||po,ws.PerformanceNavigationTiming?e=0<(e=ws.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(ws.g&&ws.g.Ea&&ws.g.Ea()&&ws.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var po=10;function mo(e){return!!e.h||!!e.g&&e.g.size>=e.j}function go(e){return e.h?1:e.g?e.g.size:0}function yo(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function vo(e,t){e.g?e.g.add(t):e.h=t}function wo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function bo(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ps(e.i)}function Eo(){}function Io(){this.g=new Eo}function To(e,t,n){const s=n||"";try{Vi(e,(function(e,n){let r=e;Is(e)&&(r=Ur(e)),t.push(s+n+"="+encodeURIComponent(r))}))}catch(e){throw t.push(s+"type="+encodeURIComponent("_badmap")),e}}function _o(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch(e){}}function So(e){this.l=e.$b||null,this.j=e.ib||!1}function ko(e,t){Mr.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Co,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}fo.prototype.cancel=function(){if(this.i=bo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Eo.prototype.stringify=function(e){return ws.JSON.stringify(e,void 0)},Eo.prototype.parse=function(e){return ws.JSON.parse(e,void 0)},Ds(So,mi),So.prototype.g=function(){return new ko(this.l,this.j)},So.prototype.i=function(e){return function(){return e}}({}),Ds(ko,Mr);var Co=0;function Ao(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Do(e){e.readyState=4,e.l=null,e.j=null,e.A=null,No(e)}function No(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(ms=ko.prototype).open=function(e,t){if(this.readyState!=Co)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,No(this)},ms.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||ws).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},ms.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Do(this)),this.readyState=Co},ms.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,No(this)),this.g&&(this.readyState=3,No(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==ws.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ao(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},ms.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Do(this):No(this),3==this.readyState&&Ao(this)}},ms.Ua=function(e){this.g&&(this.response=this.responseText=e,Do(this))},ms.Ta=function(e){this.g&&(this.response=e,Do(this))},ms.ha=function(){this.g&&Do(this)},ms.setRequestHeader=function(e,t){this.v.append(e,t)},ms.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},ms.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(ko.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Ro=ws.JSON.parse;function Oo(e){Mr.call(this),this.headers=new ji,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Lo,this.K=this.L=!1}Ds(Oo,Mr);var Lo="",Mo=/^https?$/i,Po=["POST","PUT"];function xo(e){return"content-type"==e.toLowerCase()}function Uo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Fo(e),jo(e)}function Fo(e){e.D||(e.D=!0,Pr(e,"complete"),Pr(e,"error"))}function Vo(e){if(e.h&&void 0!==vs&&(!e.C[1]||4!=qo(e)||2!=e.ba()))if(e.v&&4==qo(e))Qr(e.Fa,0,e);else if(Pr(e,"readystatechange"),4==qo(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===a){var r=String(e.H).match(Hi)[1]||null;if(!r&&ws.self&&ws.self.location){var i=ws.self.location.protocol;r=i.substr(0,i.length-1)}s=!Mo.test(r?r.toLowerCase():"")}n=s}if(n)Pr(e,"complete"),Pr(e,"success");else{e.m=6;try{var o=2<qo(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",Fo(e)}}finally{jo(e)}}}function jo(e,t){if(e.g){Bo(e);const n=e.g,s=e.C[0]?bs:null;e.g=null,e.C=null,t||Pr(e,"ready");try{n.onreadystatechange=s}catch(e){}}}function Bo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(ws.clearTimeout(e.A),e.A=null)}function qo(e){return e.g?e.g.readyState:0}function Ho(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Lo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function $o(e,t,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=function(e){let t="";return Hs(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Xi(e,t,n))}function Ko(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zo(e){this.za=0,this.l=[],this.h=new ni,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ko("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ko("baseRetryDelayMs",5e3,e),this.$a=Ko("retryDelaySeedMs",1e4,e),this.Ya=Ko("forwardChannelMaxRetries",2,e),this.ra=Ko("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new fo(e&&e.concurrentRequestLimit),this.Ca=new Io,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Go(e){if(Qo(e),3==e.G){var t=e.V++,n=Ki(e.F);Xi(n,"SID",e.J),Xi(n,"RID",t),Xi(n,"TYPE","terminate"),Zo(e,n),(t=new Ti(e,e.h,t,void 0)).K=2,t.v=Yi(Ki(n)),n=!1,ws.navigator&&ws.navigator.sendBeacon&&(n=ws.navigator.sendBeacon(t.v.toString(),"")),!n&&ws.Image&&((new Image).src=t.v,n=!0),n||(t.g=ha(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Li(t)}ua(e)}function Wo(e){e.g&&(sa(e),e.g.cancel(),e.g=null)}function Qo(e){Wo(e),e.u&&(ws.clearTimeout(e.u),e.u=null),ia(e),e.i.cancel(),e.m&&("number"==typeof e.m&&ws.clearTimeout(e.m),e.m=null)}function Xo(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&Yo(e)}function Yo(e){mo(e.i)||e.m||(e.m=!0,Hr(e.Ha,e),e.C=0)}function Jo(e,t){var n;n=t?t.m:e.V++;const s=Ki(e.F);Xi(s,"SID",e.J),Xi(s,"RID",n),Xi(s,"AID",e.U),Zo(e,s),e.o&&e.s&&$o(s,e.o,e.s),n=new Ti(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=ea(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),vo(e.i,n),Ai(n,s,t)}function Zo(e,t){e.j&&Vi({},(function(e,n){Xi(t,n,e)}))}function ea(e,t,n){n=Math.min(e.l.length,n);var s=e.j?Cs(e.j.Oa,e.j,e):null;e:{var r=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=t,0>n)t=Math.max(0,r[o].h-100),i=!1;else try{To(a,e,"req"+n+"_")}catch(e){s&&s(a)}}if(i){s=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,s}function ta(e){e.g||e.u||(e.Y=1,Hr(e.Ga,e),e.A=0)}function na(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=di(Cs(e.Ga,e),aa(e,e.A)),e.A++,!0)}function sa(e){null!=e.B&&(ws.clearTimeout(e.B),e.B=null)}function ra(e){e.g=new Ti(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Ki(e.oa);Xi(t,"RID","rpc"),Xi(t,"SID",e.J),Xi(t,"CI",e.N?"0":"1"),Xi(t,"AID",e.U),Zo(e,t),Xi(t,"TYPE","xmlhttp"),e.o&&e.s&&$o(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Yi(Ki(t)),n.s=null,n.U=!0,Di(n,e)}function ia(e){null!=e.v&&(ws.clearTimeout(e.v),e.v=null)}function oa(e,t){var n=null;if(e.g==t){ia(e),sa(e),e.g=null;var s=2}else{if(!yo(e.i,t))return;n=t.D,wo(e.i,t),s=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==s){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;Pr(s=oi(),new hi(s,n,t,r)),Yo(e)}else ta(e);else if(3==(r=t.o)||0==r&&0<e.I||!(1==s&&function(e,t){return!(go(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=di(Cs(e.Ha,e,t),aa(e,e.C)),e.C++,0)))}(e,t)||2==s&&na(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:ca(e,5);break;case 4:ca(e,10);break;case 3:ca(e,6);break;default:ca(e,2)}}function aa(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function ca(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var s=Cs(e.jb,e);n||(n=new $i("//www.google.com/images/cleardot.gif"),ws.location&&"http"==ws.location.protocol||zi(n,"https"),Yi(n)),function(e,t){const n=new ni;if(ws.Image){const s=new Image;s.onload=As(_o,n,s,"TestLoadImage: loaded",!0,t),s.onerror=As(_o,n,s,"TestLoadImage: error",!1,t),s.onabort=As(_o,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=As(_o,n,s,"TestLoadImage: timeout",!1,t),ws.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=e}else t(!1)}(n.toString(),s)}else li(2);e.G=0,e.j&&e.j.va(t),ua(e),Qo(e)}function ua(e){e.G=0,e.I=-1,e.j&&(0==bo(e.i).length&&0==e.l.length||(e.i.i.length=0,Ps(e.l),e.l.length=0),e.j.ua())}function la(e,t,n){let s=function(e){return e instanceof $i?Ki(e):new $i(e,void 0)}(n);if(""!=s.i)t&&Gi(s,t+"."+s.i),Wi(s,s.m);else{const e=ws.location;s=function(e,t,n,s){var r=new $i(null,void 0);return e&&zi(r,e),t&&Gi(r,t),n&&Wi(r,n),s&&(r.l=s),r}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&Hs(e.aa,(function(e,t){Xi(s,t,e)})),t=e.D,n=e.sa,t&&n&&Xi(s,t,n),Xi(s,"VER",e.ma),Zo(e,s),s}function ha(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new Oo(new So({ib:!0})):new Oo(e.qa)).L=e.H,t}function da(){}function fa(){if(Ys&&!(10<=Number(lr)))throw Error("Environmental error: no available transport.")}function pa(e,t){Mr.call(this),this.g=new zo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!xs(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!xs(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new ya(this)}function ma(e){bi.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ga(){Ei.call(this),this.status=1}function ya(e){this.g=e}(ms=Oo.prototype).ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():vi.g(),this.C=this.u?gi(this.u):gi(vi),this.g.onreadystatechange=Cs(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void Uo(this,e)}e=n||"";const r=new ji(this.headers);s&&Vi(s,(function(e,t){r.set(t,e)})),s=function(e){e:{var t=xo;const n=e.length,s="string"==typeof e?e.split(""):e;for(let r=0;r<n;r++)if(r in s&&t.call(void 0,s[r],r,e)){t=r;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(r.T()),n=ws.FormData&&e instanceof ws.FormData,!(0<=Os(Po,t))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Bo(this),0<this.B&&((this.K=function(e){return Ys&&cr()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Cs(this.pa,this)):this.A=Qr(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Uo(this,e)}},ms.pa=function(){void 0!==vs&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pr(this,"timeout"),this.abort(8))},ms.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Pr(this,"complete"),Pr(this,"abort"),jo(this))},ms.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jo(this,!0)),Oo.Z.M.call(this)},ms.Fa=function(){this.s||(this.F||this.v||this.l?Vo(this):this.cb())},ms.cb=function(){Vo(this)},ms.ba=function(){try{return 2<qo(this)?this.g.status:-1}catch(e){return-1}},ms.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},ms.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Ro(t)}},ms.Da=function(){return this.m},ms.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(ms=zo.prototype).ma=8,ms.G=1,ms.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},ms.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new Ti(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=$s(i),zs(i,this.P)):i=this.P),null===this.o&&(r.H=i),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var s=this.l[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(t+=s)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=ea(this,r,t),Xi(n=Ki(this.F),"RID",e),Xi(n,"CVER",22),this.D&&Xi(n,"X-HTTP-Session-Id",this.D),Zo(this,n),this.o&&i&&$o(n,this.o,i),vo(this.i,r),this.Ra&&Xi(n,"TYPE","init"),this.ja?(Xi(n,"$req",t),Xi(n,"SID","null"),r.$=!0,Ai(r,n,null)):Ai(r,n,t),this.G=2}}else 3==this.G&&(e?Jo(this,e):0==this.l.length||mo(this.i)||Jo(this))},ms.Ga=function(){if(this.u=null,ra(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=di(Cs(this.bb,this),e)}},ms.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,li(10),Wo(this),ra(this))},ms.ab=function(){null!=this.v&&(this.v=null,Wo(this),na(this),li(19))},ms.jb=function(e){e?(this.h.info("Successfully pinged google.com"),li(2)):(this.h.info("Failed to ping google.com"),li(1))},(ms=da.prototype).xa=function(){},ms.wa=function(){},ms.va=function(){},ms.ua=function(){},ms.Oa=function(){},fa.prototype.g=function(e,t){return new pa(e,t)},Ds(pa,Mr),pa.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Hr(Cs(e.hb,e,t))),li(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=la(e,null,e.W),Yo(e)},pa.prototype.close=function(){Go(this.g)},pa.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Xo(this.g,t)}else this.v?((t={}).__data__=Ur(e),Xo(this.g,t)):Xo(this.g,e)},pa.prototype.M=function(){this.g.j=null,delete this.j,Go(this.g),delete this.g,pa.Z.M.call(this)},Ds(ma,bi),Ds(ga,Ei),Ds(ya,da),ya.prototype.xa=function(){Pr(this.g,"a")},ya.prototype.wa=function(e){Pr(this.g,new ma(e))},ya.prototype.va=function(e){Pr(this.g,new ga(e))},ya.prototype.ua=function(){Pr(this.g,"b")},fa.prototype.createWebChannel=fa.prototype.g,pa.prototype.send=pa.prototype.u,pa.prototype.open=pa.prototype.m,pa.prototype.close=pa.prototype.close,fi.NO_ERROR=0,fi.TIMEOUT=8,fi.HTTP_ERROR=6,pi.COMPLETE="complete",yi.EventType=wi,wi.OPEN="a",wi.CLOSE="b",wi.ERROR="c",wi.MESSAGE="d",Mr.prototype.listen=Mr.prototype.N,Oo.prototype.listenOnce=Oo.prototype.O,Oo.prototype.getLastError=Oo.prototype.La,Oo.prototype.getLastErrorCode=Oo.prototype.Da,Oo.prototype.getStatus=Oo.prototype.ba,Oo.prototype.getResponseJson=Oo.prototype.Qa,Oo.prototype.getResponseText=Oo.prototype.ga,Oo.prototype.send=Oo.prototype.ea;var va,wa,ba=ys.createWebChannelTransport=function(){return new fa},Ea=ys.getStatEventTarget=function(){return oi()},Ia=ys.ErrorCode=fi,Ta=ys.EventType=pi,_a=ys.Event=ri,Sa=ys.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ka=ys.FetchXmlHttpFactory=So,Ca=ys.WebChannel=yi,Aa=ys.XhrIo=Oo,Da={};function Na(){throw new Error("setTimeout has not been defined")}function Ra(){throw new Error("clearTimeout has not been defined")}function Oa(e){if(va===setTimeout)return setTimeout(e,0);if((va===Na||!va)&&setTimeout)return va=setTimeout,setTimeout(e,0);try{return va(e,0)}catch(t){try{return va.call(null,e,0)}catch(t){return va.call(this,e,0)}}}!function(){try{va="function"==typeof setTimeout?setTimeout:Na}catch(e){va=Na}try{wa="function"==typeof clearTimeout?clearTimeout:Ra}catch(e){wa=Ra}}();var La,Ma=[],Pa=!1,xa=-1;function Ua(){Pa&&La&&(Pa=!1,La.length?Ma=La.concat(Ma):xa=-1,Ma.length&&Fa())}function Fa(){if(!Pa){var e=Oa(Ua);Pa=!0;for(var t=Ma.length;t;){for(La=Ma,Ma=[];++xa<t;)La&&La[xa].run();xa=-1,t=Ma.length}La=null,Pa=!1,function(e){if(wa===clearTimeout)return clearTimeout(e);if((wa===Ra||!wa)&&clearTimeout)return wa=clearTimeout,clearTimeout(e);try{wa(e)}catch(t){try{return wa.call(null,e)}catch(t){return wa.call(this,e)}}}(e)}}function Va(e,t){this.fun=e,this.array=t}function ja(){}Da.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Ma.push(new Va(e,t)),1!==Ma.length||Pa||Oa(Fa)},Va.prototype.run=function(){this.fun.apply(null,this.array)},Da.title="browser",Da.browser=!0,Da.env={},Da.argv=[],Da.version="",Da.versions={},Da.on=ja,Da.addListener=ja,Da.once=ja,Da.off=ja,Da.removeListener=ja,Da.removeAllListeners=ja,Da.emit=ja,Da.prependListener=ja,Da.prependOnceListener=ja,Da.listeners=function(e){return[]},Da.binding=function(e){throw new Error("process.binding is not supported")},Da.cwd=function(){return"/"},Da.chdir=function(e){throw new Error("process.chdir is not supported")},Da.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ba.UNAUTHENTICATED=new Ba(null),Ba.GOOGLE_CREDENTIALS=new Ba("google-credentials-uid"),Ba.FIRST_PARTY=new Ba("first-party-uid"),Ba.MOCK_USER=new Ba("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let qa="9.9.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=new W("@firebase/firestore");function $a(){return Ha.logLevel}function Ka(e,...t){if(Ha.logLevel<=q.DEBUG){const n=t.map(Wa);Ha.debug(`Firestore (${qa}): ${e}`,...n)}}function za(e,...t){if(Ha.logLevel<=q.ERROR){const n=t.map(Wa);Ha.error(`Firestore (${qa}): ${e}`,...n)}}function Ga(e,...t){if(Ha.logLevel<=q.WARN){const n=t.map(Wa);Ha.warn(`Firestore (${qa}): ${e}`,...n)}}function Wa(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(e="Unexpected state"){const t=`FIRESTORE (${qa}) INTERNAL ASSERTION FAILED: `+e;throw za(t),new Error(t)}function Xa(e,t){e||Qa()}function Ya(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Za extends S{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ba.UNAUTHENTICATED)))}shutdown(){}}class sc{constructor(e){this.t=e,this.currentUser=Ba.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const s=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new ec;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ec,e.enqueueRetryable((()=>s(this.currentUser)))};const i=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await s(this.currentUser)}))},o=e=>{Ka("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Ka("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ec)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Ka("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Xa("string"==typeof t.accessToken),new tc(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Xa(null===e||"string"==typeof e),new Ba(e)}}class rc{constructor(e,t,n){this.type="FirstParty",this.user=Ba.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ic{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new rc(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Ba.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class oc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ac{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&Ka("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,Ka("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const s=e=>{Ka("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>s(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?s(e):Ka("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Xa("string"==typeof e.token),this.p=e.token,new oc(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cc(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const s=cc(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<t&&(n+=e.charAt(s[r]%e.length))}return n}}function lc(e,t){return e<t?-1:e>t?1:0}function hc(e,t,n){return e.length===t.length&&e.every(((e,s)=>n(e,t[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dc{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Za(Ja.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Za(Ja.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Za(Ja.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Za(Ja.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return dc.fromMillis(Date.now())}static fromDate(e){return dc.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new dc(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?lc(this.nanoseconds,e.nanoseconds):lc(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fc(e)}static min(){return new fc(new dc(0,0))}static max(){return new fc(new dc(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t,n){void 0===t?t=0:t>e.length&&Qa(),void 0===n?n=e.length-t:n>e.length-t&&Qa(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===pc.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof pc?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const n=e.get(s),r=t.get(s);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class mc extends pc{construct(e,t,n){return new mc(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Za(Ja.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new mc(t)}static emptyPath(){return new mc([])}}const gc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yc extends pc{construct(e,t,n){return new yc(e,t,n)}static isValidIdentifier(e){return gc.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yc.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new yc(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const r=()=>{if(0===n.length)throw new Za(Ja.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;s<e.length;){const t=e[s];if("\\"===t){if(s+1===e.length)throw new Za(Ja.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[s+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Za(Ja.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,s+=2}else"`"===t?(i=!i,s++):"."!==t||i?(n+=t,s++):(r(),s++)}if(r(),i)throw new Za(Ja.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yc(t)}static emptyPath(){return new yc([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e){this.path=e}static fromPath(e){return new vc(mc.fromString(e))}static fromName(e){return new vc(mc.fromString(e).popFirst(5))}static empty(){return new vc(mc.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===mc.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return mc.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new vc(new mc(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}wc.UNKNOWN_ID=-1;function bc(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=fc.fromTimestamp(1e9===s?new dc(n+1,0):new dc(n,s));return new Ic(r,vc.empty(),t)}function Ec(e){return new Ic(e.readTime,e.key,-1)}class Ic{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ic(fc.min(),vc.empty(),-1)}static max(){return new Ic(fc.max(),vc.empty(),-1)}}function Tc(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=vc.comparator(e.documentKey,t.documentKey),0!==n?n:lc(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Sc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kc(e){if(e.code!==Ja.FAILED_PRECONDITION||e.message!==_c)throw e;Ka("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Qa(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Cc(((n,s)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,s)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Cc?t:Cc.resolve(t)}catch(e){return Cc.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Cc.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Cc.reject(t)}static resolve(e){return new Cc(((t,n)=>{t(e)}))}static reject(e){return new Cc(((t,n)=>{n(e)}))}static waitFor(e){return new Cc(((t,n)=>{let s=0,r=0,i=!1;e.forEach((e=>{++s,e.next((()=>{++r,i&&r===s&&t()}),(e=>n(e)))})),i=!0,r===s&&t()}))}static or(e){let t=Cc.resolve(!1);for(const n of e)t=t.next((e=>e?Cc.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,s)=>{n.push(t.call(this,e,s))})),this.waitFor(n)}static mapArray(e,t){return new Cc(((n,s)=>{const r=e.length,i=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;t(e[c]).next((e=>{i[c]=e,++o,o===r&&n(i)}),(e=>s(e)))}}))}static doWhile(e,t){return new Cc(((n,s)=>{const r=()=>{!0===e()?t().next((()=>{r()}),s):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.it(e),this.rt=e=>t.writeSequenceNumber(e))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Rc(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Oc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dc.ot=-1;class Lc{constructor(e,t){this.comparator=e,this.root=t||Pc.EMPTY}insert(e,t){return new Lc(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pc.BLACK,null,null))}remove(e){return new Lc(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pc.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(0===s)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mc(this.root,e,this.comparator,!0)}}class Mc{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pc{constructor(e,t,n,s,r){this.key=e,this.value=t,this.color=null!=n?n:Pc.RED,this.left=null!=s?s:Pc.EMPTY,this.right=null!=r?r:Pc.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,r){return new Pc(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const r=n(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,n),null):0===r?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Pc.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===t(e,s.key)){if(s.right.isEmpty())return Pc.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pc.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Qa();if(this.right.isRed())throw Qa();const e=this.left.check();if(e!==this.right.check())throw Qa();return e+(this.isRed()?0:1)}}Pc.EMPTY=null,Pc.RED=!0,Pc.BLACK=!1,Pc.EMPTY=new class{constructor(){this.size=0}get key(){throw Qa()}get value(){throw Qa()}get color(){throw Qa()}get left(){throw Qa()}get right(){throw Qa()}copy(e,t,n,s,r){return this}insert(e,t,n){return new Pc(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xc{constructor(e){this.comparator=e,this.data=new Lc(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Uc(this.data.getIterator())}getIteratorFrom(e){return new Uc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof xc))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,s=n.getNext().key;if(0!==this.comparator(e,s))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new xc(this.comparator);return t.data=e,t}}class Uc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fc{constructor(e){this.fields=e,e.sort(yc.comparator)}static empty(){return new Fc([])}unionWith(e){let t=new xc(yc.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new Fc(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return hc(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vc{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Vc(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Vc(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return lc(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vc.EMPTY_BYTE_STRING=new Vc("");const jc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bc(e){if(Xa(!!e),"string"==typeof e){let t=0;const n=jc.exec(e);if(Xa(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:qc(e.seconds),nanos:qc(e.nanos)}}function qc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Hc(e){return"string"==typeof e?Vc.fromBase64String(e):Vc.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Kc(e){const t=e.mapValue.fields.__previous_value__;return $c(t)?Kc(t):t}function zc(e){const t=Bc(e.mapValue.fields.__local_write_time__.timestampValue);return new dc(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t,n,s,r,i,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Wc{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Wc("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Wc&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(e){return null==e}function Xc(e){return 0===e&&1/e==-1/0}function Yc(e){return"number"==typeof e&&Number.isInteger(e)&&!Xc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?$c(e)?4:du(e)?9007199254740991:10:Qa()}function eu(e,t){if(e===t)return!0;const n=Zc(e);if(n!==Zc(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return zc(e).isEqual(zc(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Bc(e.timestampValue),s=Bc(t.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Hc(e.bytesValue).isEqual(Hc(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return qc(e.geoPointValue.latitude)===qc(t.geoPointValue.latitude)&&qc(e.geoPointValue.longitude)===qc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return qc(e.integerValue)===qc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=qc(e.doubleValue),s=qc(t.doubleValue);return n===s?Xc(n)===Xc(s):isNaN(n)&&isNaN(s)}return!1}(e,t);case 9:return hc(e.arrayValue.values||[],t.arrayValue.values||[],eu);case 10:return function(e,t){const n=e.mapValue.fields||{},s=t.mapValue.fields||{};if(Nc(n)!==Nc(s))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===s[e]||!eu(n[e],s[e])))return!1;return!0}(e,t);default:return Qa()}}function tu(e,t){return void 0!==(e.values||[]).find((e=>eu(e,t)))}function nu(e,t){if(e===t)return 0;const n=Zc(e),s=Zc(t);if(n!==s)return lc(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return lc(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=qc(e.integerValue||e.doubleValue),s=qc(t.integerValue||t.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(e,t);case 3:return su(e.timestampValue,t.timestampValue);case 4:return su(zc(e),zc(t));case 5:return lc(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Hc(e),s=Hc(t);return n.compareTo(s)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),s=t.split("/");for(let e=0;e<n.length&&e<s.length;e++){const t=lc(n[e],s[e]);if(0!==t)return t}return lc(n.length,s.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=lc(qc(e.latitude),qc(t.latitude));return 0!==n?n:lc(qc(e.longitude),qc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],s=t.values||[];for(let e=0;e<n.length&&e<s.length;++e){const t=nu(n[e],s[e]);if(t)return t}return lc(n.length,s.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Jc.mapValue&&t===Jc.mapValue)return 0;if(e===Jc.mapValue)return 1;if(t===Jc.mapValue)return-1;const n=e.fields||{},s=Object.keys(n),r=t.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let e=0;e<s.length&&e<i.length;++e){const t=lc(s[e],i[e]);if(0!==t)return t;const o=nu(n[s[e]],r[i[e]]);if(0!==o)return o}return lc(s.length,i.length)}(e.mapValue,t.mapValue);default:throw Qa()}}function su(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return lc(e,t);const n=Bc(e),s=Bc(t),r=lc(n.seconds,s.seconds);return 0!==r?r:lc(n.nanos,s.nanos)}function ru(e){return iu(e)}function iu(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Bc(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Hc(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,vc.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const s of e.values||[])n?n=!1:t+=",",t+=iu(s);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",s=!0;for(const r of t)s?s=!1:n+=",",n+=`${r}:${iu(e.fields[r])}`;return n+"}"}(e.mapValue):Qa()}function ou(e){return!!e&&"integerValue"in e}function au(e){return!!e&&"arrayValue"in e}function cu(e){return!!e&&"nullValue"in e}function uu(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function lu(e){return!!e&&"mapValue"in e}function hu(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Rc(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=hu(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=hu(e.arrayValue.values[n]);return t}return Object.assign({},e)}function du(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fu{constructor(e){this.value=e}static empty(){return new fu({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!lu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=hu(t)}setAll(e){let t=yc.emptyPath(),n={},s=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,s),n={},s=[],t=r.popLast()}e?n[r.lastSegment()]=hu(e):s.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,s)}delete(e){const t=this.field(e.popLast());lu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eu(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];lu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Rc(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new fu(hu(this.value))}}function pu(e){const t=[];return Rc(e.fields,((e,n)=>{const s=new yc([e]);if(lu(n)){const e=pu(n.mapValue).fields;if(0===e.length)t.push(s);else for(const n of e)t.push(s.child(n))}else t.push(s)})),new Fc(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class mu{constructor(e,t,n,s,r,i){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.data=r,this.documentState=i}static newInvalidDocument(e){return new mu(e,0,fc.min(),fc.min(),fu.empty(),0)}static newFoundDocument(e,t,n){return new mu(e,1,t,fc.min(),n,0)}static newNoDocument(e,t){return new mu(e,2,t,fc.min(),fu.empty(),0)}static newUnknownDocument(e,t){return new mu(e,3,t,fc.min(),fu.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fu.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fu.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fc.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof mu&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mu(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,t=null,n=[],s=[],r=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.ut=null}}function yu(e,t=null,n=[],s=[],r=null,i=null,o=null){return new gu(e,t,n,s,r,i,o)}function vu(e){const t=Ya(e);if(null===t.ut){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{var t;return(t=e).field.canonicalString()+t.op.toString()+ru(t.value)})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Qc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>ru(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>ru(e))).join(",")),t.ut=e}return t.ut}function wu(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ou(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],s=t.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!eu(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Mu(e.startAt,t.startAt)&&Mu(e.endAt,t.endAt)}function bu(e){return vc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Eu extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.ct(e,t,n):new Iu(e,t,n):"array-contains"===t?new ku(e,n):"in"===t?new Cu(e,n):"not-in"===t?new Au(e,n):"array-contains-any"===t?new Du(e,n):new Eu(e,t,n)}static ct(e,t,n){return"in"===t?new Tu(e,n):new _u(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.at(nu(t,this.value)):null!==t&&Zc(this.value)===Zc(t)&&this.at(nu(t,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Qa()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Iu extends Eu{constructor(e,t,n){super(e,t,n),this.key=vc.fromName(n.referenceValue)}matches(e){const t=vc.comparator(e.key,this.key);return this.at(t)}}class Tu extends Eu{constructor(e,t){super(e,"in",t),this.keys=Su("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class _u extends Eu{constructor(e,t){super(e,"not-in",t),this.keys=Su("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Su(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>vc.fromName(e.referenceValue)))}class ku extends Eu{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return au(t)&&tu(t.arrayValue,this.value)}}class Cu extends Eu{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&tu(this.value.arrayValue,t)}}class Au extends Eu{constructor(e,t){super(e,"not-in",t)}matches(e){if(tu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!tu(this.value.arrayValue,t)}}class Du extends Eu{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!au(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>tu(this.value.arrayValue,e)))}}class Nu{constructor(e,t){this.position=e,this.inclusive=t}}class Ru{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ou(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Lu(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(s=i.field.isKeyField()?vc.comparator(vc.fromName(o.referenceValue),n.key):nu(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function Mu(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!eu(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,t=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function xu(e,t,n,s,r,i,o,a){return new Pu(e,t,n,s,r,i,o,a)}function Uu(e){return new Pu(e)}function Fu(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Vu(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ju(e){for(const t of e.filters)if(t.ht())return t.field;return null}function Bu(e){return null!==e.collectionGroup}function qu(e){const t=Ya(e);if(null===t.lt){t.lt=[];const e=ju(t),n=Vu(t);if(null!==e&&null===n)e.isKeyField()||t.lt.push(new Ru(e)),t.lt.push(new Ru(yc.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.lt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new Ru(yc.keyField(),e))}}}return t.lt}function Hu(e){const t=Ya(e);if(!t.ft)if("F"===t.limitType)t.ft=yu(t.path,t.collectionGroup,qu(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of qu(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Ru(n.field,t))}const n=t.endAt?new Nu(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Nu(t.startAt.position,t.startAt.inclusive):null;t.ft=yu(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}return t.ft}function $u(e,t,n){return new Pu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ku(e,t){return wu(Hu(e),Hu(t))&&e.limitType===t.limitType}function zu(e){return`${vu(Hu(e))}|lt:${e.limitType}`}function Gu(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{var t;return`${(t=e).field.canonicalString()} ${t.op} ${ru(t.value)}`})).join(", ")}]`),Qc(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>ru(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>ru(e))).join(",")),`Target(${t})`}(Hu(e))}; limitType=${e.limitType})`}function Wu(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):vc.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const s=Lu(e,t,n);return e.inclusive?s<=0:s<0}(e.startAt,qu(e),t))&&!(e.endAt&&!function(e,t,n){const s=Lu(e,t,n);return e.inclusive?s>=0:s>0}(e.endAt,qu(e),t))}(e,t)}function Qu(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Xu(e){return(t,n)=>{let s=!1;for(const r of qu(e)){const e=Yu(r,t,n);if(0!==e)return e;s=s||r.field.isKeyField()}return 0}}function Yu(e,t,n){const s=e.field.isKeyField()?vc.comparator(t.key,n.key):function(e,t,n){const s=t.data.field(e),r=n.data.field(e);return null!==s&&null!==r?nu(s,r):Qa()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return Qa()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xc(t)?"-0":t}}function Zu(e){return{integerValue:""+e}}function el(e,t){return Yc(t)?Zu(t):Ju(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this._=void 0}}function nl(e,t,n){return e instanceof il?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof ol?al(e,t):e instanceof cl?ul(e,t):function(e,t){const n=rl(e,t),s=hl(n)+hl(e._t);return ou(n)&&ou(e._t)?Zu(s):Ju(e.wt,s)}(e,t)}function sl(e,t,n){return e instanceof ol?al(e,t):e instanceof cl?ul(e,t):n}function rl(e,t){var n;return e instanceof ll?ou(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null}class il extends tl{}class ol extends tl{constructor(e){super(),this.elements=e}}function al(e,t){const n=dl(t);for(const t of e.elements)n.some((e=>eu(e,t)))||n.push(t);return{arrayValue:{values:n}}}class cl extends tl{constructor(e){super(),this.elements=e}}function ul(e,t){let n=dl(t);for(const t of e.elements)n=n.filter((e=>!eu(e,t)));return{arrayValue:{values:n}}}class ll extends tl{constructor(e,t){super(),this.wt=e,this._t=t}}function hl(e){return qc(e.integerValue||e.doubleValue)}function dl(e){return au(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,t){this.version=e,this.transformResults=t}}class pl{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pl}static exists(e){return new pl(void 0,e)}static updateTime(e){return new pl(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ml(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class gl{}function yl(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Cl(e.key,pl.none()):new Il(e.key,e.data,pl.none());{const n=e.data,s=fu.empty();let r=new xc(yc.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?s.delete(e):s.set(e,t),r=r.add(e)}return new Tl(e.key,s,new Fc(r.toArray()),pl.none())}}function vl(e,t,n){e instanceof Il?function(e,t,n){const s=e.value.clone(),r=Sl(e.fieldTransforms,t,n.transformResults);s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):e instanceof Tl?function(e,t,n){if(!ml(e.precondition,t))return void t.convertToUnknownDocument(n.version);const s=Sl(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(_l(e)),r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function wl(e,t,n,s){return e instanceof Il?function(e,t,n,s){if(!ml(e.precondition,t))return n;const r=e.value.clone(),i=kl(e.fieldTransforms,s,t);return r.setAll(i),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,s):e instanceof Tl?function(e,t,n,s){if(!ml(e.precondition,t))return n;const r=kl(e.fieldTransforms,s,t),i=t.data;return i.setAll(_l(e)),i.setAll(r),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,s):function(e,t,n){return ml(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function bl(e,t){let n=null;for(const s of e.fieldTransforms){const e=t.data.field(s.field),r=rl(s.transform,e||null);null!=r&&(null===n&&(n=fu.empty()),n.set(s.field,r))}return n||null}function El(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&hc(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof ol&&t instanceof ol||e instanceof cl&&t instanceof cl?hc(e.elements,t.elements,eu):e instanceof ll&&t instanceof ll?eu(e._t,t._t):e instanceof il&&t instanceof il}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Il extends gl{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Tl extends gl{constructor(e,t,n,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function _l(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}})),t}function Sl(e,t,n){const s=new Map;Xa(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,sl(o,a,n[r]))}return s}function kl(e,t,n){const s=new Map;for(const r of e){const e=r.transform,i=n.data.field(r.field);s.set(r.field,nl(e,i,t))}return s}class Cl extends gl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Al extends gl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nl,Rl;function Ol(e){switch(e){default:return Qa();case Ja.CANCELLED:case Ja.UNKNOWN:case Ja.DEADLINE_EXCEEDED:case Ja.RESOURCE_EXHAUSTED:case Ja.INTERNAL:case Ja.UNAVAILABLE:case Ja.UNAUTHENTICATED:return!1;case Ja.INVALID_ARGUMENT:case Ja.NOT_FOUND:case Ja.ALREADY_EXISTS:case Ja.PERMISSION_DENIED:case Ja.FAILED_PRECONDITION:case Ja.ABORTED:case Ja.OUT_OF_RANGE:case Ja.UNIMPLEMENTED:case Ja.DATA_LOSS:return!0}}function Ll(e){if(void 0===e)return za("GRPC error has no .code"),Ja.UNKNOWN;switch(e){case Nl.OK:return Ja.OK;case Nl.CANCELLED:return Ja.CANCELLED;case Nl.UNKNOWN:return Ja.UNKNOWN;case Nl.DEADLINE_EXCEEDED:return Ja.DEADLINE_EXCEEDED;case Nl.RESOURCE_EXHAUSTED:return Ja.RESOURCE_EXHAUSTED;case Nl.INTERNAL:return Ja.INTERNAL;case Nl.UNAVAILABLE:return Ja.UNAVAILABLE;case Nl.UNAUTHENTICATED:return Ja.UNAUTHENTICATED;case Nl.INVALID_ARGUMENT:return Ja.INVALID_ARGUMENT;case Nl.NOT_FOUND:return Ja.NOT_FOUND;case Nl.ALREADY_EXISTS:return Ja.ALREADY_EXISTS;case Nl.PERMISSION_DENIED:return Ja.PERMISSION_DENIED;case Nl.FAILED_PRECONDITION:return Ja.FAILED_PRECONDITION;case Nl.ABORTED:return Ja.ABORTED;case Nl.OUT_OF_RANGE:return Ja.OUT_OF_RANGE;case Nl.UNIMPLEMENTED:return Ja.UNIMPLEMENTED;case Nl.DATA_LOSS:return Ja.DATA_LOSS;default:return Qa()}}(Rl=Nl||(Nl={}))[Rl.OK=0]="OK",Rl[Rl.CANCELLED=1]="CANCELLED",Rl[Rl.UNKNOWN=2]="UNKNOWN",Rl[Rl.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Rl[Rl.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Rl[Rl.NOT_FOUND=5]="NOT_FOUND",Rl[Rl.ALREADY_EXISTS=6]="ALREADY_EXISTS",Rl[Rl.PERMISSION_DENIED=7]="PERMISSION_DENIED",Rl[Rl.UNAUTHENTICATED=16]="UNAUTHENTICATED",Rl[Rl.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Rl[Rl.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Rl[Rl.ABORTED=10]="ABORTED",Rl[Rl.OUT_OF_RANGE=11]="OUT_OF_RANGE",Rl[Rl.UNIMPLEMENTED=12]="UNIMPLEMENTED",Rl[Rl.INTERNAL=13]="INTERNAL",Rl[Rl.UNAVAILABLE=14]="UNAVAILABLE",Rl[Rl.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ml{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,s]of n)if(this.equalsFn(t,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(void 0===s)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],e))return void(s[n]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return 1===n.length?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rc(this.inner,((t,n)=>{for(const[t,s]of n)e(t,s)}))}isEmpty(){return Oc(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=new Lc(vc.comparator);function xl(){return Pl}const Ul=new Lc(vc.comparator);function Fl(...e){let t=Ul;for(const n of e)t=t.insert(n.key,n);return t}function Vl(e){let t=Ul;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function jl(){return ql()}function Bl(){return ql()}function ql(){return new Ml((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Hl=new Lc(vc.comparator),$l=new xc(vc.comparator);function Kl(...e){let t=$l;for(const n of e)t=t.add(n);return t}const zl=new xc(lc);function Gl(){return zl}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,t,n,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Ql.createSynthesizedTargetChangeForCurrentChange(e,t)),new Wl(fc.min(),n,Gl(),xl(),Kl())}}class Ql{constructor(e,t,n,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Ql(Vc.EMPTY_BYTE_STRING,t,Kl(),Kl(),Kl())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,t,n,s){this.gt=e,this.removedTargetIds=t,this.key=n,this.yt=s}}class Yl{constructor(e,t){this.targetId=e,this.It=t}}class Jl{constructor(e,t,n=Vc.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Zl{constructor(){this.Tt=0,this.Et=nh(),this.At=Vc.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=Kl(),t=Kl(),n=Kl();return this.Et.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:Qa()}})),new Ql(this.At,this.Rt,e,t,n)}Dt(){this.bt=!1,this.Et=nh()}Ct(e,t){this.bt=!0,this.Et=this.Et.insert(e,t)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class eh{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=xl(),this.Bt=th(),this.Lt=new xc(lc)}Ut(e){for(const t of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(t,e.yt):this.Kt(t,e.key,e.yt);for(const t of e.removedTargetIds)this.Kt(t,e.key,e.yt)}Gt(e){this.forEachTarget(e,(t=>{const n=this.Qt(t);switch(e.state){case 0:this.jt(t)&&n.Vt(e.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(e.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(t);break;case 3:this.jt(t)&&(n.Mt(),n.Vt(e.resumeToken));break;case 4:this.jt(t)&&(this.Wt(t),n.Vt(e.resumeToken));break;default:Qa()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ft.forEach(((e,n)=>{this.jt(n)&&t(n)}))}zt(e){const t=e.targetId,n=e.It.count,s=this.Ht(t);if(s){const e=s.target;if(bu(e))if(0===n){const n=new vc(e.path);this.Kt(t,n,mu.newNoDocument(n,fc.min()))}else Xa(1===n);else this.Jt(t)!==n&&(this.Wt(t),this.Lt=this.Lt.add(t))}}Yt(e){const t=new Map;this.Ft.forEach(((n,s)=>{const r=this.Ht(s);if(r){if(n.current&&bu(r.target)){const t=new vc(r.target.path);null!==this.$t.get(t)||this.Xt(s,t)||this.Kt(s,t,mu.newNoDocument(t,e))}n.vt&&(t.set(s,n.St()),n.Dt())}}));let n=Kl();this.Bt.forEach(((e,t)=>{let s=!0;t.forEachWhile((e=>{const t=this.Ht(e);return!t||2===t.purpose||(s=!1,!1)})),s&&(n=n.add(e))})),this.$t.forEach(((t,n)=>n.setReadTime(e)));const s=new Wl(e,t,this.Lt,this.$t,n);return this.$t=xl(),this.Bt=th(),this.Lt=new xc(lc),s}qt(e,t){if(!this.jt(e))return;const n=this.Xt(e,t.key)?2:0;this.Qt(e).Ct(t.key,n),this.$t=this.$t.insert(t.key,t),this.Bt=this.Bt.insert(t.key,this.Zt(t.key).add(e))}Kt(e,t,n){if(!this.jt(e))return;const s=this.Qt(e);this.Xt(e,t)?s.Ct(t,1):s.xt(t),this.Bt=this.Bt.insert(t,this.Zt(t).delete(e)),n&&(this.$t=this.$t.insert(t,n))}removeTarget(e){this.Ft.delete(e)}Jt(e){const t=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let t=this.Ft.get(e);return t||(t=new Zl,this.Ft.set(e,t)),t}Zt(e){let t=this.Bt.get(e);return t||(t=new xc(lc),this.Bt=this.Bt.insert(e,t)),t}jt(e){const t=null!==this.Ht(e);return t||Ka("WatchChangeAggregator","Detected inactive target",e),t}Ht(e){const t=this.Ft.get(e);return t&&t.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new Zl),this.Ot.getRemoteKeysForTarget(e).forEach((t=>{this.Kt(e,t,null)}))}Xt(e,t){return this.Ot.getRemoteKeysForTarget(e).has(t)}}function th(){return new Lc(vc.comparator)}function nh(){return new Lc(vc.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh={asc:"ASCENDING",desc:"DESCENDING"},rh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class ih{constructor(e,t){this.databaseId=e,this.dt=t}}function oh(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ah(e,t){return e.dt?t.toBase64():t.toUint8Array()}function ch(e,t){return oh(e,t.toTimestamp())}function uh(e){return Xa(!!e),fc.fromTimestamp(function(e){const t=Bc(e);return new dc(t.seconds,t.nanos)}(e))}function lh(e,t){return function(e){return new mc(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function hh(e){const t=mc.fromString(e);return Xa(Rh(t)),t}function dh(e,t){return lh(e.databaseId,t.path)}function fh(e,t){const n=hh(t);if(n.get(1)!==e.databaseId.projectId)throw new Za(Ja.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Za(Ja.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new vc(yh(n))}function ph(e,t){return lh(e.databaseId,t)}function mh(e){const t=hh(e);return 4===t.length?mc.emptyPath():yh(t)}function gh(e){return new mc(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function yh(e){return Xa(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function vh(e,t,n){return{name:dh(e,t),fields:n.value.mapValue.fields}}function wh(e,t){let n;if(t instanceof Il)n={update:vh(e,t.key,t.value)};else if(t instanceof Cl)n={delete:dh(e,t.key)};else if(t instanceof Tl)n={update:vh(e,t.key,t.data),updateMask:Nh(t.fieldMask)};else{if(!(t instanceof Al))return Qa();n={verify:dh(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof il)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ol)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof cl)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ll)return{fieldPath:t.field.canonicalString(),increment:n._t};throw Qa()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ch(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Qa()}(e,t.precondition)),n}function bh(e,t){return{documents:[ph(e,t.path)]}}function Eh(e,t){const n={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(n.parent=ph(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ph(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(uu(e.value))return{unaryFilter:{field:kh(e.field),op:"IS_NAN"}};if(cu(e.value))return{unaryFilter:{field:kh(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(uu(e.value))return{unaryFilter:{field:kh(e.field),op:"IS_NOT_NAN"}};if(cu(e.value))return{unaryFilter:{field:kh(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kh(e.field),op:Sh(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);r&&(n.structuredQuery.where=r);const i=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:kh(e.field),direction:_h(e.dir)}}(e)))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(e,t){return e.dt||Qc(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Ih(e){let t=mh(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Xa(1===s);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=Th(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Ru(Ch(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Qc(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Nu(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Nu(n,t)}(n.endAt)),xu(t,r,o,i,a,"F",c,u)}function Th(e){return e?void 0!==e.unaryFilter?[Dh(e)]:void 0!==e.fieldFilter?[Ah(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Th(e))).reduce(((e,t)=>e.concat(t))):Qa():[]}function _h(e){return sh[e]}function Sh(e){return rh[e]}function kh(e){return{fieldPath:e.canonicalString()}}function Ch(e){return yc.fromServerFormat(e.fieldPath)}function Ah(e){return Eu.create(Ch(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Qa()}}(e.fieldFilter.op),e.fieldFilter.value)}function Dh(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ch(e.unaryFilter.field);return Eu.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ch(e.unaryFilter.field);return Eu.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ch(e.unaryFilter.field);return Eu.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ch(e.unaryFilter.field);return Eu.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Qa()}}function Nh(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Rh(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Lh=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Mh=Lh;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ph{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const s=this.mutations[t];s.key.isEqual(e.key)&&vl(s,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=wl(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=wl(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Bl();return this.mutations.forEach((s=>{const r=e.get(s.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=t.has(s.key)?null:o;const a=yl(i,o);null!==a&&n.set(s.key,a),i.isValidDocument()||i.convertToNoDocument(fc.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Kl())}isEqual(e){return this.batchId===e.batchId&&hc(this.mutations,e.mutations,((e,t)=>El(e,t)))&&hc(this.baseMutations,e.baseMutations,((e,t)=>El(e,t)))}}class xh{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){Xa(e.mutations.length===n.length);let s=Hl;const r=e.mutations;for(let e=0;e<r.length;e++)s=s.insert(r[e].key,n[e].version);return new xh(e,t,n,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,t,n,s,r=fc.min(),i=fc.min(),o=Vc.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(e){return new Fh(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Fh(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Fh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e){this.ne=e}}function jh(e){const t=Ih({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?$u(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){}re(e,t){this.oe(e,t),t.ue()}oe(e,t){if("nullValue"in e)this.ce(t,5);else if("booleanValue"in e)this.ce(t,10),t.ae(e.booleanValue?1:0);else if("integerValue"in e)this.ce(t,15),t.ae(qc(e.integerValue));else if("doubleValue"in e){const n=qc(e.doubleValue);isNaN(n)?this.ce(t,13):(this.ce(t,15),Xc(n)?t.ae(0):t.ae(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ce(t,20),"string"==typeof n?t.he(n):(t.he(`${n.seconds||""}`),t.ae(n.nanos||0))}else if("stringValue"in e)this.le(e.stringValue,t),this.fe(t);else if("bytesValue"in e)this.ce(t,30),t.de(Hc(e.bytesValue)),this.fe(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ce(t,45),t.ae(n.latitude||0),t.ae(n.longitude||0)}else"mapValue"in e?du(e)?this.ce(t,Number.MAX_SAFE_INTEGER):(this.we(e.mapValue,t),this.fe(t)):"arrayValue"in e?(this.me(e.arrayValue,t),this.fe(t)):Qa()}le(e,t){this.ce(t,25),this.ge(e,t)}ge(e,t){t.he(e)}we(e,t){const n=e.fields||{};this.ce(t,55);for(const e of Object.keys(n))this.le(e,t),this.oe(n[e],t)}me(e,t){const n=e.values||[];this.ce(t,50);for(const e of n)this.oe(e,t)}_e(e,t){this.ce(t,37),vc.fromName(e).path.forEach((e=>{this.ce(t,60),this.ge(e,t)}))}ce(e,t){e.ae(t)}fe(e){e.ae(2)}}Bh.ye=new Bh;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qh{constructor(){this.ze=new Hh}addToCollectionParentIndex(e,t){return this.ze.add(t),Cc.resolve()}getCollectionParents(e,t){return Cc.resolve(this.ze.getEntries(t))}addFieldIndex(e,t){return Cc.resolve()}deleteFieldIndex(e,t){return Cc.resolve()}getDocumentsMatchingTarget(e,t){return Cc.resolve(null)}getIndexType(e,t){return Cc.resolve(0)}getFieldIndexes(e,t){return Cc.resolve([])}getNextCollectionGroupToUpdate(e){return Cc.resolve(null)}getMinOffset(e,t){return Cc.resolve(Ic.min())}getMinOffsetFromCollectionGroup(e,t){return Cc.resolve(Ic.min())}updateCollectionGroup(e,t,n){return Cc.resolve()}updateIndexEntries(e,t){return Cc.resolve()}}class Hh{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new xc(mc.comparator),r=!s.has(n);return this.index[t]=s.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new xc(mc.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class $h{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new $h(e,$h.DEFAULT_COLLECTION_PERCENTILE,$h.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$h.DEFAULT_COLLECTION_PERCENTILE=10,$h.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$h.DEFAULT=new $h(41943040,$h.DEFAULT_COLLECTION_PERCENTILE,$h.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$h.DISABLED=new $h(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kh{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Kh(0)}static Rn(){return new Kh(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zh{constructor(){this.changes=new Ml((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,mu.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Cc.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gh{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.getBaseDocument(e,t,n)))).next((e=>(null!==n&&wl(n.mutation,e,Fc.empty(),dc.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Kl()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Kl()){const s=jl();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((e=>{let t=Fl();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=jl();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Kl())))}populateOverlays(e,t,n){const s=[];return n.forEach((e=>{t.has(e)||s.push(e)})),this.documentOverlayCache.getOverlays(e,s).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,s){let r=xl();const i=ql(),o=ql();return t.forEach(((e,t)=>{const o=n.get(t.key);s.has(t.key)&&(void 0===o||o.mutation instanceof Tl)?r=r.insert(t.key,t):void 0!==o&&(i.set(t.key,o.mutation.getFieldMask()),wl(o.mutation,t,o.mutation.getFieldMask(),dc.now()))})),this.recalculateAndSaveOverlays(e,r).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Gh(t,null!==(n=i.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=ql();let s=new Lc(((e,t)=>e-t)),r=Kl();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const r of e)r.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||Fc.empty();o=r.applyToLocalView(i,o),n.set(e,o);const a=(s.get(r.batchId)||Kl()).add(e);s=s.insert(r.batchId,a)}))})).next((()=>{const i=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=Bl();c.forEach((e=>{if(!r.has(e)){const s=yl(t.get(e),n.get(e));null!==s&&u.set(e,s),r=r.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Cc.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return vc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Bu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((r=>{const i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-r.size):Cc.resolve(jl());let o=-1,a=r;return i.next((t=>Cc.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(t)?Cc.resolve():this.getBaseDocument(e,t,n).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,r))).next((()=>this.computeViews(e,a,t,Kl()))).next((e=>({batchId:o,changes:Vl(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new vc(t)).next((e=>{let t=Fl();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const s=t.collectionGroup;let r=Fl();return this.indexManager.getCollectionParents(e,s).next((i=>Cc.forEach(i,(i=>{const o=function(e,t){return new Pu(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,i.child(s));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{r=r.insert(e,t)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(e,t,n){let s;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((r=>(s=r,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===s.get(n)&&(s=s.insert(n,mu.newInvalidDocument(n)))}));let n=Fl();return s.forEach(((s,r)=>{const i=e.get(s);void 0!==i&&wl(i.mutation,r,Fc.empty(),dc.now()),Wu(t,r)&&(n=n.insert(s,r))})),n}))}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):Cc.resolve(mu.newInvalidDocument(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,t){return Cc.resolve(this.Jn.get(t))}saveBundleMetadata(e,t){var n;return this.Jn.set(t.id,{id:(n=t).id,version:n.version,createTime:uh(n.createTime)}),Cc.resolve()}getNamedQuery(e,t){return Cc.resolve(this.Yn.get(t))}saveNamedQuery(e,t){return this.Yn.set(t.name,function(e){return{name:e.name,query:jh(e.bundledQuery),readTime:uh(e.readTime)}}(t)),Cc.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(){this.overlays=new Lc(vc.comparator),this.Xn=new Map}getOverlay(e,t){return Cc.resolve(this.overlays.get(t))}getOverlays(e,t){const n=jl();return Cc.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,s)=>{this.ie(e,t,s)})),Cc.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Xn.get(n);return void 0!==s&&(s.forEach((e=>this.overlays=this.overlays.remove(e))),this.Xn.delete(n)),Cc.resolve()}getOverlaysForCollection(e,t,n){const s=jl(),r=t.length+1,i=new vc(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===r&&e.largestBatchId>n&&s.set(e.getKey(),e)}return Cc.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let r=new Lc(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=jl(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=jl(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=s)););return Cc.resolve(o)}ie(e,t,n){const s=this.overlays.get(n.key);if(null!==s){const e=this.Xn.get(s.largestBatchId).delete(n.key);this.Xn.set(s.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Uh(t,n));let r=this.Xn.get(t);void 0===r&&(r=Kl(),this.Xn.set(t,r)),this.Xn.set(t,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(){this.Zn=new xc(Jh.ts),this.es=new xc(Jh.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new Jh(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.rs(new Jh(e,t))}os(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new vc(new mc([])),n=new Jh(t,e),s=new Jh(t,e+1),r=[];return this.es.forEachInRange([n,s],(e=>{this.rs(e),r.push(e.key)})),r}cs(){this.Zn.forEach((e=>this.rs(e)))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new vc(new mc([])),n=new Jh(t,e),s=new Jh(t,e+1);let r=Kl();return this.es.forEachInRange([n,s],(e=>{r=r.add(e.key)})),r}containsKey(e){const t=new Jh(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Jh{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return vc.comparator(e.key,t.key)||lc(e.ls,t.ls)}static ns(e,t){return lc(e.ls,t.ls)||vc.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.fs=1,this.ds=new xc(Jh.ts)}checkEmpty(e){return Cc.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,s){const r=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Ph(r,t,n,s);this.mutationQueue.push(i);for(const t of s)this.ds=this.ds.add(new Jh(t.key,r)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Cc.resolve(i)}lookupMutationBatch(e,t){return Cc.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.ws(n),r=s<0?0:s;return Cc.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Cc.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(e){return Cc.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Jh(t,0),s=new Jh(t,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([n,s],(e=>{const t=this._s(e.ls);r.push(t)})),Cc.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new xc(lc);return t.forEach((e=>{const t=new Jh(e,0),s=new Jh(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,s],(e=>{n=n.add(e.ls)}))})),Cc.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let r=n;vc.isDocumentKey(r)||(r=r.child(""));const i=new Jh(new vc(r),0);let o=new xc(lc);return this.ds.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===s&&(o=o.add(e.ls)),!0)}),i),Cc.resolve(this.gs(o))}gs(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Xa(0===this.ys(t.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return Cc.forEach(t.mutations,(s=>{const r=new Jh(s.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.ds=n}))}In(e){}containsKey(e,t){const n=new Jh(t,0),s=this.ds.firstAfterOrEqual(n);return Cc.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Cc.resolve()}ys(e,t){return this.ws(e)}ws(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}_s(e){const t=this.ws(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e){this.ps=e,this.docs=new Lc(vc.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),r=s?s.size:0,i=this.ps(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Cc.resolve(n?n.document.mutableCopy():mu.newInvalidDocument(t))}getEntries(e,t){let n=xl();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():mu.newInvalidDocument(e))})),Cc.resolve(n)}getAllFromCollection(e,t,n){let s=xl();const r=new vc(t.child("")),i=this.docs.getIteratorFrom(r);for(;i.hasNext();){const{key:e,value:{document:r}}=i.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||Tc(Ec(r),n)<=0||(s=s.insert(r.key,r.mutableCopy()))}return Cc.resolve(s)}getAllFromCollectionGroup(e,t,n,s){Qa()}Is(e,t){return Cc.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new td(this)}getSize(e){return Cc.resolve(this.size)}}class td extends zh{constructor(e){super(),this.zn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.zn.addEntry(e,s)):this.zn.removeEntry(n)})),Cc.waitFor(t)}getFromCache(e,t){return this.zn.getEntry(e,t)}getAllFromCache(e,t){return this.zn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e){this.persistence=e,this.Ts=new Ml((e=>vu(e)),wu),this.lastRemoteSnapshotVersion=fc.min(),this.highestTargetId=0,this.Es=0,this.As=new Yh,this.targetCount=0,this.Rs=Kh.An()}forEachTarget(e,t){return this.Ts.forEach(((e,n)=>t(n))),Cc.resolve()}getLastRemoteSnapshotVersion(e){return Cc.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Cc.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),Cc.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Es&&(this.Es=t),Cc.resolve()}vn(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new Kh(t),this.highestTargetId=t),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,t){return this.vn(t),this.targetCount+=1,Cc.resolve()}updateTargetData(e,t){return this.vn(t),Cc.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.us(t.targetId),this.targetCount-=1,Cc.resolve()}removeTargets(e,t,n){let s=0;const r=[];return this.Ts.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Ts.delete(i),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),s++)})),Cc.waitFor(r).next((()=>s))}getTargetCount(e){return Cc.resolve(this.targetCount)}getTargetData(e,t){const n=this.Ts.get(t)||null;return Cc.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),Cc.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((t=>{r.push(s.markPotentiallyOrphaned(e,t))})),Cc.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.As.us(t),Cc.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return Cc.resolve(n)}containsKey(e,t){return Cc.resolve(this.As.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t){this.bs={},this.overlays={},this.Ps=new Dc(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new nd(this),this.indexManager=new qh,this.remoteDocumentCache=function(e){return new ed(e)}((e=>this.referenceDelegate.Ss(e))),this.wt=new Vh(t),this.Ds=new Qh(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Xh,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.bs[e.toKey()];return n||(n=new Zh(t,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,t,n){Ka("MemoryPersistence","Starting transaction:",e);const s=new rd(this.Ps.next());return this.referenceDelegate.Cs(),n(s).next((e=>this.referenceDelegate.xs(s).next((()=>e)))).toPromise().then((e=>(s.raiseOnCommittedEvent(),e)))}Ns(e,t){return Cc.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class rd extends Sc{constructor(e){super(),this.currentSequenceNumber=e}}class id{constructor(e){this.persistence=e,this.ks=new Yh,this.Ms=null}static Os(e){return new id(e)}get Fs(){if(this.Ms)return this.Ms;throw Qa()}addReference(e,t,n){return this.ks.addReference(n,t),this.Fs.delete(n.toString()),Cc.resolve()}removeReference(e,t,n){return this.ks.removeReference(n,t),this.Fs.add(n.toString()),Cc.resolve()}markPotentiallyOrphaned(e,t){return this.Fs.add(t.toString()),Cc.resolve()}removeTarget(e,t){this.ks.us(t.targetId).forEach((e=>this.Fs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Fs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Cs(){this.Ms=new Set}xs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Cc.forEach(this.Fs,(n=>{const s=vc.fromPath(n);return this.$s(e,s).next((e=>{e||t.removeEntry(s,fc.min())}))})).next((()=>(this.Ms=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.Fs.delete(t.toString()):this.Fs.add(t.toString())}))}Ss(e){return 0}$s(e,t){return Cc.or([()=>Cc.resolve(this.ks.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ns(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class od{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Pi=n,this.vi=s}static Vi(e,t){let n=Kl(),s=Kl();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:s=s.add(e.doc.key)}return new od(e,t.fromCache,n,s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(){this.Si=!1}initialize(e,t){this.Di=e,this.indexManager=t,this.Si=!0}getDocumentsMatchingQuery(e,t,n,s){return this.Ci(e,t).next((r=>r||this.xi(e,t,s,n))).next((n=>n||this.Ni(e,t)))}Ci(e,t){if(Fu(t))return Cc.resolve(null);let n=Hu(t);return this.indexManager.getIndexType(e,n).next((s=>0===s?null:(null!==t.limit&&1===s&&(t=$u(t,null,"F"),n=Hu(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((s=>{const r=Kl(...s);return this.Di.getDocuments(e,r).next((s=>this.indexManager.getMinOffset(e,n).next((n=>{const i=this.ki(t,s);return this.Mi(t,i,r,n.readTime)?this.Ci(e,$u(t,null,"F")):this.Oi(e,i,t,n)}))))})))))}xi(e,t,n,s){return Fu(t)||s.isEqual(fc.min())?this.Ni(e,t):this.Di.getDocuments(e,n).next((r=>{const i=this.ki(t,r);return this.Mi(t,i,n,s)?this.Ni(e,t):($a()<=q.DEBUG&&Ka("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Gu(t)),this.Oi(e,i,t,bc(s,-1)))}))}ki(e,t){let n=new xc(Xu(e));return t.forEach(((t,s)=>{Wu(e,s)&&(n=n.add(s))})),n}Mi(e,t,n,s){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Ni(e,t){return $a()<=q.DEBUG&&Ka("QueryEngine","Using full collection scan to execute query:",Gu(t)),this.Di.getDocumentsMatchingQuery(e,t,Ic.min())}Oi(e,t,n,s){return this.Di.getDocumentsMatchingQuery(e,n,s).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t,n,s){this.persistence=e,this.Fi=t,this.wt=s,this.$i=new Lc(lc),this.Bi=new Ml((e=>vu(e)),wu),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(n)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Wh(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.$i)))}}function ud(e,t,n,s){return new cd(e,t,n,s)}async function ld(e,t){const n=Ya(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.mutationQueue.getAllMutationBatches(e).next((r=>(s=r,n.qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const r=[],i=[];let o=Kl();for(const e of s){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Ki:e,removedBatchIds:r,addedBatchIds:i})))}))}))}function hd(e){const t=Ya(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Vs.getLastRemoteSnapshotVersion(e)))}function dd(e,t,n){let s=Kl(),r=Kl();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=xl();return n.forEach(((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(fc.min())?(t.removeEntry(n,i.readTime),s=s.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),s=s.insert(n,i)):Ka("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Gi:s,Qi:r}}))}function fd(e,t){const n=Ya(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function pd(e,t){const n=Ya(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let s;return n.Vs.getTargetData(e,t).next((r=>r?(s=r,Cc.resolve(s)):n.Vs.allocateTargetId(e).next((r=>(s=new Fh(t,r,0,e.currentSequenceNumber),n.Vs.addTargetData(e,s).next((()=>s)))))))})).then((e=>{const s=n.$i.get(e.targetId);return(null===s||e.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.$i=n.$i.insert(e.targetId,e),n.Bi.set(t,e.targetId)),e}))}async function md(e,t,n){const s=Ya(e),r=s.$i.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(e=>s.persistence.referenceDelegate.removeTarget(e,r)))}catch(e){if(!Ac(e))throw e;Ka("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}s.$i=s.$i.remove(t),s.Bi.delete(r.target)}function gd(e,t,n){const s=Ya(e);let r=fc.min(),i=Kl();return s.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const s=Ya(e),r=s.Bi.get(n);return void 0!==r?Cc.resolve(s.$i.get(r)):s.Vs.getTargetData(t,n)}(s,e,Hu(t)).next((t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>s.Fi.getDocumentsMatchingQuery(e,t,n?r:fc.min(),n?i:Kl()))).next((e=>(yd(s,Qu(t),e),{documents:e,ji:i})))))}function yd(e,t,n){let s=fc.min();n.forEach(((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)})),e.Li.set(t,s)}class vd{constructor(){this.activeTargetIds=Gl()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wd{constructor(){this.Fr=new vd,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,t,n){this.$r[e]=t}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new vd,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{Br(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Ka("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){Ka("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.so=t+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,t,n,s,r){const i=this.oo(e,t);Ka("RestConnection","Sending: ",i,n);const o={};return this.uo(o,s,r),this.co(e,i,o,n).then((e=>(Ka("RestConnection","Received: ",e),e)),(t=>{throw Ga("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}ao(e,t,n,s,r,i){return this.ro(e,t,n,s,r)}uo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+qa,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}oo(e,t){const n=Id[e];return`${this.so}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,t,n,s){return new Promise(((r,i)=>{const o=new Aa;o.listenOnce(Ta.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Ia.NO_ERROR:const t=o.getResponseJson();Ka("Connection","XHR received:",JSON.stringify(t)),r(t);break;case Ia.TIMEOUT:Ka("Connection",'RPC "'+e+'" timed out'),i(new Za(Ja.DEADLINE_EXCEEDED,"Request time out"));break;case Ia.HTTP_ERROR:const n=o.getStatus();if(Ka("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ja).indexOf(t)>=0?t:Ja.UNKNOWN}(e.status);i(new Za(t,e.message))}else i(new Za(Ja.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new Za(Ja.UNAVAILABLE,"Connection failed."));break;default:Qa()}}finally{Ka("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(s);o.send(t,"POST",a,n,15)}))}ho(e,t,n){const s=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=ba(),i=Ea(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new ka({})),this.uo(o.initMessageHeaders,t,n),b()||I()||w().indexOf("Electron/")>=0||T()||w().indexOf("MSAppHost/")>=0||E()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=s.join("");Ka("Connection","Creating WebChannel: "+a,o);const c=r.createWebChannel(a,o);let u=!1,l=!1;const h=new Td({jr:e=>{l?Ka("Connection","Not sending because WebChannel is closed:",e):(u||(Ka("Connection","Opening WebChannel transport."),c.open(),u=!0),Ka("Connection","WebChannel sending:",e),c.send(e))},Wr:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,Ca.EventType.OPEN,(()=>{l||Ka("Connection","WebChannel transport opened.")})),d(c,Ca.EventType.CLOSE,(()=>{l||(l=!0,Ka("Connection","WebChannel transport closed"),h.eo())})),d(c,Ca.EventType.ERROR,(e=>{l||(l=!0,Ga("Connection","WebChannel transport errored:",e),h.eo(new Za(Ja.UNAVAILABLE,"The operation could not be completed")))})),d(c,Ca.EventType.MESSAGE,(e=>{var t;if(!l){const n=e.data[0];Xa(!!n);const s=n,r=s.error||(null===(t=s[0])||void 0===t?void 0:t.error);if(r){Ka("Connection","WebChannel received error:",r);const e=r.status;let t=function(e){const t=Nl[e];if(void 0!==t)return Ll(t)}(e),n=r.message;void 0===t&&(t=Ja.INTERNAL,n="Unknown error status: "+e+" with message "+r.message),l=!0,h.eo(new Za(t,n)),c.close()}else Ka("Connection","WebChannel received:",n),h.no(n)}})),d(i,_a.STAT_EVENT,(e=>{e.stat===Sa.PROXY?Ka("Connection","Detected buffering proxy"):e.stat===Sa.NOPROXY&&Ka("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.Zr()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(e){return new ih(e,!0)}class Cd{constructor(e,t,n=1e3,s=1.5,r=6e4){this.js=e,this.timerId=t,this.lo=n,this.fo=s,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const t=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),s=Math.max(0,t-n);s>0&&Ka("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,(()=>(this.yo=Date.now(),e()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t,n,s,r,i,o,a){this.js=e,this.Ao=n,this.Ro=s,this.bo=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Cd(e,t)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Mo())))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,t){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==e?this.So.reset():t&&t.code===Ja.RESOURCE_EXHAUSTED?(za(t.toString()),za("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):t&&t.code===Ja.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(t)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),t=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Po===t&&this.Uo(e,n)}),(t=>{e((()=>{const e=new Za(Ja.UNKNOWN,"Fetching auth token failed: "+t.message);return this.qo(e)}))}))}Uo(e,t){const n=this.Lo(this.Po);this.stream=this.Ko(e,t),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((e=>{n((()=>this.qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(e){return Ka("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return t=>{this.js.enqueueAndForget((()=>this.Po===e?t():(Ka("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Dd extends Ad{constructor(e,t,n,s,r,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,i),this.wt=r}Ko(e,t){return this.bo.ho("Listen",e,t)}onMessage(e){this.So.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Qa()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(e,t){return e.dt?(Xa(void 0===t||"string"==typeof t),Vc.fromBase64String(t||"")):(Xa(void 0===t||t instanceof Uint8Array),Vc.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Ja.UNKNOWN:Ll(e.code);return new Za(t,e.message||"")}(o);n=new Jl(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=fh(e,s.document.name),i=uh(s.document.updateTime),o=new fu({mapValue:{fields:s.document.fields}}),a=mu.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Xl(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=fh(e,s.document),i=s.readTime?uh(s.readTime):fc.min(),o=mu.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Xl([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=fh(e,s.document),i=s.removedTargetIds||[];n=new Xl([],i,r,null)}else{if(!("filter"in t))return Qa();{t.filter;const e=t.filter;e.targetId;const s=e.count||0,r=new Dl(s),i=e.targetId;n=new Yl(i,r)}}return n}(this.wt,e),n=function(e){if(!("targetChange"in e))return fc.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?fc.min():t.readTime?uh(t.readTime):fc.min()}(e);return this.listener.Go(t,n)}Qo(e){const t={};t.database=gh(this.wt),t.addTarget=function(e,t){let n;const s=t.target;return n=bu(s)?{documents:bh(e,s)}:{query:Eh(e,s)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=ah(e,t.resumeToken):t.snapshotVersion.compareTo(fc.min())>0&&(n.readTime=oh(e,t.snapshotVersion.toTimestamp())),n}(this.wt,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Qa()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.wt,e);n&&(t.labels=n),this.Oo(t)}jo(e){const t={};t.database=gh(this.wt),t.removeTarget=e,this.Oo(t)}}class Nd extends Ad{constructor(e,t,n,s,r,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,i),this.wt=r,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,t){return this.bo.ho("Write",e,t)}onMessage(e){if(Xa(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const t=function(e,t){return e&&e.length>0?(Xa(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?uh(e.updateTime):uh(t);return n.isEqual(fc.min())&&(n=uh(t)),new fl(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=uh(e.commitTime);return this.listener.Jo(n,t)}return Xa(!e.writeResults||0===e.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=gh(this.wt),this.Oo(e)}Ho(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>wh(this.wt,e)))};this.Oo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=n,this.wt=s,this.Zo=!1}tu(){if(this.Zo)throw new Za(Ja.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,t,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.bo.ro(e,t,n,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ja.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Za(Ja.UNKNOWN,e.toString())}))}ao(e,t,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.ao(e,t,n,r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ja.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Za(Ja.UNKNOWN,e.toString())}))}terminate(){this.Zo=!0}}class Od{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(e){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,"Online"===e&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(za(t),this.su=!1):Ka("OnlineStateTracker",t)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t,n,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br((e=>{n.enqueueAndForget((async()=>{qd(this)&&(Ka("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Ya(e);t.lu.add(4),await Pd(t),t._u.set("Unknown"),t.lu.delete(4),await Md(t)}(this))}))})),this._u=new Od(n,s)}}async function Md(e){if(qd(e))for(const t of e.fu)await t(!0)}async function Pd(e){for(const t of e.fu)await t(!1)}function xd(e,t){const n=Ya(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),Bd(n)?jd(n):af(n).Co()&&Fd(n,t))}function Ud(e,t){const n=Ya(e),s=af(n);n.hu.delete(t),s.Co()&&Vd(n,t),0===n.hu.size&&(s.Co()?s.ko():qd(n)&&n._u.set("Unknown"))}function Fd(e,t){e.wu.Nt(t.targetId),af(e).Qo(t)}function Vd(e,t){e.wu.Nt(t),af(e).jo(t)}function jd(e){e.wu=new eh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),te:t=>e.hu.get(t)||null}),af(e).start(),e._u.iu()}function Bd(e){return qd(e)&&!af(e).Do()&&e.hu.size>0}function qd(e){return 0===Ya(e).lu.size}function Hd(e){e.wu=void 0}async function $d(e){e.hu.forEach(((t,n)=>{Fd(e,t)}))}async function Kd(e,t){Hd(e),Bd(e)?(e._u.uu(t),jd(e)):e._u.set("Unknown")}async function zd(e,t,n){if(e._u.set("Online"),t instanceof Jl&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const s of t.targetIds)e.hu.has(s)&&(await e.remoteSyncer.rejectListen(s,n),e.hu.delete(s),e.wu.removeTarget(s))}(e,t)}catch(n){Ka("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Gd(e,n)}else if(t instanceof Xl?e.wu.Ut(t):t instanceof Yl?e.wu.zt(t):e.wu.Gt(t),!n.isEqual(fc.min()))try{const t=await hd(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.wu.Yt(t);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=e.hu.get(s);r&&e.hu.set(s,r.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.hu.get(t);if(!n)return;e.hu.set(t,n.withResumeToken(Vc.EMPTY_BYTE_STRING,n.snapshotVersion)),Vd(e,t);const s=new Fh(n.target,t,1,n.sequenceNumber);Fd(e,s)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Ka("RemoteStore","Failed to raise snapshot:",t),await Gd(e,t)}}async function Gd(e,t,n){if(!Ac(t))throw t;e.lu.add(1),await Pd(e),e._u.set("Offline"),n||(n=()=>hd(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Ka("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await Md(e)}))}function Wd(e,t){return t().catch((n=>Gd(e,n,t)))}async function Qd(e){const t=Ya(e),n=cf(t);let s=t.au.length>0?t.au[t.au.length-1].batchId:-1;for(;Xd(t);)try{const e=await fd(t.localStore,s);if(null===e){0===t.au.length&&n.ko();break}s=e.batchId,Yd(t,e)}catch(e){await Gd(t,e)}Jd(t)&&Zd(t)}function Xd(e){return qd(e)&&e.au.length<10}function Yd(e,t){e.au.push(t);const n=cf(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function Jd(e){return qd(e)&&!cf(e).Do()&&e.au.length>0}function Zd(e){cf(e).start()}async function ef(e){cf(e).Xo()}async function tf(e){const t=cf(e);for(const n of e.au)t.Ho(n.mutations)}async function nf(e,t,n){const s=e.au.shift(),r=xh.from(s,t,n);await Wd(e,(()=>e.remoteSyncer.applySuccessfulWrite(r))),await Qd(e)}async function sf(e,t){t&&cf(e).zo&&await async function(e,t){if(Ol(n=t.code)&&n!==Ja.ABORTED){const n=e.au.shift();cf(e).No(),await Wd(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Qd(e)}var n}(e,t),Jd(e)&&Zd(e)}async function rf(e,t){const n=Ya(e);n.asyncQueue.verifyOperationInProgress(),Ka("RemoteStore","RemoteStore received new credentials");const s=qd(n);n.lu.add(3),await Pd(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await Md(n)}async function of(e,t){const n=Ya(e);t?(n.lu.delete(2),await Md(n)):t||(n.lu.add(2),await Pd(n),n._u.set("Unknown"))}function af(e){return e.mu||(e.mu=function(e,t,n){const s=Ya(e);return s.tu(),new Dd(t,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,n)}(e.datastore,e.asyncQueue,{zr:$d.bind(null,e),Jr:Kd.bind(null,e),Go:zd.bind(null,e)}),e.fu.push((async t=>{t?(e.mu.No(),Bd(e)?jd(e):e._u.set("Unknown")):(await e.mu.stop(),Hd(e))}))),e.mu}function cf(e){return e.gu||(e.gu=function(e,t,n){const s=Ya(e);return s.tu(),new Nd(t,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,n)}(e.datastore,e.asyncQueue,{zr:ef.bind(null,e),Jr:sf.bind(null,e),Yo:tf.bind(null,e),Jo:nf.bind(null,e)}),e.fu.push((async t=>{t?(e.gu.No(),await Qd(e)):(await e.gu.stop(),e.au.length>0&&(Ka("RemoteStore",`Stopping write stream with ${e.au.length} pending writes`),e.au=[]))}))),e.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class uf{constructor(e,t,n,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new ec,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,s,r){const i=Date.now()+n,o=new uf(e,t,i,s,r);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Za(Ja.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lf(e,t){if(za("AsyncQueue",`${t}: ${e}`),Ac(e))return new Za(Ja.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this.comparator=e?(t,n)=>e(t,n)||vc.comparator(t.key,n.key):(e,t)=>vc.comparator(e.key,t.key),this.keyedMap=Fl(),this.sortedSet=new Lc(this.comparator)}static emptySet(e){return new hf(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof hf))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,s=n.getNext().key;if(!e.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new hf;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.yu=new Lc(vc.comparator)}track(e){const t=e.doc.key,n=this.yu.get(t);n?0!==e.type&&3===n.type?this.yu=this.yu.insert(t,e):3===e.type&&1!==n.type?this.yu=this.yu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.yu=this.yu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.yu=this.yu.remove(t):1===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):Qa():this.yu=this.yu.insert(t,e)}pu(){const e=[];return this.yu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class ff{constructor(e,t,n,s,r,i,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,s){const r=[];return t.forEach((e=>{r.push({type:0,doc:e})})),new ff(e,t,hf.emptySet(t),r,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ku(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this.Iu=void 0,this.listeners=[]}}class mf{constructor(){this.queries=new Ml((e=>zu(e)),Ku),this.onlineState="Unknown",this.Tu=new Set}}async function gf(e,t){const n=Ya(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new pf),r)try{i.Iu=await n.onListen(s)}catch(e){const n=lf(e,`Initialization of query '${Gu(t.query)}' failed`);return void t.onError(n)}n.queries.set(s,i),i.listeners.push(t),t.Eu(n.onlineState),i.Iu&&t.Au(i.Iu)&&bf(n)}async function yf(e,t){const n=Ya(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),r=0===i.listeners.length)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function vf(e,t){const n=Ya(e);let s=!1;for(const e of t){const t=e.query,r=n.queries.get(t);if(r){for(const t of r.listeners)t.Au(e)&&(s=!0);r.Iu=e}}s&&bf(n)}function wf(e,t,n){const s=Ya(e),r=s.queries.get(t);if(r)for(const e of r.listeners)e.onError(n);s.queries.delete(t)}function bf(e){e.Tu.forEach((e=>{e.next()}))}class Ef{constructor(e,t,n){this.query=e,this.Ru=t,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new ff(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),t=!0):this.Vu(e,this.onlineState)&&(this.Su(e),t=!0),this.Pu=e,t}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let t=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),t=!0),t}Vu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.Du&&n||e.docs.isEmpty()&&"Offline"!==t)}vu(e){if(e.docChanges.length>0)return!0;const t=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Su(e){e=ff.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class If{constructor(e){this.key=e}}class Tf{constructor(e){this.key=e}}class _f{constructor(e,t){this.query=e,this.Fu=t,this.$u=null,this.current=!1,this.Bu=Kl(),this.mutatedKeys=Kl(),this.Lu=Xu(e),this.Uu=new hf(this.Lu)}get qu(){return this.Fu}Ku(e,t){const n=t?t.Gu:new df,s=t?t.Uu:this.Uu;let r=t?t.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((e,t)=>{const u=s.get(e),l=Wu(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(i=i.add(l),r=d?r.add(e):r.delete(e)):(i=i.delete(e),r=r.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{Uu:i,Gu:n,Mi:o,mutatedKeys:r}}Qu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const s=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const r=e.Gu.pu();r.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Qa()}};return n(e)-n(t)}(e.type,t.type)||this.Lu(e.doc,t.doc))),this.ju(n);const i=t?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==r.length||a?{snapshot:new ff(this.query,e.Uu,s,r,e.mutatedKeys,0===o,a,!1),zu:i}:{zu:i}}Eu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new df,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach((e=>this.Fu=this.Fu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Fu=this.Fu.delete(e))),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=Kl(),this.Uu.forEach((e=>{this.Hu(e.key)&&(this.Bu=this.Bu.add(e.key))}));const t=[];return e.forEach((e=>{this.Bu.has(e)||t.push(new Tf(e))})),this.Bu.forEach((n=>{e.has(n)||t.push(new If(n))})),t}Ju(e){this.Fu=e.ji,this.Bu=Kl();const t=this.Ku(e.documents);return this.applyChanges(t,!0)}Yu(){return ff.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Sf{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class kf{constructor(e){this.key=e,this.Xu=!1}}class Cf{constructor(e,t,n,s,r,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.Zu={},this.tc=new Ml((e=>zu(e)),Ku),this.ec=new Map,this.nc=new Set,this.sc=new Lc(vc.comparator),this.ic=new Map,this.rc=new Yh,this.oc={},this.uc=new Map,this.cc=Kh.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function Af(e,t){const n=zf(e);let s,r;const i=n.tc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const e=await pd(n.localStore,Hu(t));n.isPrimaryClient&&xd(n.remoteStore,e);const i=n.sharedClientState.addLocalQueryTarget(e.targetId);s=e.targetId,r=await Df(n,t,s,"current"===i)}return r}async function Df(e,t,n,s){e.hc=(t,n,s)=>async function(e,t,n,s){let r=t.view.Ku(n);r.Mi&&(r=await gd(e.localStore,t.query,!1).then((({documents:e})=>t.view.Ku(e,r))));const i=s&&s.targetChanges.get(t.targetId),o=t.view.applyChanges(r,e.isPrimaryClient,i);return jf(e,t.targetId,o.zu),o.snapshot}(e,t,n,s);const r=await gd(e.localStore,t,!0),i=new _f(t,r.ji),o=i.Ku(r.documents),a=Ql.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==e.onlineState),c=i.applyChanges(o,e.isPrimaryClient,a);jf(e,n,c.zu);const u=new Sf(t,n,i);return e.tc.set(t,u),e.ec.has(n)?e.ec.get(n).push(t):e.ec.set(n,[t]),c.snapshot}async function Nf(e,t){const n=Ya(e),s=n.tc.get(t),r=n.ec.get(s.targetId);if(r.length>1)return n.ec.set(s.targetId,r.filter((e=>!Ku(e,t)))),void n.tc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await md(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Ud(n.remoteStore,s.targetId),Ff(n,s.targetId)})).catch(kc)):(Ff(n,s.targetId),await md(n.localStore,s.targetId,!0))}async function Rf(e,t){const n=Ya(e);try{const e=await function(e,t){const n=Ya(e),s=t.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const o=[];t.targetChanges.forEach(((i,a)=>{const c=r.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(e,i.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(e,i.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Vc.EMPTY_BYTE_STRING,fc.min()).withLastLimboFreeSnapshotVersion(fc.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,s)),r=r.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,i)&&o.push(n.Vs.updateTargetData(e,u))}));let a=xl(),c=Kl();if(t.documentUpdates.forEach((s=>{t.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,s))})),o.push(dd(e,i,t.documentUpdates).next((e=>{a=e.Gi,c=e.Qi}))),!s.isEqual(fc.min())){const t=n.Vs.getLastRemoteSnapshotVersion(e).next((t=>n.Vs.setTargetsMetadata(e,e.currentSequenceNumber,s)));o.push(t)}return Cc.waitFor(o).next((()=>i.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.$i=r,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const s=n.ic.get(t);s&&(Xa(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?s.Xu=!0:e.modifiedDocuments.size>0?Xa(s.Xu):e.removedDocuments.size>0&&(Xa(s.Xu),s.Xu=!1))})),await Hf(n,e,t)}catch(e){await kc(e)}}function Of(e,t,n){const s=Ya(e);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const e=[];s.tc.forEach(((n,s)=>{const r=s.view.Eu(t);r.snapshot&&e.push(r.snapshot)})),function(e,t){const n=Ya(e);n.onlineState=t;let s=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Eu(t)&&(s=!0)})),s&&bf(n)}(s.eventManager,t),e.length&&s.Zu.Go(e),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Lf(e,t,n){const s=Ya(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.ic.get(t),i=r&&r.key;if(i){let e=new Lc(vc.comparator);e=e.insert(i,mu.newNoDocument(i,fc.min()));const n=Kl().add(i),r=new Wl(fc.min(),new Map,new xc(lc),e,n);await Rf(s,r),s.sc=s.sc.remove(i),s.ic.delete(t),qf(s)}else await md(s.localStore,t,!1).then((()=>Ff(s,t,n))).catch(kc)}async function Mf(e,t){const n=Ya(e),s=t.batch.batchId;try{const e=await function(e,t){const n=Ya(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const s=t.batch.keys(),r=n.Ui.newChangeBuffer({trackRemovals:!0});return function(e,t,n,s){const r=n.batch,i=r.keys();let o=Cc.resolve();return i.forEach((e=>{o=o.next((()=>s.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);Xa(null!==i),t.version.compareTo(i)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),s.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,r)))}(n,e,t,r).next((()=>r.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,s,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Kl();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,s)))}))}(n.localStore,t);Uf(n,s,null),xf(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Hf(n,e)}catch(e){await kc(e)}}async function Pf(e,t,n){const s=Ya(e);try{const e=await function(e,t){const n=Ya(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let s;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Xa(null!==t),s=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,s,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,s))).next((()=>n.localDocuments.getDocuments(e,s)))}))}(s.localStore,t);Uf(s,t,n),xf(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Hf(s,e)}catch(e){await kc(e)}}function xf(e,t){(e.uc.get(t)||[]).forEach((e=>{e.resolve()})),e.uc.delete(t)}function Uf(e,t,n){const s=Ya(e);let r=s.oc[s.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),s.oc[s.currentUser.toKey()]=r}}function Ff(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ec.get(t))e.tc.delete(s),n&&e.Zu.lc(s,n);e.ec.delete(t),e.isPrimaryClient&&e.rc.us(t).forEach((t=>{e.rc.containsKey(t)||Vf(e,t)}))}function Vf(e,t){e.nc.delete(t.path.canonicalString());const n=e.sc.get(t);null!==n&&(Ud(e.remoteStore,n),e.sc=e.sc.remove(t),e.ic.delete(n),qf(e))}function jf(e,t,n){for(const s of n)s instanceof If?(e.rc.addReference(s.key,t),Bf(e,s)):s instanceof Tf?(Ka("SyncEngine","Document no longer in limbo: "+s.key),e.rc.removeReference(s.key,t),e.rc.containsKey(s.key)||Vf(e,s.key)):Qa()}function Bf(e,t){const n=t.key,s=n.path.canonicalString();e.sc.get(n)||e.nc.has(s)||(Ka("SyncEngine","New document in limbo: "+n),e.nc.add(s),qf(e))}function qf(e){for(;e.nc.size>0&&e.sc.size<e.maxConcurrentLimboResolutions;){const t=e.nc.values().next().value;e.nc.delete(t);const n=new vc(mc.fromString(t)),s=e.cc.next();e.ic.set(s,new kf(n)),e.sc=e.sc.insert(n,s),xd(e.remoteStore,new Fh(Hu(Uu(n.path)),s,2,Dc.ot))}}async function Hf(e,t,n){const s=Ya(e),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach(((e,a)=>{o.push(s.hc(a,t,n).then((e=>{if(e){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),r.push(e);const t=od.Vi(a.targetId,e);i.push(t)}})))})),await Promise.all(o),s.Zu.Go(r),await async function(e,t){const n=Ya(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Cc.forEach(t,(t=>Cc.forEach(t.Pi,(s=>n.persistence.referenceDelegate.addReference(e,t.targetId,s))).next((()=>Cc.forEach(t.vi,(s=>n.persistence.referenceDelegate.removeReference(e,t.targetId,s)))))))))}catch(e){if(!Ac(e))throw e;Ka("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.$i.get(t),s=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(s);n.$i=n.$i.insert(t,r)}}}(s.localStore,i))}async function $f(e,t){const n=Ya(e);if(!n.currentUser.isEqual(t)){Ka("SyncEngine","User change. New user:",t.toKey());const e=await ld(n.localStore,t);n.currentUser=t,function(e,t){e.uc.forEach((e=>{e.forEach((e=>{e.reject(new Za(Ja.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.uc.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Hf(n,e.Ki)}}function Kf(e,t){const n=Ya(e),s=n.ic.get(t);if(s&&s.Xu)return Kl().add(s.key);{let e=Kl();const s=n.ec.get(t);if(!s)return e;for(const t of s){const s=n.tc.get(t);e=e.unionWith(s.view.qu)}return e}}function zf(e){const t=Ya(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Rf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Lf.bind(null,t),t.Zu.Go=vf.bind(null,t.eventManager),t.Zu.lc=wf.bind(null,t.eventManager),t}function Gf(e){const t=Ya(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Mf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Pf.bind(null,t),t}class Wf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=kd(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,t){return null}gc(e,t){return null}wc(e){return ud(this.persistence,new ad,e.initialUser,this.wt)}_c(e){return new sd(id.Os,this.wt)}dc(e){return new wd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Qf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Of(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=$f.bind(null,this.syncEngine),await of(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new mf}createDatastore(e){const t=kd(e.databaseInfo.databaseId),n=(s=e.databaseInfo,new _d(s));var s;return function(e,t,n,s){return new Rd(e,t,n,s)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t,n,s,r,i;return t=this.localStore,n=this.datastore,s=e.asyncQueue,r=e=>Of(this.syncEngine,e,0),i=Ed.V()?new Ed:new bd,new Ld(t,n,s,r,i)}createSyncEngine(e,t){return function(e,t,n,s,r,i,o){const a=new Cf(e,t,n,s,r,i);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Ya(e);Ka("RemoteStore","RemoteStore shutting down."),t.lu.add(5),await Pd(t),t.du.shutdown(),t._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):za("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yf{constructor(e,t,n,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Ba.UNAUTHENTICATED,this.clientId=uc.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Ka("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Ka("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Za(Ja.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ec;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=lf(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Jf(e,t){e.asyncQueue.verifyOperationInProgress(),Ka("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener((async e=>{s.isEqual(e)||(await ld(t.localStore,e),s=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function Zf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ep(e);Ka("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener((e=>rf(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>rf(t.remoteStore,n))),e.onlineComponents=t}async function ep(e){return e.offlineComponents||(Ka("FirestoreClient","Using default OfflineComponentProvider"),await Jf(e,new Wf)),e.offlineComponents}async function tp(e){return e.onlineComponents||(Ka("FirestoreClient","Using default OnlineComponentProvider"),await Zf(e,new Qf)),e.onlineComponents}function np(e){return tp(e).then((e=>e.syncEngine))}async function sp(e){const t=await tp(e),n=t.eventManager;return n.onListen=Af.bind(null,t.syncEngine),n.onUnlisten=Nf.bind(null,t.syncEngine),n}function rp(e,t,n={}){const s=new ec;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,s,r){const i=new Xf({next:i=>{t.enqueueAndForget((()=>yf(e,o)));const a=i.docs.has(n);!a&&i.fromCache?r.reject(new Za(Ja.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&s&&"server"===s.source?r.reject(new Za(Ja.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(i)},error:e=>r.reject(e)}),o=new Ef(Uu(n.path),i,{includeMetadataChanges:!0,Du:!0});return gf(e,o)}(await sp(e),e.asyncQueue,t,n,s))),s.promise}function ip(e,t,n={}){const s=new ec;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,s,r){const i=new Xf({next:n=>{t.enqueueAndForget((()=>yf(e,o))),n.fromCache&&"server"===s.source?r.reject(new Za(Ja.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:e=>r.reject(e)}),o=new Ef(n,i,{includeMetadataChanges:!0,Du:!0});return gf(e,o)}(await sp(e),e.asyncQueue,t,n,s))),s.promise}const op=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(e,t,n){if(!n)throw new Za(Ja.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function cp(e){if(!vc.isDocumentKey(e))throw new Za(Ja.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function up(e){if(vc.isDocumentKey(e))throw new Za(Ja.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function lp(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Qa()}function hp(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Za(Ja.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lp(e);throw new Za(Ja.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dp{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Za(Ja.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Za(Ja.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,s){if(!0===t&&!0===s)throw new Za(Ja.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dp({}),this._settingsFrozen=!1,e instanceof Wc?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Za(Ja.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wc(e.options.projectId)}(e))}get app(){if(!this._app)throw new Za(Ja.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Za(Ja.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dp(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new nc;switch(e.type){case"gapi":const t=e.client;return Xa(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new ic(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Za(Ja.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=op.get(e);t&&(Ka("ComponentProvider","Removing Datastore"),op.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pp{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gp(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pp(this.firestore,e,this._key)}}class mp{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new mp(this.firestore,e,this._query)}}class gp extends mp{constructor(e,t,n){super(e,t,Uu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pp(this.firestore,null,new vc(e))}withConverter(e){return new gp(this.firestore,e,this._path)}}function yp(e,t,...n){if(e=U(e),ap("collection","path",t),e instanceof fp){const s=mc.fromString(t,...n);return up(s),new gp(e,null,s)}{if(!(e instanceof pp||e instanceof gp))throw new Za(Ja.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(mc.fromString(t,...n));return up(s),new gp(e.firestore,null,s)}}function vp(e,t,...n){if(e=U(e),1===arguments.length&&(t=uc.I()),ap("doc","path",t),e instanceof fp){const s=mc.fromString(t,...n);return cp(s),new pp(e,null,new vc(s))}{if(!(e instanceof pp||e instanceof gp))throw new Za(Ja.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(mc.fromString(t,...n));return cp(s),new pp(e.firestore,e instanceof gp?e.converter:null,new vc(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wp{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Cd(this,"async_queue_retry"),this.Kc=()=>{const e=Sd();e&&Ka("AsyncQueue","Visibility state changed to "+e.visibilityState),this.So.Eo()};const e=Sd();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const t=Sd();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise((()=>{}));const t=new ec;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Oc.push(e),this.jc())))}async jc(){if(0!==this.Oc.length){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!Ac(e))throw e;Ka("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io((()=>this.jc()))}}Qc(e){const t=this.Mc.then((()=>(this.Lc=!0,e().catch((e=>{this.Bc=e,this.Lc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e);throw za("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Lc=!1,e))))));return this.Mc=t,t}enqueueAfterDelay(e,t,n){this.Gc(),this.qc.indexOf(e)>-1&&(t=0);const s=uf.createAndSchedule(this,e,t,n,(e=>this.Wc(e)));return this.$c.push(s),s}Gc(){this.Bc&&Qa()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Mc,await e}while(e!==this.Mc)}Hc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Jc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Yc(e){this.qc.push(e)}Wc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function bp(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}(e)}class Ep extends fp{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new wp,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||_p(this),this._firestoreClient.terminate()}}function Ip(e=Te()){return we(e,"firestore").getImmediate()}function Tp(e){return e._firestoreClient||_p(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function _p(e){var t;const n=e._freezeSettings(),s=function(e,t,n,s){return new Gc(e,t,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Yf(e._authCredentials,e._appCheckCredentials,e._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sp{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Za(Ja.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yc(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kp{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kp(Vc.fromBase64String(e))}catch(e){throw new Za(Ja.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new kp(Vc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Za(Ja.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Za(Ja.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return lc(this._lat,e._lat)||lc(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=/^__.*__$/;class Np{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Tl(e,this.data,this.fieldMask,t,this.fieldTransforms):new Il(e,this.data,t,this.fieldTransforms)}}class Rp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Tl(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Op(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Qa()}}class Lp{constructor(e,t,n,s,r,i){this.settings=e,this.databaseId=t,this.wt=n,this.ignoreUndefinedProperties=s,void 0===r&&this.Xc(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new Lp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),s=this.ta({path:n,na:!1});return s.sa(e),s}ia(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),s=this.ta({path:n,na:!1});return s.Xc(),s}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Gp(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(0===e.length)throw this.oa("Document fields must not be empty");if(Op(this.Zc)&&Dp.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class Mp{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.wt=n||kd(e)}aa(e,t,n,s=!1){return new Lp({Zc:e,methodName:t,ca:n,path:yc.emptyPath(),na:!1,ua:s},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Pp(e){const t=e._freezeSettings(),n=kd(e._databaseId);return new Mp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function xp(e,t,n,s,r,i={}){const o=e.aa(i.merge||i.mergeFields?2:0,t,n,r);Hp("Data must be an object, but it was:",o,s);const a=Bp(s,o);let c,u;if(i.merge)c=new Fc(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const s of i.mergeFields){const r=$p(t,s,n);if(!o.contains(r))throw new Za(Ja.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Wp(e,r)||e.push(r)}c=new Fc(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Np(new fu(a),c,u)}class Up extends Cp{_toFieldTransform(e){if(2!==e.Zc)throw 1===e.Zc?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Up}}function Fp(e,t,n,s){const r=e.aa(1,t,n);Hp("Data must be an object, but it was:",r,s);const i=[],o=fu.empty();Rc(s,((e,s)=>{const a=zp(t,e,n);s=U(s);const c=r.ia(a);if(s instanceof Up)i.push(a);else{const e=jp(s,c);null!=e&&(i.push(a),o.set(a,e))}}));const a=new Fc(i);return new Rp(o,a,r.fieldTransforms)}function Vp(e,t,n,s,r,i){const o=e.aa(1,t,n),a=[$p(t,s,n)],c=[r];if(i.length%2!=0)throw new Za(Ja.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<i.length;e+=2)a.push($p(t,i[e])),c.push(i[e+1]);const u=[],l=fu.empty();for(let e=a.length-1;e>=0;--e)if(!Wp(u,a[e])){const t=a[e];let n=c[e];n=U(n);const s=o.ia(t);if(n instanceof Up)u.push(t);else{const e=jp(n,s);null!=e&&(u.push(t),l.set(t,e))}}const h=new Fc(u);return new Rp(l,h,o.fieldTransforms)}function jp(e,t){if(qp(e=U(e)))return Hp("Unsupported field value:",t,e),Bp(e,t);if(e instanceof Cp)return function(e,t){if(!Op(t.Zc))throw t.oa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.oa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&4!==t.Zc)throw t.oa("Nested arrays are not supported");return function(e,t){const n=[];let s=0;for(const r of e){let e=jp(r,t.ra(s));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),s++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=U(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return el(t.wt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=dc.fromDate(e);return{timestampValue:oh(t.wt,n)}}if(e instanceof dc){const n=new dc(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:oh(t.wt,n)}}if(e instanceof Ap)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof kp)return{bytesValue:ah(t.wt,e._byteString)};if(e instanceof pp){const n=t.databaseId,s=e.firestore._databaseId;if(!s.isEqual(n))throw t.oa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:lh(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.oa(`Unsupported field value: ${lp(e)}`)}(e,t)}function Bp(e,t){const n={};return Oc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Rc(e,((e,s)=>{const r=jp(s,t.ea(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function qp(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof dc||e instanceof Ap||e instanceof kp||e instanceof pp||e instanceof Cp)}function Hp(e,t,n){if(!qp(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const s=lp(n);throw"an object"===s?t.oa(e+" a custom object"):t.oa(e+" "+s)}}function $p(e,t,n){if((t=U(t))instanceof Sp)return t._internalPath;if("string"==typeof t)return zp(e,t);throw Gp("Field path arguments must be of type string or ",e,!1,void 0,n)}const Kp=new RegExp("[~\\*/\\[\\]]");function zp(e,t,n){if(t.search(Kp)>=0)throw Gp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Sp(...t.split("."))._internalPath}catch(s){throw Gp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Gp(e,t,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new Za(Ja.INVALID_ARGUMENT,a+e+c)}function Wp(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,t,n,s,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new pp(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Xp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yp("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Xp extends Qp{data(){return super.data()}}function Yp(e,t){return"string"==typeof t?zp(e,t):t instanceof Sp?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zp extends Qp{constructor(e,t,n,s,r,i){super(e,t,n,s,i),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new em(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Yp("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class em extends Zp{data(e={}){return super.data(e)}}class tm{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Jp(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new em(this._firestore,this._userDataWriter,n.key,n,new Jp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Za(Ja.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new em(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Jp(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const s=new em(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Jp(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let r=-1,i=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:nm(t.type),doc:s,oldIndex:r,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function nm(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Qa()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sm(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Za(Ja.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rm{convertValue(e,t="none"){switch(Zc(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qc(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Hc(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Qa()}}convertObject(e,t){const n={};return Rc(e.fields,((e,s)=>{n[e]=this.convertValue(s,t)})),n}convertGeoPoint(e){return new Ap(qc(e.latitude),qc(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Kc(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(zc(e));default:return null}}convertTimestamp(e){const t=Bc(e);return new dc(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=mc.fromString(e);Xa(Rh(n));const s=new Wc(n.get(1),n.get(3)),r=new vc(n.popFirst(5));return s.isEqual(t)||za(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function om(e){e=hp(e,pp);const t=hp(e.firestore,Ep);return rp(Tp(t),e._key).then((n=>fm(t,e,n)))}class am extends rm{constructor(e){super(),this.firestore=e}convertBytes(e){return new kp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pp(this.firestore,null,t)}}function cm(e){e=hp(e,mp);const t=hp(e.firestore,Ep),n=Tp(t),s=new am(t);return sm(e._query),ip(n,e._query).then((n=>new tm(t,s,e,n)))}function um(e,t,n){e=hp(e,pp);const s=hp(e.firestore,Ep),r=im(e.converter,t,n);return dm(s,[xp(Pp(s),"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,pl.none())])}function lm(e,t,n,...s){e=hp(e,pp);const r=hp(e.firestore,Ep),i=Pp(r);let o;return o="string"==typeof(t=U(t))||t instanceof Sp?Vp(i,"updateDoc",e._key,t,n,s):Fp(i,"updateDoc",e._key,t),dm(r,[o.toMutation(e._key,pl.exists(!0))])}function hm(e,...t){var n,s,r;e=U(e);let i={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||bp(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(bp(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(s=e.error)||void 0===s?void 0:s.bind(e),t[o+2]=null===(r=e.complete)||void 0===r?void 0:r.bind(e)}let c,u,l;if(e instanceof pp)u=hp(e.firestore,Ep),l=Uu(e._key.path),c={next:n=>{t[o]&&t[o](fm(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=hp(e,mp);u=hp(n.firestore,Ep),l=n._query;const s=new am(u);c={next:e=>{t[o]&&t[o](new tm(u,s,n,e))},error:t[o+1],complete:t[o+2]},sm(e._query)}return function(e,t,n,s){const r=new Xf(s),i=new Ef(t,r,n);return e.asyncQueue.enqueueAndForget((async()=>gf(await sp(e),i))),()=>{r.Tc(),e.asyncQueue.enqueueAndForget((async()=>yf(await sp(e),i)))}}(Tp(u),l,a,c)}function dm(e,t){return function(e,t){const n=new ec;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const s=Gf(e);try{const e=await function(e,t){const n=Ya(e),s=dc.now(),r=t.reduce(((e,t)=>e.add(t.key)),Kl());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=xl(),c=Kl();return n.Ui.getEntries(e,r).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((r=>{i=r;const o=[];for(const e of t){const t=bl(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new Tl(e.key,t,pu(t.value.mapValue),pl.exists(!0)))}return n.mutationQueue.addMutationBatch(e,s,o,t)})).next((t=>{o=t;const s=t.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:Vl(i)})))}(s.localStore,t);s.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let s=e.oc[e.currentUser.toKey()];s||(s=new Lc(lc)),s=s.insert(t,n),e.oc[e.currentUser.toKey()]=s}(s,e.batchId,n),await Hf(s,e.changes),await Qd(s.remoteStore)}catch(e){const t=lf(e,"Failed to persist write");n.reject(t)}}(await np(e),t,n))),n.promise}(Tp(e),t)}function fm(e,t,n){const s=n.docs.get(t._key),r=new am(e);return new Zp(e,r,t._key,s,new Jp(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){qa="9.9.3",ve(new F("firestore",((e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=new Ep(s,new sc(e.getProvider("auth-internal")),new ac(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),r._setSettings(n),r}),"PUBLIC")),_e("@firebase/firestore","3.4.14",e),_e("@firebase/firestore","3.4.14","esm2017")}();const pm={apiKey:"AIzaSyDc7FsMdAW9xZpWl_d39Bl6gC4wbqkFxBc",authDomain:"chatapp-9edcf.firebaseapp.com",projectId:"chatapp-9edcf",storageBucket:"chatapp-9edcf.appspot.com",messagingSenderId:"135455983637",appId:"1:135455983637:web:639e0f067bd2ea8476a61c",measurementId:"G-F18BZDZ3ZJ"};var mm;mm=new URL(i("27Lyk").resolve("gVcnR"),import.meta.url).toString();var gm;gm=new URL(i("27Lyk").resolve("2u0tW"),import.meta.url).toString();let ym={user:[],updates:[]};const vm=Ie(pm),wm=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e=Te()){const t=we(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=we(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(D(n.getOptions(),null!=t?t:{}))return e;je(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:ds,persistence:[An,pn,gn]})}(vm),bm=Ip(vm);let Em=async function(e,n,s,r,i){try{const o=(await ln(wm,e,n)).user,a={userId:o.uid,userName:s,userEmail:o.email,userPhoneNumber:+r,sex:i,userProfilePic:`${t("Male"===i?mm:gm)}`,inboxes:[""]},c={sent:[""],receivedMsg:[""]},u={lMsgs:[""]};o&&(Um(),async function(e){await um(vp(bm,"users",e),a),await async function(e){await um(vp(bm,"messages",e),c)}(e),await async function(e){await um(vp(bm,"lMsg",e),u)}(e)}(o.uid))}catch(e){throw e}};!async function(){(await cm(yp(bm,"users"))).forEach((e=>{ym.user.push(e.data())}))}();const Im=async function(e,t){try{const n=(await hn(wm,e,t)).user,s=vp(bm,"users",n.uid),r=await om(s);if(!r.exists())return;const i=r.data();return n&&Fm(),i}catch(e){throw e}},Tm=async function(e){const t=vp(bm,"messages",e),n=await om(t);if(!n.exists())return;return n.data()};var _m=new class{_body=document.querySelector("body");_whole=document.querySelector(".whole");_account;_update=[];_lastMsg;_clear(){this._whole.innerHTML=""}_addHandlerId(e,t){document.querySelector(".chat-space").addEventListener("click",(function(n){const s=n.target.closest(".chat-box");if(!s)return;const r=window.matchMedia("(max-width: 480px)");window.matchMedia(" (max-width: 600px)").matches&&(document.querySelector(".chat-space").style.display="none",document.querySelector(".width").style.display="block"),r.matches&&(document.querySelector(".chat-space").style.display="none",document.querySelector(".width").style.display="block");const i=s.dataset.acc,o=t.inboxes.find((e=>e.userId===i));e(o,t)}))}_addHandlerSend(e,t,n,s,r){const i=document.getElementById("send"),o=document.getElementById("sendbtn");i.focus(),o.addEventListener("click",(async function(){if(""===i.value)return;await n(e,t,i.value);s(e,t),r(t),i.value="",document.getElementById("inbox").textContent="Recent";const o=document.querySelector(".fa-plus");"fa-x"===o.classList[2]&&o.classList.remove("fa-x")}))}_renderChatMarkup(e){const t=[],n=e.inboxes;let s=[""];if(""!==n[0]){s=n.filter((e=>!t.includes(e.userId)&&(t.push(e.userId),!0)))}return`\n    <section class="display-inbox"> \n        ${s.map(((e,t)=>{if(""!==e)return`\n            <section class="chat-box" data-acc="${e.userId}">\n                  <img src="${e.userProfilePic}" alt="" />\n                  <section class="message">\n                    <h4>${e.userName}</h4>\n                    <p></p>\n                  </section>\n                <hr id="data-hr">\n              </section>\n              \n           `})).join("")}\n        \n          </section>  `}_reRenderUsersSection(e,t){const n=this._renderChatMarkup(e,t);document.querySelector(".display-inbox").innerHTML="",document.querySelector(".display-inbox").insertAdjacentHTML("afterbegin",n),t(e)}renderMarkUp(e,n){return`\n        <main id="main-section">\n        <fieldset id="chat-field">\n     <section class="area-field">\n     <section class="chat-space">\n          <section class="header">\n           <h3 id="inbox">Recent</h3>\n          <i class="fa-solid fa-plus"></i>\n         </section>\n         ${this._renderChatMarkup(e,n)}\n      \n     </section>\n          <section class="width">\n          <section class="dis-img">\n          <img id="bg" src="${t(d)}" alt="" />\n          <p class="text">Start a conversation or select one to reply</p>\n          </section>\n\n          </section>\n\n          <section class="chat_profile">\n          <section class="user">\n            <img src="" alt="" />\n            <p>${e.userName}</p>\n            \n          </section>\n        </section>\n        </section>\n        </fieldset>\n      </main>\n        `}render(e,t){const n=this.renderMarkUp(e,t);this._clear(),this._body.insertAdjacentHTML("afterbegin",n)}_renderChatArea(e,n,s,r){const i=[...s.receivedMsg,...s.sent],o=[];for(const e of i){const t=Object.keys(e)[0];o.push(t)}const a=o.sort(((e,t)=>e-t)),c=`\n    <section class="chat_area">\n    <section class="status">\n      <img src="" alt="" />\n      <img id="arrow" src="${t(f)}" alt="">\n      <section class="info">\n      \n        <h3>${n.userName}</h3>\n        <p>Online</p>\n      </section>\n    </section>\n    <section class="message_area">\n      <section class="msg">\n      ${a.map((e=>{if(e)for(const t of i){const s=Object.keys(t)[0];if(e===s)for(const e of Object.entries(t))for(const t of Object.entries(e[1]))if(t[0]===n.userId)for(const e of Object.entries(t[1])){const t=new Date(+s),n=new Date(t),i=new Intl.DateTimeFormat(navigator.language,{dateStyle:"full"}).format(n).split(" ")[0].slice(0,3),o=new Intl.DateTimeFormat(navigator.language,{timeStyle:"short"}).format(t);return e[0]===r.userId?`\n                        <p class="message1">${e[1]} </p>\n                        <span class="span1">${i}, ${o}</span>\n                      `:`<p class="message2">${e[1]}</p>\n                        <span class="span2">${i}, ${o}</span>\n                        `}}})).join("")}\n      </section>\n    </section>\n\n    <section class="input">\n      <textarea\n        name=""\n        id="send"\n        cols="90"\n        rows="1"\n        placeholder="Write a message..."\n      ></textarea>\n      <img src="${t(l)}" alt="" id="sendbtn" />\n    </section>\n  </section>\n    `;e.innerHTML="",e.insertAdjacentHTML("afterbegin",c);const u=window.matchMedia("(max-width: 480px)");window.matchMedia("(max-width: 600px)").matches&&(document.querySelector("textarea").cols="40",document.getElementById("arrow").addEventListener("click",(function(){document.querySelector(".width").style.display="none",document.querySelector(".chat-space").style.display="block"}))),u.matches&&(document.querySelector("textarea").cols="40",document.getElementById("arrow").addEventListener("click",(function(){document.querySelector(".width").style.display="none",document.querySelector(".chat-space").style.display="block"})))}_updateChatSection(e,t,n){const s=[...e.receivedMsg,...e.sent],r=[];for(const e of s){const t=Object.keys(e)[0];r.push(t)}const i=r.sort(((e,t)=>e-t)),o=`\n    <section class="msg">\n    ${i.map((e=>{if(e)for(const r of s){const s=Object.keys(r)[0];if(e===s)for(const e of Object.entries(r))for(const r of Object.entries(e[1]))if(r[0]===n.userId)for(const e of Object.entries(r[1])){const n=new Date(+s),r=new Date(n),i=new Intl.DateTimeFormat(navigator.language,{dateStyle:"full"}).format(r).split(" ")[0].slice(0,3),o=new Intl.DateTimeFormat(navigator.language,{timeStyle:"short"}).format(n);return e[0]===t.userId?`\n                      <p class="message1">${e[1]} </p>\n                      <span class="span1">${i}, ${o}</span>\n                    `:`<p class="message2">${e[1]}</p>\n                      <span class="span2">${i}, ${o}</span>\n                      `}}})).join("")}\n    </section>\n    `,a=document.querySelector(".message_area");a.innerHTML="",a.insertAdjacentHTML("afterbegin",o)}_renderUsersSection(e,t,n,s,r){const i=e.map((e=>`\n    <section class="chat-box box-id" data-acc="${e.userId}">\n    <img src="${e.userProfilePic}" alt="" />\n      <section class="message">\n      <h4>${e.userName}</h4>\n      <p id="userChat">Hey there! Leave a message</p>\n    </section>\n  </section>\n    `)).join("");document.querySelector(".chat-space").addEventListener("click",(function(o){const a=o.target.closest(".fa-plus");if(a&&(a.classList.toggle("fa-x"),document.querySelector("#inbox").textContent="Users",document.querySelector(".display-inbox").innerHTML="",document.querySelector(".display-inbox").insertAdjacentHTML("afterbegin",i),"fa-x"!==a.classList[2])){const e=t(n);document.querySelector("#inbox").textContent="Recent",document.querySelector(".display-inbox").innerHTML="",document.querySelector(".display-inbox").insertAdjacentHTML("afterbegin",e),r(n)}const c=o.target.closest(".box-id");if(c){const t=c.dataset.acc,r=e.find((e=>e.userId===t));let i=n.inboxes;""===i[0]&&i.shift(),i.push(r);const o=[],a=n.inboxes;let u=[""];if(""!==a[0]){u=a.filter((e=>!o.includes(e.userId)&&(o.push(e.userId),!0)))}n.inboxes=u,s(n.userId,n)}}))}};const Sm=Ip(Ie(pm)),km=function(){u._render()},Cm=function(){h._renderLoginMakup()},Am=async function(e,t,n){const s=(new Date).getTime(),r=await Tm(t.userId),i=await Tm(e.userId);r.sent.push({[s]:{[e.userId]:{[t.userId]:n}}}),i.receivedMsg.push({[s]:{[t.userId]:{[t.userId]:n}}}),await async function(e,t){const n=vp(bm,"messages",e);await lm(n,{sent:t.sent})}(t.userId,r),await async function(e,t){const n=vp(bm,"messages",e);await lm(n,{receivedMsg:t.receivedMsg})}(e.userId,i);hm(vp(Sm,"messages",t.userId),(n=>{_m._updateChatSection(n.data(),t,e)}));Lm(t)},Dm=function(e){Lm(e)},Nm=async function(e){ym.user.findIndex((t=>t.userId===e.userId));_m._reRenderUsersSection(e,Dm)},Rm=function(e,t){!async function(e,t){const n=vp(bm,"users",e);await lm(n,{inboxes:t.inboxes})}(e,t)},Om=async function(e,t,n){const s=await Tm(t.userId);_m._renderChatArea(document.querySelector(".width"),e,s,t),_m._addHandlerSend(e,t,Am,Om,Nm)},Lm=function(e){e.inboxes.map((e=>e.userId)).map((async(t,n)=>{if(!t)return;hm(vp(Sm,"messages",t),(async s=>{const r=s.data(),i=[...r.sent,...r.receivedMsg],o=[];for(const e of i){const t=Object.keys(e)[0];o.push(t)}const a=o.sort(((e,t)=>e-t)),c=[];a.forEach((t=>{if(t)for(const n of i){if(t===Object.keys(n)[0])for(const t of Object.entries(n))for(const n of Object.entries(t[1]))if(n[0]===e.userId)for(const e of Object.entries(n[1]))c.push(e[1])}}));const u=c.slice(-1)[0];document.querySelector(".display-inbox").querySelectorAll("p")[n].textContent=u.slice(0,20),await async function(e,t){const n=vp(bm,"lMsg",e);await lm(n,{lMsgs:{[e]:t}})}(t,u)}))}))},Mm=async function(){try{const e=document.getElementById("email-login"),t=document.getElementById("password-login");let n=await Im(e.value,t.value);n.inboxes.map((e=>e.userId));const s=ym.user;console.log(s);const r=s.findIndex((e=>e.userId===n.userId));s.splice(r,1),_m.render(n,Dm),Dm(n),async function(e,t){const n=_m._renderChatMarkup;t.inboxes.map((e=>e.userId)),_m._renderUsersSection(e,n,t,Rm,Dm)}(s,n),_m._addHandlerId(Om,n,s)}catch(e){console.log(e);const t=e.code.split("/")[1].toUpperCase();h._errorMessage(t)}},Pm=async function(){try{const e=document.getElementById("email"),t=document.getElementById("password"),n=document.getElementById("username"),s=document.getElementById("number"),r=document.getElementById("option").value;await Em(e.value,t.value,n.value,s.value,r)}catch(e){const t=e.code.split("/")[1].toUpperCase();console.log(t),u._errorMessage(t)}},xm=function(){u._renderSpinner()};u._addHandlerEmail(km),u._addHandlerSignUp(Pm,xm),h._addHandlerShowLoginForm(Cm),h._addHandlerlogin(Mm,xm);const Um=function(){u._successMessage()},Fm=function(){h._successMessage()};
//# sourceMappingURL=index.7a65d2a3.js.map

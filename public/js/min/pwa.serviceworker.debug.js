!function(e,t,n){var r,o,a,i=!1,c=!1,s=1e3,u={},f=function(){var e=new URL(location);(r=e.searchParams.get("path"))||(r="/");var t=e.searchParams.get("config");t||(t="abtf-pwa-config.json"),o=r+t};e.addEventListener("install",function(t){t.waitUntil(w().then(function(){e.skipWaiting()}).catch(function(){e.skipWaiting()}))}),e.addEventListener("activate",function(t){e.clients.claim()}),CacheStorage.prototype.match||(CacheStorage.prototype.match=function(e,t){var n=this;return this.keys().then(function(r){var o;return r.reduce(function(r,a){return r.then(function(){return o||n.open(a).then(function(n){return n.match(e,t)}).then(function(e){return o=e})})},Promise.resolve())})});var l,h=function(){function e(){this.value=[],this.leftBits=0}function t(e){for(var t="",n=e.byteLength,r=0;r<n;r++)t+=String.fromCharCode(e[r]);return btoa(t).replace(/=+$/,"")}function n(e){return e>0&&(e&1+~e)===e}function r(e,t){return e-t}function o(e,t,n){return new Promise(function(r,o){var i=a(e);crypto.subtle.digest("SHA-256",c.encode(i)).then(function(e){var o=new DataView(e).getUint32(0),a=Math.log2(t*n);if(a>31)throw Error("This implementation only supports up to 31 bit hash values");r(o=o>>32-a&(1<<a)-1)})})}function a(e){return e.replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16)})}function a(e){return e.replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16)})}function i(a,i){if(i>=Math.pow(2,32))throw Error('Invalid probability: "${p}" must be smaller than 2**32');if(!n(i))throw Error('Invalid probability: "${p}" must be a power of 2');var c,s=Math.min(Math.pow(2,Math.round(Math.log2(a.length))),Math.pow(2,31)),u=[];return new Promise(function(n,f){Promise.all(a.map(function(e){return o(e,s,i)})).then(function(o){u=u.concat().sort(r),c=Uint8Array.from((new e).addBits(Math.log2(s),5).addBits(Math.log2(i),5).gcsEncode(u,Math.log2(i)).value),n(t(c))})})}e.prototype.addBit=function(e){return 0==this.leftBits&&(this.value.push(0),this.leftBits=8),--this.leftBits,e&&(this.value[this.value.length-1]|=1<<this.leftBits),this},e.prototype.addBits=function(e,t){if(0!=t)do{--t,this.addBit(e&1<<t)}while(0!=t);return this},e.prototype.gcsEncode=function(e,t){for(var n=-1,r=0;r!=e.length;++r)if(n!=e[r]){for(var o=e[r]-n-1,a=o>>t;0!=a;--a)this.addBit(0);this.addBit(1),this.addBits(o,t),n=e[r]}return this};var c=new TextEncoder("utf-8");return function(e,t){return i(e,t)}}(),d=function(e){return e&&e.includes("text/html")?new Promise(function(e,t){caches.open(a+":push").then(function(t){t.keys().then(function(t){if(0===t.length)return e(null);var n=[];t.forEach(function(e){n.push(M(e))}),Promise.all(n).then(function(n){var r=[];t.forEach(function(e,t){"undefined"!==n[t]&&n[t]&&r.push(e.url)}),0===r.length?e(null):h(r,Math.pow(2,7)).then(function(t){e(t)})})})})}):Promise.resolve(null)},p=function(){var e={},t=0,n=[],r=function(t,o,a){var i=!1,c=Object.keys(e);if(c.length>0){var s=Date.now();c.forEach(function(t){if(!i)if(e[t][0]<s-e[t][1])try{delete e[t]}catch(e){}else i=!0})}if(i){if(0===o)return;var u;if(a){var f=!1;n.forEach(function(e,t){f||e[2]==a&&(f=t)}),f&&(n[f][1]&&clearTimeout(n[f][1]),u=f)}u||(u=n.push([])-1),n[u]=[t,setTimeout(function(e,t){delete n[e],t(),n.length>0&&r(null,0)},o,u,t),a]}else if(t&&n.push([t]),n.length>0)for(var l=n.shift();l;){if(l instanceof Array){l[1]&&clearTimeout(l[1]);try{l[0]()}catch(e){}}l=n.shift()}};return{start:function(n){var r=++t;return e[r]=[Date.now(),n],r},complete:function(t){try{delete e[t]}catch(e){}n.length>0&&r(null,0)},onIdle:r}}(),v=function(e){return new Promise(function(n,r){if(!i||!c||e&&e>c){var a=!i;w().then(function(){a&&n(i?i:!1)}).catch(function(){a&&n(!1)})}else if(!l&&c<m()-300){f(),l=!0;var s=new Request(o+"?"+Math.round(Date.now()/1e3),{method:"HEAD",mode:"no-cors"});t(s).then(function(e){l=!1;var t=!0;if(e&&e.ok){var n=g(e.headers.get("last-modified"));n&&n<=c&&(t=!1)}t&&w()}).catch(function(e){l=!1,w()})}else n(i)}).catch(function(e){setTimeout(function(){throw e})})},w=function(){return l?Promise.resolve():(f(),l=!0,t(o+"?"+Math.round(Date.now()/1e3),{mode:"no-cors"}).then(function(e){if(l=!1,e&&e.ok&&e.status<400)return e.json().then(function(e){if(console.info("Abtf.sw() ➤ config "+(i?"updated":"loaded"),e),e){e instanceof Array&&(e={policy:e}),a="abtf",e.cache_version&&(a=a+":"+e.cache_version),e.policy&&(i=e.policy,c=m());var t=[],n=[];return e.start_url&&n.push(N(e.start_url)),e.policy&&e.policy.forEach(function(e){e.offline&&-1===t.indexOf(e.offline)&&t.push(e.offline)}),e.preload&&e.preload.forEach(function(e){-1===t.indexOf(e)&&t.push(e)}),preloadPromises=[],t.forEach(function(e){preloadPromises.push(N(e))}),e.preload_install&&(n=n.concat(preloadPromises)),Promise.all(n)}});throw i=!1,new Error("service worker config not found: "+o)}).catch(function(e){l=!1,i=!1,setTimeout(function(){throw e})}))},m=function(){return Math.round(Date.now()/1e3)},g=function(e){if(e)return isNaN(parseInt(e))?(e=Date.parse(e),isNaN(e)?void 0:Math.round(e/1e3)):e},b=/^\/(.*)\/([gimuy]+)?$/,y=function(e){var t=e.match(b);if(t){try{var n=new RegExp(t[1],t[2])}catch(e){}return n||!1}},A=!1,x=!1,E=!1,q=function(){x||(!A||A<m()-10)&&(x=!0,A=m(),caches.keys().then(function(e){return e&&0!==e.length?Promise.all(e.map(function(e){if(0!==e.indexOf(a))return console.info("Abtf.sw() ➤ old cache deleted",e),caches.delete(e);caches.open(e).then(function(t){t.keys().then(function(n){if(console.info("Abtf.sw() ➤ prune cache",e,"size:",n.length,s),!(n.length<s)){var r=[],o=[],a=[];return n.forEach(function(e){o.push(e),a.push(t.match(e))}),Promise.all(a).then(function(e){var n=m();e.forEach(function(e,a){if(e&&e.headers){var i=e.headers.get("x-abtf-sw");if(i){var c=e.headers.get("x-abtf-sw-expire");if(c&&i&&i<m()-c)return console.info("Abtf.sw() ➤ cache ➤ expired",e.url),void t.delete(o[a])}else i=n;!1!==r&&r.push({t:i,r:o[a]})}}),r&&r.length>s&&(r.sort(function(e,t){return e.t>t.t?-1:e.t<t.t?1:0}),r.slice(s).forEach(function(e){t.delete(e.r)}))})}})})})).then(function(){x=!1}):Promise.resolve()}))},k=function(e,n,r,o){var i=p.start(1e3);return d(e.headers.get("accept")).then(function(c){var s=new Request(e);s.headers.set("x-pagespeed-sw",1),c&&s.headers.set("cache-digest",c);var f=s.url;if(!o&&u&&f in u&&u[f]&&u[f][0]>m()-5)return console.info("Abtf.sw() ➤ hook into preload initiated request",f),u[f][1];var l=function(e){e in u&&(u[e]&&u[e][2]&&clearTimeout(u[e][2]),u[e]=!1,delete u[e])},h=t(s).then(function(e){l(f);var t=!1;if(e.ok&&e.status<400){var r=e.headers.get("link");r&&(r instanceof Array||(r=[r]),p.onIdle(function(){caches.open(a+":push").then(function(e){r.forEach(function(t){t.split(",").forEach(function(t){if(/rel=preload/.test(t)){var n=t.match(/<([^>]+)>/);n&&n[1]&&e.match(n[1]).then(function(t){t||e.put(n[1],new Response(null,{status:204}))})}})})})},1e3)),n&&(t=!0,n.conditions&&(n.conditions.forEach(function(n){if(t)switch(n.type){case"url":if(n.regex)if(o=y(n.pattern)){i=o.test(s.url);n.not?i&&(t=!1):i||(t=!1)}else t=!1;else{i=-1!==s.url.indexOf(n.pattern);n.not?i&&(t=!1):i||(t=!1)}break;case"header":var r=e.headers.get(n.name);if(r)if(n.regex){var o=y(n.pattern);if(o){i=o.test(r);n.not?i&&(t=!1):i||(t=!1)}else t=!1}else if("object"==typeof n.pattern)if(n.pattern.operator){r=parseFloat(r);var a=parseFloat(n.pattern.value);if(isNaN(r)||isNaN(a))t=!1;else{switch(n.pattern.operator){case"<":i=r<a;break;case">":i=r>a;break;case"=":var i=r===a;break;default:t=!1}t&&(n.not?i&&(t=!1):i||(t=!1))}}else t=!1;else-1===r.indexOf(n.pattern)&&(t=!1);else t=!1}}),t?console.info("Abtf.sw() ➤ cache condition ➤ cache",s.url,n.conditions):console.info("Abtf.sw() ➤ cache condition ➤ no cache",s.url,n.conditions)),t&&I(s,e.clone(),n).then(function(){p.complete(i)}))}return t||p.complete(i),e}).catch(function(e){return l(f),p.complete(i),r?r(s,null,e):null});return o&&(u[f]=[m(),h],u[f][2]=setTimeout(function(){u[f]=!1,delete u[f]},5e3)),h})},T=function(e,n,r,o){var a=r.headers.get("etag"),i=g(r.headers.get("last-modified"));if(!a&&!i){console.warn("Abtf.sw() ➤ HEAD ➤ no etag or last-modified",e.url);var c=k(e,n);return o&&(c=c.then(o)),c}var s=p.start(1e3),u=new Request(e.url,{method:"HEAD",headers:e.headers,mode:"no-cors"});t(u).then(function(t){var r=!1,c=t.headers.get("etag"),u=g(t.headers.get("last-modified"));if(c&&c!==a?r=!0:u&&u!==i&&(r=!0),r){console.info("Abtf.sw() ➤ HEAD ➤ update",e.url);var f=k(e,n);return f=f.then(function(e){return p.complete(s),e}),o&&(f=f.then(o)),f}return p.complete(s),null}).catch(function(t){var r=k(e,n);return r=r.then(function(e){return p.complete(s),e}),o&&(r=r.then(o)),r})},P=function(e,n){return e=new Request(e),M(e).then(function(e){return e?e.blob().then(function(t){return new Response(t,{status:503,statusText:"Offline",headers:e.headers})}):t(n).catch(function(e){setTimeout(function(){throw e})})})},M=function(e){var t=p.start(1e3);return caches.open(a).then(function(n){return n.match(e).then(function(n){if(n){var r=n.headers.get("x-abtf-sw-expire");if(r)var o=n.headers.get("x-abtf-sw");var a=n.headers.get("expire");a&&(a=g(a)),r&&o<m()-r?(n=!1,console.info("Abtf.sw() ➤ cache expired by policy",e.url,"max age:",r)):a&&a<m()&&(n=!1,console.info("Abtf.sw() ➤ cache expired by HTTP expire",e.url,n.headers.get("expire")))}return p.complete(t),n})})},N=function(e){if(e)return"string"==typeof e&&(e=new Request(e,{mode:"no-cors"})),M(e).then(function(t){if(!t){var n=e.url;return console.info("Abtf.sw() ➤ preload",n),k(e,{conditions:null},!1,!0)}return t})},I=function(e,t,n){return caches.open(a).then(function(r){var o={};return t.headers.forEach(function(e,t){o[t]=e}),o["x-abtf-sw"]=m(),n&&n.max_age&&(o["x-abtf-sw-expire"]=n.max_age),t.blob().then(function(n){var a=new Response(n,{status:t.status,statusText:t.statusText,headers:o});return r.put(e,a)})})};e.addEventListener("fetch",function(n){if("GET"===n.request.method){var r=!1;if(["wp-admin/","wp-login.php"].forEach(function(t){if(!r){var o=new RegExp("^([^/]+)?//"+e.location.host+"(:[0-9]+)?/"+t);(o.test(n.request.url)||n.request.referrer&&o.test(n.request.referrer))&&(r=!0)}}),!(r||n.request.url.match(/\&preview=true/)||n.request.url.match(/\&preview_nonce=/))&&(v(),i&&a)){var o=function(e,n){if(!n||0===n.length)return!1;var r=!1;if(n.forEach(function(t){if(!r&&t.match&&0!==t.match.length){var n=!0;t.match.forEach(function(t){if(n)switch(t.type){case"url":if(t.regex)(a=y(t.pattern))?(i=a.test(e.request.url),t.not?i&&(n=!1):i||(n=!1)):n=!1;else if(t.pattern instanceof Array){var r=!1;t.pattern.forEach(function(t){r||-1!==e.request.url.indexOf(t)&&(r=!0)}),t.not?r&&(n=!1):r||(n=!1)}else i=-1!==e.request.url.indexOf(t.pattern),t.not?i&&(n=!1):i||(n=!1);break;case"header":switch(t.name.toLowerCase()){case"referer":case"referrer":o=e.request.referrer;break;default:var o=e.request.headers.get(t.name)}if(o)if(t.regex){var a=y(t.pattern);a?(i=a.test(o),t.not?i&&(n=!1):i||(n=!1)):n=!1}else{var i=-1!==o.indexOf(t.pattern);t.not?i&&(n=!1):i||(n=!1)}else t.not||(n=!1)}}),n&&(r=t)}}),!r)return console.info("Abtf.sw() ➤ policy ➤ no match",e.request.url),!1;switch(console.info("Abtf.sw() ➤ policy ➤ match",e.request.url,r),E&&clearTimeout(E),E=setTimeout(function(){p.onIdle(q,1e4,"clean-cache"),E=!1},100),r.strategy){case"never":return!1;case"cache":return M(e.request).then(function(n){if(n){var o=!0;if(r.cache.update_interval)a=!isNaN(parseInt(r.cache.update_interval))&&parseInt(r.cache.update_interval);else var a=!1;if(a){var i=n.headers.get("x-abtf-sw");i&&parseInt(i)>m()-a&&(o=!1)}return o&&function(e,t){setTimeout(function(){var n;if(r.cache.notify&&(n=function(){clients.matchAll().then(function(t){t.forEach(function(t){t.postMessage([2,e.url])})})}),r.cache.head_update)console.info("Abtf.sw() ➤ HEAD ➤ verify",e.url),T(e,r.cache,t,n);else{console.info("Abtf.sw() ➤ update cache",e.url);var o=k(e,r.cache);n&&o.then(n)}},10)}(e.request.clone(),n.clone()),console.info("Abtf.sw() ➤ from cache",e.request.url),n}return k(e.request,r.cache,function(n,o,a){return r.offline?(console.warn("Abtf.sw() ➤ no cache ➤ network failed ➤ offline page",n.url),P(r.offline,n.clone())):(console.warn("Abtf.sw() ➤ no cache ➤ network failed ➤ empty 404 response",n.url,o,a),o||t(e.request.clone()).catch(function(e){setTimeout(function(){throw e})}))})});case"event":return M(e.request).then(function(n){return n?(console.info("Abtf.sw() ➤ from cache",e.request.url),n):k(e.request,null,function(n,o,a){return r.offline?(console.warn("Abtf.sw() ➤ no cache ➤ network failed ➤ offline page",n.url),P(r.offline,n.clone())):(console.warn("Abtf.sw() ➤ no cache ➤ network failed ➤ empty 404 response",n.url,o),o||t(e.request).catch(function(e){setTimeout(function(){throw e})}))})});case"network":default:return k(e.request,r.cache,function(n,o,a){return console.warn("Abtf.sw() ➤ network failed",n.url,o||a),M(n).then(function(a){return a?(console.info("Abtf.sw() ➤ fallback from cache",n.url),a):r.offline?(console.warn("Abtf.sw() ➤ no cache ➤ offline page",n.url),P(r.offline,n.clone())):(console.warn("Abtf.sw() ➤ no cache ➤ empty 404 response",n.url),o||t(e.request).catch(function(e){setTimeout(function(){throw e})}))})})}}(n,i);if(!1!==o)return n.respondWith(o)}}}),e.addEventListener("message",function(t){if(t&&t.data&&t.data instanceof Array){if(1===t.data[0]&&(t.data[1]&&!isNaN(parseInt(t.data[1]))&&v(parseInt(t.data[1])),t.data[3]&&!isNaN(parseInt(t.data[3]))&&(s=parseInt(t.data[3])),p.onIdle(q,1e4,"clean-cache")),2===t.data[0]||3===t.data[0])if(t.ports[0])n=function(e,n){t.ports[0].postMessage({error:e,status:n})};else var n=!1;if(2===t.data[0])if(t.data[1]){var r;if("string"==typeof t.data[1]||t.data[1]instanceof Request?r=[t.data[1]]:t.data[1]instanceof Array&&(r=t.data[1]),r){var o=[];r.forEach(function(e){o.push(N(e))}),n&&Promise.all(o).then(function(e){var t=[];e.forEach(function(e){var n={url:e.url,status:e.status,statusText:e.statusText},r=e.headers.get("content-length");n.size=isNaN(parseInt(r))?-1:parseInt(r),t.push(n)}),n(null,t)}).catch(function(e){console.error("Abtf.sw() ➤ preload",e)})}else n&&n("invalid-data")}else n&&n("no-urls");3===t.data[0]&&(e.registration.showNotification(t.data[1],t.data[2]),n&&n(null,"sent"))}})}(self,self.fetch,Cache);
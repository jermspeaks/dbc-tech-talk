"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","63488d6e017e429b7a26164ea4340530"],["/static/css/main.652c3e16.css","66c156ae2a2a445c2cccc1dc24c58f7a"],["/static/js/0.fbf977ef.chunk.js","f306aae7d4a5b76c563e642708023044"],["/static/js/1.da7732fa.chunk.js","62cdfd8cd3f70e8b041045046b9ddf85"],["/static/js/10.a6346603.chunk.js","c208c3a8e634dbe2a6b0de81607dd284"],["/static/js/11.7933f2fb.chunk.js","d3376e676fa14e858572e5dc95be1c89"],["/static/js/12.39eaa71c.chunk.js","5f18cb8c9b3d06de0ef22bca45181d9b"],["/static/js/13.2e51a132.chunk.js","7881526b4032442adcd87dc8a541767d"],["/static/js/14.e3d54808.chunk.js","8047bb8632090a6391e1d0ac7a5cc00e"],["/static/js/15.99fba725.chunk.js","04b6276566c2b6f622c312e9e17b0d94"],["/static/js/16.1ac1ee56.chunk.js","b5a44cb75325ebe416ff87d2a8fcc7dd"],["/static/js/17.3fd39a6d.chunk.js","a6ec403b81954710b722043d3445a482"],["/static/js/2.eee81c49.chunk.js","e0b173086af23a7c8d25e20a6aafda7a"],["/static/js/3.3e20fc5f.chunk.js","0d27c730229b3e12be602b40daddcc24"],["/static/js/4.ddea3a89.chunk.js","a85ab71cf8b813b4a82ec3d2209dfe96"],["/static/js/5.63d03829.chunk.js","6d24b159a9a4d04df70cbb90efc7628f"],["/static/js/6.7308aa34.chunk.js","9becde70ee744dc44f05c18cde0dbb25"],["/static/js/7.171eb40f.chunk.js","8007fd9a7935d2233ebf0613f9049d4b"],["/static/js/8.01247008.chunk.js","418780546e6de93396864fa007ea2031"],["/static/js/9.78d736ad.chunk.js","3543e2f75e8bd00b080d860c4f91b121"],["/static/js/main.b299fa5f.js","9634ef86711e4181df2a8c6b6adaefb6"],["/static/media/flaskserver.21b808ea.example","21b808eaefab5a1dc708c24bd7592b40"],["/static/media/guess0.8af4dbcb.png","8af4dbcbbc175321cd5b63aeee41b859"],["/static/media/guess1.14b2c4cb.png","14b2c4cb6f5de0df9820ffae054b8a74"],["/static/media/guess2.40a03c90.png","40a03c900f4794b454e4ff24a1459a36"],["/static/media/guess3.39f282fd.png","39f282fdb00eed99c70a670cdcbc759f"],["/static/media/guess4.539dc538.png","539dc538bdb4796b6fdd9dc526776aa2"],["/static/media/guess5.09386bda.png","09386bdaeefa9214d86d0770b9b3fba8"],["/static/media/hello2.6ff712f0.example","6ff712f0d9b29f61bd5d113b253478f1"],["/static/media/helloworld.061bbd5d.example","061bbd5d04c698df64c8723ccc26bc40"],["/static/media/sharkwords1.5589b3a7.example","5589b3a7cfd015da648791c4414308ad"],["/static/media/sharkwords2.aa6fd359.example","aa6fd359125af26dbeee807a15869f09"],["/static/media/sharkwords3.01fb41ab.example","01fb41ab6c4490890a3524de0d6904d5"],["/static/media/sharkwords4.632106fe.example","632106fe353c101d64a4924078ae62f3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});
if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,t,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return n;case"module":return a;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1bfc9850-cc15245e936263671870.js",revision:"eRArrKS3AJ_Kt3Tp55NBe"},{url:"/_next/static/chunks/314-39c8d73deabab50e2cb3.js",revision:"eRArrKS3AJ_Kt3Tp55NBe"},{url:"/_next/static/chunks/95b64a6e-da792c3cb3e5d02f17c1.js",revision:"eRArrKS3AJ_Kt3Tp55NBe"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"eRArrKS3AJ_Kt3Tp55NBe"},{url:"/_next/static/chunks/main-8ccdc5bc769ac1f9c4f1.js",revision:"eRArrKS3AJ_Kt3Tp55NBe"},{url:"/_next/static/chunks/pages/_app-6521cd4c08c0cc6ca55a.js",revision:"eRArrKS3AJ_Kt3Tp55NBe"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"eRArrKS3AJ_Kt3Tp55NBe"},{url:"/_next/static/chunks/pages/index-ef31c8b1d85c543422bc.js",revision:"eRArrKS3AJ_Kt3Tp55NBe"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"eRArrKS3AJ_Kt3Tp55NBe"},{url:"/_next/static/chunks/webpack-0cb069610457c13661fc.js",revision:"eRArrKS3AJ_Kt3Tp55NBe"},{url:"/_next/static/css/5d78653d5632562b6f85.css",revision:"eRArrKS3AJ_Kt3Tp55NBe"},{url:"/_next/static/eRArrKS3AJ_Kt3Tp55NBe/_buildManifest.js",revision:"eRArrKS3AJ_Kt3Tp55NBe"},{url:"/_next/static/eRArrKS3AJ_Kt3Tp55NBe/_ssgManifest.js",revision:"eRArrKS3AJ_Kt3Tp55NBe"},{url:"/_next/static/image/public/img/youtube1.aa59008919cf415726d19c90a58af04e.png",revision:"eRArrKS3AJ_Kt3Tp55NBe"},{url:"/_next/static/image/public/img/youtube2.b4e090cd812f42082733cb833ecf7714.png",revision:"eRArrKS3AJ_Kt3Tp55NBe"},{url:"/_next/static/image/public/img/youtube3.c22bc29d34c75d7ba809eba3f05e1f4f.png",revision:"eRArrKS3AJ_Kt3Tp55NBe"},{url:"/_next/static/image/public/img/youtube4.4f3c8720dcba519761241611cf7ab511.png",revision:"eRArrKS3AJ_Kt3Tp55NBe"},{url:"/favicon.ico",revision:"0ea6db17a8f0c6a0f3f9064ad3a053e0"},{url:"/fonts/open-sans-v23-latin-700.woff2",revision:"b596676fc00af9806c16a12e9a0350f8"},{url:"/fonts/poppins-v12-latin-300.woff2",revision:"9ddc04912d6e8f88d9de4045b8b89c59"},{url:"/fonts/poppins-v12-latin-600.woff2",revision:"087457026965f98466618a478c4b1b07"},{url:"/fonts/poppins-v12-latin-regular.woff2",revision:"9ed361bba8488aeb2797b82befda20f1"},{url:"/fonts/pt-mono-v8-latin-regular.woff2",revision:"1a98a27e186af488e782a00771d10216"},{url:"/img/icon-192.png",revision:"8766b75bafec833a9a6a65adef1ffe4c"},{url:"/img/icon-512.png",revision:"a7c7bf530ada1e20da1a7810f000413c"},{url:"/img/youtube1.png",revision:"35d67fa593c5f91404c255505d019bb0"},{url:"/img/youtube2.png",revision:"fc138e9bd2578808073a76319c2a7d20"},{url:"/img/youtube3.png",revision:"f208803e04b14af141a06991d139cd38"},{url:"/img/youtube4.png",revision:"82d1cc73ecd198f773ee2a8e6a879fa4"},{url:"/manifest.json",revision:"6dfbdf07a4efe1e836afd997729121ef"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

importScripts('workbox.js');

const workboxSW = new WorkboxSW();
const networkFirst = workboxSW.strategies.networkFirst();
workboxSW.router.registerRoute('http://api.coindesk.com/*', networkFirst);

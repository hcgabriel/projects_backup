"use strict";
exports.__esModule = true;
var path = require('path');
var puppeteerConfig = {
    whatsappUrl: 'https://web.whatsapp.com',
    width: 1440,
    height: 900,
    chromiumArgs: [
        // `--app=${whatsappUrl}`,
        '--log-level=3',
        //'--start-maximized',
        '--no-default-browser-check',
        '--disable-site-isolation-trials',
        '--no-experiments',
        '--ignore-gpu-blacklist',
        '--ignore-certificate-errors',
        '--ignore-certificate-errors-spki-list',
        '--disable-gpu',
        '--disable-extensions',
        '--disable-default-apps',
        '--enable-features=NetworkService',
        '--disable-setuid-sandbox',
        '--no-sandbox',
        // Extras
        '--disable-webgl',
        '--disable-infobars',
        '--window-position=0,0',
        '--ignore-certifcate-errors',
        '--ignore-certifcate-errors-spki-list',
        '--disable-threaded-animation',
        '--disable-threaded-scrolling',
        '--disable-in-process-stack-traces',
        '--disable-histogram-customizer',
        '--disable-gl-extensions',
        '--disable-composited-antialiasing',
        '--disable-canvas-aa',
        '--disable-3d-apis',
        '--disable-accelerated-2d-canvas',
        '--disable-accelerated-jpeg-decoding',
        '--disable-accelerated-mjpeg-decode',
        '--disable-app-list-dismiss-on-blur',
        '--disable-accelerated-video-decode'
    ]
};
exports.puppeteerConfig = puppeteerConfig;
exports.useragent = 'WhatsApp/0.4.613 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36';
exports.createUserAgent = function (waVersion) { return "WhatsApp/" + waVersion + " Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36"; };
exports.width = puppeteerConfig.width;
exports.height = puppeteerConfig.height;

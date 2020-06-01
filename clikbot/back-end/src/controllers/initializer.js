"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var whatsapp_1 = require("../api/whatsapp");
var path = require("path");
var auth_1 = require("./auth");
var browser_1 = require("./browser");
var events_1 = require("./events");
var uniq = require('lodash.uniq');
var shouldLoop = true;
var fs = require('fs');
var pjson = require('../../package.json');
var timeout = function (ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms, 'timeout'); });
};
var waPage;
var qrTimeout;
/**
 * Should be called to initialize whatsapp client.
 * *Note* You can send all params as a single object with the new [ConfigObject](https://smashah.github.io/sulla/interfaces/configobject.html) that includes both [sessionId](https://smashah.github.io/sulla/interfaces/configobject.html#sessionId) and [customUseragent](ttps://smashah.github.io/sulla/interfaces/configobject.html#customUseragent).
 *
 * e.g
 *
 * ```javascript
 * create({
 * sessionId: 'main',
 * customUserAgent: ' 'WhatsApp/2.16.352 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Safari/605.1.15',
 * blockCrashLogs true,
 * ...
 * })....
 * ```
 * @param sessionId [string | ConfigObject ]Custom id for the session, every phone should have it's own sessionId. THIS CAN BE THE CONFIG OBJECT INSTEAD
 * @param config The extended custom configuration
 * @param customUserAgent A custom user agent to set on the browser page.
 */
//export async function create(sessionId?: string, config?:ConfigObject, customUserAgent?:string) {
//@ts-ignore
function create(sessionId, config, customUserAgent) {
    return __awaiter(this, void 0, void 0, function () {
        var spinner, throwOnError_1, PAGE_UA, BROWSER_VERSION, SULLA_HOTFIX_VERSION, WA_VERSION, canInjectEarly, debugInfo, authenticated, autoRefresh_1, qrLoop_1, qrSpin, race, result, pre, VALID_SESSION, localStorage_1, _a, _b, sessionjsonpath, sessionData, BROKEN_METHODS, LANG_CHECK, error_1;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (typeof sessionId === 'object' && sessionId) {
                        config = sessionId;
                        sessionId = config.sessionId;
                        customUserAgent = config.customUserAgent;
                    }
                    if (!sessionId)
                        sessionId = 'session';
                    spinner = new events_1.Spin(sessionId, 'STARTUP');
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 27, , 29]);
                    waPage = undefined;
                    qrTimeout = undefined;
                    shouldLoop = true;
                    spinner.start('Initializing whatsapp');
                    return [4 /*yield*/, browser_1.initWhatsapp(sessionId, config, customUserAgent)];
                case 2:
                    waPage = _c.sent();
                    spinner.succeed();
                    throwOnError_1 = config && config.throwErrorOnTosBlock == true;
                    return [4 /*yield*/, waPage.evaluate('navigator.userAgent')];
                case 3:
                    PAGE_UA = _c.sent();
                    return [4 /*yield*/, waPage.browser().version()];
                case 4:
                    BROWSER_VERSION = _c.sent();
                    SULLA_HOTFIX_VERSION = pjson.version;
                    return [4 /*yield*/, waPage.evaluate(function () { return window.Debug ? window.Debug.VERSION : 'I think you have been TOS_BLOCKed'; })
                        //@ts-ignore
                    ];
                case 5:
                    WA_VERSION = _c.sent();
                    return [4 /*yield*/, waPage.evaluate(function () { return (typeof webpackJsonp !== "undefined"); })];
                case 6:
                    canInjectEarly = _c.sent();
                    debugInfo = {
                        WA_VERSION: WA_VERSION,
                        PAGE_UA: PAGE_UA,
                        SULLA_HOTFIX_VERSION: SULLA_HOTFIX_VERSION,
                        BROWSER_VERSION: BROWSER_VERSION
                    };
                    spinner.emit(debugInfo, "DebugInfo");
                    console.log('Debug Info', debugInfo);
                    if (!canInjectEarly) return [3 /*break*/, 8];
                    spinner.start('Injecting api');
                    return [4 /*yield*/, browser_1.injectApi(waPage)];
                case 7:
                    waPage = _c.sent();
                    spinner.start('WAPI injected');
                    return [3 /*break*/, 9];
                case 8:
                    if (throwOnError_1)
                        throw Error('TOSBLOCK');
                    console.log('Possilby TOS_BLOCKed');
                    _c.label = 9;
                case 9:
                    spinner.start('Authenticating');
                    return [4 /*yield*/, auth_1.isAuthenticated(waPage)];
                case 10:
                    authenticated = _c.sent();
                    autoRefresh_1 = config ? config.autoRefresh : false;
                    qrLoop_1 = function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!shouldLoop)
                                        return [2 /*return*/];
                                    console.log(' ');
                                    return [4 /*yield*/, auth_1.retrieveQR(waPage, sessionId, autoRefresh_1, throwOnError_1)];
                                case 1:
                                    _a.sent();
                                    console.log(' ');
                                    qrTimeout = timeout((config ? (config.qrRefreshS || 10) : 10) * 1000);
                                    return [4 /*yield*/, qrTimeout];
                                case 2:
                                    _a.sent();
                                    if (autoRefresh_1)
                                        qrLoop_1();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    if (!authenticated) return [3 /*break*/, 11];
                    spinner.succeed('Authenticated');
                    return [3 /*break*/, 15];
                case 11:
                    spinner.info('Authenticate to continue');
                    qrSpin = new events_1.Spin(sessionId, 'QR');
                    qrSpin.start('Loading QR');
                    qrSpin.succeed();
                    qrLoop_1();
                    race = [];
                    race.push(auth_1.isInsideChat(waPage).toPromise());
                    if (config && config.killTimer) {
                        race.push(timeout(config.killTimer * 1000));
                    }
                    return [4 /*yield*/, Promise.race(race)];
                case 12:
                    result = _c.sent();
                    if (!(result == 'timeout')) return [3 /*break*/, 14];
                    console.log('Session timed out. Shutting down');
                    return [4 /*yield*/, kill()];
                case 13:
                    _c.sent();
                    throw new Error('QR Timeout');
                case 14:
                    shouldLoop = false;
                    clearTimeout(qrTimeout);
                    spinner.succeed();
                    _c.label = 15;
                case 15:
                    pre = canInjectEarly ? 'Rei' : 'I';
                    spinner.start(pre + "njecting api");
                    return [4 /*yield*/, browser_1.injectApi(waPage)];
                case 16:
                    waPage = _c.sent();
                    spinner.succeed("WAPI " + pre + "njected");
                    if (!canInjectEarly) return [3 /*break*/, 18];
                    //check if page is valid after 5 seconds
                    spinner.start('Checking if session is valid');
                    return [4 /*yield*/, timeout(5000)];
                case 17:
                    _c.sent();
                    _c.label = 18;
                case 18: return [4 /*yield*/, waPage.evaluate(function () { return window.Store && window.Store.Msg ? true : false; })];
                case 19:
                    VALID_SESSION = _c.sent();
                    if (!VALID_SESSION) return [3 /*break*/, 23];
                    spinner.succeed('Whatsapp is ready');
                    _b = (_a = JSON).parse;
                    return [4 /*yield*/, waPage.evaluate(function () {
                            return JSON.stringify(window.localStorage);
                        })];
                case 20:
                    localStorage_1 = _b.apply(_a, [_c.sent()]);
                    sessionjsonpath = path.join(process.cwd(), (sessionId || 'session') + ".data.json");
                    sessionData = {
                        WABrowserId: localStorage_1.WABrowserId,
                        WASecretBundle: localStorage_1.WASecretBundle,
                        WAToken1: localStorage_1.WAToken1,
                        WAToken2: localStorage_1.WAToken2
                    };
                    spinner.emit(sessionData, "sessionData");
                    fs.writeFile(sessionjsonpath, JSON.stringify(sessionData), function (err) {
                        if (err) {
                            console.error(err);
                            return;
                        }
                        ;
                    });
                    return [4 /*yield*/, waPage.evaluate(function (checkList) {
                            return checkList.filter(function (check) {
                                return eval(check) ? false : true;
                            });
                        }, uniq(fs.readFileSync(path.join(__dirname, '../lib', 'wapi.js'), 'utf8').match(/(Store[.\w]*)\(/g).map(function (x) { return x.replace("(", ""); })))];
                case 21:
                    BROKEN_METHODS = _c.sent();
                    return [4 /*yield*/, waPage.evaluate(function () { if (window.l10n.localeStrings['en'])
                            return window.l10n.localeStrings['en'][0].findIndex(function (x) { return x.toLowerCase() == 'use here'; }) == 257;
                        else
                            return false; })];
                case 22:
                    LANG_CHECK = _c.sent();
                    if (BROKEN_METHODS.length > 0)
                        console.log("!!!!!BROKEN METHODS DETECTED!!!!\n\n\nPlease make a new issue in:\n\n https://github.com/smashah/sulla/issues \n\nwith the following title:\n\nBROKEN METHODS: ", WA_VERSION, "\n\nAdd this to the body of the issue:\n\n", BROKEN_METHODS, "\n\n\n!!!!!BROKEN METHODS DETECTED!!!!");
                    if (!LANG_CHECK)
                        console.log('Some language based features (e.g forceRefocus) are broken. Please report this in Github.');
                    return [2 /*return*/, new whatsapp_1.Whatsapp(waPage)];
                case 23:
                    spinner.fail('The session is invalid. Retrying');
                    return [4 /*yield*/, kill()];
                case 24:
                    _c.sent();
                    return [4 /*yield*/, create(sessionId, config, customUserAgent)];
                case 25: return [2 /*return*/, _c.sent()];
                case 26: return [3 /*break*/, 29];
                case 27:
                    error_1 = _c.sent();
                    spinner.emit(error_1.message);
                    return [4 /*yield*/, kill()];
                case 28:
                    _c.sent();
                    throw error_1;
                case 29: return [2 /*return*/];
            }
        });
    });
}
exports.create = create;
var kill = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                shouldLoop = false;
                if (qrTimeout)
                    clearTimeout(qrTimeout);
                if (!waPage) return [3 /*break*/, 3];
                return [4 /*yield*/, waPage.close()];
            case 1:
                _a.sent();
                if (!waPage.browser()) return [3 /*break*/, 3];
                return [4 /*yield*/, waPage.browser().close()];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };

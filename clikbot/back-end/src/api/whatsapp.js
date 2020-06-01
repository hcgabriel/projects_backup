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
/**
 * @private
 */
var exposed_enum_1 = require("./functions/exposed.enum");
var axios_1 = require("axios");
var puppeteer_config_1 = require("../config/puppeteer.config");
var sharp_1 = require("sharp");
exports.getBase64 = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var res, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1["default"]
                        .get(url, {
                        responseType: 'arraybuffer'
                    })];
            case 1:
                res = _a.sent();
                return [2 /*return*/, "data:" + res.headers['content-type'] + ";base64," + Buffer.from(res.data, 'binary').toString('base64')
                    // return Buffer.from(response.data, 'binary').toString('base64')
                ];
            case 2:
                error_1 = _a.sent();
                console.log("TCL: getBase64 -> error", error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
function base64MimeType(encoded) {
    var result = null;
    if (typeof encoded !== 'string') {
        return result;
    }
    var mime = encoded.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
    if (mime && mime.length) {
        result = mime[1];
    }
    return result;
}
var Whatsapp = /** @class */ (function () {
    /**
     * @param page [Page] [Puppeteer Page]{@link https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-page} running web.whatsapp.com
     */
    function Whatsapp(page) {
        this.page = page;
        this.page = page;
    }
    /**
     * @event Listens to messages received
     * @fires Observable stream of messages
     */
    Whatsapp.prototype.onMessage = function (fn) {
        this.page.exposeFunction(exposed_enum_1.ExposedFn.OnMessage, function (message) {
            return fn(message);
        });
    };
    /**
     * @event Listens to all new messages
     * @param to callback
     * @fires Message
     */
    Whatsapp.prototype.onAnyMessage = function (fn) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.page.exposeFunction(exposed_enum_1.ExposedFn.OnAnyMessage, function (message) {
                    return fn(message);
                }).then(function (_) { return _this.page.evaluate(function () {
                    WAPI.addAllNewMessagesListener(window["onAnyMessage"]);
                }); });
                return [2 /*return*/];
            });
        });
    };
    /**
     * @event Listens to messages received
     * @returns Observable stream of messages
     */
    Whatsapp.prototype.onStateChanged = function (fn) {
        var _this = this;
        this.page.exposeFunction(exposed_enum_1.ExposedFn.onStateChanged, function (state) {
            return fn(state);
        }).then(function (_) { return _this.page.evaluate(function () {
            WAPI.onStateChanged(function (s) { return window['onStateChanged'](s.state); });
        }); });
    };
    /**
     * set your about me
     * @param newStatus String new profile status
     */
    Whatsapp.prototype.setMyStatus = function (newStatus) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var newStatus = _a.newStatus;
                            WAPI.setMyStatus(newStatus);
                        }, { newStatus: newStatus })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Set your profile name
     * @param newName String new name to set for your profile
     */
    Whatsapp.prototype.setMyName = function (newName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var newName = _a.newName;
                            WAPI.setMyName(newName);
                        }, { newName: newName })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sets the chat state
     * @param {ChatState|0|1|2} chatState The state you want to set for the chat. Can be TYPING (0), RECRDING (1) or PAUSED (2).
     * @param {String} chatId
     */
    Whatsapp.prototype.setChatState = function (chatState, chatId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var chatState = _a.chatState, chatId = _a.chatId;
                            WAPI.setChatState(chatState, chatId);
                        }, 
                        //@ts-ignore
                        { chatState: chatState, chatId: chatId })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns the connecction state
     * @returns Any of OPENING, PAIRING, UNPAIRED, UNPAIRED_IDLE, CONNECTED, TIMEOUT, CONFLICT, UNLAUNCHED, PROXYBLOCK, TOS_BLOCK, SMB_TOS_BLOCK, DEPRECATED_VERSION
     */
    Whatsapp.prototype.getConnectionState = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function () { return Store.State["default"].state; })];
                    case 1: 
                    //@ts-ignore
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @event Listens to messages acknowledgement Changes
     * @returns Observable stream of messages
     */
    Whatsapp.prototype.onAck = function (fn) {
        this.page.exposeFunction(exposed_enum_1.ExposedFn.onAck, function (message) {
            return fn(message);
        });
    };
    /**
     * Shuts down the page and browser
     * @returns true
     */
    Whatsapp.prototype.kill = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Shutting Down');
                        if (!this.page) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.page.close()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.page.browser) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.page.browser().close()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    };
    Whatsapp.prototype.forceRefocus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var useHere;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function () { var _a; return window.l10n.localeStrings[window.l10n._locale.l][0][((_a = window.l10n.localeStrings['en']) === null || _a === void 0 ? void 0 : _a[0].findIndex(function (x) { return x.toLowerCase() == 'use here'; })) || 257]; })];
                    case 1:
                        useHere = _a.sent();
                        return [4 /*yield*/, this.page.waitForFunction("[...document.querySelectorAll(\"div[role=button\")].find(e=>{return e.innerHTML.toLowerCase()===\"" + useHere.toLowerCase() + "\"})", { timeout: 0 })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.page.evaluate("[...document.querySelectorAll(\"div[role=button\")].find(e=>{return e.innerHTML.toLowerCase()==\"" + useHere.toLowerCase() + "\"}).click()")];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @event Listens to live locations from a chat that already has valid live locations
     * @param chatId the chat from which you want to subscribes to live location updates
     * @param fn callback that takes in a LiveLocationChangedEvent
     * @returns boolean, if returns false then there were no valid live locations in the chat of chatId
     * @emits <LiveLocationChangedEvent> LiveLocationChangedEvent
     */
    Whatsapp.prototype.onLiveLocation = function (chatId, fn) {
        var _this = this;
        var funcName = "onLiveLocation_" + chatId.replace('_', "").replace('_', "");
        return this.page.exposeFunction(funcName, function (liveLocationChangedEvent) {
            return fn(liveLocationChangedEvent);
        })
            .then(function (_) { return _this.page.evaluate(function (_a) {
            var chatId = _a.chatId, funcName = _a.funcName;
            //@ts-ignore
            return WAPI.onLiveLocation(chatId, window[funcName]);
        }, { chatId: chatId, funcName: funcName }); });
    };
    /**
     * @event Listens to add and remove evevnts on Groups
     * @param to group id: xxxxx-yyyy@us.c
     * @param to callback
     * @returns Observable stream of participantChangedEvent
     */
    Whatsapp.prototype.onParticipantsChanged = function (groupId, fn) {
        var _this = this;
        var funcName = "onParticipantsChanged_" + groupId.replace('_', "").replace('_', "");
        return this.page.exposeFunction(funcName, function (participantChangedEvent) {
            return fn(participantChangedEvent);
        })
            .then(function (_) { return _this.page.evaluate(function (_a) {
            var groupId = _a.groupId, funcName = _a.funcName;
            //@ts-ignore
            WAPI.onParticipantsChanged(groupId, window[funcName]);
        }, { groupId: groupId, funcName: funcName }); });
    };
    /**
     * @event Fires callback with Chat object every time the host phone is added to a group.
     * @param to callback
     * @returns Observable stream of Chats
     */
    Whatsapp.prototype.onAddedToGroup = function (fn) {
        var _this = this;
        var funcName = "onAddedToGroup";
        return this.page.exposeFunction(funcName, function (chat) {
            return fn(chat);
        })
            .then(function (_) { return _this.page.evaluate(function () {
            //@ts-ignore
            WAPI.onAddedToGroup(window.onAddedToGroup);
        }); });
    };
    /**
     * Sends a text message to given chat
     * @param to chat id: xxxxx@us.c
     * @param content text message
     */
    Whatsapp.prototype.sendText = function (to, content) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var to = _a.to, content = _a.content;
                            WAPI.sendSeen(to);
                            return WAPI.sendMessage(to, content);
                        }, { to: to, content: content })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sends a text message to given chat that includes mentions.
     * In order to use this method correctly you will need to send the text like this:
     * "@4474747474747 how are you?"
     * Basically, add a @ symbol before the number of the contact you want to mention.
     * @param to chat id: xxxxx@us.c
     * @param content text message
     */
    Whatsapp.prototype.sendTextWithMentions = function (to, content) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var to = _a.to, content = _a.content;
                            WAPI.sendSeen(to);
                            return WAPI.sendMessageWithMentions(to, content);
                        }, { to: to, content: content })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Whatsapp.prototype.sendMessageWithThumb = function (thumb, url, title, description, chatId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var thumb = _a.thumb, url = _a.url, title = _a.title, description = _a.description, chatId = _a.chatId;
                            WAPI.sendMessageWithThumb(thumb, url, title, description, chatId);
                        }, {
                            thumb: thumb,
                            url: url,
                            title: title,
                            description: description,
                            chatId: chatId
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sends a location message to given chat
     * @param to chat id: xxxxx@c.us
     * @param lat latitude: '51.5074'
     * @param lng longitude: '0.1278'
     * @param loc location text: 'LONDON!'
     */
    Whatsapp.prototype.sendLocation = function (to, lat, lng, loc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var to = _a.to, lat = _a.lat, lng = _a.lng, loc = _a.loc;
                            WAPI.sendLocation(to, lat, lng, loc);
                        }, { to: to, lat: lat, lng: lng, loc: loc })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get the generated user agent, this is so you can send it to the decryption module.
     * @returns String useragent of wa-web session
     */
    Whatsapp.prototype.getGeneratedUserAgent = function (userA) {
        return __awaiter(this, void 0, void 0, function () {
            var ua;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ua = userA || puppeteer_config_1.useragent;
                        return [4 /*yield*/, this.page.evaluate(function (_a) {
                                var ua = _a.ua;
                                return WAPI.getGeneratedUserAgent(ua);
                            }, { ua: ua })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sends a image to given chat, with caption or not, using base64
     * @param to chat id xxxxx@us.c
     * @param base64 base64 data:image/xxx;base64,xxx
     * @param filename string xxxxx
     * @param caption string xxxxx
     */
    Whatsapp.prototype.sendImage = function (to, base64, filename, caption) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var to = _a.to, base64 = _a.base64, filename = _a.filename, caption = _a.caption;
                            WAPI.sendImage(base64, to, filename, caption);
                        }, { to: to, base64: base64, filename: filename, caption: caption })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *
     * @param to string chatid
     * @param content string reply text
     * @param quotedMsg string | Message the msg object or id to reply to.
     */
    Whatsapp.prototype.reply = function (to, content, quotedMsg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var to = _a.to, content = _a.content, quotedMsg = _a.quotedMsg;
                            WAPI.reply(to, content, quotedMsg);
                        }, { to: to, content: content, quotedMsg: quotedMsg })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sends a file to given chat, with caption or not, using base64. This is exactly the same as sendImage
     * @param to chat id xxxxx@us.c
     * @param base64 base64 data:image/xxx;base64,xxx
     * @param filename string xxxxx
     * @param caption string xxxxx
     */
    Whatsapp.prototype.sendFile = function (to, base64, filename, caption) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var to = _a.to, base64 = _a.base64, filename = _a.filename, caption = _a.caption;
                            WAPI.sendImage(base64, to, filename, caption);
                        }, { to: to, base64: base64, filename: filename, caption: caption })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sends a video to given chat as a gif, with caption or not, using base64
     * @param to chat id xxxxx@us.c
     * @param base64 base64 data:video/xxx;base64,xxx
     * @param filename string xxxxx
     * @param caption string xxxxx
     */
    Whatsapp.prototype.sendVideoAsGif = function (to, base64, filename, caption) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var to = _a.to, base64 = _a.base64, filename = _a.filename, caption = _a.caption;
                            WAPI.sendVideoAsGif(base64, to, filename, caption);
                        }, { to: to, base64: base64, filename: filename, caption: caption })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sends a video to given chat as a gif by using a giphy link, with caption or not, using base64
     * @param to chat id xxxxx@us.c
     * @param giphyMediaUrl string https://media.giphy.com/media/oYtVHSxngR3lC/giphy.gif => https://i.giphy.com/media/oYtVHSxngR3lC/200w.mp4
     * @param caption string xxxxx
     */
    Whatsapp.prototype.sendGiphy = function (to, giphyMediaUrl, caption) {
        return __awaiter(this, void 0, void 0, function () {
            var ue, n, r, filename, base64;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ue = /^https?:\/\/media\.giphy\.com\/media\/([a-zA-Z0-9]+)/;
                        n = ue.exec(giphyMediaUrl);
                        if (!n) return [3 /*break*/, 3];
                        r = "https://i.giphy.com/" + n[1] + ".mp4";
                        filename = n[1] + ".mp4";
                        return [4 /*yield*/, exports.getBase64(r)];
                    case 1:
                        base64 = _a.sent();
                        return [4 /*yield*/, this.page.evaluate(function (_a) {
                                var to = _a.to, base64 = _a.base64, filename = _a.filename, caption = _a.caption;
                                WAPI.sendVideoAsGif(base64, to, filename, caption);
                            }, { to: to, base64: base64, filename: filename, caption: caption })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        console.log('something is wrong with this giphy link');
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Returns an object with all of your host device details
     */
    Whatsapp.prototype.getMe = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function () { return Store.Me.attributes; })];
                    case 1: 
                    // return await this.page.evaluate(() => WAPI.getMe());
                    //@ts-ignore
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Find any product listings of the given number. Use this to query a catalog
     *
     * @param id id of buseinss profile (i.e the number with @c.us)
     * @param done Optional callback function for async execution
     * @returns None
     */
    Whatsapp.prototype.getBusinessProfilesProducts = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var id = _a.id;
                            WAPI.getBusinessProfilesProducts(id);
                        }, { id: id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sends product with image to chat
     * @param imgBase64 Base64 image data
     * @param chatid string the id of the chat that you want to send this product to
     * @param caption string the caption you want to add to this message
     * @param bizNumber string the @c.us number of the business account from which you want to grab the product
     * @param productId string the id of the product within the main catalog of the aforementioned business
     * @param done - function - Callback function to be called contained the buffered messages.
     * @returns
     */
    Whatsapp.prototype.sendImageWithProduct = function (to, base64, caption, bizNumber, productId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var to = _a.to, base64 = _a.base64, bizNumber = _a.bizNumber, caption = _a.caption, productId = _a.productId;
                            WAPI.sendImageWithProduct(base64, to, caption, bizNumber, productId);
                        }, { to: to, base64: base64, bizNumber: bizNumber, caption: caption, productId: productId })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sends contact card to given chat id
     * @param {string} to 'xxxx@c.us'
     * @param {string|array} contact 'xxxx@c.us' | ['xxxx@c.us', 'yyyy@c.us', ...]
     */
    Whatsapp.prototype.sendContact = function (to, contactId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var to = _a.to, contactId = _a.contactId;
                            return WAPI.sendContact(to, contactId);
                        }, { to: to, contactId: contactId })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Simulate '...typing' in chat
     * @param {string} to 'xxxx@c.us'
     * @param {boolean} on turn on similated typing, false to turn it off you need to manually turn this off.
     */
    Whatsapp.prototype.simulateTyping = function (to, on) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var to = _a.to, on = _a.on;
                            return WAPI.simulateTyping(to, on);
                        }, { to: to, on: on })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Forward an array of messages to a specific chat using the message ids or Objects
     *
     * @param {string} to '000000000000@c.us'
     * @param {string|array[Message | string]} messages this can be any mixture of message ids or message objects
     * @param {boolean} skipMyMessages This indicates whether or not to skip your own messages from the array
     */
    Whatsapp.prototype.forwardMessages = function (to, messages, skipMyMessages) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var to = _a.to, messages = _a.messages, skipMyMessages = _a.skipMyMessages;
                            return WAPI.forwardMessages(to, messages, skipMyMessages);
                        }, { to: to, messages: messages, skipMyMessages: skipMyMessages })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieves all contacts
     * @returns array of [Contact]
     */
    Whatsapp.prototype.getAllContacts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function () { return WAPI.getAllContacts(); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Whatsapp.prototype.getWAVersion = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function () { return WAPI.getWAVersion(); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieves if the phone is online. Please note that this may not be real time.
     * @returns Boolean
     */
    Whatsapp.prototype.isConnected = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function () { return WAPI.isConnected(); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieves Battery Level
     * @returns Number
     */
    Whatsapp.prototype.getBatteryLevel = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function () { return WAPI.getBatteryLevel(); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieves all chats
     * @returns array of [Chat]
     */
    Whatsapp.prototype.getAllChats = function (withNewMessageOnly) {
        if (withNewMessageOnly === void 0) { withNewMessageOnly = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!withNewMessageOnly) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.page.evaluate(function () {
                                return WAPI.getAllChatsWithNewMsg();
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.page.evaluate(function () { return WAPI.getAllChats(); })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieves all chats with messages
     * @returns array of [Chat]
     */
    Whatsapp.prototype.getAllChatsWithMessages = function (withNewMessageOnly) {
        if (withNewMessageOnly === void 0) { withNewMessageOnly = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, this.page.evaluate(function (withNewMessageOnly) { return WAPI.getAllChatsWithMessages(withNewMessageOnly); }, withNewMessageOnly)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    /**
     * Retrieve all groups
     * @returns array of groups
     */
    Whatsapp.prototype.getAllGroups = function (withNewMessagesOnly) {
        if (withNewMessagesOnly === void 0) { withNewMessagesOnly = false; }
        return __awaiter(this, void 0, void 0, function () {
            var chats, chats;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!withNewMessagesOnly) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.page.evaluate(function () { return WAPI.getAllChatsWithNewMsg(); })];
                    case 1:
                        chats = _a.sent();
                        return [2 /*return*/, chats.filter(function (chat) { return chat.isGroup; })];
                    case 2: return [4 /*yield*/, this.page.evaluate(function () { return WAPI.getAllChats(); })];
                    case 3:
                        chats = _a.sent();
                        return [2 /*return*/, chats.filter(function (chat) { return chat.isGroup; })];
                }
            });
        });
    };
    /**
     * Retrieves group members as [Id] objects
     * @param groupId group id
     */
    Whatsapp.prototype.getGroupMembersId = function (groupId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (groupId) { return WAPI.getGroupParticipantIDs(groupId); }, groupId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Removes the host device from the group
     * @param groupId group id
     */
    Whatsapp.prototype.leaveGroup = function (groupId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (groupId) { return WAPI.leaveGroup(groupId); }, groupId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns group members [Contact] objects
     * @param groupId
     */
    Whatsapp.prototype.getGroupMembers = function (groupId) {
        return __awaiter(this, void 0, void 0, function () {
            var membersIds, actions;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getGroupMembersId(groupId)];
                    case 1:
                        membersIds = _a.sent();
                        actions = membersIds.map(function (memberId) {
                            return _this.getContact(memberId._serialized);
                        });
                        return [4 /*yield*/, Promise.all(actions)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieves contact detail object of given contact id
     * @param contactId
     * @returns contact detial as promise
     */
    //@ts-ignore
    Whatsapp.prototype.getContact = function (contactId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (contactId) { return WAPI.getContact(contactId); }, contactId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieves chat object of given contact id
     * @param contactId
     * @returns contact detial as promise
     */
    Whatsapp.prototype.getChatById = function (contactId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (contactId) { return WAPI.getChatById(contactId); }, contactId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieves chat object of given contact id
     * @param contactId
     * @returns contact detial as promise
     */
    Whatsapp.prototype.getChat = function (contactId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (contactId) { return WAPI.getChat(contactId); }, contactId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieves chat picture
     * @param chatId
     * @returns Url of the chat picture or undefined if there is no picture for the chat.
     */
    Whatsapp.prototype.getProfilePicFromServer = function (chatId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (chatId) { return WAPI.getProfilePicFromServer(chatId); }, chatId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sets a chat status to seen. Marks all messages as ack: 3
     * @param chatId chat id: xxxxx@us.c
     */
    Whatsapp.prototype.sendSeen = function (chatId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (chatId) { return WAPI.sendSeen(chatId); }, chatId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
      * Load more messages in chat object from server. Use this in a while loop
     * @param contactId
     * @returns contact detial as promise
     */
    Whatsapp.prototype.loadEarlierMessages = function (contactId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (contactId) { return WAPI.loadEarlierMessages(contactId); }, contactId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get the status of a contact
     * @param contactId {string} to '000000000000@c.us'
     * returns: {id: string,status: string}
     */
    Whatsapp.prototype.getStatus = function (contactId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (contactId) { return WAPI.getStatus(contactId); }, contactId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
      * Load all messages in chat object from server.
     * @param contactId
     * @returns contact detial as promise
     */
    Whatsapp.prototype.asyncLoadAllEarlierMessages = function (contactId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (contactId) { return WAPI.asyncLoadAllEarlierMessages(contactId); }, contactId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
      * Load all messages in chat object from server.
     * @param contactId
     * @returns contact detial as promise
     */
    Whatsapp.prototype.loadAllEarlierMessages = function (contactId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (contactId) { return WAPI.loadAllEarlierMessages(contactId); }, contactId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
      * Delete the conversation from your whatsapp
     * @param chatId
     * @returns boolean
     */
    Whatsapp.prototype.deleteChat = function (chatId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (chatId) { return WAPI.deleteConversation(chatId); }, chatId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
      * Ddelete all messages from the chat.
     * @param chatId
     * @returns boolean
     */
    Whatsapp.prototype.clearChat = function (chatId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (chatId) { return WAPI.clearChat(chatId); }, chatId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Deletes message of given message id
     * @param contactId The chat id from which to delete the message.
     * @param messageId The specific message id of the message to be deleted
     * @param onlyLocal If it should only delete locally (message remains on the other recipienct's phone). Defaults to false.
     * @returns nothing
     */
    Whatsapp.prototype.deleteMessage = function (contactId, messageId, onlyLocal) {
        if (onlyLocal === void 0) { onlyLocal = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var contactId = _a.contactId, messageId = _a.messageId, onlyLocal = _a.onlyLocal;
                            return WAPI.smartDeleteMessages(contactId, messageId, onlyLocal);
                        }, { contactId: contactId, messageId: messageId, onlyLocal: onlyLocal })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Checks if a number is a valid whatsapp number
     * @param contactId, you need to include the @c.us at the end.
     * @returns contact detial as promise
     */
    Whatsapp.prototype.checkNumberStatus = function (contactId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (contactId) { return WAPI.checkNumberStatus(contactId); }, contactId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieves all undread Messages
     * @param includeMe
     * @param includeNotifications
     * @param use_unread_count
     * @returns any
     */
    Whatsapp.prototype.getUnreadMessages = function (includeMe, includeNotifications, use_unread_count) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var includeMe = _a.includeMe, includeNotifications = _a.includeNotifications, use_unread_count = _a.use_unread_count;
                            return WAPI.getUnreadMessages(includeMe, includeNotifications, use_unread_count);
                        }, { includeMe: includeMe, includeNotifications: includeNotifications, use_unread_count: use_unread_count })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieves all new Messages. where isNewMsg==true
     * @returns list of messages
     */
    Whatsapp.prototype.getAllNewMessages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, this.page.evaluate(function () { return WAPI.getAllNewMessages(); })];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    /**
     * Retrieves all unread Messages. where ack==-1
     * @returns list of messages
     */
    Whatsapp.prototype.getAllUnreadMessages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, this.page.evaluate(function () { return WAPI.getAllUnreadMessages(); })];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    /**
     * Retrieves all Messages in a chat
     * @param chatId, the chat to get the messages from
     * @param includeMe, include my own messages? boolean
     * @param includeNotifications
     * @returns any
     */
    Whatsapp.prototype.getAllMessagesInChat = function (chatId, includeMe, includeNotifications) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var chatId = _a.chatId, includeMe = _a.includeMe, includeNotifications = _a.includeNotifications;
                            return WAPI.getAllMessagesInChat(chatId, includeMe, includeNotifications);
                        }, { chatId: chatId, includeMe: includeMe, includeNotifications: includeNotifications })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * loads and Retrieves all Messages in a chat
     * @param chatId, the chat to get the messages from
     * @param includeMe, include my own messages? boolean
     * @param includeNotifications
     * @returns any
     */
    Whatsapp.prototype.loadAndGetAllMessagesInChat = function (chatId, includeMe, includeNotifications) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var chatId = _a.chatId, includeMe = _a.includeMe, includeNotifications = _a.includeNotifications;
                            return WAPI.loadAndGetAllMessagesInChat(chatId, includeMe, includeNotifications);
                        }, { chatId: chatId, includeMe: includeMe, includeNotifications: includeNotifications })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sends a text message to given chat
     * @param to group name: 'New group'
     * @param contacts: A single contact id or an array of contact ids.
     * @returns Promise<GroupCreationResponse> :
     * ```javascript
     * {
     *   status: 200,
     *   gid: {
     *     server: 'g.us',
     *     user: '447777777777-1583678870',
     *     _serialized: '447777777777-1583678870@g.us'
     *   },
     *   participants: [
     *     { '447777777777@c.us': [Object] },
     *     { '447444444444@c.us': [Object] }
     *   ]
     * }
     * ```
     */
    Whatsapp.prototype.createGroup = function (groupName, contacts) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var groupName = _a.groupName, contacts = _a.contacts;
                            return WAPI.createGroup(groupName, contacts);
                        }, { groupName: groupName, contacts: contacts })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Remove participant of Group
     * @param {*} idGroup '0000000000-00000000@g.us'
     * @param {*} idParticipant '000000000000@c.us'
     * @param {*} done - function - Callback function to be called when a new message arrives.
     */
    Whatsapp.prototype.removeParticipant = function (idGroup, idParticipant) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var idGroup = _a.idGroup, idParticipant = _a.idParticipant;
                            return WAPI.removeParticipant(idGroup, idParticipant);
                        }, { idGroup: idGroup, idParticipant: idParticipant })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
    * Add participant to Group
    * @param {*} idGroup '0000000000-00000000@g.us'
    * @param {*} idParticipant '000000000000@c.us'
    * @param {*} done - function - Callback function to be called when a new message arrives.
    */
    Whatsapp.prototype.addParticipant = function (idGroup, idParticipant) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var idGroup = _a.idGroup, idParticipant = _a.idParticipant;
                            return WAPI.addParticipant(idGroup, idParticipant);
                        }, { idGroup: idGroup, idParticipant: idParticipant })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
    * Promote Participant to Admin in Group
    * @param {*} idGroup '0000000000-00000000@g.us'
    * @param {*} idParticipant '000000000000@c.us'
    * @param {*} done - function - Callback function to be called when a new message arrives.
    */
    Whatsapp.prototype.promoteParticipant = function (idGroup, idParticipant) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var idGroup = _a.idGroup, idParticipant = _a.idParticipant;
                            return WAPI.promoteParticipant(idGroup, idParticipant);
                        }, { idGroup: idGroup, idParticipant: idParticipant })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
    * Demote Admin of Group
    * @param {*} idGroup '0000000000-00000000@g.us'
    * @param {*} idParticipant '000000000000@c.us'
    * @param {*} done - function - Callback function to be called when a new message arrives.
    */
    Whatsapp.prototype.demoteParticipant = function (idGroup, idParticipant) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                            var idGroup = _a.idGroup, idParticipant = _a.idParticipant;
                            return WAPI.demoteParticipant(idGroup, idParticipant);
                        }, { idGroup: idGroup, idParticipant: idParticipant })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
    * Get Admins of a Group
    * @param {*} idGroup '0000000000-00000000@g.us'
    */
    Whatsapp.prototype.getGroupAdmins = function (idGroup) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (idGroup) { return WAPI.getGroupAdmins(idGroup); }, idGroup)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This function takes an image and sends it as a sticker to the recipient. This is helpful for sending semi-ephemeral things like QR codes.
     * The advantage is that it will not show up in the recipients gallery. This function automatiicaly converts images to the required webp format.
     * @param b64: This is the base64 string formatted with data URI. You can also send a plain base64 string but it may result in an error as the function will not be able to determine the filetype before sending.
     * @param to: The recipient id.
     */
    Whatsapp.prototype.sendImageAsSticker = function (b64, to) {
        return __awaiter(this, void 0, void 0, function () {
            var buff, mimeInfo, scaledImageBuffer, webp, metadata, webpBase64;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buff = Buffer.from(b64.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
                        mimeInfo = base64MimeType(b64);
                        if (!(!mimeInfo || mimeInfo.includes("image"))) return [3 /*break*/, 5];
                        return [4 /*yield*/, sharp_1["default"](buff, { failOnError: false })
                                .resize({ width: 512, height: 512 })
                                .toBuffer()];
                    case 1:
                        scaledImageBuffer = _a.sent();
                        webp = sharp_1["default"](scaledImageBuffer, { failOnError: false }).webp();
                        return [4 /*yield*/, webp.metadata()];
                    case 2:
                        metadata = _a.sent();
                        return [4 /*yield*/, webp.toBuffer()];
                    case 3:
                        webpBase64 = (_a.sent()).toString('base64');
                        return [4 /*yield*/, this.page.evaluate(function (_a) {
                                var webpBase64 = _a.webpBase64, to = _a.to, metadata = _a.metadata;
                                return WAPI.sendImageAsSticker(webpBase64, to, metadata);
                            }, { webpBase64: webpBase64, to: to, metadata: metadata })];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5:
                        console.log('Not an image');
                        return [2 /*return*/, false];
                }
            });
        });
    };
    return Whatsapp;
}());
exports.Whatsapp = Whatsapp;
var puppeteer_config_2 = require("../config/puppeteer.config");
exports.useragent = puppeteer_config_2.useragent;

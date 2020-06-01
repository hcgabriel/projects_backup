"use strict";
exports.__esModule = true;
var ChatState;
(function (ChatState) {
    ChatState[ChatState["TYPING"] = 0] = "TYPING";
    ChatState[ChatState["RECORDING"] = 1] = "RECORDING";
    ChatState[ChatState["PAUSED"] = 2] = "PAUSED";
})(ChatState = exports.ChatState || (exports.ChatState = {}));
/**
 * Chat types
 * @readonly
 * @enum {string}
 */
var ChatTypes;
(function (ChatTypes) {
    ChatTypes["SOLO"] = "solo";
    ChatTypes["GROUP"] = "group";
    ChatTypes["UNKNOWN"] = "unknown";
})(ChatTypes = exports.ChatTypes || (exports.ChatTypes = {}));
;

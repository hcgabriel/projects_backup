"use strict";
exports.__esModule = true;
/**
 * Client status
 * @readonly
 * @enum {number}
 */
var Status;
(function (Status) {
    Status[Status["INITIALIZING"] = 0] = "INITIALIZING";
    Status[Status["AUTHENTICATING"] = 1] = "AUTHENTICATING";
    Status[Status["READY"] = 3] = "READY";
})(Status = exports.Status || (exports.Status = {}));
;
/**
 * Events that can be emitted by the client
 * @readonly
 * @enum {string}
 */
var Events;
(function (Events) {
    Events["AUTHENTICATED"] = "authenticated";
    Events["AUTHENTICATION_FAILURE"] = "auth_failure";
    Events["READY"] = "ready";
    Events["MESSAGE_RECEIVED"] = "message";
    Events["MESSAGE_CREATE"] = "message_create";
    Events["MESSAGE_REVOKED_EVERYONE"] = "message_revoke_everyone";
    Events["MESSAGE_REVOKED_ME"] = "message_revoke_me";
    Events["MESSAGE_ACK"] = "message_ack";
    Events["GROUP_JOIN"] = "group_join";
    Events["GROUP_LEAVE"] = "group_leave";
    Events["GROUP_UPDATE"] = "group_update";
    Events["QR_RECEIVED"] = "qr";
    Events["DISCONNECTED"] = "disconnected";
    Events["STATE_CHANGED"] = "change_state";
})(Events = exports.Events || (exports.Events = {}));
;
/**
 * WhatsApp state
 * @readonly
 * @enum {string}
 */
var WAState;
(function (WAState) {
    WAState["CONFLICT"] = "CONFLICT";
    WAState["CONNECTED"] = "CONNECTED";
    WAState["DEPRECATED_VERSION"] = "DEPRECATED_VERSION";
    WAState["OPENING"] = "OPENING";
    WAState["PAIRING"] = "PAIRING";
    WAState["PROXYBLOCK"] = "PROXYBLOCK";
    WAState["SMB_TOS_BLOCK"] = "SMB_TOS_BLOCK";
    WAState["TIMEOUT"] = "TIMEOUT";
    WAState["TOS_BLOCK"] = "TOS_BLOCK";
    WAState["UNLAUNCHED"] = "UNLAUNCHED";
    WAState["UNPAIRED"] = "UNPAIRED";
    WAState["UNPAIRED_IDLE"] = "UNPAIRED_IDLE";
})(WAState = exports.WAState || (exports.WAState = {}));
;

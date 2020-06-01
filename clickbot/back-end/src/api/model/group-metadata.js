"use strict";
exports.__esModule = true;
var groupChangeEvent;
(function (groupChangeEvent) {
    groupChangeEvent["remove"] = "remove";
    groupChangeEvent["add"] = "add";
})(groupChangeEvent = exports.groupChangeEvent || (exports.groupChangeEvent = {}));
/**
 * Group notification types
 * @readonly
 * @enum {string}
 */
var GroupNotificationTypes;
(function (GroupNotificationTypes) {
    GroupNotificationTypes["ADD"] = "add";
    GroupNotificationTypes["INVITE"] = "invite";
    GroupNotificationTypes["REMOVE"] = "remove";
    GroupNotificationTypes["LEAVE"] = "leave";
    GroupNotificationTypes["SUBJECT"] = "subject";
    GroupNotificationTypes["DESCRIPTION"] = "description";
    GroupNotificationTypes["PICTURE"] = "picture";
    GroupNotificationTypes["ANNOUNCE"] = "announce";
    GroupNotificationTypes["RESTRICT"] = "restrict";
})(GroupNotificationTypes = exports.GroupNotificationTypes || (exports.GroupNotificationTypes = {}));
;

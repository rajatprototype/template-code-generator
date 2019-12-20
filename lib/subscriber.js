"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
var Subscriber = /** @class */ (function () {
    /**
     * Invoking actions
     * @param {String} action
     */
    function Subscriber(action) {
        this.action = action;
        this.invoke();
    }
    /**
     * Resolving commands
     * @return {void}
     */
    Subscriber.prototype.invoke = function () {
        switch (this.action) {
            case 'g':
            case 'generate':
                actions_1.default.generate();
                break;
            case 'u':
            case 'use':
                actions_1.default.use();
                break;
            case 'l':
            case 'list':
                actions_1.default.list();
                break;
            case 'r':
            case 'remove':
                actions_1.default.remove();
                break;
            case 'rename':
                actions_1.default.rename();
                break;
            case 'h':
            case 'help':
                actions_1.default.doc.commands();
                break;
            case 'v':
            case 'version':
                actions_1.default.doc.version();
                break;
            default:
                actions_1.default.doc.commands();
        }
    };
    return Subscriber;
}());
exports.default = Subscriber;

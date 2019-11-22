"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("./routes");
var AppSettings = /** @class */ (function () {
    /**
     * Settings of an application
     * @param {String} customrcpath
     */
    function AppSettings(customrcpath) {
        /**
         * Run Command
         * @type {String} rcpath
         */
        this.rcpath = routes_1.default.rc;
        if (customrcpath) {
            this.rcpath = customrcpath;
        }
    }
    return AppSettings;
}());
exports.AppSettings = AppSettings;
;

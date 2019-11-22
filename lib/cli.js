"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var supportedActions = require("./values/supportedActions.json");
var cli = {
    /**
     * CLI arguments
     * @type {Getter} args
     * @return {Array<string>}
     */
    get args() {
        return process.argv.slice(2);
    },
    /**
     * Return second argument if they Supported by app
     * @type {Getter} action
     * @return {String}
     */
    get action() {
        var _this = this;
        return supportedActions.find(function (act) { return act === _this.args[0] || null; });
    },
    /**
     * Filtering items started with dot character
     * @type {Getter} extensions
     * @return {Array<string>}
     */
    get extensions() {
        return this.args
            .filter(function (arg) { return /\.\w\w*$/.test(arg); })
            .map(function (file) { return path.extname(file); });
    },
    get files() {
        return this.args.filter(function (arg) { return /^[\w,-]+\.[A-Za-z]/.test(arg); });
    }
};
exports.default = cli;

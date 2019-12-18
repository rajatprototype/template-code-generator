"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var subscriber_1 = require("./subscriber");
exports.default = {
    /**
     * CLI arguments
     * @type {Getter} args
     * @return {Array<string>}
     */
    get args() {
        return process.argv.slice(2);
    },
    /**
     * Must be second parameter
     * @type {Getter} action
     * @return {String}
     */
    get action() {
        return this.args[0];
    },
    /**
     * Filtering items started with dot character
     * @type {Getter} extensions
     * @return {Array<string>}
     */
    get extensions() {
        return this.args
            .filter(function (arg) { return /\.\w\w*$/.test(arg); })
            .map(function (file) { return path_1.extname(file); });
    },
    /**
     * Flag options
     * @type {Getter} flags
     * @return {Array<string>}
     */
    get flags() {
        return this.args
            .filter(function (arg) { return /\-\-[\w-_]*$/.test(arg); })
            .map(function (opt) { return opt.substr(2); });
    },
    /**
     * Argumented flles
     * @type {Getter} files
     * @return {Array<string>}
     */
    get files() {
        return this.args.filter(function (arg) { return /^[\w,-]+\.[A-Za-z]/.test(arg); });
    },
    /**
     * Invoking subscribers
     * @return {Subscriber}
     */
    handle: function () {
        return new subscriber_1.default(this.action);
    }
};

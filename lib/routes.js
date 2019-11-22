"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var routes = {
    /**
     * User home dir
     * @type {Getter} home
     * @return {String}
     */
    get home() {
        return process.env.HOME;
    },
    /**
     * Working dir
     * @type {Getter} pwd
     * @return {String}
     */
    get pwd() {
        return process.env.PWD;
    },
    /**
     * Command values
     * @type {Getter} rc
     * @return {String}
     */
    get rc() {
        return path.join(this.home, '.tcgrc');
    }
};
exports.default = routes;

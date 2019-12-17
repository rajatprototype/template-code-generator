"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var routes = {
    module: {
        /**
         * Default template dir path
         * @type {Getter} defaultDefaultTemplateDir
         * @return {String}
         */
        get defaultTemplateDir() {
            return path_1.join(__dirname, "defaults/codes");
        }
    },
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
     * Prefix path
     * @type {Getter}
     * @return {String}
     */
    get prefix() {
        return path_1.join(routes.home, ".tcg");
    }
};
exports.default = routes;

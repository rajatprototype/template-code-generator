"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("./routes");
var fs = require("fs");
var settings = {
    /**
     * Return app command settings
     * @param {String} rcpath
     * @return {Map<String, String>}
     */
    import: function (rcpath) {
        if (rcpath === void 0) { rcpath = routes_1.default.rc; }
        if (fs.existsSync(rcpath)) {
            var context = fs.readFileSync(rcpath, "UTF-8")
                .split(/\n/)
                .map(function (val) { return val.split(/=/); });
            var iter_1 = new Map();
            context.map(function (item) { return iter_1.set(item[0], item[1]); });
            return iter_1;
        }
        else {
            throw ("Unable to find " + rcpath + " file.");
        }
    },
    /**
     * Prefix path
     * @type {Getter}
     * @return {String}
     */
    get prefix() {
        return this.import().get('prefix');
    },
    /**
     * Default template extension
     * @type {Getter}
     * @return {String}
     */
    get extension() {
        return this.import().get('ext');
    }
};
exports.default = settings;

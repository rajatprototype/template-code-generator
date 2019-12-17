"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("./routes");
var fs_1 = require("fs");
var path_1 = require("path");
var settings = {
    /**
     * Return app command settings
     * @param {String} rcpath
     * @return {Map<String, String>}
     */
    import: function (rcpath) {
        if (rcpath === void 0) { rcpath = routes_1.default.rc; }
        if (fs_1.existsSync(rcpath)) {
            // Reading variables
            var context = fs_1.readFileSync(rcpath, "UTF-8")
                .split(/\n/)
                .map(function (val) { return val.split(/=/); });
            var iter_1 = new Map();
            context.map(function (item) { return iter_1.set(item[0], item[1]); });
            return iter_1;
        }
        else {
            this.generateDefaultConfig();
        }
    },
    generateDefaultTemplates: function () {
        var deftempdir = routes_1.default.defaultDefaultTemplateDir;
        for (var _i = 0, _a = fs_1.readdirSync(deftempdir); _i < _a.length; _i++) {
            var tempfile = _a[_i];
            var srcpath = path_1.join(deftempdir, tempfile);
            var destpath = path_1.join(routes_1.default.td, tempfile);
            fs_1.copyFileSync(srcpath, destpath);
        }
    }
};
exports.default = settings;

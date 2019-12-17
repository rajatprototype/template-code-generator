"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var routes_1 = require("./routes");
var path_1 = require("path");
var prefix = routes_1.default.prefix;
exports.default = {
    /**
     * Template list
     * @type {Getter} list
     * @return {Array<string>}
     */
    get list() {
        if (fs_1.existsSync(prefix)) {
            return fs_1.readdirSync(prefix, "utf-8")
                .map(function (file) { return path_1.join(prefix, file); }); // Abs path
        }
        throw ("Cannot find storage path: " + prefix);
    },
    /**
     * Add new template to storage
     * @param {String} path
     * @return {String}
     */
    add: function (path) {
        if (fs_1.existsSync(path)) {
            var absdest = path_1.join(prefix, path_1.basename(path));
            if (!fs_1.existsSync(absdest)) {
                // Copying dest path to prefix path
                fs_1.copyFileSync(path, absdest);
                return absdest;
            }
            else {
                // Err
                process.stdout.write("Template <" + this.errorText(path_1.basename(absdest)) + "> already exists in records\n");
            }
        }
        else {
            // Err 
            process.stdout.write("Cannot find <" + this.errorText(path_1.basename(path)) + "> base file\n");
        }
        return null;
    },
    /**
     * Generate default template
     * @return {void}
     */
    generateDefaultTemplates: function () {
        var deftempdir = routes_1.default.module.defaultTemplateDir;
        // Generate DIR
        fs_1.mkdirSync(prefix);
        for (var _i = 0, _a = fs_1.readdirSync(deftempdir); _i < _a.length; _i++) {
            var tempfile = _a[_i];
            var srcpath = path_1.join(deftempdir, tempfile); // Inside module
            var destpath = path_1.join(routes_1.default.prefix, tempfile); // Refer to home dir
            fs_1.copyFileSync(srcpath, destpath);
        }
    },
    /**
     * For bright and red colored text
     * @param {String} text
     * @return {String}
     */
    errorText: function (text) {
        return ("\u001B[31m\u001B[1m" + text + "\u001B[0m\u001B[0m");
    },
    /**
     * For bright cyan colored text
     * @param {String} text
     * @return {String}
     */
    cyanText: function (text) {
        return ("\u001B[36m\u001B[1m" + text + "\u001B[0m\u001B[0m");
    },
    /**
     * For magenta colored text
     * @param {String} text
     * @return {String}
     */
    magentaText: function (text) {
        return ("\u001B[35m" + text + "\u001B[0m");
    }
};

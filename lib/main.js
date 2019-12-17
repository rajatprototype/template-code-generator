#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var cli_1 = require("./cli");
var routes_1 = require("./routes");
var utils_1 = require("./utils");
// Initial setup
if (!fs_1.existsSync(routes_1.default.prefix)) {
    utils_1.default.generateDefaultTemplates();
}
// Invoking functions
cli_1.default.handle();

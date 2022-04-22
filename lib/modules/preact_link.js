"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.html = exports.Component = exports.render = exports.h = void 0;
const preact_module_js_1 = require("./preact.module.js");
var preact_module_js_2 = require("./preact.module.js");
Object.defineProperty(exports, "h", { enumerable: true, get: function () { return preact_module_js_2.h; } });
Object.defineProperty(exports, "render", { enumerable: true, get: function () { return preact_module_js_2.render; } });
Object.defineProperty(exports, "Component", { enumerable: true, get: function () { return preact_module_js_2.Component; } });
const htm_module_js_1 = __importDefault(require("./htm.module.js"));
var m = htm_module_js_1.default.bind(preact_module_js_1.h);
exports.html = m;

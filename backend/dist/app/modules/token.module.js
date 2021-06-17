"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("./../config/config"));
function sign() {
    return jsonwebtoken_1.default.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: 'bar'
    }, config_1.default.token);
}
function verify(tokens) {
    return jsonwebtoken_1.default.verify(tokens, config_1.default.token);
}
exports.default = { sign, verify };

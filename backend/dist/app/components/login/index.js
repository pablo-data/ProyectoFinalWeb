"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_network_1 = __importDefault(require("./login.network"));
const login = express_1.default();
login.use('/login', login_network_1.default);
exports.default = login;

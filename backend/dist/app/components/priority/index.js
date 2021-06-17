"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const priority_network_1 = __importDefault(require("./priority.network"));
const priority = express_1.default();
priority.use('/priority', priority_network_1.default);
exports.default = priority;

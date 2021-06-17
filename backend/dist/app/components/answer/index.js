"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const answer_network_1 = __importDefault(require("./answer.network"));
const answer = express_1.default();
answer.use('/answer', answer_network_1.default);
exports.default = answer;

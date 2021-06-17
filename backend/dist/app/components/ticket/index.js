"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ticket_network_1 = __importDefault(require("./ticket.network"));
const ticket = express_1.default();
ticket.use('/ticket', ticket_network_1.default);
exports.default = ticket;

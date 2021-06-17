"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_1 = __importDefault(require("./admin"));
const user_1 = __importDefault(require("./user"));
const priority_1 = __importDefault(require("./priority"));
const form_1 = __importDefault(require("./form"));
const ticket_1 = __importDefault(require("./ticket"));
const answer_1 = __importDefault(require("./answer"));
const login_1 = __importDefault(require("./login"));
const components = [
    admin_1.default,
    user_1.default,
    priority_1.default,
    form_1.default,
    ticket_1.default,
    answer_1.default,
    login_1.default
];
exports.default = components;

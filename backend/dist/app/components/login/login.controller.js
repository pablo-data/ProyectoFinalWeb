"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_repository_1 = __importDefault(require("./login.repository"));
function userLogin(email, password) {
    return login_repository_1.default.userLogin(email, password);
}
function adminLogin(email, password) {
    return login_repository_1.default.adminLogin(email, password);
}
exports.default = { userLogin, adminLogin };

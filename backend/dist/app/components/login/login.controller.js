"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_repository_1 = __importDefault(require("./login.repository"));
//encripta contraseñas
const md5_1 = __importDefault(require("md5"));
function userLogin(email, password) {
    return login_repository_1.default.userLogin(email, password);
}
function adminLogin(email, password) {
    return login_repository_1.default.adminLogin(email, password);
}
function adminForgotPassword(email) {
    return login_repository_1.default.adminForgotPassword(email);
}
function userForgotPassword(email) {
    return login_repository_1.default.userForgotPassword(email);
}
function patchAdmin(id, admin) {
    if (admin.contraseña) {
        admin.contraseña = md5_1.default(admin.contraseña);
    }
    return login_repository_1.default.patchAdmin(id, admin);
}
function patchUser(id, user) {
    if (user.contraseña) {
        user.contraseña = md5_1.default(user.contraseña);
    }
    return login_repository_1.default.patchUser(id, user);
}
exports.default = { userLogin, adminLogin, adminForgotPassword, userForgotPassword, patchAdmin, patchUser };

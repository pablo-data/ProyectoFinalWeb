"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_module_1 = __importDefault(require("./../../modules/database.module"));
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('SELECT * FROM usuario');
        return data;
    });
}
function getUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('SELECT * FROM usuario WHERE idUsuario = ?', [id]);
        return data;
    });
}
function getUserEmail(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('SELECT * FROM usuario WHERE email = ?', [user.email]);
        return data;
    });
}
function getUserRut(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('SELECT * FROM usuario WHERE rut = ?', [user.rut]);
        return data;
    });
}
function postUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('INSERT INTO usuario SET ?', [user]);
        return data;
    });
}
function patchUser(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('UPDATE usuario SET ? WHERE idUsuario = ?', [user, id]);
        return data;
    });
}
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('DELETE FROM usuario WHERE idUsuario = ?', [id]);
        return data;
    });
}
exports.default = { getUsers, getUser, postUser, patchUser, deleteUser, getUserEmail, getUserRut };

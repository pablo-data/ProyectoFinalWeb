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
const user_repository_1 = __importDefault(require("./user.repository"));
//encripta contraseñas
const md5_1 = __importDefault(require("md5"));
function getUsers() {
    return user_repository_1.default.getUsers();
}
function getUser(id) {
    return user_repository_1.default.getUser(id);
}
function postUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        //compruebo si existe email
        const existeEmail = yield user_repository_1.default.getUserEmail(user);
        //compruebo si existe rut
        const existeRut = yield user_repository_1.default.getUserRut(user);
        if (existeEmail[0].length === 0 && existeRut[0].length === 0) {
            user.email = user.email.toLowerCase();
            user.nombres = user.nombres.toLowerCase();
            user.apellidos = user.apellidos.toLowerCase();
            user.direccion = user.direccion.toLowerCase();
            user.region = user.region.toLowerCase();
            user.comuna = user.comuna.toLowerCase();
            //encriptar contraseña
            user.contraseña = md5_1.default(user.contraseña);
            return user_repository_1.default.postUser(user);
        }
        else {
            return Promise.reject('El usuario ya existe');
        }
    });
}
function patchUser(id, user) {
    if (user.email) {
        user.email = user.email.toLowerCase();
    }
    ;
    if (user.nombres) {
        user.nombres = user.nombres.toLowerCase();
    }
    ;
    if (user.apellidos) {
        user.apellidos = user.apellidos.toLowerCase();
    }
    ;
    if (user.direccion) {
        user.direccion = user.direccion.toLowerCase();
    }
    ;
    if (user.region) {
        user.region = user.region.toLowerCase();
    }
    ;
    if (user.comuna) {
        user.comuna = user.comuna.toLowerCase();
    }
    ;
    if (user.contraseña) {
        user.contraseña = md5_1.default(user.contraseña);
    }
    return user_repository_1.default.patchUser(id, user);
}
function deleteUser(id) {
    return user_repository_1.default.deleteUser(id);
}
exports.default = { getUsers, getUser, postUser, patchUser, deleteUser };

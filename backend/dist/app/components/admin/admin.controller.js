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
const admin_repository_1 = __importDefault(require("./admin.repository"));
//encripta contraseñas
const md5_1 = __importDefault(require("md5"));
function getAdmins() {
    return admin_repository_1.default.getAdmins();
}
function getAdmin(id) {
    return admin_repository_1.default.getAdmin(id);
}
function postAdmin(admin) {
    return __awaiter(this, void 0, void 0, function* () {
        //compruebo si existe email
        const existe = yield admin_repository_1.default.getAdminEmail(admin);
        if (existe[0].length === 0) {
            admin.email = admin.email.toLowerCase();
            //encriptar contraseña, pregunta, respuesta
            admin.contraseña = md5_1.default(admin.contraseña);
            admin.pregunta = md5_1.default(admin.pregunta);
            admin.respuesta = md5_1.default(admin.respuesta);
            return admin_repository_1.default.postAdmin(admin);
        }
        else {
            return Promise.reject('La cuenta de administrador ya existe');
        }
    });
}
function deleteAdmin(id) {
    return admin_repository_1.default.deleteAdmin(id);
}
exports.default = { getAdmins, getAdmin, postAdmin, deleteAdmin };

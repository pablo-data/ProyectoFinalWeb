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
const express_1 = __importDefault(require("express"));
const login_controller_1 = __importDefault(require("./login.controller"));
const respuesta_module_1 = __importDefault(require("../../modules/respuesta.module"));
//token
const token_module_1 = __importDefault(require("./../../modules/token.module"));
const router = express_1.default.Router();
//ruta segura
const securityRoute = express_1.default.Router();
securityRoute.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const tokens = req.headers["access-token"];
    try {
        const result = yield token_module_1.default.verify(tokens);
        next();
    }
    catch (error) {
        console.log(error);
        respuesta_module_1.default.error(req, res, 'Token Invalida', 500);
    }
}));
router.get('/user', securityRoute, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.query.email;
    const password = req.query.password;
    try {
        const result = yield login_controller_1.default.userLogin(email, password);
        respuesta_module_1.default.logrado(req, res, result[0], 201);
    }
    catch (error) {
        console.log(error);
        respuesta_module_1.default.error(req, res, 'información invalida', 500);
    }
}));
router.get('/admin', securityRoute, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.query.email;
    const password = req.query.password;
    try {
        const result = yield login_controller_1.default.adminLogin(email, password);
        respuesta_module_1.default.logrado(req, res, result[0], 201);
    }
    catch (error) {
        console.log(error);
        respuesta_module_1.default.error(req, res, 'información invalida', 500);
    }
}));
router.get('/token', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield token_module_1.default.sign();
        respuesta_module_1.default.logrado(req, res, result, 201);
    }
    catch (error) {
        console.log(error);
        respuesta_module_1.default.error(req, res, 'error al traer Token', 500);
    }
}));
exports.default = router;

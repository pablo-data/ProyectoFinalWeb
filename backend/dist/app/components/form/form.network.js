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
const form_controller_1 = __importDefault(require("./form.controller"));
const respuesta_module_1 = __importDefault(require("../../modules/respuesta.module"));
const router = express_1.default.Router();
router.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield form_controller_1.default.getForms();
        respuesta_module_1.default.logrado(req, res, result[0]);
    }
    catch (error) {
        console.log(error);
        respuesta_module_1.default.error(req, res, 'información invalida', 500);
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    try {
        const result = yield form_controller_1.default.getForm(id);
        respuesta_module_1.default.logrado(req, res, result[0]);
    }
    catch (error) {
        console.log(error);
        respuesta_module_1.default.error(req, res, 'información invalida', 500);
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const form = req.body;
    try {
        const result = yield form_controller_1.default.postForm(form);
        respuesta_module_1.default.logrado(req, res, 'Se agregó una nueva solicitud correctamente', 201);
    }
    catch (error) {
        console.log(error);
        respuesta_module_1.default.error(req, res, 'información invalida', 500);
    }
}));
router.patch('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const form = req.body;
    const id = req.params['id'];
    try {
        const result = yield form_controller_1.default.patchForm(id, form);
        respuesta_module_1.default.logrado(req, res, 'Se actualizó una solicitud correctamente', 200);
    }
    catch (error) {
        console.log(error);
        respuesta_module_1.default.error(req, res, 'información invalida', 500);
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    try {
        const result = yield form_controller_1.default.deleteForm(id);
        respuesta_module_1.default.logrado(req, res, 'La eliminación de una solicitud fue realizada', 200);
    }
    catch (error) {
        console.log(error);
        respuesta_module_1.default.error(req, res, 'La eliminación de una solicitud no pudo realizarse', 500);
    }
}));
exports.default = router;

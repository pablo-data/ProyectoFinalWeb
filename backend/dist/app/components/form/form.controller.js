"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const form_repository_1 = __importDefault(require("./form.repository"));
function getForms() {
    return form_repository_1.default.getForms();
}
function getForm(id) {
    return form_repository_1.default.getForm(id);
}
function getFormPerUser(user) {
    return form_repository_1.default.getFormPerUser(user);
}
function postForm(form) {
    form.asunto = form.asunto.toLowerCase();
    form.categoria = form.categoria.toLowerCase();
    form.descripcion = form.descripcion.toLowerCase();
    return form_repository_1.default.postForm(form);
}
function patchForm(id, form) {
    if (form.asunto) {
        form.asunto = form.asunto.toLowerCase();
    }
    ;
    if (form.categoria) {
        form.categoria = form.categoria.toLowerCase();
    }
    ;
    if (form.descripcion) {
        form.descripcion = form.descripcion.toLowerCase();
    }
    ;
    return form_repository_1.default.patchForm(id, form);
}
function deleteForm(id) {
    return form_repository_1.default.deleteForm(id);
}
exports.default = { getForms, getForm, postForm, patchForm, deleteForm, getFormPerUser };

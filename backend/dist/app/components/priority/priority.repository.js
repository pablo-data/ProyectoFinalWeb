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
function getPriorities() {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('SELECT * FROM prioridad');
        return data;
    });
}
function getPriority(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('SELECT * FROM prioridad WHERE idPrioridad = ?', [id]);
        return data;
    });
}
function postPriority(priority) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('INSERT INTO prioridad SET ?', [priority]);
        return data;
    });
}
function patchPriority(id, priority) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('UPDATE prioridad SET ? WHERE idPrioridad = ?', [priority, id]);
        return data;
    });
}
function deletePriority(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('DELETE FROM prioridad WHERE idPrioridad = ?', [id]);
        return data;
    });
}
exports.default = { getPriorities, getPriority, postPriority, patchPriority, deletePriority };

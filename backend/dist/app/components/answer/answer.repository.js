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
const database_module_1 = __importDefault(require("../../modules/database.module"));
function getAnswers() {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('SELECT * FROM ticket_has_admin');
        return data;
    });
}
function getAnswer(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('SELECT * FROM ticket_has_admin WHERE ticket_idTicket = ?', [id]);
        return data;
    });
}
function postAnswer(answer) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('INSERT INTO ticket_has_admin SET ?', [answer]);
        return data;
    });
}
function patchAnswer(id, answer) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('UPDATE ticket_has_admin SET ? WHERE ticket_idTicket = ?', [answer, id]);
        return data;
    });
}
function deleteAnswer(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('DELETE FROM ticket_has_admin WHERE ticket_idTicket = ?', [id]);
        return data;
    });
}
exports.default = { getAnswers, getAnswer, postAnswer, patchAnswer, deleteAnswer };

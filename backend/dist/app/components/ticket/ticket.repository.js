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
function getTickets() {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('SELECT * FROM ticket');
        return data;
    });
}
function getTicket(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('SELECT * FROM ticket WHERE idTicket = ?', [id]);
        return data;
    });
}
function getTicketPerForm(form) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('SELECT * FROM ticket WHERE formulario_idFormulario = ?', [form]);
        return data;
    });
}
function postTicket(ticket) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('INSERT INTO ticket SET ?', [ticket]);
        return data;
    });
}
function patchTicket(id, ticket) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('UPDATE ticket SET ? WHERE idTicket = ?', [ticket, id]);
        return data;
    });
}
function deleteTicket(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_module_1.default.connect();
        const data = conn.query('DELETE FROM ticket WHERE idTicket = ?', [id]);
        return data;
    });
}
exports.default = { getTickets, getTicket, postTicket, patchTicket, deleteTicket, getTicketPerForm };

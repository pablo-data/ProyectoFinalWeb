"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ticket_repository_1 = __importDefault(require("./ticket.repository"));
function getTickets() {
    return ticket_repository_1.default.getTickets();
}
function getTicket(id) {
    return ticket_repository_1.default.getTicket(id);
}
function getTicketPerForm(form) {
    return ticket_repository_1.default.getTicketPerForm(form);
}
function postTicket(ticket) {
    if (ticket.respuesta) {
        ticket.respuesta = ticket.respuesta.toLowerCase();
    }
    ;
    if (ticket.estado) {
        ticket.estado = ticket.estado.toLowerCase();
    }
    ;
    return ticket_repository_1.default.postTicket(ticket);
}
function patchTicket(id, ticket) {
    if (ticket.respuesta) {
        ticket.respuesta = ticket.respuesta.toLowerCase();
    }
    ;
    if (ticket.estado) {
        ticket.estado = ticket.estado.toLowerCase();
    }
    ;
    return ticket_repository_1.default.patchTicket(id, ticket);
}
function deleteTicket(id) {
    return ticket_repository_1.default.deleteTicket(id);
}
exports.default = { getTickets, getTicket, postTicket, patchTicket, deleteTicket, getTicketPerForm };

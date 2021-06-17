import repository from "./ticket.repository";

import { Ticket } from '../../models/ticket.model';

function getTickets(): Promise<any[]>{
    return repository.getTickets();
}

function getTicket(id: string): Promise<any[]>{
    return repository.getTicket(id);
}

function postTicket(ticket: Ticket): Promise<any[]>{
    if(ticket.respuesta){
        ticket.respuesta = ticket.respuesta.toLowerCase(); 
    };
    if(ticket.estado){
        ticket.estado = ticket.estado.toLowerCase(); 
    };
    return repository.postTicket(ticket);
}

function patchTicket(id: string, ticket: Ticket): Promise<any[]>{
    if(ticket.respuesta){
        ticket.respuesta = ticket.respuesta.toLowerCase(); 
    };
    if(ticket.estado){
        ticket.estado = ticket.estado.toLowerCase(); 
    };
    return repository.patchTicket(id, ticket);
}

function deleteTicket(id: string): Promise<any[]>{
    return repository.deleteTicket(id);
}




export default { getTickets, getTicket, postTicket, patchTicket, deleteTicket }
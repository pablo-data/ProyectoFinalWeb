import  database  from './../../modules/database.module';

import { Ticket } from '../../models/ticket.model';

async function getTickets(): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('SELECT * FROM ticket');
    return data;
}

async function getTicket(id: string): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('SELECT * FROM ticket WHERE idTicket = ?', [id]);
    return data;
}

async function getTicketPerForm(form: string): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('SELECT * FROM ticket WHERE formulario_idFormulario = ?', [form]);
    return data;
}

async function postTicket(ticket: Ticket): Promise<any[]> {
    const conn = await database.connect();
    const data =  conn.query('INSERT INTO ticket SET ?', [ticket]);
    return data;
}

async function patchTicket(id: string, ticket: Ticket): Promise<any[]> {
    const conn = await database.connect();
    const data =  conn.query('UPDATE ticket SET ? WHERE idTicket = ?', [ticket, id]);
    return data;
}

async function deleteTicket(id: string): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('DELETE FROM ticket WHERE idTicket = ?', [id]);
    return data;
}


export default { getTickets, getTicket, postTicket, patchTicket, deleteTicket, getTicketPerForm };
import  database  from '../../modules/database.module';
import { Answer } from '../../models/answer.model';

async function getAnswers(): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('SELECT * FROM ticket_has_admin');
    return data;
}

async function getAnswer(id: string): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('SELECT * FROM ticket_has_admin WHERE ticket_idTicket = ?', [id]);
    return data;
}

async function postAnswer(answer: Answer): Promise<any[]> {
    const conn = await database.connect();
    const data =  conn.query('INSERT INTO ticket_has_admin SET ?', [answer]);
    return data;
}

async function patchAnswer(id: string, answer: Answer): Promise<any[]> {
    const conn = await database.connect();
    const data =  conn.query('UPDATE ticket_has_admin SET ? WHERE ticket_idTicket = ?', [answer, id]);
    return data;
}

async function deleteAnswer(id: string): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('DELETE FROM ticket_has_admin WHERE ticket_idTicket = ?', [id]);
    return data;
}


export default { getAnswers, getAnswer, postAnswer, patchAnswer, deleteAnswer };
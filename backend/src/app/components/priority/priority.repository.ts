import  database  from './../../modules/database.module';

import { Priority } from '../../models/priority.model';

async function getPriorities(): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('SELECT * FROM prioridad');
    return data;
}

async function getPriority(id: string): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('SELECT * FROM prioridad WHERE idPrioridad = ?', [id]);
    return data;
}

async function postPriority(priority: Priority): Promise<any[]> {
    const conn = await database.connect();
    const data =  conn.query('INSERT INTO prioridad SET ?', [priority]);
    return data;
}

async function patchPriority(id: string, priority: Priority): Promise<any[]> {
    const conn = await database.connect();
    const data =  conn.query('UPDATE prioridad SET ? WHERE idPrioridad = ?', [priority, id]);
    return data;
}

async function deletePriority(id: string): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('DELETE FROM prioridad WHERE idPrioridad = ?', [id]);
    return data;
}


export default { getPriorities, getPriority, postPriority, patchPriority, deletePriority };
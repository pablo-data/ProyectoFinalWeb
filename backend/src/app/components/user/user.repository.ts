import  database  from './../../modules/database.module';

import { User } from '../../models/user.model';

async function getUsers(): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('SELECT * FROM usuario');
    return data;
}

async function getUser(id: string): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('SELECT * FROM usuario WHERE idUsuario = ?', [id]);
    return data;
}

async function getUserEmail(user: User): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('SELECT * FROM usuario WHERE email = ?', [user.email]);
    return data;
}

async function getUserRut(user: User): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('SELECT * FROM usuario WHERE rut = ?', [user.rut]);
    return data;
}

async function postUser(user: User): Promise<any[]> {
    const conn = await database.connect();
    const data =  conn.query('INSERT INTO usuario SET ?', [user]);
    return data;
}

async function deleteUser(id: string): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('DELETE FROM usuario WHERE idUsuario = ?', [id]);
    return data;
}


export default { getUsers, getUser, postUser, deleteUser, getUserEmail, getUserRut };
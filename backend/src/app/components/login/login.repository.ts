import  database  from './../../modules/database.module';

import { Admin } from '../../models/admin.model';
import { User } from '../../models/user.model';

async function userLogin(email: any, password: any): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('SELECT idUsuario, email FROM usuario WHERE email=? and contraseña=md5(?)', [email, password]);
    return data;
}

async function adminLogin(email: any, password: any): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('SELECT idAdmin, email FROM admin WHERE email=? and contraseña=md5(?)', [email, password]);
    return data;
}

async function adminForgotPassword(email: any): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('SELECT idAdmin, email FROM admin WHERE email=?' , [email]);
    return data;
}

async function userForgotPassword(email: any): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('SELECT idUsuario, email FROM usuario WHERE email=?' , [email]);
    return data;
}

async function patchAdmin(id: string, admin: Admin): Promise<any[]> {
    const conn = await database.connect();
    const data =  conn.query('UPDATE admin SET contraseña=? WHERE idAdmin = ? and pregunta=md5(?) and respuesta=md5(?)', [admin.contraseña, id, admin.pregunta, admin.respuesta]);
    return data;
}

async function patchUser(id: string, user: User): Promise<any[]> {
    const conn = await database.connect();
    const data =  conn.query('UPDATE usuario SET contraseña=? WHERE idUsuario = ? and pregunta=md5(?) and respuesta=md5(?)', [user.contraseña, id, user.pregunta, user.respuesta]);
    return data;
}


export default { userLogin, adminLogin, adminForgotPassword, userForgotPassword, patchAdmin, patchUser};
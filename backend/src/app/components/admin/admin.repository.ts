import  database  from './../../modules/database.module';

import { Admin } from '../../models/admin.model';

async function getAdmins(): Promise<any[]>{
    const conn = await database.connect();
    const data=  conn.query('SELECT * FROM admin');
    return data;
}

async function getAdmin(id: string): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('SELECT * FROM admin WHERE idAdmin = ?', [id]);
    return data;
}

async function getAdminEmail(admin: Admin): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('SELECT * FROM admin WHERE email = ?', [admin.email]);
    return data;
}

async function postAdmin(admin: Admin): Promise<any[]> {
    const conn = await database.connect();
    const data =  conn.query('INSERT INTO admin SET ?', [admin]);
    return data;
    
}

async function deleteAdmin(id: string): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('DELETE FROM admin WHERE idAdmin = ?', [id]);
    return data;
}


export default { getAdmins, getAdmin, postAdmin, deleteAdmin, getAdminEmail };
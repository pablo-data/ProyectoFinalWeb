import  database  from './../../modules/database.module';

import { Form } from '../../models/form.model';

async function getForms(): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('SELECT * FROM formulario');
    return data;
}

async function getForm(id: string): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('SELECT * FROM formulario WHERE idFormulario = ?', [id]);
    return data;
}

async function getFormPerUser(user: string): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('SELECT * FROM formulario WHERE usuario_idUsuario = ?', [user]);
    return data;
}

async function postForm(form: Form): Promise<any[]> {
    const conn = await database.connect();
    const data =  conn.query('INSERT INTO formulario SET ?', [form]);
    return data;
}

async function patchForm(id: string, form: Form): Promise<any[]> {
    const conn = await database.connect();
    const data =  conn.query('UPDATE formulario SET ? WHERE idFormulario = ?', [form, id]);
    return data;
}

async function deleteForm(id: string): Promise<any[]>{
    const conn = await database.connect();
    const data =  conn.query('DELETE FROM formulario WHERE idFormulario = ?', [id]);
    return data;
}


export default { getForms, getForm, postForm, patchForm, deleteForm, getFormPerUser };
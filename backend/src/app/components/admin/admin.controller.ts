import repository from "./admin.repository";
//encripta contraseñas
import md5 from 'md5';

import { Admin } from '../../models/admin.model';

function getAdmins(): Promise<Admin[]>{
    return repository.getAdmins();
}

function getAdmin(id: string): Promise<Admin[]>{
    return repository.getAdmin(id);
}

async function postAdmin(admin: Admin): Promise<any[]>{
    //compruebo si existe email
    const existe = await repository.getAdminEmail(admin);
    if (existe[0].length === 0) {
        admin.email = admin.email.toLowerCase(); 
        //encriptar contraseña, pregunta, respuesta
        admin.contraseña = md5(admin.contraseña);
        admin.pregunta = md5(admin.pregunta);
        admin.respuesta = md5(admin.respuesta);
        return repository.postAdmin(admin);
    }else{
        return Promise.reject('La cuenta de administrador ya existe');
    }

    
}

function deleteAdmin(id: string): Promise<any[]>{
    return repository.deleteAdmin(id);
}




export default { getAdmins, getAdmin, postAdmin, deleteAdmin }
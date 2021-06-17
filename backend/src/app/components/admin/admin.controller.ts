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
        //encriptar contraseña
        admin.contraseña = md5(admin.contraseña);
        return repository.postAdmin(admin);
    }else{
        return Promise.reject('La cuenta de administrado ya existe');
    }

    
}

function patchAdmin(id: string, admin: Admin): Promise<any[]>{
    if(admin.email){
        admin.email = admin.email.toLowerCase();
    }
    if(admin.contraseña){
        admin.contraseña = md5(admin.contraseña);
    } 
    return repository.patchAdmin(id, admin);
}

function deleteAdmin(id: string): Promise<any[]>{
    return repository.deleteAdmin(id);
}




export default { getAdmins, getAdmin, postAdmin, patchAdmin, deleteAdmin }
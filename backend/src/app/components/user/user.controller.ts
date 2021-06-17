import repository from "./user.repository";
//encripta contraseñas
import md5 from 'md5';

import { User } from '../../models/user.model';

function getUsers(): Promise<any[]>{
    return repository.getUsers();
}

function getUser(id: string): Promise<any[]>{
    return repository.getUser(id);
}

async function postUser(user: User): Promise<any[]>{
    //compruebo si existe email
    const existeEmail = await repository.getUserEmail(user);

    //compruebo si existe rut
    const existeRut = await repository.getUserRut(user);

    if (existeEmail[0].length === 0 && existeRut[0].length === 0) {
        user.email = user.email.toLowerCase(); 
        user.nombres = user.nombres.toLowerCase(); 
        user.apellidos = user.apellidos.toLowerCase(); 
        user.direccion = user.direccion.toLowerCase(); 
        user.region = user.region.toLowerCase(); 
        user.comuna = user.comuna.toLowerCase(); 

        //encriptar contraseña
        user.contraseña = md5(user.contraseña);
        return repository.postUser(user);
    }else{
        return Promise.reject();
    }
}

function patchUser(id: string, user: User): Promise<any[]>{
    if(user.email){
        user.email = user.email.toLowerCase(); 
    };
    if(user.nombres){
        user.nombres = user.nombres.toLowerCase(); 
    };
    if(user.apellidos){
        user.apellidos = user.apellidos.toLowerCase(); 
    };
    if(user.direccion){
        user.direccion = user.direccion.toLowerCase();
    };
    if( user.region){
        user.region = user.region.toLowerCase(); 
    };
    if(user.comuna){
        user.comuna = user.comuna.toLowerCase(); 
    };
    if(user.contraseña){
        user.contraseña = md5(user.contraseña);
    }
    return repository.patchUser(id, user);
}

function deleteUser(id: string): Promise<any[]>{
    return repository.deleteUser(id);
}




export default { getUsers, getUser, postUser, patchUser, deleteUser }
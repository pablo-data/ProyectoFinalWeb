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

        //encriptar contraseña, pregunta, respuesta
        user.contraseña = md5(user.contraseña);
        user.pregunta = md5(user.pregunta);
        user.respuesta = md5(user.respuesta);
        return repository.postUser(user);
    }else{
        return Promise.reject('El usuario ya existe');
    }
}

function deleteUser(id: string): Promise<any[]>{
    return repository.deleteUser(id);
}




export default { getUsers, getUser, postUser, deleteUser }
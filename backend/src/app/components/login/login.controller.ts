import repository from "./login.repository";
import { Admin } from '../../models/admin.model';
import { User } from '../../models/user.model';
//encripta contraseñas
import md5 from 'md5';

function userLogin(email: any, password: any): Promise<any[]>{
    return repository.userLogin(email, password);
}

function adminLogin(email: any, password: any): Promise<any[]>{
    return repository.adminLogin(email, password);
}

function adminForgotPassword(email: any): Promise<any[]>{
    return repository.adminForgotPassword(email);
}

function userForgotPassword(email: any): Promise<any[]>{
    return repository.userForgotPassword(email);
}

function patchAdmin(id: string, admin: Admin): Promise<any[]>{
    if(admin.contraseña){
        admin.contraseña = md5(admin.contraseña);
    } 
    return repository.patchAdmin(id, admin);
}

function patchUser(id: string, user: User): Promise<any[]>{
    if(user.contraseña){
        user.contraseña = md5(user.contraseña);
    }
    return repository.patchUser(id, user);
}




export default { userLogin, adminLogin, adminForgotPassword, userForgotPassword, patchAdmin, patchUser }
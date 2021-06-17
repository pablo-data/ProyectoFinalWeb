import repository from "./login.repository";

function userLogin(email: any, password: any): Promise<any[]>{
    return repository.userLogin(email, password);
}

function adminLogin(email: any, password: any): Promise<any[]>{
    return repository.adminLogin(email, password);
}




export default { userLogin, adminLogin }
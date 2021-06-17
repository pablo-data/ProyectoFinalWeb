import  database  from './../../modules/database.module';

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



export default { userLogin, adminLogin };
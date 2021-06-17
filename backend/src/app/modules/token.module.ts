import jwt from "jsonwebtoken";
import token from './../config/config';

function sign(){
    return jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: 'bar'}, token.token);
}


function verify(tokens: string){
    return jwt.verify(tokens, token.token);
}

export default {sign, verify}
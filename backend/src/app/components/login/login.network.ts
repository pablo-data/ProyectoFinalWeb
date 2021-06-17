import express, { Request, Response, Router } from "express";
import controller from "./login.controller";
import respuesta from "../../modules/respuesta.module";

//token
import token from './../../modules/token.module';

const router: Router = express.Router();

//ruta segura
const securityRoute = express.Router();
securityRoute.use(async (req: Request, res: Response, next: any) =>{
    const tokens: any = req.headers["access-token"];
    try{
        const result: any = await  token.verify(tokens);
        next();
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'Token Invalida', 500);
    }
})

router.get('/user', securityRoute,  async (req: Request, res: Response) => {
    const email: any = req.query.email;
    const password:any = req.query.password;
    try{
        const result: any = await controller.userLogin(email, password);
        respuesta.logrado(req, res, result[0], 201);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'información invalida', 500);
    }
});

router.get('/admin', securityRoute,  async (req: Request, res: Response) => {
    const email: any = req.query.email;
    const password:any = req.query.password;
    try{
        const result: any = await controller.adminLogin(email, password);
        respuesta.logrado(req, res, result[0], 201);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'información invalida', 500);
    }
});


router.get('/token', async (req: Request, res: Response) => {
    try{
        const result: any = await  token.sign();
        respuesta.logrado(req, res, result, 201);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'error al traer Token', 500);
    }
});


export default router;
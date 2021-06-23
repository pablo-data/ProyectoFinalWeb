import express, { Request, Response, Router } from "express";
import controller from "./admin.controller";
import respuesta from "../../modules/respuesta.module";

import { Admin } from '../../models/admin.model';

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
    try{
        const result: Admin[] = await controller.getAdmins();
        respuesta.logrado(req, res, result[0]);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'información invalida', 500);
    }
});


router.get('/:id', async (req: Request, res: Response) => {
    const id: string = req.params['id'];
   
    try{
        const result: Admin[] = await controller.getAdmin(id);
        respuesta.logrado(req, res, result[0]);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'información invalida', 500);
    }
});

router.post('/', async (req: Request, res: Response) => {
    const admin: Admin = req.body;
   
    try{
        const result: Admin[] = await controller.postAdmin(admin);
        respuesta.logrado(req, res, 'Se agregó un nuevo admin correctamente', 201);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'información invalida', 500);
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    const id: string = req.params['id'];
   
    try{
        const result: any = await controller.deleteAdmin(id);
        respuesta.logrado(req, res, 'La eliminación de un admin fue realizada', 200);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'La eliminación de un admin no pudo realizarse', 500);
    }
});


export default router;
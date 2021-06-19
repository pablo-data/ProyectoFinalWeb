import express, { Request, Response, Router } from "express";
import controller from "./form.controller";
import respuesta from "../../modules/respuesta.module";

import { Form } from '../../models/form.model';

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
    try{
        const result: Form[] = await controller.getForms();
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
        const result: Form[] = await controller.getForm(id);
        respuesta.logrado(req, res, result[0]);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'información invalida', 500);
    }
});

router.post('/', async (req: Request, res: Response) => {
    const form: Form = req.body;
   
    try{
        const result: any = await controller.postForm(form);
        respuesta.logrado(req, res, result[0].insertId, 201);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'información invalida', 500);
    }
});

router.patch('/:id', async (req: Request, res: Response) => {
    const form: Form = req.body;
    const id: string = req.params['id'];
    try{
        const result: any = await controller.patchForm(id, form);
        respuesta.logrado(req, res, 'Se actualizó una solicitud correctamente', 200);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'información invalida', 500);
    }
});


router.delete('/:id', async (req: Request, res: Response) => {
    const id: string = req.params['id'];
   
    try{
        const result: any = await controller.deleteForm(id);
        respuesta.logrado(req, res, 'La eliminación de una solicitud fue realizada', 200);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'La eliminación de una solicitud no pudo realizarse', 500);
    }
});


export default router;
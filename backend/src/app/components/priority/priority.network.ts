import express, { Request, Response, Router } from "express";
import controller from "./priority.controller";
import respuesta from "../../modules/respuesta.module";


import { Priority } from '../../models/priority.model';

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
    try{
        const result: Priority[] = await controller.getPriorities();
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
        const result: Priority[] = await controller.getPriority(id);
        respuesta.logrado(req, res, result[0]);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'información invalida', 500);
    }
});

router.post('/', async (req: Request, res: Response) => {
    const priority: Priority = req.body;
   
    try{
        const result: any = await controller.postPriority(priority);
        respuesta.logrado(req, res, 'Se agregó una nueva prioridad correctamente', 201);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'información invalida', 500);
    }
});

router.patch('/:id', async (req: Request, res: Response) => {
    const priority: Priority = req.body;
    const id: string = req.params['id'];
    try{
        const result: any = await controller.patchPriority(id, priority);
        respuesta.logrado(req, res, 'Se actualizó una prioridad correctamente', 200);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'información invalida', 500);
    }
});


router.delete('/:id', async (req: Request, res: Response) => {
    const id: string = req.params['id'];
   
    try{
        const result: any = await controller.deletePriority(id);
        respuesta.logrado(req, res, 'Se eliminó una prioridad correctamente', 200);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'La eliminación de una prioridad no pudo realizarse', 500);
    }
});


export default router;
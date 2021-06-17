import express, { Request, Response, Router } from "express";
import controller from "./answer.controller";
import respuesta from "../../modules/respuesta.module";
import { Answer } from '../../models/answer.model';

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
    try{
        const result: Answer[] = await controller.getAnswers();
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
        const result: Answer[] = await controller.getAnswer(id);
        respuesta.logrado(req, res, result[0]);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'información invalida', 500);
    }
});

router.post('/', async (req: Request, res: Response) => {
    const answer: Answer = req.body;
   
    try{
        const result: Answer[] = await controller.postAnswer(answer);
        respuesta.logrado(req, res, 'Se asignó correctamente', 201);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'información invalida', 500);
    }
});

router.patch('/:id', async (req: Request, res: Response) => {
    const answer: Answer = req.body;
    const id: string = req.params['id'];
    try{
        const result: Answer[] = await controller.patchAnswer(id, answer);
        respuesta.logrado(req, res, 'Se actualizó correctamente', 200);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'información invalida', 500);
    }
});


router.delete('/:id', async (req: Request, res: Response) => {
    const id: string = req.params['id'];
   
    try{
        const result: any = await controller.deleteAnswer(id);
        respuesta.logrado(req, res, 'La eliminación fue realizada', 200);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'La eliminación de un answer no pudo realizarse', 500);
    }
});


export default router;
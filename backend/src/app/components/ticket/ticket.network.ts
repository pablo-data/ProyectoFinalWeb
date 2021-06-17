import express, { Request, Response, Router } from "express";
import controller from "./ticket.controller";
import respuesta from "../../modules/respuesta.module";

import { Ticket } from '../../models/ticket.model';

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
    try{
        const result: Ticket[] = await controller.getTickets();
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
        const result: Ticket[] = await controller.getTicket(id);
        respuesta.logrado(req, res, result[0]);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'información invalida', 500);
    }
});

router.post('/', async (req: Request, res: Response) => {
    const ticket: Ticket = req.body;
   
    try{
        const result: any = await controller.postTicket(ticket);
        respuesta.logrado(req, res, 'Se agregó un ticket correctamente', 201);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'información invalida', 500);
    }
});

router.patch('/:id', async (req: Request, res: Response) => {
    const ticket: Ticket = req.body;
    const id: string = req.params['id'];
    try{
        const result: any = await controller.patchTicket(id, ticket);
        respuesta.logrado(req, res, 'Se actualizó un ticket correctamente', 200);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'información invalida', 500);
    }
});


router.delete('/:id', async (req: Request, res: Response) => {
    const id: string = req.params['id'];
   
    try{
        const result: any = await controller.deleteTicket(id);
        respuesta.logrado(req, res, 'Se eliminó un ticket correctamente', 200);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'La eliminación de un ticket no pudo realizarse', 500);
    }
});


export default router;
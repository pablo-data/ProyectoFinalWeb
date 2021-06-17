import express, { Request, Response, Router } from "express";
import controller from "./user.controller";
import respuesta from "../../modules/respuesta.module";

import { User } from '../../models/user.model';

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
    try{
        const result: User[] = await controller.getUsers();
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
        const result: User[] = await controller.getUser(id);
        respuesta.logrado(req, res, result[0]);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'información invalida', 500);
    }
});

router.post('/', async (req: Request, res: Response) => {
    const user: User = req.body;
   
    try{
        const result: any = await controller.postUser(user);
        respuesta.logrado(req, res, 'Se agregó un usuario correctamente', 201);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'información invalida, el usuario ya existe', 500);
    }
});

router.patch('/:id', async (req: Request, res: Response) => {
    const user: User = req.body;
    const id: string = req.params['id'];
    try{
        const result: any = await controller.patchUser(id, user);
        respuesta.logrado(req, res, 'Se actualizó un usuario correctamente', 200);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'información invalida', 500);
    }
});


router.delete('/:id', async (req: Request, res: Response) => {
    const id: string = req.params['id'];
   
    try{
        const result: any = await controller.deleteUser(id);
        respuesta.logrado(req, res, 'Se eliminó un usuario correctamente', 200);
    }
    catch(error){
        console.log(error);
        respuesta.error(req, res, 'La eliminación de un usuario no pudo realizarse', 500);
    }
});


export default router;
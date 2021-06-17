import express, { Express } from "express";
import router from './ticket.network';

const ticket: Express = express();
ticket.use('/ticket', router);

export default ticket;
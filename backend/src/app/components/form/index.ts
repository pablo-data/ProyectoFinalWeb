import express, { Express } from "express";
import router from './form.network';

const form: Express = express();
form.use('/form', router);

export default form;
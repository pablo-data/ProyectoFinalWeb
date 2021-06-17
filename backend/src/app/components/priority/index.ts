import express, { Express } from "express";
import router from './priority.network';

const priority: Express = express();
priority.use('/priority', router);

export default priority;
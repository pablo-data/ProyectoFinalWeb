import express, { Express } from "express";
import router from './answer.network';

const answer: Express = express();
answer.use('/answer', router);

export default answer;
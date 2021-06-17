import express, { Express } from "express";
import router from "./login.network"


const login: Express = express();
login.use('/login', router);

export default login;

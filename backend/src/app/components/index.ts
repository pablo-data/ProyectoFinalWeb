import { Express } from "express";

import admin from "./admin";
import user from "./user";
import priority from './priority';
import form from './form';
import ticket from "./ticket";
import answer from "./answer";
import login from "./login";

const components: Express[] = [
    admin,
    user,
    priority,
    form,
    ticket,
    answer,
    login
];

export default components;
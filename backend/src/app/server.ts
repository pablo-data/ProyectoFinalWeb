import express, { Express } from "express";
import components from "./components";
import cors from "cors";

async function main(){

    const server: Express = express();
    const port: number = 3800;

    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(cors());
    server.use("/api", ...components);

    try{
        server.listen(port, () => {
            console.log(`Servidor escuchando en: http://localhost:${port}`);
        });
    }
    catch(error){
        console.log(error);
    }

    

}

export default { main };
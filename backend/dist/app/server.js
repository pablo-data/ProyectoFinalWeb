"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const components_1 = __importDefault(require("./components"));
const cors_1 = __importDefault(require("cors"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = express_1.default();
        const port = 3800;
        server.use(express_1.default.json());
        server.use(express_1.default.urlencoded({ extended: true }));
        server.use(cors_1.default());
        server.use("/api", ...components_1.default);
        try {
            server.listen(port, () => {
                console.log(`Servidor escuchando en: http://localhost:${port}`);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.default = { main };

import { Router } from "express";
import middleware from "../middlewares/auth.js"
import cadastroController from "../controllers/cadastroController.js"
import loginController from "../controllers/loginController.js";
import buscaUsuarioController from "../controllers/buscaUsuarioController.js";

const roteador = new Router()

roteador.post('/users', cadastroController.cadastro)
roteador.post('/login', loginController.login)
roteador.get('/users/:usuario_id', [middleware], buscaUsuarioController.busca)

export default roteador;
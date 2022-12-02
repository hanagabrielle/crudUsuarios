import loginUsuarioService from "../services/loginUsuarioService.js";

class loginController {
  async login(req, res) {
      let usuarioLogin;
      try{
          usuarioLogin = await loginUsuarioService.logar(req.body)
          if(usuarioLogin){
              res.status(usuarioLogin.status).json(usuarioLogin.message)
          }
      }catch(error){
          res.status(usuarioLogin.status).json(usuarioLogin.message)
      }
  }
}

export default new loginController();

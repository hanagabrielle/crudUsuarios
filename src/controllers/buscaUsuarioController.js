import buscaUsuarioService from "../services/buscaUsuarioService.js";

class buscaUsuarioController{
    async busca(req, res){
        let buscaUsuario;
        try{
            buscaUsuario = await buscaUsuarioService.store(req.params)
            if(buscaUsuario){
                res.status(buscaUsuario.status).json(buscaUsuario.message)
            }
        }catch(error){
            res.status(buscaUsuario.status).json(buscaUsuario.message)
        }
    }
}
export default new buscaUsuarioController();
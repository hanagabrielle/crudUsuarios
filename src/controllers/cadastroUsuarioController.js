import cadastraUsuarioService from "../services/cadastraUsuarioService.js";

class cadastroUsuarioController{
    async cadastro(req, res){
        let cadastro;
        try{
            cadastro = await cadastraUsuarioService.cadastrar(req.body)
            if(cadastro){
                res.status(cadastro.status).json(cadastro.message)
            }
        }catch(error){
            res.status(cadastro.status).json(cadastro.message)
        }
    }
}
export default new cadastroUsuarioController();
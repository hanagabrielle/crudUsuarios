import Users from "../models/user.model.js"

class buscaUsuarioService{
    async buscar(params) {
        let objetoRetorno;
        try{
            const {usuario_id} = params;

            const buscaUsuario = await Users.findOne({where: {usuario_id}});

            objetoRetorno = {
                status: 200,
                message: buscaUsuario
            }
    
            return objetoRetorno;
        }catch(error){
            objetoRetorno = {
                status: 500,
                message: `Erro ao buscar usuário: ${error}`
            }
            return objetoRetorno
        }
    }
}
export default new buscaUsuarioService();
import Users from "../models/user.model.js"

class cadastraUsuarioService{
    async store(params) {
        let objetoRetorno;
        try{
            const {usuario_nome, password, usuario_email, usuario_tipo, usuario_telefone} = params;

            const userExist = await Users.findOne({where: {usuario_email}});
    
            if (userExist) {
                objetoRetorno = {
                    status: 401,
                    message: ` E-mail: ${usuario_email} já possui cadastro.`
                }
                return objetoRetorno
            }
    
            const user = await Users.create({usuario_nome, password, usuario_email, usuario_tipo, usuario_telefone})

            objetoRetorno = {
                status: 200,
                message: `Usuário ${usuario_email} cadastrado com sucesso.`
            }
    
            return objetoRetorno;
        }catch(error){
            objetoRetorno = {
                status: 500,
                message: `Erro ao efetuar cadastro: ${error}`
            }
            return objetoRetorno
        }
    }
}
export default new cadastraUsuarioService();
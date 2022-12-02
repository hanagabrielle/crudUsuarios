import jwt from 'jsonwebtoken';
import authConfig from '../config/configAuthJWT.js';
import Users from '../models/user.model.js';

class loginUsuarioService {
    async logar(params) {
        const { usuario_email = null, password = null } = params;
        let objetoRetorno;
        try{

            const user = await Users.findOne({
                where: { usuario_email }
            });

            if (!(await user.checkPassword(password))) {
                objetoRetorno = {
                    status: 401,
                    message: `E-mail ou senha incorretos!`
                }
                return objetoRetorno
            }

            const {
                usuario_id,
                usuario_nome
            } = user;

            objetoRetorno = {
                status: 200,
                message: {
                    usuario_id,
                    usuario_nome,
                    token: jwt.sign({ usuario_id }, authConfig.secret, {
                        expiresIn: authConfig.expiresIn,
                    })
                }
            }
            return objetoRetorno;
        }catch(error){
            objetoRetorno = {
                status: 500,
                message: `Erro interno: ${error}`
            }
            return objetoRetorno;
        }
    }
}

export default new loginUsuarioService();

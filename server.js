import express from 'express'
import bancoDev_sequelize from './src/database/database.js'
import roteadorGeral from './src/routes/roteador.routes.js'
import cors from 'cors'
import "./src/database/index.js"

class Server {
    constructor() {
        this.server = express()
        this.configServer()
        this.configRotas()
        this.server.listen(process.env.PORT_SERVIDOR, () => {
            console.log('Servidor iniciado na porta ' + process.env.PORT_SERVIDOR)
        })
        this.configBancoDados()

    }

    configServer() {
        this.server.use(express.urlencoded({extended: true}));
        this.server.use(express.json({limit: '1mb'}));
        this.server.use(cors())
    }

    configRotas() {
        this.server.use(roteadorGeral)
    }

    configBancoDados() {
        const bancoDados = bancoDev_sequelize
    }
}

export default Server
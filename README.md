# :link: Rotas do projeto

- `(POST) /users`: Cadastro de (usuario_nome, usuario_email, password, usuario_tipo, usuario_telefone). Retorna qual email foi cadastrado e o id do usuário.
- `(POST) /login`: Retorna dados como (usuario_id, usuario_nome, token).
- `(GET) /users/:usuario_id`: Retorna todos os dados do usuário buscado (com senha criptografada).

# Utilização do serviço
Para a instalação de todos os pacotes:
```
npm i 
```

Inicialização do servidor node:
```
npm run start
```

# Tecnologias utilizadas

- `NodeJs`
- `Sequelize ORM`
- `Postgres`
- `JWT`
- `Bcryptjs`

# Exemplo de .env esperado

DB_HOST=localhost
DB_USER=postgres
DB_PASS=1234
DB_NAME=postgres
DB_PORT=5432
PORT_SERVIDOR=3000
DB_DIALECT='postgres'
# :link: Rotas do projeto

- `(POST) /users`: Cadastro de (usuario_nome, usuario_email, password, usuario_tipo, usuario_telefone)
- `(POST) /login`: Retorna dados como (usuario_id, usuario_nome, token).
- `(GET) /users/:usuario_id`: Retorna todos os dados do usuário buscado (com senha criptografada).

# Utilizacao do servico
Para a instalacao de todos os pacotes:
```
npm i 
```

Inicializacao do servidor node:
```
npm run start
```

# Tecnologias utilizadas

- `NodeJs`
- `Sequlize ORM`
- `Postgres`
- `JWT`
- `Bcryptjs`
<h1 align="center">
    <img alt="project" title="#About" src="./src/assets/images/project-cover.png" />
</h1>

<h1 align="center">
  <a href="#"> Product API </a>
</h1>

<p align="center">

  <!-- Número de estrelas -->
  <img alt="Stars" src="https://img.shields.io/github/stars/EduardoLopes085/SEU-REPOSITORIO?style=social">
  
  <!-- Último commit -->
  <a href="https://github.com/EduardoLopes085/SEU-REPOSITORIO">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/EduardoLopes085/SEU-REPOSITORIO">
  </a>
    
  <!-- Licença -->
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

  <!-- Autor -->
  <a href="https://github.com/EduardoLopes085">
    <img alt="made by Eduardo Lopes" src="https://img.shields.io/badge/made%20by-Eduardo%20Lopes-8A2BE2">
  </a>
</p>

<h4 align="center"> 
	 Status: Working...
</h4>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#rotas">Rotas</a> •
 <a href="#funcionalidades">Funcionalidades</a> • 
 <a href="#estrutura-do-projeto">Estrutura</a> •
 <a href="#tech-stack">Tech Stack</a> •  
 <a href="#author">Author</a> • 
 <a href="#user-content-license">License</a>
</p>

## SOBRE

**PRODUCT API** é uma API REST desenvolvida em **Node.js** com foco no gerenciamento de usuários, produtos, categorias e autenticação.

O projeto foi estruturado utilizando **Express** e **Sequelize**, seguindo uma arquitetura modular baseada em controllers, middlewares, services e models, permitindo escalabilidade e melhor organização do código.

A aplicação também conta com:

- Sistema de autenticação com JWT
- Integração com PostgreSQL
- Criptografia de senhas
- Middlewares de validação
- Estrutura MVC
- Testes automatizados
- Cobertura de testes

---

## ROTAS

### Usuários

- [x] Cadastro de usuários
- [x] Listagem de usuários
- [x] Atualização de usuários
- [x] Remoção de usuários
- [x] Autenticação JWT

### Produtos

- [x] Cadastro de produtos
- [x] Listagem de produtos
- [x] Atualização de produtos
- [x] Remoção de produtos

### Categorias

- [x] Cadastro de categorias
- [x] Associação entre categorias e produtos

### Imagens

- [x] Gerenciamento de imagens

---

## FUNCIONALIDADES

- [x] API RESTful
- [x] CRUD de usuários
- [x] CRUD de produtos
- [x] CRUD de categorias
- [x] Sistema de autenticação JWT
- [x] Integração com PostgreSQL
- [x] Middlewares de validação
- [x] Criptografia de senhas
- [x] Testes automatizados com Jest
- [x] Cobertura de testes

---

## Estrutura do Projeto

```bash
src/
 ├── config/
 ├── Controllers/
 ├── middlewares/
 ├── mocks/
 ├── models/
 ├── routes/
 ├── services/
 ├── tests/
 ├── app.js
 └── server.js
```

---

## Funcionamento

Este projeto consiste em uma API backend responsável pelo gerenciamento de produtos, usuários e autenticação.

### REQUISITOS

Antes de começar, você precisará ter instalado em sua máquina:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

Um editor como o [VSCode](https://code.visualstudio.com/) também é recomendado.

---

## Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=database_name
DB_USER=postgres
DB_PASSWORD=password

JWT_SECRET=secret
```

---

## ▶️ Rodando o projeto

```bash
# Clone este repositório
$ git clone https://github.com/EduardoLopes085/SEU-REPOSITORIO.git

# Acesse a pasta do projeto
$ cd nome-do-projeto

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm run server

# O servidor iniciará em:
# http://localhost:3000
```

---

## ▶️ Executando os testes

```bash
# Executar testes
$ npm test

# Gerar cobertura de testes
$ npm run test -- --coverage
```

---

## Tech Stack

As seguintes ferramentas foram utilizadas na construção do projeto:

#### **Backend**

- **[Node.js](https://nodejs.org/)** → Ambiente de execução JavaScript
- **[Express](https://expressjs.com/)** → Framework backend
- **[Sequelize](https://sequelize.org/)** → ORM para banco relacional
- **[PostgreSQL](https://www.postgresql.org/)** → Banco de dados relacional
- **[JWT](https://jwt.io/)** → Autenticação baseada em tokens
- **[Bcrypt](https://www.npmjs.com/package/bcrypt)** → Criptografia de senhas
- **[Jest](https://jestjs.io/)** → Testes automatizados
- **[Supertest](https://www.npmjs.com/package/supertest)** → Testes de endpoints
- **[Dotenv](https://www.npmjs.com/package/dotenv)** → Variáveis de ambiente
- **[Nodemon](https://nodemon.io/)** → Reload automático durante desenvolvimento

---

## Cobertura de Testes

O projeto possui geração automática de relatórios de cobertura utilizando Jest.

```bash
coverage/
```

Também existe geração de relatório HTML para análise detalhada dos testes.

---

## Melhorias Futuras

- [ ] Upload de imagens
- [ ] Refresh Token
- [ ] Swagger/OpenAPI
- [ ] Dockerização da aplicação
- [ ] Cache com Redis
- [ ] Rate Limiting
- [ ] Paginação de endpoints
- [ ] CI/CD com GitHub Actions

---

## Author

[![Linkedin Badge](https://img.shields.io/badge/-Eduardo%20Lopes-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/eduardolopesdev/)](https://www.linkedin.com/in/eduardolopesdev/)

---

## License

Esse projeto está sobre a licença [MIT](./LICENSE).

Feito por Eduardo Lopes.

---
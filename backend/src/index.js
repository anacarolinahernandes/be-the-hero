const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // informa que o body da requisição terá o formato JSON
app.use(routes);

app.listen(3333);


/*
MÉTODOS HTTP

GET: Buscar/listar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Excluir uma informação no back-end
*/

/*
TIPOS DE PARÂMETRO

Query Params: nomeados enviados na rota após "?" (Filtros, paginação, etc)
Route Params: utilizados para identificar recursos únicos ":"
Request Body: corpo da requisição, utilizado para criar ou alterar recursos
*/

/* 
BANCO DE DADOS

SQL (Relacionais): MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
NoSQL (Não Relacionais): MongoDB, CouchDB, RavenDB
*/

/* 
ABORDAGENS PARA BANCOS DE DADOS RELACIONAIS

Driver: SELECT * FROM users
Query Builder: table('users').select('*').where()
*/
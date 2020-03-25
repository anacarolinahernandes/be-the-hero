## MÉTODOS HTTP

**GET:** Buscar/listar uma informação do back-end

**POST:** Criar uma informação no back-end

**PUT:** Alterar uma informação no back-end

**DELETE:** Excluir uma informação no back-end

## O QUE É RECURSO?
É o que vem depois da '/'. Exemplo: http://localhost:3000/**users**

## TIPOS DE PARÂMETRO

**Query Params:** parâmetros nomeados enviados na rota após "?" (filtros, paginação, etc) Exemplo: http://localhost:3000/users/**?page=1**

**Route Params:** parâmetros utilizados para identificar recursos únicos (utiliza-se o ':'). Exemplo: http://localhost:3000/users/**1**

**Request Body:** corpo da requisição, utilizado para criar ou alterar recursos

## BANCO DE DADOS

**SQL (Relacionais):** MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server

**NoSQL (Não Relacionais):** MongoDB, CouchDB, RavenDB

## ABORDAGENS PARA BANCOS DE DADOS RELACIONAIS

**Driver:** SELECT * FROM users

**Query Builder:** table('users').select('*').where()
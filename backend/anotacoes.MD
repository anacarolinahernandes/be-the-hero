## MÉTODOS HTTP

**GET:** Buscar/listar uma informação do back-end

**POST:** Criar uma informação no back-end

**PUT:** Alterar uma informação no back-end

**DELETE:** Excluir uma informação no back-end

## O QUE É RECURSO?
É o que vem depois da '/'. _Exemplo: http://localhost:3000/**users**_

## TIPOS DE PARÂMETRO

**Query Params:** parâmetros nomeados enviados na rota após "?" (filtros, paginação, etc) _Exemplo: http://localhost:3000/users/**?page=1**_

**Route Params:** parâmetros utilizados para identificar recursos únicos (utiliza-se o ':'). _Exemplo: http://localhost:3000/users/**1**_

**Request Body:** corpo da requisição, utilizado para criar ou alterar recursos

## BANCO DE DADOS

**SQL (Relacionais):** MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server

**NoSQL (Não Relacionais):** MongoDB, CouchDB, RavenDB

## ABORDAGENS PARA BANCOS DE DADOS RELACIONAIS

**Driver:** _SELECT * FROM users_

**Query Builder:** _table('users').select('*').where()_
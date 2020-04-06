const knex = require('knex');
const configuration = require('../../knexfile');

const { test, development } = configuration;

const config = process.env.NODE_ENV === 'test' ? test : development;

const connection = knex(config);

module.exports = connection;

const { Client } = require('pg')
 
const schema = new Client({
  host: '181.115.221.238',
  port: 5432, 
  database: 'dbcatastro',
  user: 'postgres',
  password: '987456'
});

module.exports = schema
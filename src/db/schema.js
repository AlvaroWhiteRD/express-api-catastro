const { Client } = require('pg')

const schema = new Client({
  host: '181.115.221.238',//181.115.221.0 -- http://ec2-52-43-96-177.us-west-2.compute.amazonaws.com
  port: 5432,
  database: 'dbcatastro',
  user: 'postgres',
  password: '987456',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = schema
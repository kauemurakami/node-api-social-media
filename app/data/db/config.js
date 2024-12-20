const dotenv = require('dotenv').config()

const development = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: 'root',
    database: 'node-social-media'
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations/'
  },
  pool: {
    afterCreate: function (conn, cb) {
      conn.query('SET timezone="America/Sao_Paulo";', function (err) {
        cb(err, conn);
      });
    }
  }


}
const production = {
}

module.exports = { development, production}

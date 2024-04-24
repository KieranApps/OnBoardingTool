import 'dotenv/config';

module.exports = {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD, 
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
      charset: 'utf8mb4'
    },
    migrations: {
      directory: 'migrations',
    },
    seeds: {
      directory: 'seeds',
    }
};
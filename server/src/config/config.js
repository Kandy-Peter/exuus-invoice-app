import dotenv from 'dotenv'
dotenv.config()

module.exports = {
  development: {
    username: "kandy",
    password: "kandyExuus",
    database: "invoice_app",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "kandy",
    password: "kandyExuus",
    database:"invoice_app",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "kandy",
    password: "kandyExuus",
    database: "invoice_app",
    host: "127.0.0.1",
    dialect: "postgres"
  }
};

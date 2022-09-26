const creds = {
  development: {
    username: "kandy",
    password: "0511Kandy",
    database: "invoice_db",
    host: "127.0.0.1",
    dialect: 'postgresql'
  },
  test: {
    username: "kandy",
    password: "0511Kandy",
    database:"invoice_db_test",
    host: "127.0.0.1",
    dialect: 'postgresql'
  },
  production: {
    username: "kandy",
    password: "0511Kandy",
    database: "invoice_db_production",
    host: "127.0.0.1",
    dialect: 'postgresql'
  }
};

module.exports = creds;

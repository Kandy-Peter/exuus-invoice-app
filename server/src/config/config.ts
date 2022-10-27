import { Sequelize } from "sequelize";

const db = new Sequelize("invoice_app", "kandy", "kandy0511", {
  host: "localhost",
  dialect: "postgres",
  logging: false
});

export default db
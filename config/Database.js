import { Sequelize } from "sequelize";

const db = new Sequelize("db_dispora", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;

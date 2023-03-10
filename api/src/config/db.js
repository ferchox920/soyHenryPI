import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const DB = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALICT || "postgres",
    port: process.env.DB_PORT || 5432,
    logging: false,
  }
);

export default DB;

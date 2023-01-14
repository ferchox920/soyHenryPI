import DataType from "sequelize";
import DB from "../config/db.js";

const ACTIVITY = DB.define(
  "activities",
  {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
    },
    duration: {
      type: DataType.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataType.INTEGER,
      validate: {
        min: 1,
        max: 5,
      },
      allowNull: false,
    },
    season: {
      type: DataType.ENUM("VERANO", "OTOÑO", "INVIERNO", "PRIMAVERA"),
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default ACTIVITY;

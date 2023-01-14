import DataType from "sequelize";
import DB from "../config/db.js";
import ACTIVITY from "./Activity.js";


const  COUNTRIES =DB.define('countries',{


  id:{
    type:DataType.STRING(3),
    primaryKey:true,
  },
  name:{
    type:DataType.STRING,
    allowNull: false,

  },
  flags:{
    type:DataType.TEXT,
    allowNull: false,
  },
  continents:{
    type:DataType.STRING,
    allowNull: false,
  },
  capital:{
    type:DataType.STRING,
    allowNull: false,
  },
  region:{
    type:DataType.STRING,
  },
  subregion:{
    type:DataType.STRING,
  },
  area:{
    type:DataType.STRING,
    allowNull: false,
  },
  population:{
    type:DataType.STRING,
    allowNull: false,
  }

  
} ,{ timestamps: false })

COUNTRIES.hasMany(ACTIVITY);
ACTIVITY.belongsTo(COUNTRIES);

export default COUNTRIES;
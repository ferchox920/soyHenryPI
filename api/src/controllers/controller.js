import { Op } from "sequelize";
import ACTIVITY from "../models/Activity.js";
import COUNTRIES from "../models/Country.js";

export async function getAllCountries() {
  const getCountries = await COUNTRIES.findAll();
  return getCountries;
}

export async function getOneCountry(name) {
  const getCountriesByName = await COUNTRIES.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: [ACTIVITY],
  });
  return getCountriesByName;
}

export async function getCountriesById(id) {
  const getCountryById = await COUNTRIES.findOne({
    where: { id },
    include: [ACTIVITY],
  });
  return getCountryById;
}

export async function createActivity(name, dificulty, season, countryId) {
  // if(!name||!season){

  // }

  const postActivity = await ACTIVITY.create({
    name,
    dificulty,
    season,
    countryId,
  });
  return postActivity;
}

import { Op } from "sequelize";
import ACTIVITY from "../models/Activity.js";
import COUNTRIES from "../models/Country.js";

export async function getAllCountries() {
  const getCountries = await COUNTRIES.findAll({
    include: [ACTIVITY],
  });
  
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

export async function getCountriesByRegion(region) {
  const getCountriesByRegion = await COUNTRIES.findAll({
    where: {
      region: {
        [Op.iLike]: `%${region}%`,
      },
    },
    include: [ACTIVITY],
  });
  return getCountriesByRegion;
}

export async function getCountriesByActivity(name) {
  const getCountriesByActivity = await ACTIVITY.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: [COUNTRIES],
  });
  return getCountriesByActivity;
}

export async function getCountriesById(id) {
  const getCountryById = await COUNTRIES.findOne({
    where: { id },
    include: [ACTIVITY],
  });
  return getCountryById;
}
export async function getActivities() {
  const activities= await ACTIVITY.findAll({
    include: [COUNTRIES]
  });
  return activities;
}

export async function createActivity(
  name,
  duration,
  difficulty,
  season,
  countryId
) {
  const postActivity = await ACTIVITY.create({
    name,
    duration,
    difficulty,
    season,
    countryId,
  });
  return postActivity;
}

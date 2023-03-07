import axios from "./axios.js";
import {
  getAllCountries,
  getCountryById,
  getCountryByName,
  getCountryByRegion,
} from "./countrySlice.js";

const BASE_URL = "/country";

// Obtener todos los países
export const apiAllCountry = async (dispatch) => {
  try {
    const { data } = await axios.get(BASE_URL);
    dispatch(getAllCountries(data));
  } catch (error) {
    console.error(error);
  }
};

// Obtener un país por su nombre
export const apiCountryByName = async (dispatch, name) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/name?name=${name}`);
    dispatch(getCountryByName(data));
  } catch (error) {
    console.error(error);
  }
};

// Obtener países por su región
export const apiCountryByRegion = async (dispatch, region) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/region?region=${region}`);
    dispatch(getCountryByRegion(data));
  } catch (error) {
    console.error(error);
  }
};

// Obtener un país por su ID
export const apiCountryById = async (dispatch, id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/id/${id}`);
    dispatch(getCountryById(data));
  } catch (error) {
    console.error(error);
  }
};

// Obtener todos los países que tienen al menos una actividad
export const apiCountryByActivity = async (dispatch) => {
  try {
    const { data } = await axios.get(BASE_URL);
    const countriesWithActivities = data.filter(
      (country) => country.activities.length !== 0
    );
    dispatch(getAllCountries(countriesWithActivities));
  } catch (error) {
    console.error(error);
  }
};

// Publicar una actividad
export const apiPostAction = async (activities) => {
  try {
    const { data } = await axios.post(`/activity/`, {
      name: activities.name,
      duration: activities.duration,
      difficulty: Number(activities.difficulty),
      season: activities.season,
      countryId: activities.countryId,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

import axios from "./axios.js";
import {
  getAllCountries,
  getCountryById,
  getCountryByName,
  getCountryByRegion
} from "./countrySlice.js";

export async function apiAllCountry(dispatch) {
  try {
    const peticion = await axios.get(`/country`);

    dispatch(getAllCountries(peticion?.data));
    return;
  } catch (error) {
    return error.response;
  }
}

export async function apiCountryByName(dispatch, name) {
  try {
    const peticion = await axios.get(`/country/name?name=${name}`);
    dispatch(getCountryByName(peticion?.data));
    return;
  } catch (error) {
    return error.response;
  }
}

export async function apiCountryByRegion(dispatch, region) {
  try {
    const peticion = await axios.get(`/country/region?region=${region}`);
    dispatch(getCountryByRegion(peticion?.data,));
    return;
  } catch (error) {
    return error.response;
  }
}


export async function apiCountryById(dispatch, id) {
  try {
    const peticion = await axios.get(`/country/id/${id}`);
    console.log(peticion.data);
    dispatch(getCountryById(peticion?.data));
    return;
  } catch (error) {
    return error.response;
  }
}

export async function apiCountryByActivity(dispatch,activity) {
  try {
    const peticion = await axios.get(`/country`);
    const algo = peticion.data
    console.log('aqui');
    console.log(algo[0].activities.length);
    
    
  

    
    dispatch(getAllCountries(peticion?.data));
    return;
  } catch (error) {
    return error.response;
  }
}

export async function apiPostAction(action) {
  return await axios.post(`/activity/`, {
    ...action,
    name: action.name,
    duration: action.duration,
    difficulty: action.difficulty,
    season: action.season,
    countryId: action.countryId,
  });
}

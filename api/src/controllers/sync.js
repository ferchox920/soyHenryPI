import axios from "axios";
import COUNTRIES from "../models/Country.js";

const asyncApi = async () => {
  const api = await axios.get("https://restcountries.com/v3.1/all");
  const infoApi = api.data.map(async (c) => {
    
    if(Array.isArray(c.continents)){
        c.continents= c.continents.join()
    }

    if(Array.isArray(c.capital)){
        c.capital= c.capital.join()
    }
    await COUNTRIES.create({
      id: c.cca3,
      name: c.name.common,
      flags: c.flags.png,
      continents: c.continents,
      capital: c.capital||'Not have capital',
      subregion: c.subregion||'Not have subregion',
      region: c.region||'Not have subregion',
      area: c.area,
      population: c.population,
    });
  });
};

export default asyncApi;
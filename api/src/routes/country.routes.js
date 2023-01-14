import { Router } from "express";
// import { getApi } from "../controllers/controller.js";
import { getAllCountries , getCountriesById , getOneCountry, getCountriesByRegion, getCountriesByActivity} from "../controllers/controller.js";

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countryRouter = Router();

countryRouter.get("/", async (req, res) => {
 
  try {
    const response = await getAllCountries();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
});


countryRouter.get("/name?", async (req, res) => {
 
  try {
    const {name}= req.query;
  

    const response = await getOneCountry(name);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
});

countryRouter.get("/region?", async (req, res) => {
 
  try {
    const {region}= req.query;
    

    const response = await getCountriesByRegion(region);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
});


countryRouter.get("/id/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getCountriesById(id.toUpperCase());
    if (!response) return res.status(404).send("NOT FOUND 404");

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
});


countryRouter.get("/actName/:name", async (req, res) => {
  const { name } = req.params;
  try {
    console.log('aqui');
      const response = await getCountriesByActivity(name);
      if (!response) return res.status(404).send("NOT FOUND 404");
      
      return res.status(200).json(response);
  } catch (error) {
      console.log('aqui');
    return res.status(500).json({ err: error.message });
  }
});


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

export default countryRouter;

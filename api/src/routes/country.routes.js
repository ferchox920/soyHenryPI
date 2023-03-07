import { Router } from "express";
import { getAllCountries, getCountriesById, getOneCountry, getCountriesByRegion, getCountriesByActivity } from "../controllers/controller.js";

const countryRouter = Router();

// Middleware para manejar errores
const errorHandler = (error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ error: "Internal Server Error" });
};

// Endpoint para obtener todos los países
countryRouter.get("/", async (req, res, next) => {
  try {
    const response = await getAllCountries();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

// Endpoint para buscar países por nombre
countryRouter.get("/name", async (req, res, next) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).json({ error: "Name parameter is required" });
    }
    const response = await getOneCountry(name);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

// Endpoint para buscar países por región
countryRouter.get("/region", async (req, res, next) => {
  try {
    const { region } = req.query;
    if (!region) {
      return res.status(400).json({ error: "Region parameter is required" });
    }
    const response = await getCountriesByRegion(region);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

// Endpoint para buscar países por ID
countryRouter.get("/id/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await getCountriesById(id.toUpperCase());
    if (!response) {
      return res.status(404).json({ error: "Country not found" });
    }
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

// Endpoint para buscar países por actividad
countryRouter.get("/actName/:name", async (req, res, next) => {
  try {
    const { name } = req.params;
    const response = await getCountriesByActivity(name);
    if (!response) {
      return res.status(404).json({ error: "Activity not found" });
    }
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

// Configurar middleware de manejo de errores
countryRouter.use(errorHandler);

export default countryRouter;

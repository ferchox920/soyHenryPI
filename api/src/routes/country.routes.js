import { Router } from "express";
import { getAllCountries , getCountriesById } from "../controllers/controller.js";
// import { getApi } from "../controllers/controller.js";

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countryRouter = Router();

countryRouter.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    const response = await getAllCountries(name);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
});

countryRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getCountriesById(id.toUpperCase());
    if (!response) return res.status(404).send("NOT FOUND 404");

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
});



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

export default countryRouter;

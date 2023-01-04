import { Router } from "express";
import { createActivity } from "../controllers/controller.js";


const activityRouter = Router();

activityRouter.post("/", async (req, res)=>{
  
    const {name,dificulty,season,countryId}= req.body;
    try {
        const response = await createActivity(name,dificulty,season,countryId)
        return res.status(200).json(response)
        
    } catch (error) {
        return res.send(error.message)
        
    }

})

export default activityRouter
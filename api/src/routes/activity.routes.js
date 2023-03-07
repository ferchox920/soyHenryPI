import { Router } from "express";
import { createActivity, getActivities } from "../controllers/controller.js";


const activityRouter = Router();

activityRouter.post("/", async (req, res)=>{
  
    const {name,duration,difficulty,season,countryId}= req.body;
    try {
        const response = await createActivity(name,duration,difficulty,season,countryId)
        return res.status(200).json(response)
        
    } catch (error) {
        return res.send(error.message)
        
    }

})

activityRouter.get("/all/act", async (req, res) => {

    try {
      const response = await getActivities();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ err: error.message });
    }
  });
  



export default activityRouter
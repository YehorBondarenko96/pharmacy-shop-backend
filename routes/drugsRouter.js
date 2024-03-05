import express from "express";
import controllersDrugs from "../controllers/drugsControllers.js";

const drugsRouter = express.Router();

drugsRouter.get("/pharmacies", controllersDrugs.getAllPharmacies);

drugsRouter.get("/", controllersDrugs.getAllDrugs);

drugsRouter.post("/order-data", controllersDrugs.createOrdData);


export default drugsRouter;

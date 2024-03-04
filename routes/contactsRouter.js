import express from "express";
import controllersDrugs from "../controllers/drugsControllers.js";

const drugsRouter = express.Router();

drugsRouter.get("/pharmacies", controllersDrugs.getAllPharmacies);

drugsRouter.get("/", controllersDrugs.getAllDrugs);

export default drugsRouter;

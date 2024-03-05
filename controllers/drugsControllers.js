import drugsService from "../services/drugsServices.js";
import decForFn from "../decorators/decForFuncs.js";
import { createOrderDataSchema } from "../schemas/contactsSchemas.js";

const getAllPharmacies = async (req, res) => {
    const result = await drugsService.listPharmacies();

    res.json(result);
};

const getAllDrugs = async (req, res) => {
    const result = await drugsService.listDrugs();

    res.json(result);
};

const createOrdData = async (req, res) => {
    const { error } = createOrderDataSchema.validate(req.body);
    if (error) {
        throw HttpError(400, error.message);
    }
    const result = await drugsService.addOrdData(req.body);
    
    res.status(201).json(result);
};

export default {
    getAllPharmacies:decForFn(getAllPharmacies),
    getAllDrugs: decForFn(getAllDrugs),
    createOrdData: decForFn(createOrdData)
}

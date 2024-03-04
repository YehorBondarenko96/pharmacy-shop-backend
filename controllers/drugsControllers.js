import drugsService from "../services/drugsServices.js";
import decForFn from "../decorators/decForFuncs.js";

const getAllPharmacies = async (req, res) => {
    const result = await drugsService.listPharmacies();

    res.json(result);
};

const getAllDrugs = async (req, res) => {
    const result = await drugsService.listDrugs();

    res.json(result);
};

export default {
    getAllPharmacies:decForFn(getAllPharmacies),
    getAllDrugs: decForFn(getAllDrugs),
}

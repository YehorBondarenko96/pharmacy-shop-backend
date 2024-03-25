import Drug from "../models/Drug.js";
import OrderData from "../models/OrderData.js";
import Pharmacies from "../models/Pharmacies.js";


const listPharmacies = () => Pharmacies.find();

const listDrugs = () => Drug.find();

const addOrdData = data => OrderData.create(data);

export default {
    listPharmacies,
    listDrugs,
    addOrdData
}
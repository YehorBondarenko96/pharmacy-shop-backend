import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';

const drugsPath = path.resolve("db", "drugs.json");
const pharmaciesPath = path.resolve("db", "pharmacies.json");
const ordDataPath = path.resolve("db", "orderData.json");

const updateOrdData = list => fs.writeFile(ordDataPath, JSON.stringify(list, null, 4));


async function listPharmacies() {
    const list = await fs.readFile(pharmaciesPath, 'utf-8');
    return JSON.parse(list)
}

async function listDrugs() {
    const list = await fs.readFile(drugsPath, 'utf-8');
    return JSON.parse(list)
}

async function addOrdData(data) {
    const newOrdData = {
        id: nanoid(),
        user: data.user,
        order: data.order
    };
    const listString = await fs.readFile(ordDataPath, 'utf-8');
    const list = JSON.parse(listString);
    list.push(newOrdData);
    await updateOrdData(list);
    return newOrdData
}

export default {
    listPharmacies,
    listDrugs,
    addOrdData
}
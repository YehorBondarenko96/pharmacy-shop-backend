import fs from 'fs/promises';
import path from 'path';

const drugsPath = path.resolve("db", "drugs.json");
const pharmaciesPath = path.resolve("db", "pharmacies.json");

async function listPharmacies() {
    const list = await fs.readFile(pharmaciesPath, 'utf-8');
    return JSON.parse(list)
}

async function listDrugs() {
    const list = await fs.readFile(drugsPath, 'utf-8');
    return JSON.parse(list)
}

export default {
    listPharmacies,
    listDrugs
}
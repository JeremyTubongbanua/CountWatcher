import { AnonymousGuild } from 'discord.js';
import fs from 'fs';

function getStrippedId(id: string): string {
    return id.slice(2, id.length - 1);
}

/**
 * save JSON data to file.
 * @param path file path.json
 * @param jsonData {lemon: 'poo'}
 */
function saveJSON(path: string, jsonData: any) {
    const stringified: string = JSON.stringify(jsonData);
    fs.writeFileSync(path, stringified);
}

function readJSON(path: string): any {
    const dataObject: JSON = JSON.parse(fs.readFileSync(path).toString());
    return dataObject as any;
}

function updateSettings(property: string, value: any) {
    const pathName: string = __dirname + '\\settings.json';
    const settings = readJSON(pathName); // object like {lemon: poo}
    settings[property] = value;
    saveJSON(pathName, settings)
}

export { getStrippedId, saveJSON, updateSettings };
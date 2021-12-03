"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSettings = exports.saveJSON = exports.getStrippedId = void 0;
const fs_1 = __importDefault(require("fs"));
function getStrippedId(id) {
    return id.slice(2, id.length - 1);
}
exports.getStrippedId = getStrippedId;
function saveJSON(path, jsonData) {
    const stringified = JSON.stringify(jsonData);
    fs_1.default.writeFileSync(path, stringified);
}
exports.saveJSON = saveJSON;
function readJSON(path) {
    const dataObject = JSON.parse(fs_1.default.readFileSync(path).toString());
    return dataObject;
}
function updateSettings(property, value) {
    const pathName = __dirname + '\\settings.json';
    const settings = readJSON(pathName);
    settings[property] = value;
    saveJSON(pathName, settings);
}
exports.updateSettings = updateSettings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLDRDQUFvQjtBQUVwQixTQUFTLGFBQWEsQ0FBQyxFQUFVO0lBQzdCLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBd0JRLHNDQUFhO0FBakJ0QixTQUFTLFFBQVEsQ0FBQyxJQUFZLEVBQUUsUUFBYTtJQUN6QyxNQUFNLFdBQVcsR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELFlBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFjdUIsNEJBQVE7QUFaaEMsU0FBUyxRQUFRLENBQUMsSUFBWTtJQUMxQixNQUFNLFVBQVUsR0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN0RSxPQUFPLFVBQWlCLENBQUM7QUFDN0IsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLFFBQWdCLEVBQUUsS0FBVTtJQUNoRCxNQUFNLFFBQVEsR0FBVyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7SUFDdkQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDM0IsUUFBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQTtBQUNoQyxDQUFDO0FBRWlDLHdDQUFjIn0=
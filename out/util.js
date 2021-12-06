"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStringAnInt = exports.updateSettings = exports.readSettings = exports.readJSON = exports.saveJSON = exports.getStrippedId = exports.embedGenerator1 = exports.embedGenerator = exports.getLotsOfMessages = exports.embedGenerator2 = void 0;
const discord_js_1 = require("discord.js");
const fs_1 = __importDefault(require("fs"));
const settingsDir = `${__dirname}\\settings.json`;
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
exports.readJSON = readJSON;
function readSettings() {
    return readJSON(settingsDir);
}
exports.readSettings = readSettings;
function updateSettings(property, value) {
    const pathName = settingsDir;
    const settings = readJSON(pathName);
    settings[property] = value;
    saveJSON(pathName, settings);
}
exports.updateSettings = updateSettings;
function isStringAnInt(input) {
    return !isNaN(parseInt(input));
}
exports.isStringAnInt = isStringAnInt;
function embedGenerator(culprit, message, textChannel) {
    const embed = {
        description: `${culprit} said "${message}" in ${textChannel}`,
        color: 9,
        footer: {
            icon_url: "https://i.imgur.com/pXU2p69.png",
            text: "CountWatcher"
        },
        author: {
            name: "Uh oh Spaghettio..."
        }
    };
    return embed;
}
exports.embedGenerator = embedGenerator;
function embedGenerator1(culprit, message, textChannel, previousNumber, previousAuthor) {
    const embed = {
        description: `Previous number: ${previousNumber} by ${previousAuthor}\n${culprit} said "${message}" in ${textChannel}`,
        color: 9,
        footer: {
            icon_url: "https://i.imgur.com/pXU2p69.png",
            text: "CountWatcher"
        },
        author: {
            name: "Uh oh Spaghettio..."
        }
    };
    return embed;
}
exports.embedGenerator1 = embedGenerator1;
async function getLotsOfMessages(channel, limit = 1000) {
    if (!channel) {
        throw new Error(`Expected channel, got ${typeof channel}.`);
    }
    if (limit <= 100) {
        return channel.messages.fetch({ limit });
    }
    let collection = new discord_js_1.Collection();
    let lastId = null;
    let options = {};
    let remaining = limit;
    while (remaining > 0) {
        options.limit = remaining > 100 ? 100 : remaining;
        remaining = remaining > 100 ? remaining - 100 : 0;
        if (lastId) {
            options.before = lastId;
        }
        let messages = (await channel.messages.fetch(options));
        if (!messages.last()) {
            break;
        }
        collection = collection.concat(messages);
        lastId = messages.last()?.id;
    }
    return collection;
}
exports.getLotsOfMessages = getLotsOfMessages;
function embedGenerator2(counters) {
    const embed = {
        description: (() => {
            var count = 1;
            var stringBuild = ``;
            counters.forEach((val, key) => {
                stringBuild += `${count}. <@${key}> => ${val}\n`;
                count++;
            });
            return stringBuild;
        })(),
        color: 9,
        footer: {
            icon_url: "https://i.imgur.com/pXU2p69.png",
            text: "CountWatcher"
        },
        author: {
            name: `Top ${counters.size} Counters`
        }
    };
    return embed;
}
exports.embedGenerator2 = embedGenerator2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDJDQUFrSTtBQUNsSSw0Q0FBb0I7QUFHcEIsTUFBTSxXQUFXLEdBQUcsR0FBRyxTQUFTLGlCQUFpQixDQUFDO0FBRWxELFNBQVMsYUFBYSxDQUFDLEVBQVU7SUFDN0IsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUE2SDZFLHNDQUFhO0FBdEgzRixTQUFTLFFBQVEsQ0FBQyxJQUFZLEVBQUUsUUFBYTtJQUN6QyxNQUFNLFdBQVcsR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELFlBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFtSDRGLDRCQUFRO0FBakhyRyxTQUFTLFFBQVEsQ0FBQyxJQUFZO0lBQzFCLE1BQU0sVUFBVSxHQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLE9BQU8sVUFBaUIsQ0FBQztBQUM3QixDQUFDO0FBOEdzRyw0QkFBUTtBQTVHL0csU0FBUyxZQUFZO0lBQ2pCLE9BQU8sUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUEwR2dILG9DQUFZO0FBeEc3SCxTQUFTLGNBQWMsQ0FBQyxRQUFnQixFQUFFLEtBQVU7SUFDaEQsTUFBTSxRQUFRLEdBQVcsV0FBVyxDQUFDO0lBQ3JDLE1BQU0sUUFBUSxHQUFRLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzNCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxD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
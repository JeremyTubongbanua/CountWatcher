import { Collection, DMChannel, Message, NewsChannel, PartialDMChannel, Snowflake, TextChannel, ThreadChannel } from 'discord.js';
import fs from 'fs';
import { ListFormat } from 'typescript';

const settingsDir = `${__dirname}\\settings.json`;

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

function readSettings(): any {
    return readJSON(settingsDir);
}

function updateSettings(property: string, value: any) {
    const pathName: string = settingsDir;
    const settings: any = readJSON(pathName); // object like {lemon: poo}
    settings[property] = value;
    saveJSON(pathName, settings)
}

function isStringAnInt(input: string): boolean {
    return !isNaN(parseInt(input));
}

// basic
function embedGenerator(culprit: string, message: string, textChannel: string): any {
    const embed = {
        // title: `${culprit} said ${message} in ${textChannel}`,
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

// with previous number and previous author
function embedGenerator1(culprit: string, message: string, textChannel: string, previousNumber: number, previousAuthor: string): any {
    const embed = {
        // title: `Previous number: ${previousNumber} - ${culprit} said ${message} in ${textChannel}`,
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

async function getLotsOfMessages(channel: PartialDMChannel | DMChannel | TextChannel | NewsChannel | ThreadChannel, limit: number = 1000): Promise<Collection<Snowflake, Message>> {
    if (!channel) {
        throw new Error(`Expected channel, got ${typeof channel}.`);
    }
    if (limit <= 100) {
        return channel.messages.fetch({ limit });
    }

    let collection: Collection<Snowflake, Message> = new Collection();
    let lastId = null;
    let options: any = {};
    let remaining = limit;

    while (remaining > 0) {
        options.limit = remaining > 100 ? 100 : remaining;
        remaining = remaining > 100 ? remaining - 100 : 0;

        if (lastId) {
            options.before = lastId;
        }

        let messages: Collection<Snowflake, Message> = (await channel.messages.fetch(options)) as unknown as Collection<Snowflake, Message>;

        if (!messages.last()) {
            break;
        }

        collection = collection.concat(messages);
        lastId = messages.last()?.id;
    }

    return collection; // first index is the very recent message.
}

// leaderboard embed
function embedGenerator2(counters: Collection<string, number>): any {
    const embed = {
        // title: `Top 5 Counters`,
        description: (() => {
            var count: number = 1;
            var stringBuild: string = ``;
            counters.forEach((val: number, key: string) => {
                stringBuild += `${count}. <@${key}> => ${val}\n`;
                count++;
            })
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

export { embedGenerator2, getLotsOfMessages, embedGenerator, embedGenerator1, getStrippedId, saveJSON, readJSON, readSettings, updateSettings, isStringAnInt };
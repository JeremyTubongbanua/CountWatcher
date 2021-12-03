"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const set_output_command_1 = __importDefault(require("./commands/set_output_command"));
const watch_command_1 = __importDefault(require("./commands/watch_command"));
const ping_command_1 = __importDefault(require("./commands/ping_command"));
const bot = new discord_js_1.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ],
});
const token = 'OTE1NzM4OTY5MDM4Mjc4NjY2.Yaf-Xw._C6rW2LS2xWqZ4r1bcuAbYlg_6E';
const commands = [set_output_command_1.default, watch_command_1.default, ping_command_1.default];
bot.on('ready', () => {
    console.log("ready to kiss mattyp?");
    const guildId = '803705193224732694';
    const guild = bot.guilds.cache.get(guildId);
    let guildCommands = guild?.commands;
    guildCommands?.set(commands.map((command) => command.commandBuild));
});
bot.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand())
        return;
    for (let i = 0; i < commands.length; i++) {
        if (commands[i].commandBuild.name == interaction.commandName) {
            await commands[i].run(interaction);
        }
    }
});
bot.on('messageCreate', (message) => {
    if (message.author.bot)
        return;
});
bot.login(token);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQ0FBdUY7QUFDdkYsdUZBQTZEO0FBQzdELDZFQUFvRDtBQUNwRCwyRUFBa0Q7QUFFbEQsTUFBTSxHQUFHLEdBQVcsSUFBSSxtQkFBTSxDQUFDO0lBQzNCLE9BQU8sRUFBRTtRQUNMLG9CQUFPLENBQUMsS0FBSyxDQUFDLE1BQU07UUFDcEIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsY0FBYztRQUM1QixvQkFBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUI7S0FDeEM7Q0FDSixDQUFDLENBQUM7QUFFSCxNQUFNLEtBQUssR0FBVyw2REFBNkQsQ0FBQztBQUNwRixNQUFNLFFBQVEsR0FBRyxDQUFDLDRCQUFnQixFQUFFLHVCQUFZLEVBQUUsc0JBQVcsQ0FBQyxDQUFDO0FBRS9ELEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtJQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFFckMsTUFBTSxPQUFPLEdBQUcsb0JBQW9CLENBQUM7SUFDckMsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTVDLElBQUksYUFBYSxHQUFHLEtBQUssRUFBRSxRQUFRLENBQUM7SUFDcEMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUN4RSxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLFdBQXdCLEVBQUUsRUFBRTtJQUMzRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtRQUFFLE9BQU87SUFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdEMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxXQUFXLENBQUMsV0FBVyxFQUFFO1lBQzFELE1BQU0sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFpQyxDQUFDLENBQUM7U0FDNUQ7S0FDSjtBQUNMLENBQUMsQ0FBQyxDQUFBO0FBRUYsR0FBRyxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFnQixFQUFFLEVBQUU7SUFDekMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUc7UUFBRSxPQUFPO0FBRW5DLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyJ9
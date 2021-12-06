"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const set_output_command_1 = __importDefault(require("./commands/set_output_command"));
const watch_command_1 = __importDefault(require("./commands/watch_command"));
const ping_command_1 = __importDefault(require("./commands/ping_command"));
const leaderboard_command_1 = __importDefault(require("./commands/leaderboard_command"));
const util_1 = require("./util");
const bot = new discord_js_1.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ],
});
const token = '';
const guildId = '689504561521623050';
const commands = [set_output_command_1.default, watch_command_1.default, ping_command_1.default, leaderboard_command_1.default];
var guild;
bot.on('ready', async () => {
    console.log("ready to kiss mattyp?");
    guild = bot.guilds.cache.get(guildId);
    let guildCommands = guild?.commands;
    guildCommands?.set([
        set_output_command_1.default.commandBuild,
        watch_command_1.default.commandBuild,
        ping_command_1.default.commandBuild,
        leaderboard_command_1.default.commandBuild,
    ]);
});
bot.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand() || interaction.member.user.id != '190968008242495488')
        return;
    for (let i = 0; i < commands.length; i++) {
        if (commands[i].commandBuild.name == interaction.commandName) {
            await commands[i].run(interaction);
        }
    }
});
bot.on('messageCreate', async (message) => {
    if (message.author.bot)
        return;
    const content = message.content;
    const channel = message.channel;
    const channelId = channel.id;
    const settings = (0, util_1.readSettings)();
    const watchChannelId = settings['watch_channel_id'];
    const outputChannelId = settings['output_channel_id'];
    const outputChannel = message.guild?.channels.cache.get(outputChannelId);
    if (watchChannelId != null && channelId == watchChannelId) {
        if (!(0, util_1.isStringAnInt)(content)) {
            if (outputChannelId != null) {
                var embed = (0, util_1.embedGenerator)(message.author.toString(), content, `<#${watchChannelId}>`);
                outputChannel.send({ embeds: [embed] });
            }
        }
        else {
            const lastMessage = (await channel.messages.fetch({ limit: 2 })).at(1);
            const lastMessageString = lastMessage.content;
            if ((0, util_1.isStringAnInt)(lastMessageString)) {
                const lastNumber = parseInt(lastMessageString);
                const expectedNumber = lastNumber + 1;
                const embed = (0, util_1.embedGenerator1)(message.author.toString(), content, `<#${watchChannelId}>`, lastNumber, lastMessage.author.toString());
                if (lastMessage.author == message.author) {
                    outputChannel.send({ content: `${message.author.toString()} Consecutive messages by same author detected!`, embeds: [embed] });
                }
                else if (parseInt(content) != expectedNumber) {
                    outputChannel.send({ content: `${message.author.toString()} Improper count detected!`, embeds: [embed] });
                }
                else {
                    console.log('Count successful');
                }
            }
            else {
                console.log(`Could not parse ${lastMessageString}`);
            }
        }
    }
});
bot.login(token);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQ0FBb007QUFDcE0sdUZBQTZEO0FBQzdELDZFQUFvRDtBQUNwRCwyRUFBa0Q7QUFDbEQseUZBQWdFO0FBQ2hFLGlDQUFzRjtBQUV0RixNQUFNLEdBQUcsR0FBVyxJQUFJLG1CQUFNLENBQUM7SUFDM0IsT0FBTyxFQUFFO1FBQ0wsb0JBQU8sQ0FBQyxLQUFLLENBQUMsTUFBTTtRQUNwQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxjQUFjO1FBQzVCLG9CQUFPLENBQUMsS0FBSyxDQUFDLHVCQUF1QjtLQUN4QztDQUNKLENBQUMsQ0FBQztBQUVILE1BQU0sS0FBSyxHQUFXLEVBQUUsQ0FBQztBQUN6QixNQUFNLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztBQUNyQyxNQUFNLFFBQVEsR0FBRyxDQUFDLDRCQUFnQixFQUFFLHVCQUFZLEVBQUUsc0JBQVcsRUFBRSw2QkFBa0IsQ0FBQyxDQUFDO0FBQ25GLElBQUksS0FBd0IsQ0FBQztBQUU3QixHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtJQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFFckMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxJQUFJLGFBQWEsR0FBRyxLQUFLLEVBQUUsUUFBUSxDQUFDO0lBS3BDLGFBQWEsRUFBRSxHQUFHLENBQUM7UUFDZiw0QkFBZ0IsQ0FBQyxZQUFZO1FBQzdCLHVCQUFZLENBQUMsWUFBWTtRQUN6QixzQkFBVyxDQUFDLFlBQVk7UUFDeEIsNkJBQWtCLENBQUMsWUFBWTtLQUNsQyxDQUFDLENBQUM7QUFPUCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxFQUFFLENBQUMsbUJB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
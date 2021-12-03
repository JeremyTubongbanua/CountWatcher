import { Client, CommandInteraction, Intents, Interaction, Message } from 'discord.js';
import setOutputCommand from './commands/set_output_command';
import watchCommand from './commands/watch_command';
import pingCommand from './commands/ping_command';

const bot: Client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ],
});

const token: string = 'OTE1NzM4OTY5MDM4Mjc4NjY2.Yaf-Xw.TdpWjlxug1pQT3ZuQGxZuE9orOY';
const commands = [setOutputCommand, watchCommand, pingCommand];

bot.on('ready', () => {
    console.log("ready to kiss mattyp?");

    const guildId = '803705193224732694';
    const guild = bot.guilds.cache.get(guildId);

    let guildCommands = guild?.commands;
    guildCommands?.set(commands.map((command) => command.commandBuild));
});

bot.on('interactionCreate', async (interaction: Interaction) => {
    if (!interaction.isCommand()) return;
    for (let i = 0; i < commands.length; i++) {
        if (commands[i].commandBuild.name == interaction.commandName) {
            await commands[i].run(interaction as CommandInteraction);
        }
    }
})

bot.on('messageCreate', (message: Message) => {
    if (message.author.bot) return;

});

bot.login(token);
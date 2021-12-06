import { ApplicationCommand, Client, Collection, CommandInteraction, DMChannel, Guild, Intents, Interaction, Message, NewsChannel, PartialDMChannel, TextChannel, ThreadChannel } from 'discord.js';
import setOutputCommand from './commands/set_output_command';
import watchCommand from './commands/watch_command';
import pingCommand from './commands/ping_command';
import leaderboardCommand from './commands/leaderboard_command';
import { isStringAnInt, readSettings, embedGenerator, embedGenerator1 } from './util';

const bot: Client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ],
});

const token: string = '';
const guildId = '689504561521623050';
const commands = [setOutputCommand, watchCommand, pingCommand, leaderboardCommand];
var guild: Guild | undefined;

bot.on('ready', async () => {
    console.log("ready to kiss mattyp?");

    guild = bot.guilds.cache.get(guildId);
    let guildCommands = guild?.commands;
    // guildCommands?.delete('917151945167368264');
    // guildCommands?.delete('916489611738492940');
    // guildCommands?.delete('917151945167368263');
    // guildCommands?.delete('917151945167368262');
    guildCommands?.set([
        setOutputCommand.commandBuild,
        watchCommand.commandBuild,
        pingCommand.commandBuild,
        leaderboardCommand.commandBuild,
    ]);
    // guildCommands?.set([]).then((val: Collection<string, ApplicationCommand<{}>>) => {
    //     console.log(val);
    // })
    // bot.application?.commands.set([]).then((val) => {
    //     console.log(val);
    // });
});

bot.on('interactionCreate', async (interaction: Interaction) => {
    if (!interaction.isCommand() || interaction.member.user.id != '190968008242495488') return;
    for (let i = 0; i < commands.length; i++) {
        if (commands[i].commandBuild.name == interaction.commandName) {
            await commands[i].run(interaction as CommandInteraction);
        }
    }
})

bot.on('messageCreate', async (message: Message) => {
    if (message.author.bot) return;
    const content: string = message.content;
    const channel: PartialDMChannel | DMChannel | TextChannel | NewsChannel | ThreadChannel = message.channel;
    const channelId = channel.id;

    const settings: any = readSettings();

    const watchChannelId: string = settings['watch_channel_id']
    const outputChannelId: string = settings['output_channel_id'];
    const outputChannel: TextChannel = message.guild?.channels.cache.get(outputChannelId as string) as TextChannel;

    if (watchChannelId != null && channelId == watchChannelId) {
        if (!isStringAnInt(content)) { // if sent message was not a number
            if (outputChannelId != null) {
                var embed: any = embedGenerator(message.author.toString(), content, `<#${watchChannelId}>`);
                outputChannel.send({ embeds: [embed] });
            }
        } else {
            const lastMessage: Message = (await channel.messages.fetch({ limit: 2 })).at(1)!;
            const lastMessageString: string = lastMessage.content;
            if (isStringAnInt(lastMessageString)) {
                const lastNumber: number = parseInt(lastMessageString);
                const expectedNumber: number = lastNumber + 1;
                const embed: any = embedGenerator1(message.author.toString(), content, `<#${watchChannelId}>`, lastNumber, lastMessage.author.toString());
                if (lastMessage.author == message.author) { // if the person sent consecutively.
                    outputChannel.send({ content: `${message.author.toString()} Consecutive messages by same author detected!`, embeds: [embed] })
                } else if (parseInt(content) != expectedNumber) { // if the count was proper (1 -> 2)
                    outputChannel.send({ content: `${message.author.toString()} Improper count detected!`, embeds: [embed] });
                } else {
                    console.log('Count successful');
                }

            } else {
                console.log(`Could not parse ${lastMessageString}`);
            }
        }
    }


    // message.channel.messages.fetch({ limit: 100 }).then((messages: Collection<string, Message<boolean>>) => {
    //     console.log(`Received ${messages.size} messages`);
    //     messages.forEach(async (message) => { await console.log(message.content) });
    // });

});
bot.login(token);
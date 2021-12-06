import { Collection, CommandInteraction, Message, TextChannel, } from "discord.js";
import Command from './command';
import { embedGenerator2, getLotsOfMessages, readSettings } from '../util';

const leaderboardCommand: Command = {
    commandBuild: {
        name: 'leaderboard',
        description: 'View the top 5 people.',
    },
    async run(interaction: CommandInteraction): Promise<any> {
        const settings: any = await readSettings(); // settings object
        const watchChannelId: string = settings.watch_channel_id;
        // const watchChannelId: string = settings.output_channel_id; // TEMPORARY
        const watchChannel: TextChannel = (await interaction.guild?.channels.fetch(watchChannelId) as TextChannel)!;

        // get first 2000 messages
        const messagesSearchMax: number = 2000;
        const messages: Collection<string, Message> = await getLotsOfMessages(watchChannel, messagesSearchMax);

        // construct users map
        var users: Collection<string, number> = new Collection(); // authorId => # of messages
        messages.forEach((message) => {
            const authorId = message.author.id;
            if (users.get(authorId) == undefined) {
                users.set(authorId, 1);
            } else {
                users.set(authorId, users.get(authorId)! + 1);
            }
        })

        // sort to asc order
        users.sort((a, b) => {
            // console.log(`${b} - ${a} = ${b - a}`);
            return (b - a); // b-a for asc order a-b for desc order
        }); // insertion sort

        // slice to top 5 if needed
        const top: number = 5;
        if (users.size > top) {
            users = users.filter((value: number, key: string) => value > users.at(top)!);
        }

        interaction.reply({ content: `${interaction.member.toString()} Successful.`, embeds: [embedGenerator2(users)], ephemeral: false, });
    }


}

export default leaderboardCommand;
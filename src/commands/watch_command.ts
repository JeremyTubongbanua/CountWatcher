import { CommandInteraction } from "discord.js";
import { ApplicationCommandOptionTypes } from "discord.js/typings/enums";
import Command from "./command";
import { getStrippedId, updateSettings } from '../util';


const watchCommand: Command = {
    commandBuild: {
        name: 'watch',
        description: 'Watch this channel for messages.',
        options: [
            {
                type: ApplicationCommandOptionTypes.STRING,
                name: 'channel',
                description: 'Channel to watch for counting.',
                required: true,
            },
        ],
    },
    async run(interaction: CommandInteraction): Promise<any> {
        const channelId: string = getStrippedId(interaction.options.getString('channel')!); // channelId to watch raw string
        updateSettings('watch_channel_id', channelId);
        interaction.reply({ content: `${interaction.member.toString()} Now watching <#${channelId}>.`, ephemeral: false }); // ephemeral: nobody can see interaction reply
    }
}

export default watchCommand;
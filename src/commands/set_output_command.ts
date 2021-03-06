import Command from './command';
import { CommandInteraction } from 'discord.js';
import { updateSettings } from '../util';

const setOutputCommand: Command = {
    commandBuild: {
        name: 'setoutput',
        description: 'Sets this channel as the output channel POGGERS.',
    },
    async run(interaction: CommandInteraction): Promise<any> {
        updateSettings('output_channel_id', interaction.channelId);
        interaction.reply({ content: `${interaction.member.toString()} Set <#${interaction.channelId}> as output channel.`, ephemeral: true });
    }
}

export default setOutputCommand;
import Command from './command';
import { CommandInteraction, Interaction } from 'discord.js';

const setOutputCommand: Command = {
    commandBuild: {
        name: 'setoutput',
        description: 'Sets this channel as the output channel.',
    },
    run(interaction: CommandInteraction): void {
        console.log(interaction);
        interaction.reply(interaction.member.toString() + ' Setting this as output channel beep boop');
    }
}

export default setOutputCommand;
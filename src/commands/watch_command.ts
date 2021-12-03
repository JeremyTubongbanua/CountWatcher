import { CommandInteraction, CommandInteractionOptionResolver, Interaction } from "discord.js";
import { ApplicationCommandOptionTypes } from "discord.js/typings/enums";
import Command from "./command";
import getStrippedId from '../util';


const watchCommand: Command = {
    commandBuild: {
        name: 'watch',
        description: 'Watch this channel for messages.',
        options: [
            {
                type: ApplicationCommandOptionTypes.STRING,
                name: 'channel',
                description: 'desired channel',
                required: true,
            },
        ],
    },
    run(interaction: CommandInteraction): void {
        const arg0: string = getStrippedId(interaction.options.getString('channel')!);
        console.log(arg0);
        interaction.reply({ content: 'Watching ' + arg0, ephemeral: true }); // ephemeral: nobody can see interaction reply
    }
}

export default watchCommand;
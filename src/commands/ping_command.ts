import { CommandInteraction } from "discord.js";
import Command from "./command";
import { updateSettings } from '../util';

const pingCommand: Command = {
    commandBuild: {
        name: 'ping',
        description: 'Debug command',
    },
    run(interaction: CommandInteraction): void {
        interaction.reply({ content: 'Pong', ephemeral: false }); // ephermal: false -> everyone can see it

        updateSettings('poo', 'lemon');


    }

}

export default pingCommand;
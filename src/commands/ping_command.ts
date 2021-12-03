import { CommandInteraction } from "discord.js";
import Command from "./command";



const pingCommand: Command = {
    commandBuild: {
        name: 'ping',
        description: 'Debug command',
    },
    async run(interaction: CommandInteraction): Promise<any> {
        await interaction.reply({ content: 'Poing', ephemeral: true });
        await interaction.followUp({ content: 'Poing', ephemeral: true });
    }
}

export default pingCommand;
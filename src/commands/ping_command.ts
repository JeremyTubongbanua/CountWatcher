import { CommandInteraction } from "discord.js";
import Command from "./command";

const pingCommand: Command = {
    commandBuild: {
        name: 'ping',
        description: 'Debug command.',
    },
    async run(interaction: CommandInteraction): Promise<any> {
        // const messages: Collection<string, Message> = await getLotsOfMessages(interaction.channel!, 2000);
        // console.log(messages.size);
        // messages.forEach((message) => {
        //     console.log(message.content);
        // })
        interaction.reply({ content: 'Pong', ephemeral: false }); // ephermal: false -> everyone can see it
    }

}
export default pingCommand;
import { ApplicationCommandDataResolvable, CommandInteraction, } from "discord.js";


interface Command {
    commandBuild: ApplicationCommandDataResolvable;
    run(interaction: CommandInteraction): void;
}

export default Command;
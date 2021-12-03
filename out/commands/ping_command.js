"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pingCommand = {
    commandBuild: {
        name: 'ping',
        description: 'Debug command',
    },
    async run(interaction) {
        await interaction.reply({ content: 'Poing', ephemeral: true });
        await interaction.followUp({ content: 'Poing', ephemeral: true });
    }
};
exports.default = pingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZ19jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3BpbmdfY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLE1BQU0sV0FBVyxHQUFZO0lBQ3pCLFlBQVksRUFBRTtRQUNWLElBQUksRUFBRSxNQUFNO1FBQ1osV0FBVyxFQUFFLGVBQWU7S0FDL0I7SUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQStCO1FBQ3JDLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDL0QsTUFBTSxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDO0NBQ0osQ0FBQTtBQUVELGtCQUFlLFdBQVcsQ0FBQyJ9
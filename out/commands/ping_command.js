"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pingCommand = {
    commandBuild: {
        name: 'ping',
        description: 'Debug command.',
    },
    async run(interaction) {
        interaction.reply({ content: 'Pong', ephemeral: false });
    }
};
exports.default = pingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZ19jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3BpbmdfY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLE1BQU0sV0FBVyxHQUFZO0lBQ3pCLFlBQVksRUFBRTtRQUNWLElBQUksRUFBRSxNQUFNO1FBQ1osV0FBVyxFQUFFLGdCQUFnQjtLQUNoQztJQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBK0I7UUFNckMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztDQUVKLENBQUE7QUFDRCxrQkFBZSxXQUFXLENBQUMifQ==
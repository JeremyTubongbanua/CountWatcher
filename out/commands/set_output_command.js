"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const setOutputCommand = {
    commandBuild: {
        name: 'setoutput',
        description: 'Sets this channel as the output channel POGGERS.',
    },
    async run(interaction) {
        (0, util_1.updateSettings)('output_channel_id', interaction.channelId);
        interaction.reply({ content: `${interaction.member.toString()} Set <#${interaction.channelId}> as output channel.`, ephemeral: true });
    }
};
exports.default = setOutputCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0X291dHB1dF9jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3NldF9vdXRwdXRfY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtDQUF5QztBQUV6QyxNQUFNLGdCQUFnQixHQUFZO0lBQzlCLFlBQVksRUFBRTtRQUNWLElBQUksRUFBRSxXQUFXO1FBQ2pCLFdBQVcsRUFBRSxrREFBa0Q7S0FDbEU7SUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQStCO1FBQ3JDLElBQUEscUJBQWMsRUFBQyxtQkFBbUIsRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFVBQVUsV0FBVyxDQUFDLFNBQVMsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0ksQ0FBQztDQUNKLENBQUE7QUFFRCxrQkFBZSxnQkFBZ0IsQ0FBQyJ9
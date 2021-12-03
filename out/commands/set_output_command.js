"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const setOutputCommand = {
    commandBuild: {
        name: 'setoutput',
        description: 'Sets this channel as the output channel.',
    },
    async run(interaction) {
        (0, util_1.updateSettings)('output_channel_id', interaction.channelId);
        interaction.reply({ content: interaction.member.toString() + ' Setting this as output channel beep boop', ephemeral: true });
    }
};
exports.default = setOutputCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0X291dHB1dF9jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3NldF9vdXRwdXRfY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtDQUF5QztBQUV6QyxNQUFNLGdCQUFnQixHQUFZO0lBQzlCLFlBQVksRUFBRTtRQUNWLElBQUksRUFBRSxXQUFXO1FBQ2pCLFdBQVcsRUFBRSwwQ0FBMEM7S0FDMUQ7SUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQStCO1FBQ3JDLElBQUEscUJBQWMsRUFBQyxtQkFBbUIsRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLDJDQUEyQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pJLENBQUM7Q0FDSixDQUFBO0FBRUQsa0JBQWUsZ0JBQWdCLENBQUMifQ==
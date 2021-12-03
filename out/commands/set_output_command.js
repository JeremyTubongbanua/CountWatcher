"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setOutputCommand = {
    commandBuild: {
        name: 'setoutput',
        description: 'Sets this channel as the output channel.',
    },
    run(interaction) {
        console.log(interaction);
        interaction.reply(interaction.member.toString() + ' Setting this as output channel beep boop');
    }
};
exports.default = setOutputCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0X291dHB1dF9jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3NldF9vdXRwdXRfY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLE1BQU0sZ0JBQWdCLEdBQVk7SUFDOUIsWUFBWSxFQUFFO1FBQ1YsSUFBSSxFQUFFLFdBQVc7UUFDakIsV0FBVyxFQUFFLDBDQUEwQztLQUMxRDtJQUNELEdBQUcsQ0FBQyxXQUErQjtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRywyQ0FBMkMsQ0FBQyxDQUFDO0lBQ25HLENBQUM7Q0FDSixDQUFBO0FBRUQsa0JBQWUsZ0JBQWdCLENBQUMifQ==
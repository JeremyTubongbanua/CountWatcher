"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const pingCommand = {
    commandBuild: {
        name: 'ping',
        description: 'Debug command',
    },
    run(interaction) {
        interaction.reply({ content: 'Pong', ephemeral: false });
        (0, util_1.updateSettings)('poo', 'lemon');
    }
};
exports.default = pingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZ19jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3BpbmdfY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtDQUF5QztBQUV6QyxNQUFNLFdBQVcsR0FBWTtJQUN6QixZQUFZLEVBQUU7UUFDVixJQUFJLEVBQUUsTUFBTTtRQUNaLFdBQVcsRUFBRSxlQUFlO0tBQy9CO0lBQ0QsR0FBRyxDQUFDLFdBQStCO1FBQy9CLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRXpELElBQUEscUJBQWMsRUFBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFHbkMsQ0FBQztDQUVKLENBQUE7QUFFRCxrQkFBZSxXQUFXLENBQUMifQ==
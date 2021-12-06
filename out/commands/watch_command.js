"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const watchCommand = {
    commandBuild: {
        name: 'watch',
        description: 'Watch this channel for messages.',
        options: [
            {
                type: 3,
                name: 'channel',
                description: 'Channel to watch for counting.',
                required: true,
            },
        ],
    },
    async run(interaction) {
        const channelId = (0, util_1.getStrippedId)(interaction.options.getString('channel'));
        (0, util_1.updateSettings)('watch_channel_id', channelId);
        interaction.reply({ content: `${interaction.member.toString()} Now watching <#${channelId}>.`, ephemeral: false });
    }
};
exports.default = watchCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2hfY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy93YXRjaF9jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esa0NBQXdEO0FBR3hELE1BQU0sWUFBWSxHQUFZO0lBQzFCLFlBQVksRUFBRTtRQUNWLElBQUksRUFBRSxPQUFPO1FBQ2IsV0FBVyxFQUFFLGtDQUFrQztRQUMvQyxPQUFPLEVBQUU7WUFDTDtnQkFDSSxJQUFJLEdBQXNDO2dCQUMxQyxJQUFJLEVBQUUsU0FBUztnQkFDZixXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxRQUFRLEVBQUUsSUFBSTthQUNqQjtTQUNKO0tBQ0o7SUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQStCO1FBQ3JDLE1BQU0sU0FBUyxHQUFXLElBQUEsb0JBQWEsRUFBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFDO1FBQ25GLElBQUEscUJBQWMsRUFBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM5QyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLFNBQVMsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZILENBQUM7Q0FDSixDQUFBO0FBRUQsa0JBQWUsWUFBWSxDQUFDIn0=
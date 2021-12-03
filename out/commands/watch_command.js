"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const watchCommand = {
    commandBuild: {
        name: 'watch',
        description: 'Watch this channel for messages.',
        options: [
            {
                type: 3,
                name: 'channel',
                description: 'desired channel',
                required: true,
            },
        ],
    },
    run(interaction) {
        const arg0 = interaction.options.getString('channel');
        console.log(arg0);
        interaction.reply({ content: 'Watching ' + arg0, ephemeral: true });
    }
};
exports.default = watchCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2hfY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy93YXRjaF9jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsTUFBTSxZQUFZLEdBQVk7SUFDMUIsWUFBWSxFQUFFO1FBQ1YsSUFBSSxFQUFFLE9BQU87UUFDYixXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLE9BQU8sRUFBRTtZQUNMO2dCQUNJLElBQUksR0FBc0M7Z0JBQzFDLElBQUksRUFBRSxTQUFTO2dCQUNmLFdBQVcsRUFBRSxpQkFBaUI7Z0JBQzlCLFFBQVEsRUFBRSxJQUFJO2FBQ2pCO1NBQ0o7S0FDSjtJQUNELEdBQUcsQ0FBQyxXQUErQjtRQUMvQixNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxHQUFHLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDO0NBQ0osQ0FBQTtBQUVELGtCQUFlLFlBQVksQ0FBQyJ9
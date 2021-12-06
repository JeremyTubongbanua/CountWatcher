"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const util_1 = require("../util");
const leaderboardCommand = {
    commandBuild: {
        name: 'leaderboard',
        description: 'View the top 5 people.',
    },
    async run(interaction) {
        const settings = await (0, util_1.readSettings)();
        const watchChannelId = settings.watch_channel_id;
        const watchChannel = await interaction.guild?.channels.fetch(watchChannelId);
        const messagesSearchMax = 2000;
        const messages = await (0, util_1.getLotsOfMessages)(watchChannel, messagesSearchMax);
        var users = new discord_js_1.Collection();
        messages.forEach((message) => {
            const authorId = message.author.id;
            if (users.get(authorId) == undefined) {
                users.set(authorId, 1);
            }
            else {
                users.set(authorId, users.get(authorId) + 1);
            }
        });
        users.sort((a, b) => {
            return (b - a);
        });
        const top = 5;
        if (users.size > top) {
            users = users.filter((value, key) => value > users.at(top));
        }
        interaction.reply({ content: `${interaction.member.toString()} Successful.`, embeds: [(0, util_1.embedGenerator2)(users)], ephemeral: false, });
    }
};
exports.default = leaderboardCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZGVyYm9hcmRfY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9sZWFkZXJib2FyZF9jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQW1GO0FBRW5GLGtDQUEyRTtBQUUzRSxNQUFNLGtCQUFrQixHQUFZO0lBQ2hDLFlBQVksRUFBRTtRQUNWLElBQUksRUFBRSxhQUFhO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7S0FDeEM7SUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQStCO1FBQ3JDLE1BQU0sUUFBUSxHQUFRLE1BQU0sSUFBQSxtQkFBWSxHQUFFLENBQUM7UUFDM0MsTUFBTSxjQUFjLEdBQVcsUUFBUSxDQUFDLGdCQUFnQixDQUFDO1FBRXpELE1BQU0sWUFBWSxHQUFpQixNQUFNLFdBQVcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQWtCLENBQUM7UUFHNUcsTUFBTSxpQkFBaUIsR0FBVyxJQUFJLENBQUM7UUFDdkMsTUFBTSxRQUFRLEdBQWdDLE1BQU0sSUFBQSx3QkFBaUIsRUFBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUd2RyxJQUFJLEtBQUssR0FBK0IsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDekQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3pCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ25DLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLEVBQUU7Z0JBQ2xDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzFCO2lCQUFNO2dCQUNILEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDakQ7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUdGLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFFaEIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUdILE1BQU0sR0FBRyxHQUFXLENBQUMsQ0FBQztRQUN0QixJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBYSxFQUFFLEdBQVcsRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBQztTQUNoRjtRQUVELFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLENBQUMsSUFBQSxzQkFBZSxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDeEksQ0FBQztDQUdKLENBQUE7QUFFRCxrQkFBZSxrQkFBa0IsQ0FBQyJ9
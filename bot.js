const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
  if (!channel) return;
  channel.send(`Welcome to Hunter's server, ${member}! *The best place to purchase Spotify, NordVPN accounts etc*. Please read the rules because they are very important. Also, send **h!support** and a staff member will contact you ASAP. Have a nice day! :smile:`);
});

client.on('message', message => {
  if (message.content === 'h!support') {
    message.channel.send('Thank you for using our Support Service! Check your Direct Messages...');
	message.author.send('Hello! A staff member will contact you ASAP. First of all, please go in your settings and let everyone message you, so we can contact you. Second of all, **do not fall for the fake staff members**. The only true staff members that can help you are in the #staff-members channel. Have a nice day! *Please do not reply to this message, as the bot cannot help you in any way, shape or form*');
  }
});

client.login('process.env.BOT_TOKEN');

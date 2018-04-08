const Discord = require('discord.js');
const robot = new Discord.Client();

robot.login(process.env.BOT_TOKEN);

robot.on('message', (message) => {
  
  if(message.content == "Привет") {
    message.reply("Привет, заходи в голосовой канал ПАЛУБА");  
  }
});
robot.on('message', (message) => {
  
  if(message.content == "привет") {
    message.reply("Привет, заходи в голосовой канал ПАЛУБА");  
  }
});
robot.on('message', (message) => {
  
  if(message.content == "привет.") {
    message.reply("Привет, заходи в голосовой канал ПАЛУБА");  
  }
});
robot.on('message', (message) => {
  
  if(message.content == "Привет.") {
    message.reply("Привет, заходи в голосовой канал ПАЛУБА");  
  }
});
robot.on('message', (message) => {
  
  if(message.content == "Привет,") {
    message.reply("Привет, заходи в голосовой канал ПАЛУБА");  
  }
});
robot.on('message', (message) => {
  
  if(message.content == "Привет!") {
    message.reply("Привет, заходи в голосовой канал ПАЛУБА");  
  }
});
robot.on('message', (message) => {
  
  if(message.content == "привет,") {
    message.reply("Привет, заходи в голосовой канал ПАЛУБА");  
  }
});
robot.on('message', (message) => {
  
  if(message.content == "привет!") {
    message.reply("Привет, заходи в голосовой канал ПАЛУБА");  
  }
});

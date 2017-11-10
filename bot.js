const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
const foods = ['rice&eggs', 'noodles', 'go out'];
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    var randomNumber = Math.floor(Math.random()*array.length);
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
whatToEat = shuffle(foods)
client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
      }
    
    if (message.content === 'baka') {
        message.reply('sucks');
    }
    if (message.content === 'food') {
        message.reply(whatToEat);
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

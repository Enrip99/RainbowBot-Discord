const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./data/config.json');


client.once('ready', () => {
  console.log('Ready!');
  client.user.setActivity('Probando: RainbowBot', );
});


client.on('message', message => {
  var ms = message.content.toLowerCase();


  if (ms === 'ping'){
    message.channel.send(Date.now() - message.createdTimestamp + ' ms'); //miliseconds
  }

  else if (ms === 'neck rope') {
    if (message.author.id === config.owner1 || message.author.id === config.owner2){
      console.log('Apagando...');
      process.exit();
    }
    else {
      message.channel.send('Solo puedo apagarme por orden de los propietarios del bot.')
    }
  }

  if(ms === 'start'){
    var colors = ['#9400D3','#4B0082','#0000FF','#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];
    var it = 0;
    const guildCurr = message.guild;
    const role = guildCurr.roles.cache.find(role => role.name === 'Rainbow Role');
    setInterval(() => {
      it = (it+1)%colors.length;
      var color = colors[it];
      role.setColor(color);
      console.log('trying to set '+color)
    }, 1100)

  }

});

client.login(config.token);

const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', message => {

    if (message.content === 'ping') {

    	message.reply('pong');

  	}

});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.MzgwNjM5Mjc3NDEyNzc3OTg0.DP1-sw.2dk81PrxFWT24Wc9Xx_VU7zwfdo
);

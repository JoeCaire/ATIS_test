// Définition des variables et constantes
const {Client} = require('discord.js');
const {TOKEN, PREFIX } = require('./config');
const atis = new Client();

// Démarrage du bot via la commande "node ./main.js" / log du terminal.
atis.on('ready', () => {
    console.log(`Logged in as ${atis.user.tag}!`);
});

// Echange de messages entre un utilisateur et le bot 
atis.on('message', message => {
  // if (message.content === `${PREFIX}salut`) message.channel.send("Bonjour, je suis le système de diffusion d information automatique A-T-I-S !")
  if (message.content.startsWith(`${PREFIX}help`)) message.channel.send("afficher un tableau des commande en embed !")
  if (message.content.startsWith(`${PREFIX}salut`)) message.channel.send("Bonjour, je suis le système de diffusion d information automatique A-T-I-S !")
  if (message.content.startsWith(`${PREFIX}ping`)) message.channel.send("pong !")
});

//Connecte le client, établissant une connexion Websocket à Discord
atis.login(process.env.TOKEN);
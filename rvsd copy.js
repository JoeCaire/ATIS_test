const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = (client, message, args) => {

  if (arg[0] === "rvsd") {
    const rvsd = await fetch("https://status.robertsspaceindustries.com/static/content/api/v0/JSON")
      .then(res => res.json())
      .then(json => json.Platform);

    const embed = new MessageEmbed()
      .setImage(rvsd)
      .setFooter("Powered by RSI https://status.robertsspaceindustries.com")
    message.channel.send(embed);
  }
}
const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = async (client, message, args) => {
  message.delete({ timeout: 3000 });

  if (arg[0] === "rvsd") {
    const rvsd = await fetch("https://status.robertsspaceindustries.com/static/content/api/v0/JSON")
      .then(res => res.json())
      .then(json => json.Platform);

    const embed = new MessageEmbed()
      .setImage(rvsd)
      .setFooter("Powered by RSI https://status.robertsspaceindustries.com")
    message.channel.send(embed);
  } else if (arg[0] === "rvsd2") {
    const rvsd2 = await fetch("https://status.robertsspaceindustries.com/static/content/api/v0/JSON")
      .then(res => res.json())
      .then(json => json.pu);

    const embed = new MessageEmbed()
      .setImage(rvsd2)
      .setFooter("Powered by RSI https://status.robertsspaceindustries.com")
    message.channel.send(embed);
  }
};
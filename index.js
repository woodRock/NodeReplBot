const Discord = require("discord.js")
const client = new Discord.Client()
const token = process.env.DISCORD_BOT_SECRET
const keep_alive = require("./keep_alive.js")

client.on('ready', () => {
  console.log('Im in!')
  console.log(client.user.username)
})

client.on('message', msg => {
  if (msg.author.id != client.user.id) {
    msg.channel.send(msg.content.split('').reverse().join(''));
  }
})

client.login(token)
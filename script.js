let wr, serverID = 'SERVERIDHERE';
window.webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => { wr = req; }]);
let stickerLib = Object.values(wr.c).find(x => x?.exports?.Z?.getStickersByGuildId), el = Object.values(wr.c).find(x => x?.exports?.Z?.getGuildEmoji), so = stickerLib.exports.Z.getStickersByGuildId(serverID), eo = el.exports.Z.getGuildEmoji(serverID), s = [], e = []
so.forEach((x) => { s.push(`${x.name} - https://media.discordapp.net/stickers/${x.id}.png`)})
eo.forEach((x) => {
  if (x.animated) {
    e.push(`${x.name} - https://media.discordapp.net/emojis/${x.id}.gif`)
    return
  }
  e.push(`${x.name} - https://media.discordapp.net/emojis/${x.id}.png`)
})
let fs = `STICKERS:\n${s.join('\n')}\n\nEMOJIS:\n${e.join('\n')}`
copy(fs)

let { MessageType } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {
pp = await conn.getProfilePicture(global.conn.user.jid)
conn.sendButtonImg(m.chat, `HALO KAK {name}`, `https://telegra.ph/file/9d90b04eba89b081acb5c.jpg`, `• Nama : {name}\n• Premium : No\n• Rank : {role}\n• Uang : {money}\n• Coin : {coin}\n• Exp : {exp} \n• Limit : {limit}\n\nSuport Saya Dengan Cara :\n× Join GC : https://tinyurl.com/yjuzyyk9 \n× Donasi : https://tinyurl.com/yk3ewrjf \n× Join Membership : wa.me/628989031500\n\nThanks To\n- Nurutomo\n- Rendy\n- Ariaa\n- Caliph\n- Raku\n\n{conn.getName(conn.user.jid)} By @IniIbnu`.trim(), 'Menu Bot 🏡', '!allmenu', 'Donasi 🎁', '!donasi', 'Group Chat 💬', '!gcbot', 'Membership 👑', '!premium')
  }
handler.help = ['menu']
handler.tags = ['main'] 
handler.command = /^(menu)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null

handler.exp = 20



module.exports = handler
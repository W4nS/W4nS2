exports.donate = (id, BotName, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `✨ -----[ *DONASI ${BotName}* ]----- ✨
  
Hi, ${id.split("@s.whatsapp.net")[0]} 👋️

Mau donasi? ✨

🗓️️ *${tampilTanggal}*
🕘 *${tampilWaktu}*

♻ Silahkan donasi dibawah ini :
   

🖼️ *DANA*: 085852353712

🖼️ *PULSA*: 085852353712



🔰 Official Grub [1] : ${grupch1}

🔰 Official Grub [2] : ${grupch2}

  
✨ -----[ *POWERED BY ${BotName}* ]----- ✨`
}

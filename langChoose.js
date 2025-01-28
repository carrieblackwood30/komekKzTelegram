async function startRu(user, bot, lang){

    if(lang === "ru"){
        await bot.sendMessage(user, `Подпишитесь пожалуйста на канал https://t.me/+PLmjJxvAR0gxNzFi`, {

            reply_markup: {
                inline_keyboard: [[{text: "готово!", callback_data: "checkSub"}]]
            }
        
        })
    }
    
    if(lang === "kz"){
        await bot.sendMessage(user, `Арнаға жазылыңыз https://t.me/+PLmjJxvAR0gxNzFi`, {

            reply_markup: {
                inline_keyboard: [[{text: "дайын!", callback_data: "checkSubKz"}]]
            }
        
        })
    }
    
}

module.exports = startRu
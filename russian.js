
async function startRu(user, bot){

    await bot.sendMessage(user, `Подпишитесь пожалуйста на канал https://t.me/+PLmjJxvAR0gxNzFi`, {

        reply_markup: {
            inline_keyboard: [[{text: "готово!", callback_data: "checkSub"}]]
        }
    
    })
    
    
}

module.exports = startRu
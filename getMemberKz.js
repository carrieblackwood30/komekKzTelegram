const axios = require("axios")
const API_KEY_BOT = require("./src/botKey")

async function getChatMember(user, bot){
    await axios.post(`https://api.telegram.org/bot${API_KEY_BOT}/getChatMember`,
        {
            chat_id: "-1002262276016",
            user_id: user
        }
    )
    .then(res => {
        if(res.data.result.status === "member" || res.data.result.status === "creator") {
            bot.sendMessage(user, "Меню", {
                reply_markup: {

                    inline_keyboard: [
                        [{text: "Получить инструкцию по отмене страховки", callback_data: "getInstructions"}],         
                        [{text: "Предоставление графика в МФО", callback_data: 'MFO'}],
                        [{text: "Отмена исполнительной надписи и снятие ареста" , callback_data: 'arrest'}],
                        [{text: "Внесудебное банкротство физического лица", callback_data: 'bankruptcy'}],
                        [{text: "Задолженности банков второго уровня", callback_data: 'debt'}],
        
                    ]
        
                }
            })
        }
        else{
            bot.sendMessage(user, `Подпишитесь пожалуйста на канал https://t.me/+PLmjJxvAR0gxNzFi`, {
                reply_markup: {
                    keyboard: [
                        [{text: 'готово!'}]
                    ]
                }
            });
        }
    })
}

module.exports = getChatMember
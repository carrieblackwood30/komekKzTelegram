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
                        [{text: "Сақтандыруды жою туралы нұсқаулық алыңыз", callback_data: "getInstructions"}],         
                        [{text: "МФО ұйымынан график алу", callback_data: 'MFOKZ'}],
                        [{text: "Атқарушылық жазбаны жою және бұғатты шешу" , callback_data: 'arrestKZ'}],
                        [{text: "Соттан тыс жеке тұлғаның банкроттығы", callback_data: 'bankruptcyKZ'}],
                        [{text: "Екінші деңгейлі банктердегі қарыздармен жұмыс", callback_data: 'debtKZ'}],
        
                    ]
        
                }
            })
        }
        else{
            bot.sendMessage(user, `Арнаға жазылыңыз https://t.me/+PLmjJxvAR0gxNzFi`, {
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
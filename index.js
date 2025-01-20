const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const API_KEY_BOT = "7418532395:AAH3-IniwiQz4cdaAYJNa21zM5GpF3y9b1I"

const bot = new TelegramBot(API_KEY_BOT, {polling: true});

const commands = [
    {
        command: "start",
        description: "Запуск бота"
    },
    {
        command: "/info",
        description: "Получить инструкцию"
    },
    {
        command: "/help",
        description: "Раздел помощи"
    }
]

bot.on('text', async msg => {

    try {
        async function getChatMember(){
            await axios.post(`https://api.telegram.org/bot${API_KEY_BOT}/getChatMember`,
                {
                    chat_id: "-1002262276016",
                    user_id: msg.from.id
                }
            )
            .then(res => {
                if(res.data.result.status === "member" || res.data.result.status === "creator") {
                    bot.sendMessage(msg.chat.id, "Komek_halykkz компаниясына қош келдіңіз, ссылкаға басып. телефон нөмеріңіз арқылы тіркеліңіз! \n\nТөмендегі инструкция бойынша жасаңыз! \n\n Добро пожаловать в Komek_halykkz, пройдите по ссылке, сделайте регистрацию по номер телефона! \n\n Дальше следуйте инструкции!")
                    bot.sendMessage(msg.chat.id, "https://cabinet.ffin.life/editProfile")
                    bot.sendDocument(msg.chat.id, "instructions.pdf")
                }
                else{
                    bot.sendMessage(msg.chat.id, `Подпишитесь пожалуйста на канал https://t.me/+PLmjJxvAR0gxNzFi`, {
                        reply_markup: {
                            keyboard: [
                                [{text: 'готово!'}]
                            ]
                        }
                    });
                }
            })
        }

        if(msg.text.startsWith('/start')) {
            await bot.sendMessage(msg.chat.id, `Подпишитесь пожалуйста на канал https://t.me/+PLmjJxvAR0gxNzFi`, {
                reply_markup: {
                    keyboard: [
                        [{text: 'готово!'}]
                    ]
                }
            });
        }

        if(msg.text.startsWith('готово')) {
            getChatMember()
        }

        if(msg.text.startsWith('/info')) {
            getChatMember()
        }

        if(msg.text.startsWith('/help')) {
            bot.sendMessage(msg.chat.id ,"напишите ваш вопрос")
        }

    }
    catch(error) {
        console.log(error);
    }

})

bot.setMyCommands(commands)
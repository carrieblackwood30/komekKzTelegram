const TelegramBot = require('node-telegram-bot-api');
const API_KEY_BOT = require("./src/botKey")
const startRu = require("./russian")
const commands = require("./src/commands")

const bot = new TelegramBot(API_KEY_BOT, {polling: true});

let user = ""

bot.on('text', async msg => {

    user = msg.chat.id

    try {

        if(msg.text.startsWith('/start')) {
            await bot.sendMessage(user, "Тілді таңдаңыз / Выберите язык", {
                reply_markup: {
                    inline_keyboard: [
                        [{text: "қазақша", callback_data: "kz"}, {text: "русский", callback_data: "ru"}],
                    ]
                }
            })
        }

    }
    catch(error) {
        console.log(error);
    }

})

bot.on("callback_query", async (ctx) => {
    try{
        switch(ctx.data){

            case "ru":
            startRu(user, bot)
            break

            case "kz":
                break
        }

    }
    catch(error) {
        console.log(error);
    }
})

bot.setMyCommands(commands)
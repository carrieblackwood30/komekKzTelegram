const TelegramBot = require('node-telegram-bot-api');
const getChatMember = require("./getMember");
const API_KEY_BOT = require("./botKey")
const bot = new TelegramBot(API_KEY_BOT, {polling: true});

let user = ""

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

    user = msg.chat.id

    try {

        if(msg.text.startsWith('/start')) {
            await bot.sendMessage(user, `Подпишитесь пожалуйста на канал https://t.me/+PLmjJxvAR0gxNzFi`, {
                reply_markup: {
                    keyboard: [
                        [{text: 'готово!'}]
                    ]
                }
            })
        }

        if(msg.text.startsWith('готово!')) {
            getChatMember(user, bot)
        }

    }
    catch(error) {
        console.log(error);
    }

})

bot.on("callback_query", async ctx =>{
    try{
        
        switch(ctx.data){

            case "MFO":
                await bot.sendMessage(user, "Предоставление графика в МФО \nМы работаем с микрофинансовыми организациями (МФО) и банками, помогая вам урегулировать задолженности. Мы предоставляем графики платежей, которые могут быть составлены от 3 до 12 месяцев в зависимости от компании и суммы задолженности. Рассмотрение заявок по закону занимает до 15 рабочих дней, а первые графики могут быть выданы в течение 8-9 дней.\n \n Мы работаем онлайн и удаленно по всему Казахстану, что позволяет вам получить помощь независимо от вашего местоположения. Оплата наших услуг осуществляется официально через Каспи, мы также подписываем договор, обеспечивая юридическую защиту для обеих сторон. Сумма одного займа составляет 9000 KZT. \n \nперейти к менеджеру:  @SoyProgrammador")
                break

            case "arrest":
                await bot.sendMessage(user, "Отмена исполнительной надписи и снятие ареста \n Процедура снятия ареста и отмены исполнительной надписи может занять всего 3-5 рабочих дней. Что это дает вам? \n    1.	Отсутствие процентов частного судебного исполнителя: вам не нужно будет оплачивать 25% от суммы долга, которые обычно требуют частные судебные исполнители. \n   2.	 Разблокировка счетов: ваши банковские счета будут разблокированы, и вы сможете вновь пользоваться банковскими услугами без ограничений. \n 	3.	Отсутствие арестов на имущество: арест будет снят, и вы сможете распоряжаться своим имуществом без ограничений. \n  \nСтоимость услуги: 5000 KZT за один арест. \n  \nперейти к менеджеру:  @SoyProgrammador")
                break

            case "bankruptcy":
                await bot.sendMessage(user, "https://cabinet.ffin.life/editProfile")
                break

            case "debt":
                await bot.sendMessage(user, "https://cabinet.ffin.life/editProfile")
                break
        }

    }
    catch(error) {
        console.log(error);
    }
})

bot.setMyCommands(commands)

module.exports = user
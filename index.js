const { Telegraf, 
    Markup,
    session
} = require('telegraf');
const replaceDisallowedWords = require('disallowed-word-filter');
const myFilter = new replaceDisallowedWords({
    additionalWords: 'с-у-к-а, п-и-д-о-р',
  })
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.replyWithHTML('Приветствую! \nCIC - Бот был создан специально для рандомного выбора дежурных 9A класса \n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ \nДля выбора других двух рандомных дежурных пропишите /random; \n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ \nДля выбора одного рандомного дежурного пропишите /singleRandom \n┅ ┅ ┅ ┅ ┅ ┅ ┅ \n<a href="https://t.me/GeemNp">Dimes Production</a>', {
    disable_web_page_preview: true
}));

let kb = [
    ['/random', '/singleRandom'],
    ['/time']

]
bot.help((ctx) => ctx.reply('/start - запуск бота, \n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅  \n/help - помощь по боту\n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ \n/admins - список пользователей с доступом использования бота \n/time - информация о текущей дате\n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ \nДля выбора других двух рандомных дежурных пропишите /random; \nДля выбора одного рандомного дежурного пропишите /singleRandom', Markup.keyboard(kb).resize()));


bot.launch(console.log('Бот активен'));

bot.use(session()); 

bot.use((ctx,next)=>{
    if (typeof ctx.session === 'undefined'){
        ctx.session = {}
        
    }
    next()
})
 

    function random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

     



bot.command("random", async (ctx) => {
    if(await ctx.message.from.id == '5103314362') {
        try {
            const users = ['Мухаммад Ислом', 'Ризо', 'Акобирхон', 'Ахроржон', 'Иброхим', 'Шахзода', 'Фирдавс', 'Шахобиддин', 'Азимжон', 'Салохиддин', 'Саидакмал', 'Дилсора', 'Дилором', 'Исломжон', 'Шахноза', 'Назокат', 'Шохжахон', 'Муродбек', 'Рузметов Фирдавс', 'Азиза', 'Хулкарой', 'Билол', 'Шодия', 'Ойбек', 'Умаржон', 'Машрадбек', 'Хаетхон', 'Хусанов Мухаммадюсуф', 'Настарин', 'Ясмина', 'Абдулазиз', 'Юсупов Мухаммадюсуф']
            await ctx.replyWithHTML(`👔 Следующими дежурными будут => <b>${users[random(0, 32)]}</b> и <b>${users[random(0, 32)]}</b>`, Markup.removeKeyboard())
            await ctx.reply(`📌 Для выбора других двух рандомных дежурных пропишите /random; \n Для выбора одного рандомного дежурного пропишите /singleRandom.\n Команда вызвана администратором @${ctx.message.from.username}`)
        }catch(e) {
            console.error();
        }
    }else if(await ctx.message.from.id == '588271676') {
        try {
            const users = ['Мухаммад Ислом', 'Ризо', 'Акобирхон', 'Ахроржон', 'Иброхим', 'Шахзода', 'Фирдавс', 'Шахобиддин', 'Азимжон', 'Салохиддин', 'Саидакмал', 'Дилсора', 'Дилором', 'Исломжон', 'Шахноза', 'Назокат', 'Шохжахон', 'Муродбек', 'Рузметов Фирдавс', 'Азиза', 'Хулкарой', 'Билол', 'Шодия', 'Ойбек', 'Умаржон', 'Машрадбек', 'Хаетхон', 'Хусанов Мухаммадюсуф', 'Настарин', 'Ясмина', 'Абдулазиз', 'Юсупов Мухаммадюсуф']
            await ctx.replyWithHTML(`👔 Следующими дежурными будут => <b>${users[random(0, 32)]}</b> и <b>${users[random(0, 32)]}</b>`, Markup.removeKeyboard())
            await ctx.reply(` 📌Для выбора других двух рандомных дежурных пропишите /random; \n Для выбора одного рандомного дежурного пропишите /singleRandom.\n Команда вызвана администратором @${ctx.message.from.username}`)
        }catch(e) {
            console.error();
        }
    }else {
        ctx.reply('🔒 У вас недостаточно прав...')
        return
    }  
})

bot.command("singleRandom", async (ctx) => {
    if(await ctx.message.from.id == '5103314362') {
        try {
            const users = ['Мухаммад Ислом', 'Ризо', 'Акобирхон', 'Ахроржон', 'Иброхим', 'Шахзода', 'Фирдавс', 'Шахобиддин', 'Азимжон', 'Салохиддин', 'Саидакмал', 'Дилсора', 'Дилором', 'Исломжон', 'Шахноза', 'Назокат', 'Шохжахон', 'Муродбек', 'Рузметов Фирдавс', 'Азиза', 'Хулкарой', 'Билол', 'Шодия', 'Ойбек', 'Умаржон', 'Машрадбек', 'Хаетхон', 'Хусанов Мухаммадюсуф', 'Настарин', 'Ясмина', 'Абдулазиз', 'Юсупов Мухаммадюсуф']
            await ctx.replyWithHTML(`👔 Следующим дежурным будет => <b>${users[random(0, 32)]}</b>`, Markup.removeKeyboard())
            await ctx.reply(`📌 Для выбора других двух рандомных дежурных пропишите /random; \n Для выбора одного рандомного дежурного пропишите /singleRandom. \nКоманда вызвана администратором @${ctx.message.from.username}`)
        }catch(e) {
            console.error();
        }
    }else if(await ctx.message.from.id == '588271676') {
        try {
            const users = ['Мухаммад Ислом', 'Ризо', 'Акобирхон', 'Ахроржон', 'Иброхим', 'Шахзода', 'Фирдавс', 'Шахобиддин', 'Азимжон', 'Салохиддин', 'Саидакмал', 'Дилсора', 'Дилором', 'Исломжон', 'Шахноза', 'Назокат', 'Шохжахон', 'Муродбек', 'Рузметов Фирдавс', 'Азиза', 'Хулкарой', 'Билол', 'Шодия', 'Ойбек', 'Умаржон', 'Машрадбек', 'Хаетхон', 'Хусанов Мухаммадюсуф', 'Настарин', 'Ясмина', 'Абдулазиз', 'Юсупов Мухаммадюсуф']
            await ctx.replyWithHTML(`👔 Следующим дежурным будет => <b>${users[random(0, 32)]}</b>`, Markup.removeKeyboard())
            await ctx.reply(`📌 Для выбора других двух рандомных дежурных пропишите /random; \n Для выбора одного рандомного дежурного пропишите /singleRandom. \nКоманда вызвана администратором @${ctx.message.from.username}`)
        }catch(e) {
            console.error();
        }
    }else {
        ctx.reply('🔒 У вас недостаточно прав...')
        return
    }
})

bot.command("singlerandom", async (ctx) => {
    if(await ctx.message.from.id == '5103314362') {
        try {
            const users = ['Мухаммад Ислом', 'Ризо', 'Акобирхон', 'Ахроржон', 'Иброхим', 'Шахзода', 'Фирдавс', 'Шахобиддин', 'Азимжон', 'Салохиддин', 'Саидакмал', 'Дилсора', 'Дилором', 'Исломжон', 'Шахноза', 'Назокат', 'Шохжахон', 'Муродбек', 'Рузметов Фирдавс', 'Азиза', 'Хулкарой', 'Билол', 'Шодия', 'Ойбек', 'Умаржон', 'Машрадбек', 'Хаетхон', 'Хусанов Мухаммадюсуф', 'Настарин', 'Ясмина', 'Абдулазиз', 'Юсупов Мухаммадюсуф']
            await ctx.replyWithHTML(`👔 Следующим дежурным будет => <b>${users[random(0, 32)]}</b>`, Markup.removeKeyboard())
            await ctx.reply(`📌 Для выбора других двух рандомных дежурных пропишите /random; \n Для выбора одного рандомного дежурного пропишите /singleRandom. \nКоманда вызвана администратором @${ctx.message.from.username}`)
        }catch(e) {
            console.error();
        }
    }else if(await ctx.message.from.id == '588271676') {
        try {
            const users = ['Мухаммад Ислом', 'Ризо', 'Акобирхон', 'Ахроржон', 'Иброхим', 'Шахзода', 'Фирдавс', 'Шахобиддин', 'Азимжон', 'Салохиддин', 'Саидакмал', 'Дилсора', 'Дилором', 'Исломжон', 'Шахноза', 'Назокат', 'Шохжахон', 'Муродбек', 'Рузметов Фирдавс', 'Азиза', 'Хулкарой', 'Билол', 'Шодия', 'Ойбек', 'Умаржон', 'Машрадбек', 'Хаетхон', 'Хусанов Мухаммадюсуф', 'Настарин', 'Ясмина', 'Абдулазиз', 'Юсупов Мухаммадюсуф']
            await ctx.replyWithHTML(`👔 Следующим дежурным будет => <b>${users[random(0, 32)]}</b>`, Markup.removeKeyboard())
            await ctx.reply(`📌 Для выбора других двух рандомных дежурных пропишите /random; \n Для выбора одного рандомного дежурного пропишите /singleRandom. \nКоманда вызвана администратором @${ctx.message.from.username}`)
        }catch(e) {
            console.error();
        }
    }else {
        ctx.reply('🔒 У вас недостаточно прав...')
        return
    }
})

bot.command("admins", async (ctx) => {
    try {
        if (ctx.session?.booksRequest> (new Date().valueOf() - 10 * 60 * 1000)) return await ctx.reply(`⚠ Не так быстро! Повторно использовать команду можно через 10 мин (@${ctx.message.from.username})`);
        ctx.session.booksRequest = new Date().valueOf(); 
        await ctx.reply('Bot access on: \nАзим\n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ \nИслом(OG_DIMES)', Markup.removeKeyboard())   
    }catch(e){
        console.error(e);
    }
})

bot.command("time", async (ctx) => {
    try {
        let data = new Date();
        function monthq() {
            let monthq = data.getMonth() + 1;
            if(monthq < 10) {
                let result = '0' + monthq;
                return result
            }else {
                return
            }
        }
        function monthN() {
            let cmonth = data.getMonth() + 1;
            if(cmonth == '1') {
                let mName = 'Январь';
                return mName
            }else if(cmonth == '2') {
                let mName = 'Февраль';
                return mName
            }else if(cmonth == '3') {
                let mName = 'Март';
                return mName
            }else if(cmonth == '4') {
                let mName = 'Апрель';
                return mName
            }else if(cmonth == '5') {
                let mName = 'Май';
                return mName
            }else if(cmonth == '6') {
                let mName = 'Июнь';
                return mName
            }else if(cmonth == '7') {
                let mName = 'Июль';
                return mName
            }else if(cmonth == '8') {
                let mName = 'Август';
                return mName
            }else if(cmonth == '9') {
                let mName = 'Сентябрь';
                return mName
            }else if(cmonth == '10') {
                let mName = 'Ноябрь';
                return mName
            }else if(cmonth == '11') {
                let mName = 'Декабрь';
                return mName
            }else {
                return
            }
        }
        await ctx.reply(`@${ctx.message.from.username}, вот вся информация о текущей дате:`, Markup.removeKeyboard());
        await ctx.replyWithPhoto({source: './time.png'}, {parse_mode: 'HTML', caption: `🌍 <b>Сегодня:</b> ${data.getDate()}/${monthq()}/${data.getFullYear()} \n---------------------------------- \n⌚ <b>Время:</b> \n⌚ <b>Час:</b> ${data.getHours()} \n⌚ <b>Минута:</b> ${data.getMinutes()} \n⌚ <b>Секунда:</b> ${data.getSeconds()} \n⌚ <b>Миллисекунда:</b> ${data.getMilliseconds()} \n⌛ <b>Текущее время:</b> ${data.getHours()}:${data.getMinutes()} \n---------------------------------- \n<b>Месяц</b>: ${monthN()} \n<b>Год</b>: ${data.getFullYear()}`});
    }catch(e) {
        console.error(e);
    }
})

bot.on("message", async (ctx) => {
    try {
        let filter = await myFilter.check(ctx.message.text, true)
        if(ctx.message.from.id == '588271676') {
            return
        }else if(filter == true){
            await ctx.tg.deleteMessage(ctx.chat.id, ctx.message.message_id);
            await ctx.reply(`🤬 @${ctx.message.from.username}, не матерись!`)
        }else if(ctx.message.text == '😂') {
            await ctx.replyWithVideo({source: './несмешно-джонсина.gif'});
        }else {
            return
        }
    }catch(e) {
        console.error(e);
    } 
})  

bot.on("edited_message", async (ctx) => {
    try {
        let filter = await myFilter.check(ctx.editedMessage.text, true)
        if(ctx.editedMessage.from.id == '588271676') {
            return
        }else if(filter == true) {
            await ctx.tg.deleteMessage(ctx.editedMessage.chat.id, ctx.editedMessage.message_id);
            await ctx.reply(`🤬 @${ctx.editedMessage.from.username}, не матерись!`)
        }else {
            return
        }
    }catch(e) {
        console.error(e);
    }
    
})


process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
const { Telegraf, 
    Markup,
    session
} = require('telegraf');
const replaceDisallowedWords = require('disallowed-word-filter');
const myFilter = new replaceDisallowedWords({
    additionalWords: 'бл, хуй, похуй, сука, с-у-к-а, п-и-д-о-р',
  })
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.replyWithHTML('Приветствую! \nCIC - Бот был создан специально для рандомного выбора дежурных 9A класса \n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ \nДля выбора других двух рандомных дежурных пропишите /random; \n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ \nДля выбора одного рандомного дежурного пропишите /singleRandom. \n┅ ┅ ┅ ┅ ┅ ┅ ┅ \n<a href="https://t.me/GeemNp">Dimes Production</a>', {
    disable_web_page_preview: true
}));

let kb = [
    ['/random'],
    ['/singleRandom']
]
bot.help((ctx) => ctx.reply('/start - запуск бота, \n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅  \n/help - помощь по боту\n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ \n/admins - список пользователей с доступом использования бота', Markup.keyboard(kb).resize()));


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
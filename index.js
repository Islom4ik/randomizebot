const { Telegraf, 
    Markup,
    session
} = require('telegraf');
const replaceDisallowedWords = require('disallowed-word-filter');
const caliph_api = require('caliph-api')
const myFilter = new replaceDisallowedWords({
    additionalWords: 'с-у-к-а, п-и-д-о-р',
  })
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN);
const fs = require("fs")
const { MongoClient } = require('mongodb');
bot.start((ctx) => ctx.replyWithHTML('Приветствую! \nCIC - Бот был создан специально для рандомного выбора дежурных 9A класса \n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ \nДля выбора других двух рандомных дежурных пропишите /random; \n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ \nДля выбора одного рандомного дежурного пропишите /singleRandom \n┅ ┅ ┅ ┅ ┅ ┅ ┅ \n<a href="https://t.me/GeemNp">Dimes Production</a>', {disable_web_page_preview: true}));

const url = 'mongodb+srv://Muhammad007:Muhammad007@database.3dodl7a.mongodb.net';
const client = new MongoClient(url);
client.connect();
const db = client.db('bot');
const collection = db.collection('users');

let kb = [
    ['/random', '/singleRandom'],
    ['/time']

]
bot.help((ctx) => ctx.reply('/start - запуск бота, \n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅  \n/help - помощь по боту\n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ \n/admins - список пользователей с доступом использования бота \n/time - информация о текущей дате\n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ \nДля выбора других двух рандомных дежурных пропишите /random; \nДля выбора одного рандомного дежурного пропишите /singleRandom'));


bot.launch({dropPendingUpdates: true});

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
            const users = ['Мухаммад Ислом', 'Акобирхон', 'Шахзода', 'Шахобиддин', 'Дилсора', 'Дилором', 'Муродбек', 'Азиза', 'Хулкарой', 'Билол', 'Ойбек', 'Умаржон', 'Ясмина', 'Абдулазиз', 'Икболиддин']
            await ctx.replyWithHTML(`👔 Следующими дежурными будут => <b>${users[random(0, 32)]}</b> и <b>${users[random(0, 32)]}</b>`, Markup.removeKeyboard())
            await ctx.reply(`📌 Для выбора других двух рандомных дежурных пропишите /random; \n Для выбора одного рандомного дежурного пропишите /singleRandom.\n Команда вызвана администратором @${ctx.message.from.username}`)
        }catch(e) {
            console.error();
        }
    }else if(await ctx.message.from.id == '1050880283') {
        try {
            const users = ['Мухаммад Ислом', 'Акобирхон', 'Шахзода', 'Шахобиддин', 'Дилсора', 'Дилором', 'Муродбек', 'Азиза', 'Хулкарой', 'Билол', 'Ойбек', 'Умаржон', 'Ясмина', 'Абдулазиз', 'Икболиддин']
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
            const users = ['Мухаммад Ислом', 'Акобирхон', 'Шахзода', 'Шахобиддин', 'Азимжон', 'Дилсора', 'Дилором', 'Шахноза', 'Муродбек', 'Азиза', 'Хулкарой', 'Билол', 'Ойбек', 'Умаржон', 'Ясмина']
            await ctx.replyWithHTML(`👔 Следующим дежурным будет => <b>${users[random(0, 32)]}</b>`, Markup.removeKeyboard())
            await ctx.reply(`📌 Для выбора других двух рандомных дежурных пропишите /random; \n Для выбора одного рандомного дежурного пропишите /singleRandom. \nКоманда вызвана администратором @${ctx.message.from.username}`)
        }catch(e) {
            console.error();
        }
    }else if(await ctx.message.from.id == '1050880283') {
        try {
            const users = ['Мухаммад Ислом', 'Акобирхон', 'Шахзода', 'Шахобиддин', 'Азимжон', 'Дилсора', 'Дилором', 'Шахноза', 'Муродбек', 'Азиза', 'Хулкарой', 'Билол', 'Ойбек', 'Умаржон', 'Ясмина']
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
            const users = ['Мухаммад Ислом', 'Акобирхон', 'Шахзода', 'Шахобиддин', 'Азимжон', 'Дилсора', 'Дилором', 'Шахноза', 'Муродбек', 'Азиза', 'Хулкарой', 'Билол', 'Ойбек', 'Умаржон', 'Ясмина']
            await ctx.replyWithHTML(`👔 Следующим дежурным будет => <b>${users[random(0, 32)]}</b>`, Markup.removeKeyboard())
            await ctx.reply(`📌 Для выбора других двух рандомных дежурных пропишите /random; \n Для выбора одного рандомного дежурного пропишите /singleRandom. \nКоманда вызвана администратором @${ctx.message.from.username}`)
        }catch(e) {
            console.error();
        }
    }else if(await ctx.message.from.id == '1050880283') {
        try {
            const users = ['Мухаммад Ислом', 'Акобирхон', 'Шахзода', 'Шахобиддин', 'Азимжон', 'Дилсора', 'Дилором', 'Шахноза', 'Муродбек', 'Азиза', 'Хулкарой', 'Билол', 'Ойбек', 'Умаржон', 'Ясмина']
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
        await ctx.replyWithHTML('Bot access on: \n<a href="tg://user?id=1050880283">Шахзода</a>\n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ \n<a href="tg://user?id=5103314362">Ислом</a>', Markup.removeKeyboard())   
    }catch(e){
        console.error(e);
    }
})

let quat;
let ping;

bot.command("everyone", async ctx => {
    try {
        await ctx.tg.deleteMessage(ctx.message.chat.id, ctx.message.message_id);
        quat = await ctx.replyWithHTML(`Вы уверены что хотите упомянуть всех участников данной группы?`, {
            ...Markup.inlineKeyboard([
                [Markup.button.callback("Да, уверен!", 'acc')],
                [Markup.button.callback("Нет, я передумал...", 'can')]
            ])
        })
    }catch(e) {
        console.error(e);
    }
})

bot.action('acc', async ctx => {
    try {
        await ctx.tg.deleteMessage(quat.chat.id, quat.message_id);
        if (ctx.session?.booksRequest> (new Date().valueOf() - 30000)) return await ctx.reply(`⚠ Не так быстро! Повторно использовать данную кнопку можно через 30 секунд (@${ctx.callbackQuery.from.username})`);
        ctx.session.booksRequest = new Date().valueOf();
        await ctx.answerCbQuery('Ваш запрос успешно обработан', Markup.removeKeyboard());
        ping = await ctx.replyWithHTML(`🗿 Все участники были упомянуты пользователем @${ctx.callbackQuery.from.username}\n‼️Были упомянуты следующие участники группы:\n@OG_DIMES | @Sh_kami07 | @muhammadyusufxusanov | @shaxmen1 | <a href="tg://user?id=1472635950">Ойбек</a> | @Algin_10 | @b_az1m | @Khamrakulovna_sun | <a href="tg://user?id=5380436836">Hulkaroy</a> | @NeedForAnime | <a href="tg://user?id=1050880283">Шахзода</a> | @champ_dobriy | @senorita_solo | @dilsora_dd`, {...Markup.inlineKeyboard(
        [
            [Markup.button.callback('Close', 'cl')]
        ]
        ), disable_notification: false})
        await bot.action("cl", async ctx => {
        try {
            await ctx.answerCbQuery('Сообщение удалено');
            await ctx.tg.deleteMessage(ping.chat.id, ping.message_id);
        }catch(e) {
            console.error(e);
        }
    })
    }catch(e) {
        console.error(e);
    }
})

bot.action('can', async ctx => {
    try {
        let chatid = await quat.chat.id;
        let messageid = await quat.message_id;
        await ctx.answerCbQuery('Ваш выбор принят!');
        await ctx.tg.deleteMessage(chatid, messageid);
    }catch(e) {
        console.error(e);
    }
})

bot.command("petHelp", async (ctx) => {
    await ctx.reply('ПОМОЩЬ ПО К. PET \n/pet принимает 2 аргумента... \nДля использования пропишите команду: \n/pet [slap(чапалах), hug(обнять)] <@участник> \nПримеры использования: \n/pet slap @ogDimes \n/pet hug @ogDimes')
})


bot.command("pet", async (ctx) => {
    if(ctx.message.text.split(' ')[1] == 'hug'){
        await ctx.tg.deleteMessage(ctx.chat.id, ctx.message.message_id);
        await ctx.replyWithVideo({source: './обнимаха.gif'}, {caption: `@${ctx.message.from.username} обнял(а) ${ctx.message.text.split(' ')[2]}`});
    }else if(ctx.message.text.split(' ')[1] == 'slap') {
        await ctx.tg.deleteMessage(ctx.chat.id, ctx.message.message_id);
        await ctx.replyWithVideo({source: './slap.gif'}, {caption: `${ctx.message.text.split(' ')[2]} получил(а) пощечину от @${ctx.message.from.username}`});
    }else {
        ctx.reply('Вы не выбрали действие...')
    }
     
})

bot.command("emojimix", async (ctx) => {
    try {
        var result = await caliph_api.other.emojimix(ctx.message.text.split(' ')[1], ctx.message.text.split(' ')[2])
        await ctx.replyWithPhoto({source: result}, {reply_to_message_id: ctx.message.message_id}, {caption: `${ctx.message.text.split(' ')[1]} + ${ctx.message.text.split(' ')[2]}`})
    }catch(e) {
        console.error(e);
        ctx.reply('Упс... Что-то пошло не так(')
    }
})

bot.on("message", async (ctx) => {
    try {
        if(ctx.message.text == '😂') {
            await ctx.replyWithVideo({source: './несмешно-джонсина.gif'});
        }else {
            return
        }
    }catch(e) {
        console.error(e);
    } 
})


process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
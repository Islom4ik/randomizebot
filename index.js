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
bot.start((ctx) => ctx.replyWithHTML('Приветствую! \nCIC - Бот был создан специально для рандомного выбора дежурных 9A класса \n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ \nДля выбора других двух рандомных дежурных пропишите /random; \n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ \nДля выбора одного рандомного дежурного пропишите /singleRandom \n┅ ┅ ┅ ┅ ┅ ┅ ┅ \n<a href="https://t.me/GeemNp">Dimes Production</a>', {
    disable_web_page_preview: true
}));

let kb = [
    ['/random', '/singleRandom'],
    ['/time']

]
bot.help((ctx) => ctx.reply('/start - запуск бота, \n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅  \n/help - помощь по боту\n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ \n/admins - список пользователей с доступом использования бота \n/time - информация о текущей дате\n┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ \nДля выбора других двух рандомных дежурных пропишите /random; \nДля выбора одного рандомного дежурного пропишите /singleRandom'));


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
            const users = ['Мухаммад Ислом', 'Акобирхон', 'Шахзода', 'Шахобиддин', 'Азимжон', 'Дилсора', 'Дилором', 'Шахноза', 'Муродбек', 'Азиза', 'Хулкарой', 'Билол', 'Ойбек', 'Умаржон', 'Хусанов Мухаммадюсуф', 'Ясмина']
            await ctx.replyWithHTML(`👔 Следующим дежурным будет => <b>${users[random(0, 32)]}</b>`, Markup.removeKeyboard())
            await ctx.reply(`📌 Для выбора других двух рандомных дежурных пропишите /random; \n Для выбора одного рандомного дежурного пропишите /singleRandom. \nКоманда вызвана администратором @${ctx.message.from.username}`)
        }catch(e) {
            console.error();
        }
    }else if(await ctx.message.from.id == '588271676') {
        try {
            const users = ['Мухаммад Ислом', 'Акобирхон', 'Шахзода', 'Шахобиддин', 'Азимжон', 'Дилсора', 'Дилором', 'Шахноза', 'Муродбек', 'Азиза', 'Хулкарой', 'Билол', 'Ойбек', 'Умаржон', 'Хусанов Мухаммадюсуф', 'Ясмина']
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
            const users = ['Мухаммад Ислом', 'Акобирхон', 'Шахзода', 'Шахобиддин', 'Азимжон', 'Дилсора', 'Дилором', 'Шахноза', 'Муродбек', 'Азиза', 'Хулкарой', 'Билол', 'Ойбек', 'Умаржон', 'Хусанов Мухаммадюсуф', 'Ясмина']
            await ctx.replyWithHTML(`👔 Следующим дежурным будет => <b>${users[random(0, 32)]}</b>`, Markup.removeKeyboard())
            await ctx.reply(`📌 Для выбора других двух рандомных дежурных пропишите /random; \n Для выбора одного рандомного дежурного пропишите /singleRandom. \nКоманда вызвана администратором @${ctx.message.from.username}`)
        }catch(e) {
            console.error();
        }
    }else if(await ctx.message.from.id == '588271676') {
        try {
            const users = ['Мухаммад Ислом', 'Акобирхон', 'Шахзода', 'Шахобиддин', 'Азимжон', 'Дилсора', 'Дилором', 'Шахноза', 'Муродбек', 'Азиза', 'Хулкарой', 'Билол', 'Ойбек', 'Умаржон', 'Хусанов Мухаммадюсуф', 'Ясмина']
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

bot.command("everyone", async ctx => {
    try {
        if (ctx.session?.booksRequest> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Не так быстро! Повторно использовать команду можно через 2 минуты (@${ctx.message.from.username})`);
        ctx.session.booksRequest = new Date().valueOf(); 
        await ctx.tg.deleteMessage(ctx.message.chat.id, ctx.message.message_id)
        let quat = await ctx.replyWithHTML(`Вы уверены что хотите упомянуть всех участников данной группы?`, {
            ...Markup.inlineKeyboard([
                [Markup.button.callback("Да, уверен!", 'acc')],
                [Markup.button.callback("Нет, я передумал...", 'can')]
            ])
        })
    
        bot.action('acc', async ctx => {
            try {
                await ctx.answerCbQuery('Ваш запрос успешно обработан', Markup.removeKeyboard());
                let ping = await ctx.replyWithHTML(`🗿 Все были упомянуты пользователем @${ctx.callbackQuery.from.username}\n‼️Были упомянуты следующие участники группы:\n@GeemNp | @Sh_kami07 | @muhammadyusufxusanov | <a href="tg://user?id=5103314362">𝔂𝓪𝓼𝓶𝓲𝓷𝓪🕊</a> | @shaxmen1 | <a href="tg://user?id=5103314362">Ойбек</a> | @Algin_10 | @b_az1m | @Khamrakulovna_sun | <a href="tg://user?id=5103314362">Hulkaroy</a> | @NeedForAnime | <a href="tg://user?id=1050880283">Шахзода</a> | @champ_dobriy | @senorita_solo | @dilsora_dd`, Markup.inlineKeyboard(
                [
                    [Markup.button.callback('Close', 'cl')]
                ]
                ))
                await bot.action("cl", async ctx => {
                try {
                    await ctx.answerCbQuery('Сообщение удалено');
                    await ctx.tg.deleteMessage(ping.chat.id, ping.message_id);
                }catch(e) {
                    console.error(e);
                }
                await ctx.tg.deleteMessage(quat.chat.id, quat.message_id);
            })
            }catch(e) {
                console.error(e);
            }
        })
    
        await bot.action('can', async ctx => {
            try {
                let chatid = await quat.chat.id;
                let messageid = await quat.message_id;
                await ctx.answerCbQuery('Ваш выбор принят!');
                await ctx.tg.deleteMessage(chatid, messageid);
            }catch(e) {
                console.error(e);
            }
        })
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

bot.command("unban", async (ctx) => {
    if(ctx.message.from.id == '5103314362') {
        await ctx.tg.unbanChatMember('-1001759302664', ctx.message.text.split(' ')[1]);
        await ctx.tg.unbanChatSenderChat('-1001759302664', ctx.message.text.split(' ')[1]);
        await ctx.reply('выполнено')
    }else {
        return
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

bot.command("singleRandom", async (ctx) => {
    try {
        ctx.reply(`@${ctx.message.from.username}, извините команда не доступна! Идут технические работы...`)
    }catch(e) {
        console.error();
    }

})

bot.command("admins", async (ctx) => {
    try {
        ctx.reply(`@${ctx.message.from.username}, извините команда не доступна! Идут технические работы...`)
    }catch(e) {
        console.error();
    }

})

bot.command("pet", async (ctx) => {
    try {
        ctx.reply(`@${ctx.message.from.username}, извините команда не доступна! Идут технические работы...`)
    }catch(e) {
        console.error();
    }

})

bot.command("emojimix", async (ctx) => {
    try {
        ctx.reply(`@${ctx.message.from.username}, извините команда не доступна! Идут технические работы...`)
    }catch(e) {
        console.error();
    }

})

bot.command("random", async (ctx) => {
    try {
        ctx.reply(`@${ctx.message.from.username}, извините команда не доступна! Идут технические работы...`)
    }catch(e) {
        console.error();
    }

})

bot.command("singlerandom", async (ctx) => {
        try {
            ctx.reply(`@${ctx.message.from.username}, извините команда не доступна! Идут технические работы...`)
        }catch(e) {
            console.error();
        }

})

function database( filename, default_ ){
    let back = { };
    
    back.save = function(){
      fs.writeFileSync( filename, JSON.stringify( back.body, null, 4 ) )
    }
    
    if ( fs.existsSync( filename ) ) {
      back.body = JSON.parse( fs.readFileSync( filename, { encoding: 'utf8' } ) );
    }
    else{
      back.body = default_
      back.save()
    }
    return back;
}

bot.on("message", async (ctx) => {
    try {
        let filter = await myFilter.check(ctx.message.text, true)
        if(ctx.message.from.id == '588271676' && filter == true) {
            await ctx.tg.deleteMessage(ctx.chat.id, ctx.message.message_id);
            await ctx.reply(`🤬 @${ctx.message.from.username}, не матерись! \n(Все равны перед законом нашего класса!)`)
        }else if(filter == true){
            await ctx.tg.deleteMessage(ctx.chat.id, ctx.message.message_id);
            await ctx.reply(`🤬 @${ctx.message.from.username}, не матерись!`)
        }else if(ctx.message.text == '😂') {
            await ctx.replyWithVideo({source: './несмешно-джонсина.gif'});
        }else {
            const users = database('users.json', [])
            let user = await users.body.find(u => u.id == ctx.message.from.id)
            if (!user) {
                await users.body.push({
                    id: ctx.message.from.id,
                    name: `@${ctx.message.from.first_name}` || 'Anonim'
                })
            await users.save()

            }else {
                return
            } 
        }
        /*  */
    }catch(e) {
        console.error(e);
    } 
})  

bot.on("edited_message", async (ctx) => {
    try {
        let filter = await myFilter.check(ctx.editedMessage.text, true)
        if(ctx.editedMessage.from.id == '588271676' && filter == true) {
            await ctx.tg.deleteMessage(ctx.editedMessage.chat.id, ctx.editedMessage.message_id);
            await ctx.reply(`🤬 @${ctx.editedMessage.from.username}, не матерись! \n(Все равны перед законом нашего класса!)`)
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
const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");

// replace the value below with the Telegram token you receive from @BotFather
const token = "5353425229:AAFOTUNItEHnog2kDTv8DOKm9BGgpQN2Wcc";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
    const chatId = msg.chat.id; 

    if( parseInt(msg.text) ){
        const fizzbuzzTrick = ExplorerController.getFizzBuzzValidationByNumber(parseInt(msg.text));
        const responseBot = `Tu número es: ${parseInt(msg.text)}. Validación: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, responseBot);
    }else if( msg.text.toLowerCase() == "node" ){
        const resBot = ExplorerController.getExplorersUsernamesByMission("node").join("\n");
        bot.sendMessage( chatId, resBot );
    }else if( msg.text.toLowerCase() == "java" ){
        const resBot = ExplorerController.getExplorersUsernamesByMission("java").join("\n");
        bot.sendMessage( chatId, resBot );
    }else {
        bot.sendMessage(chatId, "Envía un número válido");
    }

});
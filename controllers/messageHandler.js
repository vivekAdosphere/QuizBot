const languageChooser = require("../language/languageChooser")
const { MapToLocal } = require("../functionality/mapToLocal");
const mapNames = require("../config/mapNames")
const { sendTextMessage, sendListMessage } = require("../functionality/messageSender")
const config = require("../config/config")
const flowPathIndicator = new MapToLocal(mapNames.flowPathIndicator)

const { introductionHandler } = require("../controllers/messagingFunction")


const logger = require("../functionality/logger")
const { clearFlags } = require("../functionality/utilities");

let req = {
    headers: {
        'Content-Type': 'image/jpeg',
        'Authorization': "jJm2ySljUFGIRXsfmduoZpEoAK"
    },
    encoding: 'binary'
}

exports.handleTextMessage = async(number, message) => {
    try {
        if (languageChooser(number).initiateConversationMessages.includes(message)) {
            introductionHandler(number, message)
        }

    } catch (err) {
        logger.error(`Error,${languageChooser(number).somethingWentWrong}`)
        clearFlags(number)
    }
}
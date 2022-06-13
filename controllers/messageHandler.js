const mapNames = require("../config/mapNames")
const logger = require("../functionality/logger");
const { clearFlags } = require("../functionality/utilities");
const { MapToLocal } = require("../functionality/mapToLocal");
const languageChooser = require("../language/languageChooser");
const { sendTextMessage, sendTemplateMessage } = require("../functionality/messageSender");
const { introductionHandler, existingUserHandler, nameHandler, designationHandler, districtIdHandler, menuHandler, quizHandler, question1Handler, question2Handler, question3Handler, question4Handler, question5Handler } = require("../controllers/messagingFunction");

const flowPathIndicator = new MapToLocal(mapNames.flowPathIndicator);

exports.handleTextMessage = async(number, message) => {
    try {
        if (languageChooser(number).initiateConversationMessages.includes(message)) {
            introductionHandler(number)
        } else if (flowPathIndicator.has(number)) {
            switch (flowPathIndicator.get(number)) {
                case "1":
                    await sendTemplateMessage(number, languageChooser(number).confirmTemplate)
                    break
                case "menu":
                    menuHandler(number, message)
                    break
                case "2":
                    nameHandler(number, message)
                    break
                case "3":
                    designationHandler(number, message)
                    break
                case "4":
                    districtIdHandler(number, message)
                    break
                case "5":
                    sendTemplateMessage(number, languageChooser(number).startTemplate)
                    break
                case "6":
                    question1Handler(number, message)
                    break
                case "7":
                    question2Handler(number, message)
                    break
                case "8":
                    question3Handler(number, message)
                    break
                case "9":
                    question4Handler(number, message)
                    break
                case "10":
                    question5Handler(number, message)
                    break
                default:
                    sendTextMessage(number, languageChooser(number).somethingWentWrong)
            }
        }

    } catch (err) {
        logger.error(`Error,${languageChooser(number).somethingWentWrong}`)
        clearFlags(number)
    }
}

exports.handleButtonMessage = async(number, buttonText) => {
    try {
        if (flowPathIndicator.has(number)) {
            if (flowPathIndicator.get(number) === "5") {
                switch (buttonText) {
                    case "Start":
                        quizHandler(number)
                        break
                    default:
                        sendTextMessage(number, languageChooser(number).somethingWentWrong)

                }
            } else if (flowPathIndicator.get(number) === "1") {
                switch (buttonText) {
                    case "Yes":
                        existingUserHandler(number, buttonText)
                        break
                    case "No":
                        existingUserHandler(number, buttonText)
                        break
                    default:
                        sendTextMessage(number, languageChooser(number).somethingWentWrong)
                }
            }
        }
    } catch (err) {
        logger.error(`Error --> ${languageChooser(number).somethingWentWrong}`)
        clearFlags(number)
    }
}
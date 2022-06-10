const languageChooser = require("../language/languageChooser")
const { MapToLocal } = require("../functionality/mapToLocal");
const mapNames = require("../config/mapNames")
const { sendTextMessage, sendListMessage, sendVideoFile } = require("../functionality/messageSender")
const config = require("../config/config")
const flowPathIndicator = new MapToLocal(mapNames.flowPathIndicator)

const { introductionHandler, existingUserHandler, nameHandler, designationHandler, districtIdHandler, quizHandler, question1Handler, question2Handler, question3Handler, question4Handler, question5Handler, certificateHandler } = require("../controllers/messagingFunction")


const logger = require("../functionality/logger")
const { clearFlags } = require("../functionality/utilities");



exports.handleTextMessage = async(number, message) => {
    try {

        if (languageChooser(number).initiateConversationMessages.includes(message)) {
            introductionHandler(number)
        } else if (flowPathIndicator.has(number)) {
            switch (flowPathIndicator.get(number)) {
                case "1":
                    existingUserHandler(number, message)
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
                    quizHandler(number, message)
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
                    // case "11":
                    //     certificateHandler(number, message)
                    //     break

                default:
                    sendTextMessage(number, languageChooser(number).somethingWentWrong)
            }
        }

    } catch (err) {
        logger.error(`Error,${languageChooser(number).somethingWentWrong}`)
        clearFlags(number)
    }
}
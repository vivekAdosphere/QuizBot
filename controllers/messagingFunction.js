const { MapToLocal } = require("../functionality/mapToLocal");
const mapNames = require("../config/mapNames");
const languageChooser = require("../language/languageChooser");
const { sendTextMessage, sendListMessage } = require("../functionality/messageSender")
const logger = require("../functionality/logger")
const { clearFlags, getCurrentTime, isValidDate } = require("../functionality/utilities")
const config = require("../config/config")
const flowPathIndicator = new MapToLocal(mapNames.flowPathIndicator);
const userData = new MapToLocal(mapNames.userData)


//flagupdator
let userDataFlagHandler = (number, key, value) => {
    let dictValues = userData.get(number, value)
    dictValues[key] = value
    userData.set(number, dictValues)
    return;
}


let initDefaultValues = (number, index) => {
    flowPathIndicator.set(number, index)
    userData.set(number, {})
}


exports.introductionHandler = async(number) => {
    try {
        clearFlags(number)
        await sendTextMessage(number, languageChooser(number).askForExistingUser)


    } catch (err) {
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }
}
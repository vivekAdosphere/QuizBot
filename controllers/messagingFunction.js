const mapNames = require("../config/mapNames");
const logger = require("../functionality/logger");
const { videos, images } = require("../config/config");
const { clearFlags } = require("../functionality/utilities");
const { MapToLocal } = require("../functionality/mapToLocal");
const languageChooser = require("../language/languageChooser");
const { sendTextMessage, sendVideoFile, sendImageFile, sendTemplateMessage, sendListMessage } = require("../functionality/messageSender");

const flowPathIndicator = new MapToLocal(mapNames.flowPathIndicator);
const userData = new MapToLocal(mapNames.userData);

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


exports.languageHandler = async(number) => {
    try {
        clearFlags(number)
        await sendTemplateMessage(number, languageChooser(number).languageTemplate)
        flowPathIndicator.set(number, "introduction")
    } catch (err) {
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }
}

//this process starts when used initialize the conversation with messages like hi,hello or similar
//if user sends hi then below function is called
exports.introductionHandler = async(number, message) => {
    try {

        await sendTextMessage(number, languageChooser(number).welcomeMessage)
        await sendTextMessage(number, languageChooser(number).existingUserInformation)
        await sendTemplateMessage(number, languageChooser(number).confirmTemplate)
        initDefaultValues(number, "1");
    } catch (err) {
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }
}

// flowpath is set to 1 now we have to ask user from existing details
//this methods input is button so this function hanldles in button message handler
// This method checks the users reply and set the path of flowpathindicator
exports.existingUserHandler = async(number, message) => {
    try {
        if (message === "No" || message === "ના") {
            await sendTextMessage(number, languageChooser(number).askForName)
            flowPathIndicator.set(number, "2")
        } else if (message === "Yes" || message === "હા") {
            console.log(message)
            await sendListMessage(number, languageChooser(number).selectMenu, languageChooser(number).openMenu)
            flowPathIndicator.set(number, "menu")
        } else {
            await sendTextMessage(languageChooser(number).invalidInput);
        }

    } catch (err) {
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }
}

exports.menuHandler = async(number, message) => {
    try {
        if (message === "id1") {
            await sendTextMessage(number, languageChooser(number).learnFromVideo)
            await sendVideoFile(number, videos[1])
            await sendTemplateMessage(number, languageChooser(number).startTemplate)
            flowPathIndicator.set(number, "5")
        } else if (message === "id2") {
            await sendTextMessage(number, languageChooser(number).learnFromVideo)
            await sendVideoFile(number, videos[2])
            await sendTemplateMessage(number, languageChooser(number).startTemplate)
            flowPathIndicator.set(number, "5")
        } else if (message === "id3") {
            await sendTextMessage(number, languageChooser(number).learnFromVideo)
            await sendVideoFile(number, videos[3])
            await sendTemplateMessage(number, languageChooser(number).startTemplate)
            flowPathIndicator.set(number, "5")
        }

    } catch (err) {
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }
}

// 2
//flowpath is set to 2 then we have to handle the name of a user
exports.nameHandler = async(number, message) => {
    try {
        await sendTextMessage(number, languageChooser(number).askForDesignation);
        flowPathIndicator.set(number, "3")

    } catch (err) {
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }
}

// 3
exports.designationHandler = async(number, message) => {
    try {
        await sendTextMessage(number, languageChooser(number).askForDistrictId);
        flowPathIndicator.set(number, "4")
    } catch (err) {
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }
}

// 4
exports.districtIdHandler = async(number, message) => {
    try {
        await sendListMessage(number, languageChooser(number).selectMenu, languageChooser(number).openMenu)
        flowPathIndicator.set(number, "menu")

    } catch (err) {
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }
}

// 5
exports.quizHandler = async(number) => {
    try {
        await sendTextMessage(number, languageChooser(number).question1);
        flowPathIndicator.set(number, "6")
        userDataFlagHandler(number, "score", 0)
    } catch (err) {
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }
}

// 6
exports.question1Handler = async(number, message) => {
    try {
        if (message === "1") {
            await sendTextMessage(number, languageChooser(number).question2);
            flowPathIndicator.set(number, "7")
            userDataFlagHandler(number, "score", userData.get(number).score + 1)
        } else if (message === "2") {
            await sendTextMessage(number, languageChooser(number).question2);
            flowPathIndicator.set(number, "7")
        } else if (message === "3") {
            await sendTextMessage(number, languageChooser(number).question2);
            flowPathIndicator.set(number, "7")
        } else if (message === "4") {
            await sendTextMessage(number, languageChooser(number).question2);
            flowPathIndicator.set(number, "7")
        } else {
            await sendTextMessage(number, languageChooser(number).invalidInput)
        }
    } catch (err) {
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }

}

// 7
exports.question2Handler = async(number, message) => {
    try {
        if (message === "1") {
            await sendTextMessage(number, languageChooser(number).question3)
            flowPathIndicator.set(number, "8")
        } else if (message === "2") {
            await sendTextMessage(number, languageChooser(number).question3)
            flowPathIndicator.set(number, "8")
            userDataFlagHandler(number, "score", userData.get(number).score + 1)
        } else {
            await sendTextMessage(number, languageChooser(number).invalidInput)
        }
    } catch (err) {
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }
}

// 8
exports.question3Handler = async(number, message) => {
    try {
        if (message === "1") {
            await sendTextMessage(number, languageChooser(number).question4)
            flowPathIndicator.set(number, "9")
        } else if (message === "2") {
            await sendTextMessage(number, languageChooser(number).question4)
            flowPathIndicator.set(number, "9")
            userDataFlagHandler(number, "score", userData.get(number).score + 1)
        } else {
            await sendTextMessage(number, languageChooser(number).invalidInput)
        }

    } catch (err) {
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }

}

// 9
exports.question4Handler = async(number, message) => {
    try {
        if (message === "1") {
            await sendTextMessage(number, languageChooser(number).question5)
            flowPathIndicator.set(number, "10")
            userDataFlagHandler(number, "score", userData.get(number).score + 1)
        } else if (message === "2") {
            await sendTextMessage(number, languageChooser(number).question5)
            flowPathIndicator.set(number, "10")
        } else if (message === "3") {
            await sendTextMessage(number, languageChooser(number).question5)
            flowPathIndicator.set(number, "10")
        } else if (message === "4") {
            await sendTextMessage(number, languageChooser(number).question5)
            flowPathIndicator.set(number, "10")
        } else {
            await sendTextMessage(number, languageChooser(number).invalidInput)
        }

    } catch (err) {
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }
}

// 10
exports.question5Handler = async(number, message) => {
    try {
        console.log(userData.get(number).score)
        if (message === "1") {
            await sendTextMessage(number, `${languageChooser(number).thankYouMsg}, your score is ${userData.get(number).score}/5`)
            await sendImageFile(number, images[1])
            flowPathIndicator.set(number, "11")
            clearFlags(number)
        } else if (message === "2") {
            userDataFlagHandler(number, "score", userData.get(number).score + 1)
            await sendTextMessage(number, `${languageChooser(number).thankYouMsg}, ${userData.get(number).score}/5`)
            await sendImageFile(number, images[1])
            flowPathIndicator.set(number, "11")
            clearFlags(number)
        } else {
            await sendTextMessage(number, languageChooser(number).invalidInput)
        }
    } catch (err) {
        console.log(err)
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }
}
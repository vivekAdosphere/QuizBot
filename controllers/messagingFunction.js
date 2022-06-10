const { MapToLocal } = require("../functionality/mapToLocal");
const mapNames = require("../config/mapNames");
const languageChooser = require("../language/languageChooser");
const { sendTextMessage, sendVideoFile, sendImageFile } = require("../functionality/messageSender")
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


//this process starts when used initialize the conversation with messages like hi,hello or similar
//if user sends hi then below function is called


exports.introductionHandler = async(number) => {
    try {
        clearFlags(number)
        await sendTextMessage(number, languageChooser(number).askForExistingUser)
        initDefaultValues(number, "1");
        console.log(flowPathIndicator.get(number))


    } catch (err) {
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }
}

//flowpath is set to 1 
//this method checks the users reply and set the path of flowpathindicator


exports.existingUserHandler = async(number, message) => {
    try {

        if (languageChooser(number).No.includes(message)) {
            await sendTextMessage(number, languageChooser(number).askForName)
            flowPathIndicator.set(number, "2")
        } else if (languageChooser(number).Yes.includes(message)) {
            await sendTextMessage(number, languageChooser(number).learnFromVideo)
            await sendVideoFile(number)
            await sendImageFile(number)
            await sendTextMessage(number, languageChooser(number).startTheQuiz)

            flowPathIndicator.set(number, "5")

        } else {
            await sendTextMessage(languageChooser(number).invalidInput);
        }

    } catch (err) {
        console.log(err)
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }
}

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

exports.designationHandler = async(number, message) => {
    try {
        await sendTextMessage(number, languageChooser(number).askForDistrictId);
        flowPathIndicator.set(number, "4")
    } catch (err) {
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }
}

exports.districtIdHandler = async(number, message) => {
    try {
        console.log("bjkabk")
        await sendTextMessage(number, languageChooser(number).learnFromVideo)
        await sendVideoFile(number)
        await sendTextMessage(number, languageChooser(number).startTheQuiz)

        flowPathIndicator.set(number, "5")
    } catch (err) {
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }
}
let count = 0;

exports.quizHandler = async(number, message) => {
    try {
        if (message === "1") {
            await sendTextMessage(number, languageChooser(number).question1);
            flowPathIndicator.set(number, "6")
        }

    } catch (err) {
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }
}

exports.question1Handler = async(number, message) => {
    try {
        if (message === "1") {
            count++;
            await sendTextMessage(number, languageChooser(number).question2);
            flowPathIndicator.set(number, "7")
        } else if (message === "2") {
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

exports.question2Handler = async(number, message) => {
    try {
        if (message === "1") {
            await sendTextMessage(number, languageChooser(number).question3)
            flowPathIndicator.set(number, "8")
        } else if (message === "2") {
            count++;
            await sendTextMessage(number, languageChooser(number).question3)
            flowPathIndicator.set(number, "8")

        } else {
            await sendTextMessage(number, languageChooser(number).invalidInput)

        }
    } catch (err) {
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }
}

exports.question3Handler = async(number, message) => {
    try {
        if (message === "1") {
            await sendTextMessage(number, languageChooser(number).question4)
            flowPathIndicator.set(number, "9")
        } else if (message === "2") {
            count++;
            await sendTextMessage(number, languageChooser(number).question4)
            flowPathIndicator.set(number, "9")
        } else {
            await sendTextMessage(number, languageChooser(number).invalidInput)

        }

    } catch (err) {
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }

}

exports.question4Handler = async(number, message) => {
    try {
        if (message === "1") {
            count++;
            await sendTextMessage(number, languageChooser(number).question5)
            flowPathIndicator.set(number, "10")
        } else if (message === "2") {
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

exports.question5Handler = async(number, message) => {
    try {
        if (message === "1") {
            await sendTextMessage(number, `${languageChooser(number).thankYouMsg}, your score is ${count}`)
            flowPathIndicator.set(number, "11")

        } else if (message === "2") {
            count++;
            await sendTextMessage(number, `${languageChooser(number).thankYouMsg}, your score is ${count}`)
            await sendImageFile(number)
            flowPathIndicator.set(number, "11")

        }
    } catch (err) {
        logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
        clearFlags(number)
    }
}

// exports.certificateHandler = async(number, message) => {
//     try {
//         console.log("bjkdbc")
//         if (count >= 4 && count <= 5) {
//             clearFlags(number)
//         } else {
//             await sendTextMessage(number, "You score is below 4, Please try next time")
//             clearFlags(number)
//         }

//     } catch (err) {
//         logger.error(`Error, ${languageChooser(number).somethingWentWrong}`);
//         clearFlags(number)
//     }
// }
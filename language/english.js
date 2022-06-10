const config = require("../config/config")

module.exports = {

    //Greetings
    initiateConversationMessages: ["hi", "Hi", "Hello", "hii", "HI", "hello", "hey", "Hey", "HEY", "HELLO"],

    //questions
    askForName: "What is your name?",
    askForDesignation: "What is your designation?",
    askForDistrictId: "What is your district id?",

    //ValidateCustomer
    askForExistingUser: "Are you John Doe?\n1.Yes\n2.No",

    //inputmessage
    Yes: ["Yes", "yes", "1"],
    No: ["No", "no", "2"],
    learnFromVideo: "Please refer this video for your explanation",
    startTheQuiz: "Please reply with 1 to start the quiz",

    //fallbacks
    somethingWentWrong: "Oops! Something went wrong! Please reinitiate the process using 'hi' or 'hello'",
    errorMessage: "Invalid Input. Please type 'hi' or 'hello' to initiate the process.",
    errorForImage: "Invalid input, Please send image not a text",
    attachmentWarning: "Invalid input,please try again with text",
    invalidName: "Invalid name,Please try again!",
    invaliddin: "Invalid format of DIN, please try again!",
    invalidCompanyName: "Invalid company name,Please try again!",
    invalidEmail: "Invalid Email,please try again!",
    invalidNumber: "Invalid Number,Please try again!",
    invalidInput: "Invalid Input,Please try again!",

    //quiz questions
    question1: "*Question 1*\nWhich one of the following river flows between Vindhyan and Satpura ranges?\n1.Narmada\n2.Mahanadi",
    //ans: 1. Narmada
    question2: "*Question 2*\nThe Central Rice Research Station is situated in?\n1.Chennai\n2.Cuttack",
    //ans : 2. Cuttack
    question3: "*Question 3*\nWhich among the following headstreams meets the Ganges in last?\n1.Mandakini\n2.Bhagirathi",
    //ans : 2. Bhagirathi
    question4: "*Question 4*\nTsunamis are not caused by\n1.Hurricanes\n2.Earthquakes",
    //ans: 1. Hurricanes
    question5: "*Question 5*\nThe hottest planet in the solar system?\n1.Mercury\n2.Venus",
    //ans: 2.Venus




    //thankYouMessage
    thankYouMsg: "Thank you for taking the quiz"

}
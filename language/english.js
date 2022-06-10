module.exports = {

    //Greetings
    initiateConversationMessages: ["hi", "Hi", "Hello", "hii", "HI", "hello", "hey", "Hey", "HEY", "HELLO"],

    //ValidateCustomer
    welcomeMessage: "Hello welcome to the chatbot",
    existingUserInformation: "*Name:* John Doe\n*Designation:* Manager\n*District ID:* 00001",
    askForExistingUser: "Do you confirm the details above ?\n\n1. Yes\n2. No",

    // If not existing user
    askForName: "Enter your full name",
    askForDesignation: "Enter your designation",
    askForDistrictId: "Enter your district id",

    //inputmessage
    Yes: ["Yes", "yes", "1"],
    No: ["No", "no", "2"],
    startTemplate: ["start_quiz", "en"],
    learnFromVideo: "Please refer this video video below to before attempting for the quiz",

    //quiz questions
    question1: "*Question 1:* Which one of the following river flows between Vindhyan and Satpura ranges?\n\n1. Narmada\n2. Mahanadi",
    //ans: 1. Narmada
    question2: "*Question 2:* The Central Rice Research Station is situated in?\n\n1. Chennai\n2. Cuttack",
    //ans : 2. Cuttack
    question3: "*Question 3:* Which among the following headstreams meets the Ganges in last?\n\n1. Mandakini\n2. Bhagirathi",
    //ans : 2. Bhagirathi
    question4: "*Question 4:* Tsunamis are not caused by\n\n1. Hurricanes\n2. Earthquakes",
    //ans: 1. Hurricanes
    question5: "*Question 5:* The hottest planet in the solar system?\n\n1. Mercury\n2. Venus",
    //ans: 2.Venus

    //thankYouMessage
    thankYouMsg: "Thank you for taking the quiz",

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
}
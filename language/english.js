module.exports = {

    //Greetings
    initiateConversationMessages: ["hi", "Hi", "Hello", "hii", "HI", "hello", "hey", "Hey", "HEY", "HELLO"],

    //ValidateCustomer
    welcomeMessage: "For enhanced participation of electors in the electoral process and reducing the electoral malpractices, it is essential to provide learning & development training to all BLOs. This bot will help all BLOs to register for learning modules and complete required training.",
    existingUserInformation: "We are able to fetch below mentioned details for this registered number.\n\n*Name:* John Doe\n*Designation:* Manager\n*District ID:* 00001",
    askForExistingUser: "Do you confirm the details above ?\n\n1. Yes\n2. No",

    // If not existing user
    askForName: "Enter your full name",
    askForDesignation: "Enter your designation",
    askForDistrictId: "Enter your district id",



    //inputmessage
    Yes: ["Yes", "yes", "1"],
    No: ["No", "no", "2"],
    startTemplate: ["start_quiz", "en"],
    learnFromVideo: "Please refer the video below before attempting for the quiz",
    confirmTemplate: ["details_confirmation", "en"],

    //quiz questions
    question1: "*Question 1:* Which one of the following river flows between Vindhyan and Satpura ranges?\n\n1. Narmada\n2. Mahanadi\n3. Sabarmati\n4. Ganga",
    //ans: 1. Narmada
    question2: "*Question 2:* The first country in the world to use postcards was the United States of America.\n\n1. Yes\n2. No",
    //ans : 2. Cuttack, No
    question3: "*Question 3:* Which among the following headstreams meets the Ganges in last?\n\n1. Mandakini\n2. Bhagirathi",
    //ans : 2. Bhagirathi
    question4: "*Question 4:* Once upon a time there _________ (live) a man called Damocles.\n\n1. lived\n2. was lived\n3. an lived\n4. live",
    //ans: 1.  lived
    question5: "*Question 5:* Bill Gates is the founder of Amazon.\n\n1. Yes\n2. No",
    //ans: 2.Venus ,NO

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
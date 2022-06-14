module.exports = {

    //Greetings
    initiateConversationMessages: ["hi", "Hi", "Hello", "hii", "HI", "hello", "hey", "Hey", "HEY", "HELLO"],

    //ValidateCustomer
    welcomeMessage: "ચૂંટણી પ્રક્રિયામાં મતદારોની ઉન્નત ભાગીદારી માટે અને ચૂંટણીની ગેરરીતિઓને ઘટાડવા માટે, તમામ BLO ને શિક્ષણ અને વિકાસની તાલીમ આપવી જરૂરી છે. આ બોટ તમામ BLO ને શીખવાના મોડ્યુલ માટે નોંધણી કરાવવા અને જરૂરી તાલીમ પૂર્ણ કરવામાં મદદ કરશે.",
    existingUserInformation: "અમે આ નોંધાયેલ નંબર માટે નીચે દર્શાવેલ વિગતો મેળવવામાં સક્ષમ છીએ.\n\n*નામ:* જોન ડો\n*હોદ્દો:* મેનેજર\n*જિલ્લા ID:* 00001",
    askForExistingUser: "શું તમે ઉપરની વિગતોની પુષ્ટિ કરો છો?\n\n1. હા\n2. ના",

    // If not existing user
    askForName: "તમારું પૂરું નામ લખો",
    askForDesignation: "તમારું હોદ્દો દાખલ કરો",
    askForDistrictId: "તમારું જિલ્લા આઈડી દાખલ કરો",

    openMenu: "મેનુ ખોલો",

    //inputmessage
    Yes: ["હા", "1"],
    No: ["ના", "2"],
    startTemplate: ["initiate_quiz", "gu"],
    learnFromVideo: "ક્વિઝ માટે પ્રયાસ કરતા પહેલા કૃપા કરીને નીચેની વિડિઓનો સંદર્ભ લો",
    languageTemplate: ["select_language", "en"],
    confirmTemplate: ["detail_confirmation", "gu"],

    selectMenu: "કૃપા કરીને આ શ્રેણી વિકલ્પો વચ્ચે પસંદ કરો",

    //quiz questions
    question1: "*પ્રશ્ન 1:* નીચેનામાંથી કઈ નદી વિંધ્યન અને સતપુરા પર્વતમાળા વચ્ચે વહે છે?\n\n1. નર્મદા\n2. મહાનદી\n3. સાબરમતી\n4. ગંગા",
    //ans: 1. Narmada
    question2: "*પ્રશ્ન 2: * પોસ્ટકાર્ડનો ઉપયોગ કરનાર વિશ્વનો પ્રથમ દેશ યુનાઈટેડ સ્ટેટ્સ ઑફ અમેરિકા હતો.\n\n1.હા\n2.ના ",
    //ans : 2.  No
    question3: "*પ્રશ્ન 3:* નીચેનામાંથી કયો મુખ્ય પ્રવાહ છેલ્લે ગંગાને મળે છે?\n\n1. મંદાકિની\n2. ભાગીરથી",
    //ans : 2. Bhagirathi
    question4: "*પ્રશ્ન 4:* એક સમયે ડેમોકલ્સ નામનો એક માણસ _________ (જીવંત) હતો.\n\n1. જીવ્યા\n2. રહેતા હતા\n3. જીવિત\n4. જીવંત",
    //ans: 1.  lived
    question5: "*પ્રશ્ન 5:* બિલ ગેટ્સ એમેઝોનના સ્થાપક છે.\n\n1. હા\n2. ના",
    //ans:,NO

    //thankYouMessage
    thankYouMsg: "ક્વિઝ લેવા બદલ આભાર, તમારો સ્કોર છે ",

    //fallbacks
    somethingWentWrong: "અરે! કંઈક ખોટું થયું! કૃપા કરીને 'hi' અથવા 'hello' નો ઉપયોગ કરીને પ્રક્રિયા ફરી શરૂ કરો",
    errorMessage: "ખોટું ઇનપુટ. પ્રક્રિયા શરૂ કરવા માટે કૃપા કરીને 'hi' અથવા 'hello' લખો.",
    errorForImage: "અમાન્ય ઇનપુટ,કૃપા કરીને છબી મોકલો ટેક્સ્ટ નહીં",
    attachmentWarning: "અમાન્ય ઇનપુટ, કૃપા કરીને ટેક્સ્ટ સાથે ફરી પ્રયાસ કરો",
    invalidName: "અમાન્ય નામ,કૃપા કરીને ફરી પ્રયાસ કરો!",
    invaliddin: "DIN નું અમાન્ય ફોર્મેટ, કૃપા કરીને ફરી પ્રયાસ કરો!",
    invalidCompanyName: "અમાન્ય કંપનીનું નામ,કૃપા કરીને ફરી પ્રયાસ કરો!",
    invalidEmail: "અમાન્ય ઇમેઇલ, કૃપા કરીને ફરી પ્રયાસ કરો!",
    invalidNumber: "અમાન્ય નંબર,કૃપા કરીને ફરી પ્રયાસ કરો!",
    invalidInput: "અમાન્ય ઇનપુટ,કૃપા કરીને ફરી પ્રયાસ કરો!",
}
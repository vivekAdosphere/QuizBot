const axios = require("axios");

//local dependencies
const logger = require("../functionality/logger");
const config = require("../config/config");
const languageChooser = require("../language/languageChooser");

const apiKey = config.ACCESS_TOKEN

const headers = {
    'D360-Api-Key': apiKey,
    'Content-Type': "application/json",
}


const serverUrl = config.SERVER_URL
const baseApiUrl = config.API_BASE_URL


//send text message to whatsapp number
exports.sendTextMessage = async(number, message) => {
    try {
        const payload = {
            "to": number,
            "type": "text",
            "text": {
                "body": message
            }
        }

        const res = await axios.post(baseApiUrl + "/messages", payload, { headers })
        return res.data
        console.log(res.data)

    } catch (err) {
        logger.error(`Error,${JSON.stringify(err.response.data)}`);
        console.log(err)
        return err.response.data
    }
}



//send QuickReplies

exports.sendQuickReply = async(number, message) => {
    try {
        const payload = {
            "recipient_type": "individual",
            "to": number,
            "messaging_type": "RESPONSE",
            "message": {
                "text": message,
                "quick_replies": [{
                    "content_type": "text",
                    "title": "Yes",
                    "payload": "yes",
                    "image_url": "http://example.com/img/green.png"
                }, {
                    "content_type": "text",
                    "title": "No",
                    "payload": "no",
                    "image_url": "http://example.com/img/red.png"
                }]
            }
        }
        const res = await axios.post(baseApiUrl + "/messages", payload, { headers })
        return res.data

    } catch (err) {
        logger.error(`Error,${JSON.stringify(err.response.data)}`);
        return err.response.data
    }
}

//send video message

exports.sendVideoFile = async(number) => {
    try {
        const payload = {
            "recipient_type": "individual",
            "to": number,
            "type": "video",
            "video": {
                "id": "59d738c7-c6b8-420d-aa42-cdfe679d19f2"
            }
        }
        const res = await axios.post(baseApiUrl + "/messages", payload, { headers });
        return res.data

    } catch (err) {
        logger.error(`Error,${JSON.stringify(err.response.data)}`);
        return err.response.data
    }
}

//send image file to number
exports.sendImageFile = async(number) => {
    try {
        console.log("bshdb")
        const payload = {
            "recipient_type": "individual",
            "to": number,
            "type": "image",
            "image": {
                "id": "b9a26d1f-7771-4a59-93a0-ab8ec99681cc"
            }
        }
        const res = await axios.post(baseApiUrl + "/messages", payload, { headers });
        console.log(res)
        return res.data


    } catch (err) {
        logger.error(`Error,${JSON.stringify(err.response.data)}`);
        return err.response.data
    }
}


//send document file
exports.sendDocumentFile = async(number, certificateId, filename) => {
    try {
        const payload = {
            "recipient_type": "individual",
            "to": number,
            "type": "document",
            "document": {
                "id": certificateId,
                "filename": filename
            }
        }
        const res = await axios.post(baseApiUrl + "/messages", payload, { headers });
        return res.data

    } catch (err) {
        logger.error(`Error,${JSON.stringify(err.response.data)}`);
        return err.response.data
    }
}

exports.sendListMessage = async(number, message) => {
    try {
        const payload = {

            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "list",
                "header": {
                    "type": "text",
                    "text": message
                },
                "body": {
                    "text": "You have two options"
                },
                "footer": {
                    "text": "Please select to proceed"
                },
                "action": {
                    "button": "Open profile options",
                    "sections": [{
                            "title": "Option 1",
                            "rows": [{
                                "id": "id1",
                                "title": "StakeHolder",
                                "description": "StakeHolder can register startup"
                            }]
                        },
                        {
                            "title": "Option 2",
                            "rows": [{
                                "id": "id2",
                                "title": "ShareHolder",
                                "description": "Share Holder can take share of a comapny"
                            }]
                        }

                    ]
                }



            }
        }
        const res = await axios.post(baseApiUrl + "/messages", payload, { headers });
        return res.data

    } catch (err) {
        logger.error(`Error, ${JSON.stringify(err.response.data)}`);
        return err.response.data
    }
}

//to send template message to number
exports.sendTempelateMessage = async(number, message) => {
    try {
        const payload = {
            "recipient_type": "individual",
            "to": number,
            "type": "template",
            "template": {
                "namespace": namespaceId,
                "name": template[0],
                "language": {
                    "code": template[1],
                    "policy": "deterministic"
                }
            }
        }
        const res = await axios.post(baseApiUrl + "/messages", payload, { headers });
        return res.data

    } catch (err) {
        logger.error(`Error,${JSON.stringify(err.response.data)}`)
        return err.response.data
    }
}




exports.webhookValidator = async() => {
    try {
        const payload = {
            "url": serverUrl + "/webhook"
        }

        const res = await axios.post(baseApiUrl + "/configs/webhook", payload, { headers });
        logger.info(`Success,Webhook Set Successfully`)

        return res.data

    } catch (err) {
        logger.error(`Error,${JSON.stringify(err.response.data)}`);
        return err.response.data
    }
}
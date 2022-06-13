const axios = require("axios");
const config = require("../config/config");
const logger = require("../functionality/logger");

const apiKey = config.ACCESS_TOKEN
const serverUrl = config.SERVER_URL
const baseApiUrl = config.API_BASE_URL
const namespaceId = config.NAMESPACE_ID

const headers = {
    'D360-Api-Key': apiKey,
    'Content-Type': "application/json",
}

// send text message to whatsapp number
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

    } catch (err) {
        logger.error(`Error,${JSON.stringify(err.response.data)}`);
        return err.response.data
    }
}

//send video message
exports.sendVideoFile = async(number, videoId) => {
    try {
        const payload = {
            "recipient_type": "individual",
            "to": number,
            "type": "video",
            "video": {
                "id": videoId
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
exports.sendImageFile = async(number, imageId) => {
    try {
        const payload = {
            "recipient_type": "individual",
            "to": number,
            "type": "image",
            "image": {
                "id": imageId
            }
        }
        const res = await axios.post(baseApiUrl + "/messages", payload, { headers });
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
                // "header": {
                //     "type": "text",
                //     "text": message
                // },
                "body": {
                    "text": "Please Select between this category options"
                },
                // "footer": {
                //     "text": "Please choose one to proceed"
                // },
                "action": {
                    "button": "Open Menu",
                    "sections": [{
                            "title": "Option 1",
                            "rows": [{
                                "id": "id1",
                                "title": "Module1",
                                // "description": "You'll have to asnwer question related to GK"
                            }]
                        },
                        {
                            "title": "Option 2",
                            "rows": [{
                                "id": "id2",
                                "title": "Module2",
                                // "description": "You'll have to asnwer question related to Maths"
                            }]
                        },
                        {
                            "title": "Option 3",
                            "rows": [{
                                "id": "id3",
                                "title": "Module3",
                                // "description": "You'll have to asnwer question related to History"
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
exports.sendTemplateMessage = async(number, template) => {
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
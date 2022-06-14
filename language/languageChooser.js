const { MapToLocal } = require("../functionality/mapToLocal")
const mapNames = require("../config/mapNames")
const english = require("./english");
const gujarati = require("./gujarati");

const selectedCommunicationLanguage = new MapToLocal(mapNames.selectedCommunicationLanguage)

module.exports = (senderId) => {
    if (selectedCommunicationLanguage.has(senderId) && selectedCommunicationLanguage.get(senderId) === "English") {
        return english;
    } else if (selectedCommunicationLanguage.has(senderId) && selectedCommunicationLanguage.get(senderId) === "ગુજરાતી") {
        console.log(selectedCommunicationLanguage.get(senderId))
        return gujarati;
    } else {
        return english;
    }
}
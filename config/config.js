require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    API_BASE_URL: process.env.API_BASE_URL,
    SERVER_URL: (process.env.DEBUG).toLowerCase() === "true" ? (process.env.LOCAL_SERVER_URL).toLowerCase() : (process.env.PRODUCTION_SERVER_URL).toLowerCase(),
    VERIFY_TOKEN: process.env.VERIFY_TOKEN,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    NAMESPACE_ID: process.env.NAMESPACE_ID,
    videos: {
        "1": "59d738c7-c6b8-420d-aa42-cdfe679d19f2",
        "2": "93c81f78-eec8-45b4-9a92-be218c4830ac",
        "3": "62908a8d-6d0f-43f6-aa37-e84274653d8e"
    },
    images: {
        "1": "97088ca2-1cee-4509-800e-d55dc52c81de"
    }
}
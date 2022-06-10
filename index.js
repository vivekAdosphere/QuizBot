const express = require('express')
const helmet = require('helmet')
const config = require("./config/config")
const { handleTextMessage } = require('./controllers/messageHandler');

const app = express()

app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static("./public"))

const port = config.PORT;
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.status(200).json({
        "message": "Hello there"
    })
})

app.get("/verify/:password", (req, res) => {
    try {
        if (req.params.password === config.VERIFY_TOKEN) {
            res.status(200).json({
                "message": "Webhook, verified"
            })
        } else {
            res.status(401).json({
                "message": "Unauthorized"
            })
        }

    } catch (err) {
        res.status(200).json({
            "message": "something went wrong"
        })
    }
})



app.post("/webhook", (req, res) => {
    if (req.body.messages) {
        // console.log(req.body.messages)
        const messages = req.body.messages
        messages.forEach(async(value) => {
            const waId = value.from;

            if (value.type === "text") {
                console.log(value.text.body)
                handleTextMessage(waId, value.text.body)
                res.status(200).end();

            } else {
                res.status(200).json({
                    "message": "Failed"
                })
            }
        })

    } else {
        res.status(200).end();

    }
})

app.listen(port, () => {
    console.log(`Bot is listening at ${port}`)
})
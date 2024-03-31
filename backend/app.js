const express = require('express')
const CORS = require('cors')

const songs = require("./routes/route")

const app = express()

app.use(express.json())
app.use(CORS())


app.use("/api/songs",songs)

module.exports = app;
const express = require('express')
const CORS = require('cors')

const app = express()

app.use(express.json())

app.use(CORS())
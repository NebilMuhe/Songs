require('dotenv').config()
const express = require('express')
const CORS = require('cors')
const connectDB = require('./database/db');

const port = process.env.PORT || 3000
const uri = process.env.MONGO_URI
const app = express()

app.use(express.json())
app.use(CORS())

app.listen(port,()=>{
    connectDB(uri)
    .then(()=>console.log(`Connected Sucessfully and listening on port ${port}`))
    .catch((e)=>console.log(e.message))
})
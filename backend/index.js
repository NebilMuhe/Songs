require('dotenv').config()
const connectDB = require('./database/db');
const app = require("./app")

const port = process.env.PORT || 3000

connectDB()
    .then(()=>console.log("Connected Sucessfully to mongoDB"))
    .catch((e)=>console.log(e.message))

app.listen(port,()=> console.log(`Server started on port ${port}`))
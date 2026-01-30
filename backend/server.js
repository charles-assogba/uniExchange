const connect = require("./connect")
const express = require("express")
const cors = require("cors")
//import postRoutes here
const posts = require("./postRoutes")

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
//here i mount postRoutes to the frontend
app.use(posts)

//create a server
app.listen(PORT, () => {
    //this line access connect.js file
    connect.connectToServer()
    console.log(`server is running on port ${PORT}`)
})
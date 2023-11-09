// Dependencies
const express = require('express')
const cors = require('cors')

// Initialize instance of express server
const app = express()



// Middleware
app.use(cors())
app.use(express.json())



// Welcome page: localhost:4005/
app.get("/", (req, res) => {
    res.send('One to Many API')
})



module.exports = app
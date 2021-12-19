const express = require('express')
const app = express() // import Node Express
const tasks = require('./routes/tasks') // import task API
const conneectDB = require('./db/connect') // import DB API
require('dotenv').config() // import Sensitive Data
const notFound = require('./middleware/not-found') // not-found handler
const errorHandleMiddleware = require('./middleware/error-handler') // middleware that handles errors

// middleware
app.use(express.static('./public')) // import front-end code
app.use(express.json()); // JSON file format

// CRUD API
app.use('/api/v1/tasks', tasks)

// handle 404 error
app.use(notFound)

// handles other errors
app.use(errorHandleMiddleware)

// Start Server
const port = 3000

const start = async () => {
    try {
        await conneectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}
start()

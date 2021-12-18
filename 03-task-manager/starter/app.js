const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const conneectDB = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.static('./public')) // import front-end code
app.use(express.json()); // JSON file format

app.use('/api/v1/tasks', tasks)

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

const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const conneectDB = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.json()); // JSON file format

// routes
app.get('/hello', (req, res) => {
    res.send('Hello back! This is the Task Manager App')
    res.end()
})

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

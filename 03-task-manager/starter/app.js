console.log('The start of Task Manager App')

// const { application } = require('express') // what is it? 
const express = require('express')
const app = express()



// middleware
// app.use(express.static('./public')); // Front-end code
app.use(express.json()); // JSON file format

// routes
app.get('/hello', (req, res) => {
    res.send('Hello back! This is the Task Manager App')
    res.end()
})

const tasks = require('./routes/tasks')
app.use('/api/v1/tasks', tasks)

/* // dont use: 
app.get('/', (req,res) => {
    res.send(req.body)
}) */

/*
RESTful API <-> CRUDi

    Post <-> Create
    Get <-> Read
Put(Patch in our case) <-> Update
    Delete <-> Delete
*/

/* // bad idea to jam the following chunk of code in the app.js
app.get('/api/v1/tasks') // get all the tasks
app.post('/api/v1/tasks') // create new tasks
app.get('/api/v1/tasks/:id') // get single task
app.patch('/api/v1/tasks/:id') // update task
app.delete('/api/v1/tasks/:id') // delete task */

const port = 3000
app.listen(port, console.log(`server is listening on port ${port}...`))
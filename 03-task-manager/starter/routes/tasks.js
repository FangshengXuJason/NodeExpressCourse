const express = require('express')
const router = express.Router()

const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/tasks')


// API for all tasks
router.route('/').get(getAllTasks).post(createTask)

// API for a single task
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router
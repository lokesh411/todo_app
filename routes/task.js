const router = require('express').Router()
const taskService = require('../controller/task')

/**
 * POST -> create a task /create
 * GET -> get all the tasks /all
 * PUT -> update a particular task /:id
 * DELETE -> delete a task /:id
 */

// create a task
router.post('/create', async (req, res) => {
    try {
        const response = await taskService.createTask({ name: req.body.name, state: "pending" })
        return res.json({ success: true, data: response })
    } catch (error) {
        console.error('Error in creating the task :: ', error)
        return res.json({ success: false, error: "Error in creating the task" })
    }
})

router.get('/all', async (req, res) => {
    try {
        const response = await taskService.getAllTasks()
        return res.json({ success: true, data: response })
    } catch (error) {
        console.error('Error in fetching all the tasks :: ', error)
        return res.json({ success: false, error: "Error in fetching all the tasks" })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const response = await taskService.updateTask(req.params.id, req.body)
        return res.json({ success: true, data: response })
    } catch (error) {
        console.error('Error in updating the task :: ', error)
        return res.json({ success: false, error: "Error in updating the task" })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const response = await taskService.deleteTask(req.params.id)
        return res.json({ success: true, response })
    } catch (error) {
        console.error('Error in deleting the task :: ', error)
        return res.json({ success: false, error: "Error in deleting the task" })
    }
})

module.exports = router
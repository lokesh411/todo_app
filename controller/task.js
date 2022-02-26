const mongodb = require('mongodb')
const { taskCollection } = require('../models/mongodb')

const createTask = (taskPayload) => {
    return taskCollection.insertOne(taskPayload)
}

const getAllTasks = () => {
    return taskCollection.find().toArray()
}

const updateTask = (taskId, payload) => {
    return taskCollection.updateOne({ _id: mongodb.ObjectId(taskId) }, { $set: payload })
}

const deleteTask = (taskId) => {
    return taskCollection.deleteOne({ _id: mongodb.ObjectId(taskId) })
}

module.exports = {
    createTask,
    getAllTasks,
    updateTask,
    deleteTask
}
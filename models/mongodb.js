const { MongoClient } = require('mongodb')

const connectionObject = new MongoClient("mongodb://localhost:27017")

connectionObject.connect().catch(err => {
    console.error('Error in connecting to mongodb :: ', err)
})

const taskCollection = connectionObject.db('guvi_geek').collection('tasks')

module.exports = {
    taskCollection
}
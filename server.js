const express = require('express')
const taskRouter = require('./routes/task')

const server = express()

server.use(express.json())

server.use((req, res, next) => {
    console.log("Logging requests", { path: req.path })
    next()
})

server.use('/health-check', (_req, res) => {
    return res.json({ sucess: true, message: "server is up and running" })
})

server.use('/task', taskRouter)

const PORT = 4000
server.listen(PORT, () => {
    console.log("Binding the port to listen on :: ", PORT)
})
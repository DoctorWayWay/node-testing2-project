const express = require("express")
const heroRouter = require("./heroes/hero-router")

const server = express()

server.use(express.json())

server.use("/api/heroes", heroRouter)

// Error Handler
server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message, // bad for production
    stack: err.stack,
  })
})

module.exports = server

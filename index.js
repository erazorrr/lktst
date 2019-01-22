const express = require('express')
const config = require('./config')
const api = require('./api')

const app = express()

app.use('/api', api)
app.use(express.static('build'))

app.listen(config.port)

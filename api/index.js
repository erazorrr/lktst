const router = require('express').Router()
const errorHandler = require('./_helpers/errorHandler')
const login = require('./login')
const data = require('./data')
const logs = require('./logs')

router.use('/login', login)
router.use('/data', data)
router.use('/logs', logs)
router.use((err, req, res, next) => errorHandler(res)(err))

module.exports = router

const router = require('express').Router()
const { UserController } = require('../controllers')

const animeRouter = require('./anime')

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.use('/anime', animeRouter)

module.exports = router

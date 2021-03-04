const router = require('express').Router()
const { UserController } = require('../controllers')

const animeRouter = require('./anime')
const imageRouter = require('./image');

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.use('/anime', animeRouter)
router.use('/imageAnime', imageRouter)

module.exports = router

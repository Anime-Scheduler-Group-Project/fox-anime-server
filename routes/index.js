const router = require('express').Router()
const { UserController } = require('../controllers')

const animeRouter = require('./anime')

const oauthRouter = require('./oAuth')

const imageRouter = require('./image')

const holidayRouter = require('./holidays')

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.use('/anime', animeRouter)

router.use('/', oauthRouter)

router.use('/imageAnime', imageRouter)

router.use('/holidays', holidayRouter)

module.exports = router

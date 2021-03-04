const router = require('express').Router()
const { UserController,OauthController } = require('../controllers')


const animeRouter = require('./anime')

const oauthRouter = require('./oAuth')

const imageRouter = require('./image');


router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.use('/anime', animeRouter)

router.use('/',oauthRouter)

router.use('/imageAnime', imageRouter)

module.exports = router

const router = require('express').Router()

const { OauthController } = require('../controllers/index')

router.post('/oauth', OauthController.login)

module.exports = router

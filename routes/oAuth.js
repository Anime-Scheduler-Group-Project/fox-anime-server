const router = require('express').Router()
const authentication = require('../middlewares/authentication')

const { OauthController } = require('../controllers/index')


router.post('/oauth', OauthController.login)


module.exports = router

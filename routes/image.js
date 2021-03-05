const router = require('express').Router()
const authentication = require('../middlewares/authentication')

const { ImageController } = require('../controllers/image-controller')

router.use(authentication)
router.post('/', ImageController.show)

module.exports = router

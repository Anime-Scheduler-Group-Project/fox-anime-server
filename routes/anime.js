const router = require('express').Router()
const authentication = require('../middlewares/authentication')

const { AnimeController } = require('../controllers/anime-controller')

router.use(authentication)
router.get('/', AnimeController.showAll)

module.exports = router

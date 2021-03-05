const router = require('express').Router()
const { HolidayController } = require('../controllers')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.post('/', HolidayController.findHolidays)

module.exports = router

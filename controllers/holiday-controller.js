const { holidays } = require('../helpers/holidays-fetcher')

class HolidayController {
  static findHolidays = async (req, res, next) => {
    try {
      const { episodes, episodePerDay } = req.body
      const numberError = new Error()
      numberError.name = 'MinusNumberError'
      if (!episodePerDay) throw numberError
      if (+episodePerDay <= 0) throw numberError
      console.log(episodes, episodePerDay)
      const durationInDays = Math.ceil(+episodes / +episodePerDay)
      const data = await holidays(durationInDays)
      res.status(200).json({ data })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = { HolidayController }

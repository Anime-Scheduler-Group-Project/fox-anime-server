const axios = require('axios').default
const moment = require('moment')

const baseUrl = `https://calendarific.com/api/v2/holidays?api_key=${process.env.CALENDAR_KEY}&country=ID&year=2021`

const holidays = (durationInDays) =>
  axios({
    method: 'get',
    url: baseUrl,
  })
    .then((response) => {
      const { holidays } = response.data.response
      const data = parsedData(holidays, durationInDays)
      return data
    })
    .catch((err) => {
      console.log(err)
    })

function calculateSunday(durationInDays) {
  return new Array(durationInDays).fill('').map((_, index) => {
    return {
      name: 'Sunday',
      country: 'Indonesia',
      date: moment()
        .startOf('week')
        .add(7 * (index + 1), 'days')
        .format('YYYY-MM-DD'),
    }
  })
}

function parsedData(data, durationInDays) {
  const result = data
    .filter((e) => !e.type.includes('Season'))
    .map((holiday) => {
      const { name, country } = holiday
      return {
        name,
        country: country.name,
        date: moment(holiday.date.iso).format('YYYY-MM-DD'),
      }
    })
    .filter((e) => {
      const now = moment()
      if (moment(e.date) < now) return false
      return true
    })
    .filter((v, i, a) => a.findIndex((t) => t.date === v.date) === i)
    .slice(0, durationInDays)

  // Sundays without colliding with result
  const sundays = calculateSunday(durationInDays).filter((e) => {
    for (let i = 0; i < result.length; i++) {
      const holidayDate = result[i].date
      if (holidayDate === e.date) return false
    }
    return true
  })
  const joinedResult = [...result, ...sundays]
    .sort((a, b) => moment(a.date) - moment(b.date))
    .filter((v, i, a) => a.findIndex((t) => t.date === v.date) === i)
    .slice(0, durationInDays)

  return joinedResult
}

module.exports = { holidays }

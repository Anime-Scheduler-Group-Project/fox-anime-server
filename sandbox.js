const response = {
  data: [
    { name: 'Sunday', country: 'Indonesia', date: '2021-03-07' },
    { name: 'Maha Shivaratri', country: 'Indonesia', date: '2021-03-11' },
    {
      name: 'Ascension of the Prophet Muhammad',
      country: 'Indonesia',
      date: '2021-03-11',
    },
    { name: 'Cuti Bersama', country: 'Indonesia', date: '2021-03-12' },
    { name: 'Cuti Bersama', country: 'Indonesia', date: '2021-03-12' },
    { name: 'Cuti Bersama', country: 'Indonesia', date: '2021-03-12' },
    {
      name: "Bali's Day of Silence and Hindu New Year",
      country: 'Indonesia',
      date: '2021-03-14',
    },
    { name: 'Sunday', country: 'Indonesia', date: '2021-03-21' },
    { name: 'Sunday', country: 'Indonesia', date: '2021-03-28' },
    { name: 'Holi', country: 'Indonesia', date: '2021-03-29' },
    { name: 'Good Friday', country: 'Indonesia', date: '2021-04-02' },
    { name: 'Easter Sunday', country: 'Indonesia', date: '2021-04-04' },
    { name: 'Sunday', country: 'Indonesia', date: '2021-04-11' },
    { name: 'Sunday', country: 'Indonesia', date: '2021-04-18' },
    { name: 'Sunday', country: 'Indonesia', date: '2021-04-25' },
    {
      name: 'International Labor Day',
      country: 'Indonesia',
      date: '2021-05-01',
    },
  ],
}

response.data = response.data.filter(
  (v, i, a) => a.findIndex((t) => t.date === v.date) === i,
)

console.log(response.data)

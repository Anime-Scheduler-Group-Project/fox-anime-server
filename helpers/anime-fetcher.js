const axios = require('axios').default
const baseUrl = 'https://api.jikan.moe/v3/'

const seasonalAnime = async () => {
  try {
    const year = 2021
    const season = 'winter'
    const url = `${baseUrl}season/${year}/${season}`
    const data = await axios.get(url)
    const { anime } = data.data
    anime.forEach((e) => {
      console.log(e)
    })
    // no query params for pagination
    // or limit from the 3rd API
    return anime
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
      .map((e) => {
        const { url, title, image_url, synopsis, score } = e
        return { url, title, image_url, synopsis, score }
      })
  } catch (error) {
    console.error(error)
  }
}

module.exports = { seasonalAnime }

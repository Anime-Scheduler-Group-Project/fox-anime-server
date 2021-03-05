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
      .filter((e) => e.episodes)
      .slice(0, 10)
      .map((e, index) => {
        console.log(e)
        const { mal_id, url, title, image_url, synopsis, score, episodes } = e
        return {
          mal_id,
          url,
          title,
          image_url,
          synopsis,
          score,
          episodes,
          index,
        }
      })
  } catch (error) {
    console.error(error)
  }
}

module.exports = { seasonalAnime }

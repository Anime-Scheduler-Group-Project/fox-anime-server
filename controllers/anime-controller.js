const { seasonalAnime } = require('../helpers/anime-fetcher')

class AnimeController {
  static showAll = async (req, res, next) => {
    try {
      const anime = await seasonalAnime()
      res.status(200).json({ anime })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = { AnimeController }

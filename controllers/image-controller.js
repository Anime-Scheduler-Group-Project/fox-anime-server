const { imageAnime } = require('../helpers/anime-image-fetcher')

class ImageController {
  static show(req, res, next) {
    const url = req.body.url
    imageAnime(url)
      .then((data) => {
        res.status(200).json(data)
      })
      .catch((err) => {
        next(err)
      })
  }
}

module.exports = { ImageController }

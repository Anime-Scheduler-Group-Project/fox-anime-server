const { imageAnime } = require('../helpers/anime-image-fetcher')

class ImageController {
  static show(req, res, next){
    // masukin req.body
    const url = req.body.url
    console.log(url);
    // console.log(req);
    // console.log(imageAnime, '=========');
    // console.log(input);
    imageAnime(url)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = { ImageController }

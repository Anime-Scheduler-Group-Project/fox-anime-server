const { OAuth2Client } = require('google-auth-library')
const { User } = require('../models')

class OauthController {
  static login(req, res, next) {
    console.log(User, 'INI USER')

    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
    let email
    let name
    client
      .verifyIdToken({
        idToken: req.body.token,
        audience: process.env.GOOGLE_CLIENT_ID,
      })
      .then((ticket) => {
        const payload = ticket.getPayload()
        console.log(payload, 'INI PAYLOAD')
        email = payload.email
        name = payload.name

        return User.findOne({
          where: { email },
        })
      })
      .then((data) => {
        if (data) {
          console.log(data, 'ini DATABASE')
          return data
        } else {
          console.log('MASUK')
          return User.create({
            email,
            name,
            password: Math.random() * 1000 + 'testos',
          })
        }
      })
      .then((data) => {
        const access_token = data.toJwt()
        console.log(access_token)
        res.status(200).json({ access_token })
      })
      .catch(next)
  }
}

module.exports = { OauthController }

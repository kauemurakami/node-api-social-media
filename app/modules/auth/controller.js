
class AuthController {

  async login(req, res, next) {
    const LoginUser = require('./functions/login')
    await LoginUser.execute(req.body).then(data =>
      res.status(200).send(data)
    ).catch(err => next(err))
  }
  async signup(req, res, next) {
    const CreateUser = require('./functions/signup')
    await CreateUser.execute(req.body).then(data =>
      res.status(201).send(data)
    ).catch(err => next(err))
  }

}

module.exports = new AuthController();

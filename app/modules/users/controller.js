class UsersController {
  async create(req, res, next) {
    const Createuser = require('./functions/create')
    await Createuser.execute(req.body).then(data =>
      res.status(201).send(data)
    ).catch(err => next(err))
  }
}

module.exports = new UsersController()


class UsersController {

  async create(req, res, next) {
    const CreateUser = require('./functions/create')
    await CreateUser.execute(req.body).then(data =>
      res.status(200).send(data)
    ).catch(err => next(err))
  }

}

module.exports = new UsersController();

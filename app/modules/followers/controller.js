
class FollowersController {

  async follow(req, res, next) {
    const FollowUser = require('./functions/follow')
    await FollowUser.execute(req.body).then(data =>
      res.status(200).send(data)
    ).catch(err => next(err))
  }
  async unfollow(req, res, next) {
    const UnfollowUser = require('./functions/unfollow')
    await UnfollowUser.execute(req.body).then(data =>
      res.status(201).send(data)
    ).catch(err => next(err))
  }

}

module.exports = new FollowersController();

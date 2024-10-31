
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
      res.status(200).send(data)
    ).catch(err => next(err))
  }

  async followers(req, res, next) {
    const Followers = require('./functions/followers')
    await Followers.execute(req.query).then(data =>
      res.status(200).send(data)
    ).catch(err => next(err))
  }

  async following(req, res, next) {
    const Followings = require('./functions/following')
    await Followings.execute(req.query).then(data =>
      res.status(200).send(data)
    ).catch(err => next(err))
  }

}

module.exports = new FollowersController();

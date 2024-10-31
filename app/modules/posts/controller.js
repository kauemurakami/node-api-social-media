
class PostsController {
  async post(req, res, next) {
    const CreatePost = require('./functions/create')
    await CreatePost.execute(req.body).then(data =>
      res.status(201).send(data)
    ).catch(err => next(err))
  }
  async posts(req, res, next) {
    const GetPosts = require('./functions/posts')
    await GetPosts.execute(req.body).then(data =>
      res.status(201).send(data)
    ).catch(err => next(err))
  }

  async delete(req, res, next) {
    const DeletePost = require('./functions/delete')
    await DeletePost.execute(req.query).then(data =>
      res.status(201).send(data)
    ).catch(err => next(err))
  }
}

module.exports = new PostsController();

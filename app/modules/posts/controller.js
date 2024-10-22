
class PostsController {
  async create(req, res, next) {
    const CreatePost = require('./functions/create')
    await CreatePost.execute(req.body).then(data =>
      res.status(201).send(data)
    ).catch(err => next(err))
  }
  async getAll(req, res, next) {
    const GetPosts = require('./functions/get_all')
    await GetPosts.execute(req.body).then(data =>
      res.status(201).send(data)
    ).catch(err => next(err))
  }
  async get(req, res, next) {
    const GetPost = require('./functions/get_by_id')
    await GetPost.execute(req.body).then(data =>
      res.status(201).send(data)
    ).catch(err => next(err))
  }
  async edit(req, res, next) {
    const EditPost = require('./functions/edit')
    await EditPost.execute(req.body).then(data =>
      res.status(201).send(data)
    ).catch(err => next(err))
  }
  async delete(req, res, next) {
    const DeletePost = require('./functions/delete')
    await DeletePost.execute(req.body).then(data =>
      res.status(201).send(data)
    ).catch(err => next(err))
  }
}

module.exports = new PostsController();

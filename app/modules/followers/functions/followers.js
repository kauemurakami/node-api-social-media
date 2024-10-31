const launch_error = require('../../../core/errors/launch_error')
const knex = require('../../../data/db/knex')
class Followers {
  async execute(query) {
    const followers = await knex('followers')
    .select(['users.id as user_id', 'users.name', 'users.nick'])
    .where({follower : query.user_id})
    .join('users', 'users.id', 'followers.following')
    .catch(e => {
      console.log(e)
      launch_error('Erro ao buscar seguidores, tente novamente.', 400)
    })
    return followers
  }
}

module.exports = new Followers()

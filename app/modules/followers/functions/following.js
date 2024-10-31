const launch_error = require('../../../core/errors/launch_error')
const knex = require('../../../data/db/knex')
class Following {
  async execute(query) {
    const following = await knex('followers')
    .select(['users.id as user_id', 'users.name', 'users.nick'])
    .where({following : query.user_id})
    .join('users', 'users.id', 'followers.follower')
    .catch(e => {
      console.log(e)
      launch_error('Erro ao buscar seguidores, tente novamente.', 400)
    })
    return following
  }
}

module.exports = new Following()

const launch_error = require('../../../core/errors/launch_error')
const knex = require('../../../data/db/knex')
class Follow {
  async execute(body) {

    const following = await knex('followers')
      .select('following')
      .where({ follower: body.follower })
      .catch(e => {
        launch_error('Erro ao verificar seguidores.', 400)
      })

    const already_follow = following.find(obj => obj.following === body.following);

    if (already_follow && Object.keys(already_follow).length > 0) {
      launch_error('Você já segue esta pessoa', 400)
    }

    await knex('followers')
      .insert({
        follower: body.follower,
        following: body.following
      })
      .catch(e => {
        launch_error('Erro ao seguir usuário, tente novamente ou entre em contato com o suporte', 400)
      })
    return true
  }
}

module.exports = new Follow()

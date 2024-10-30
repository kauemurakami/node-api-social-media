const launch_error = require('../../../core/errors/launch_error')
const knex = require('../../../data/db/knex')

class Unfollow {
  async execute(body) {

    const is_following = await knex('followers')
      .select('id')
      .where({ follower: body.follower })
      .andWhere({ following: body.following })
      .first()
      .catch(e => {
        launch_error('Erro ao verificar usuário', 400)
      })

    if(!is_following){
      launch_error('Você já deixou de seguir este usuário', 400)
    }

    await knex('followers')
      .where({ id: is_following.id })
      .del()
      .catch(e => {
        launch_error('Erro ao deixar de seguir usuário, tente novamente ou entre em contato com o suporte', 400)
      })

    return true
  }
}

module.exports = new Unfollow()

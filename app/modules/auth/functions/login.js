const knex = require('../../../data/db/knex')
const launch_error = require('../../../core/errors/launch_error')
const hash = require('../../../core/utils/functions/hash')

class LoginUser {
  async execute(body) {

    let message, user

    await knex.transaction(async trx => {
      user = await knex('users')
        .transacting(trx)
        .select(['email', 'password'])
        .first()
        .where({ email: body.email })
        .catch(e => {
          console.log(e)
          message = 'Usuário não encontrado.'
          trx.rollback()
        })

      const passed = await hash.compareHash(body.password, user.password)

      if (!passed) {
        message = 'Senha ou email incorreto(s).'
        launch_error('Senha ou email incorreto(s).', 401)
      }

      user = await knex('users')
        .transacting(trx)
        .select(['users.id', 'name', 'email', 'nick', 'user_token.token'])
        .first()
        .where({email:body.email})
        .join('user_token', 'user_token.user_id', 'users.id')
        .catch(e => {
          console.log(e)
          message = 'Erro ao logar com usuário, tente novamente ou entre em contato com o suporte.'
          trx.rollback()
        })
      await trx.commit()
    }).catch(e => {
      console.log(e)
      launch_error(message, 400)
    })
    return user
  }
}

module.exports = new LoginUser()

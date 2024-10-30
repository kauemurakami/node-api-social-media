const knex = require('../../../data/db/knex')
const launch_error = require('../../../core/errors/launch_error')
const hash = require('../../../core/utils/functions/hash')
const jwt = require('./jwt')

class CreateUser {
  async execute(body) {

    let message, new_user={...body}

    const user_exists = await knex('users')
    .select('id')
    .first()
    .where({email: body.email})
    .orWhere({nick: body.nick})

    if(user_exists){
      launch_error('Já existe um usuário com mesmo nick ou email, verifique e tente novamente.', 409)
    }

    await knex.transaction(async trx => {

      body.password = await hash.hash(body.password)

      var user = await knex('users')
        .transacting(trx)
        .insert(body)
        .returning('id')
        .then(row => row[0])
        .catch( e => {
          message = 'Erro ao criar usuário'
           trx.rollback()
        })

      new_user.id = user.id
      delete new_user.password
      var token = jwt.jwtSign(
        {
          email: body.email,
          nick: body.nick
        })
      token = await knex('user_token')
        .transacting(trx)
        .insert({ token: token, user_id: user.id })
        .returning('token')
        .then(row => row[0].token)
        .catch( e => {
          message = 'Erro ao criar token de usuário, tente novamente, ou entre em contato com o suporte.'
           trx.rollback()
        })

      new_user.token = token

      await trx.commit()

    }).catch(e => {
      console.log(e)
      launch_error(message, 400)
    })
    return new_user
  }
}

module.exports = new CreateUser()

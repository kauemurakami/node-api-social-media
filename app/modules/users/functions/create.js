const knex = require('knex')

class CreateUser {
  async execute(body){
    console.log(body)
    const new_user = await knex('users')
    .insert(body)
    .returning('*')
    .catch(e =>{
      console.log(e)
    })
    console.log(new_user)
  }
}

module.exports = CreateUser

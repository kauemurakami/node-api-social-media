const bcrypt = require('bcrypt')

async function hash(password){
 // Gerar um salt aleatório
  const salt = await bcrypt.genSalt();

  // Criptografe a senha do usuário usando o salt gerado
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

async function compareHash(password, hashedPassword){
 const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
}

module.exports = {hash, compareHash}

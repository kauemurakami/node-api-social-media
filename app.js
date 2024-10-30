const express = require('express')
var routes = require("./app/routes/routes")
const app = express()
const port = 3000

app.use(express.json());
app.use(routes);

require('dotenv').config({
  path:'.env'
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err); // Log do erro
  if (err.statusCode >= 400 <= 499 && err.statusCode != null) { // melhorar
      res.status(err.statusCode).json(err)
      return
    }
  if(err.statusCode == 500){
    res.status(500).json({ message: ['Ocorreu um erro inesperado.'], error: err.message });
  }

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


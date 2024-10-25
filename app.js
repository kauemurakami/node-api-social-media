const express = require('express')
var routes = require("./app/routes/routes")
const app = express()
const port = 3000
app.use(routes);

app.use(express.json());

require('dotenv').config({
  path:'.env'
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


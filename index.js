const express = require('express')
const app = express()
const port = 1500

app.get('/', (req, res) => {
  res.send({firstname:'gary'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://math.seattleacademy:${port}`)
})

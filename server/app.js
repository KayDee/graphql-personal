let express = require('express')
let graphqlHTTP = require('express-graphql')
let schema = require('./config/schema')

const PORT = process.env.PORT || 4000

let app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.post('/api', graphqlHTTP({
  schema,
  graphiql: true
}))

app.get('/api', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log('Listening on ' + PORT)
})

module.exports = { app }

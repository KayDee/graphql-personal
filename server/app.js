let express = require('express')
let graphqlHTTP = require('express-graphql')
let schema = require('./config/schema')

const PORT = process.env.PORT || 4000

let app = express()

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

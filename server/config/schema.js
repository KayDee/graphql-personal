const {makeExecutableSchema} = require('graphql-tools')
let BASIC_INFO = require('./data/basic')

let { Query } = require('./types/types.graphql')

let typeDefs = Query
console.log(BASIC_INFO)

let resolvers = {
  Query: {
    name: () => BASIC_INFO.name,
    fullname: () => BASIC_INFO.fullname,
  }
}

let schema = makeExecutableSchema({ typeDefs, resolvers })



module.exports = schema

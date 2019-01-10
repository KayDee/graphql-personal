import {makeExecutableSchema} from 'graphql-tools'
let data = require('data/basic')

import { Query } from 'types/types'

let typeDefs = Query

let resolvers = {
  Query: {
    name: data.name,
    fullname: data.fullname,
  }
}

let schema = makeExecutableSchema({ typeDefs, resolvers })



module.exports = schema

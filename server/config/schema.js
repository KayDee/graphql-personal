import {makeExecutableSchema} from 'graphql-tools'
let BASIC_INFO = require('./data/basic')

import { Query } from './types/types'

let typeDefs = Query
console.log(Query)

let resolvers = {
  Query: {
    name: () => BASIC_INFO.name,
    fullname: () => BASIC_INFO.fullname,
  }
}

let schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema

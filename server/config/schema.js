import {makeExecutableSchema} from 'graphql-tools'
import BASIC_INFO from 'data/basic'

import { Query } from 'types/types'

let typeDefs = Query

let resolvers = {
  Query: {
    name: BASIC_INFO.name,
    fullname: BASIC_INFO.fullname,
  }
}

let schema = makeExecutableSchema({ typeDefs, resolvers })



module.exports = schema

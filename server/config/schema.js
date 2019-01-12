import {makeExecutableSchema} from 'graphql-tools'
let data = require('./data/main')

import {
  Query,
  Repos
} from './types/types'

let typeDefs = Query.concat(Repos)
console.log(data)
let resolvers = {
  Query: {
    name: () => data.name,
    fullname: () => data.fullname,
    age: () => data.age,
    nickname: () => data.nickname,
    age: () => data.age,
    github: () => data.github,
    linkedin: () => data.linkedin,
    repos: () => data.REPO_INFO
  }
}

let schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema

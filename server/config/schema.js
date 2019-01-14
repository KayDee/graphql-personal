import {makeExecutableSchema} from 'graphql-tools'
let data = require('./data/main')

import {
  Query,
  Repos
} from './types/types'

let typeDefs = Query.concat(Repos)
// console.log(data.repos.then(repo => console.log(repo)))
let resolvers = {
  Query: {
    name: () => data.name,
    fullname: () => data.fullname,
    age: () => data.age,
    nickname: () => data.nickname,
    github: () => data.github,
    linkedin: () => data.linkedin,
    codepen: () => data.codepen,
    freecodecamp: () => data.freecodecamp,
    website: () => data.website,
    hobbies: () => data.hobbies,
    repos: () => data.repos
  }
}

let schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema

import {makeExecutableSchema} from 'graphql-tools'
let data = require('./data/main')

import {
  Query,
  Repos,
  Langs,
} from './types/types'

let typeDefs = Query.concat(Repos, Langs)
console.log(data)
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
    location: () => data.location,
    repos: () => data.repos,
    languages: () => data.LANGS,
  }
}

let schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema

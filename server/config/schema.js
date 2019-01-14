import {makeExecutableSchema} from 'graphql-tools'
let data = require('./data/main')

import {
  Query,
  Repo,
  Langs,
  Project
} from './types/types'

let typeDefs = Query.concat(Repo, Langs, Project)

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
    technologies: () => data.TECHS,
    projects: () => data.PROJECTS
  }
}

let schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema

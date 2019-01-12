const axios = require('axios')

export const repos = axios('https://api.github.com/users/KayDee/repos?type=all&per_page=100')
.then(data => data.data.map(repo => ({
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    language: repo.language,
    stars: repo.stargazers_count,
    fork: repo.fork
  })
)).then(res => res.filter(repo => !repo.fork)).catch(err => console.error(err))
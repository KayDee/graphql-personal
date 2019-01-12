let axios = require('axios')

export const repos = axios('https://api.github.com/users/KayDee/repos?type=all&per_page=100')
.then(data => data.data.map({
  name: data.name,
  description: data.description,
  url: data.html_url,
  language: data.language,
  stars: data.stargazers_count
})).then(res => res.data.filter(repo => !repo.fork)).catch(err => console.error(err))

// export default REPO_INFO

// console.log(repos)
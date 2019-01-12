import BASIC_INFO from './basic'
import repos from './repos'

console.log(repos)
module.exports = {
  ...BASIC_INFO,
  repos,
}
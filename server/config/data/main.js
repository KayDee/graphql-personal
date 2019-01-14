import BASIC_INFO from './basic'
import SOCIAL_INFO from './social'
import {repos} from './repos'

console.log(repos)
module.exports = {
  ...BASIC_INFO,
  ...SOCIAL_INFO,
  repos,
}
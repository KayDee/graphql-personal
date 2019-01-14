import { BASIC_INFO } from './basic'
import { SOCIAL_INFO } from './social'
import { LANGS } from './langs'
import { repos } from './repos'

module.exports = {
  ...BASIC_INFO,
  ...SOCIAL_INFO,
  LANGS,
  repos,
}
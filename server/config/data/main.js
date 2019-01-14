import { BASIC_INFO } from './basic'
import { SOCIAL_INFO } from './social'
import { LANGS } from './langs'
import { repos } from './repos'
import { TECHS } from './techs'
import { PROJECTS } from './projects'


module.exports = {
  ...BASIC_INFO,
  ...SOCIAL_INFO,
  LANGS,
  repos,
  TECHS,
  PROJECTS,
}
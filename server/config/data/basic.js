require('dotenv').config()

const BASIC_INFO = {
  name: 'Kaustubh',
  fullname: 'Kaustubh D',
  nickname: 'Kay',
  birthday: '',
  age: 0,
  github: process.env.github || '',
  linkedin: process.env.linkedin || '',
}

export BASIC_INFO
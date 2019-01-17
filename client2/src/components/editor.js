import 'graphiql/graphiql.css'

import React from 'react'
import GraphiQl from 'graphiql'

const defaultQuery = `{
  name
  age
  location
  languages{
    spoken
  }
}`

const fetcher = args => {
  return fetch('http://localhost:4000/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(args)
  }).then(res => res.json())
}

export const Main = () => (
  <GraphiQl fetcher={fetcher} query={defaultQuery} />
)
import GraphiQl from 'graphiql'
import { query } from './query'

const fetcher = () => {
  return fetch('http://localhost:3000/api', {
    method: 'POST',
    body: JSON.stringify(query)
  }).then(res => res.json())
}


export const Main = () => (
  <GraphiQl fetcher={fetcher} query={query}>
  
  </GraphiQl>
)
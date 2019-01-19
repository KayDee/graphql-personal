import 'graphiql/graphiql.css'
import GraphiQl from 'graphiql'

const DEF_QUERY = `# Hellaae
# This is a graphql api about myself
{
  name
  age
  location
  languages{
    spoken
  }
}
`

const fetcher = args => {
  return fetch('http://localhost:4000/api', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(args)
  }).then(res => res.json())
}

export const Editor = () => (
  <GraphiQl fetcher={fetcher} query={DEF_QUERY} editorTheme="darcula" />
)

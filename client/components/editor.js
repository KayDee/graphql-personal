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
  return fetch('https://us-central1-glowing-sanctum-194120.cloudfunctions.net/portfolio/api', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(args)
  }).then(res => res.json())
}

export const Editor = () => (
  <GraphiQl fetcher={fetcher} query={DEF_QUERY} editorTheme="darcula" />
)

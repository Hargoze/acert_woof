import fetch from 'isomorphic-unfetch';

async function fetchAPI(query, { variables } = {}) {
    const res = await fetch(`http://localhost:1337/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
  
    const json = await res.json()
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
  
    return json.data
}

export async function getAllData() {
    const data = await fetchAPI(
      `
      query {
        section: sections {
          titre
          description
          image {
            url
          }
          direction
        }
        reco: recommandations {
          name
          job
          quote
          profile {
            url
          }
        }
      }      
    `)
    return data
}
const key = process.env.REACT_APP_API_KEY

async function getNewsData() {
  let response = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`)
  let data = await response.json()
  return data
}

module.exports = getNewsData
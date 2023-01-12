const key = process.env.REACT_APP_API_KEY;

async function getNewsData(category) {
  let response = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${key}`
  );
  let data = await response.json();
  return data;
}

export { getNewsData }

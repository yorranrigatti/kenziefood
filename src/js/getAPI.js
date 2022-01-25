

async function getAPI() {
  const response = await fetch('https://kenzie-food-api.herokuapp.com/product')
  .then(res => res.json())
  .catch(() => {})
  return response
}

export {getAPI}

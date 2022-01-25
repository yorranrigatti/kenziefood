

function getAPI() {
  const response = fetch('https://kenzie-food-api.herokuapp.com/product')
  .then(res => res.json())
  .catch(() => {})
  console.log(response)
  return response
}

export {getAPI}

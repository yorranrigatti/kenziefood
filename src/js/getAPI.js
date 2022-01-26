

export async function getAPI() {
  const response = await fetch('https://kenzie-food-api.herokuapp.com/product')
  const data = await response.json()
  return data
}


export let db = await getAPI()

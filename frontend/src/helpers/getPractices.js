const getPractices = async (userId) => {

const url = `http://localhost:8081/api/practice/${userId}`;
const response = await fetch(url)

if(!response.ok) {
  const {url, status, statusText} = response
  throw Error(`${status} ${statusText} in fetch ${url}`)
}

const practices = await response.json()

return practices

}

export default getPractices

const createPractice = async (data) => {

  const url = 'http://localhost:8081/api/practice'
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  const response = await fetch(url, options)
  if (!response.ok) {
    const {status, statusText, url} = response
    throw Error (`${status}, ${statusText} in fetch ${url}` )
  }

}

export { createPractice }
const fetchData = async (searchTerm) => {
  const response = await axios.get('http://localhost:3001/api/movies', {
    params: { 
      s: searchTerm 
    }
  })
  console.log(response.data)
}

const input = document.querySelector('input')

let timeoutId

const onInput = event => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  timeoutId = setTimeout(() => {
    fetchData(event.target.value)
  }, 1000)
}

input.addEventListener('input', onInput)

const fetchData = async (searchTerm) => {
  const response = await axios.get('http://localhost:3001/api/movies', {
    params: { 
      s: searchTerm 
    }
  })
  console.log(response.data)
}

const input = document.querySelector('input')

const debounce = (func) => {
  let timeoutId

  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
  }
}


const onInput = event => {
 
  timeoutId = setTimeout(() => {
    fetchData(event.target.value)
  }, 1000)
}

input.addEventListener('input', onInput)

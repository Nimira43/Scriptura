const fetchData = async (searchTerm) => {
  const response = await axios.get('http://localhost:3001/api/movies', {
    params: { 
      s: searchTerm 
    }
  })
  console.log(response.data)
}

const input = document.querySelector('input')

const onInput = event => {
  fetchData(event.target.value)
}

input.addEventListener('input', onInput)

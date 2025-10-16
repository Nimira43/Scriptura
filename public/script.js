const fetchData = async () => {
  const response = await axios.get('http://localhost:3001/api/movies', {
    params: { i: 'tt0118661' }
  })
  console.log(response.data)
}

const input = document.querySelector('input')
input.addEventListener('input', (event) => {
  event.target.value
  
})

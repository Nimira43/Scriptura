const fetchData = async () => {
  const response = await axios.get('http://localhost:3001/api/movies', {
    // params: { s: 'avengers' }
    params: { i: 'tt0118661' }
  })
  console.log(response.data)
}

fetchData()

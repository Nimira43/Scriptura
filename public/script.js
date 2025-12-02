const fetchData = async (searchTerm) => {
  const response = await axios.get('http://localhost:3001/api/movies', {
    params: { 
      s: searchTerm 
    }
  })
  return response.data.Search
}

const input = document.querySelector('input')

const onInput = async event => {
  const movies = await fetchData(event.target.value)
  
  for (let movie of movies) {
    const div = document.createElement('div')

    div.innerHTML = `
      <div class='movie-card'>
        <img src="${movie.Poster}" />
        <h1>${movie.Title}</h1>
      </div>
     `

    document.querySelector('#target').appendChild(div)
  }
}

input.addEventListener('input', debounce(onInput, 1000))

// server.js
app.get('/api/movies', async (req, res) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: process.env.OMDB_KEY,
      s: req.query.s
    }
  })
  res.json(response.data)
})

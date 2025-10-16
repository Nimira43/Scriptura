const express = require('express')
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

app.get('/api/movies', async (req, res) => {
  try {
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: process.env.OMDB_KEY,
        s: req.query.s
      }
    })
    res.json(response.data)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch movies' })
  }
})

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`)
})
import express from 'express'

const app = express()

app.use('/api/register', (req, res) => {
  res.send('MCR CONCERT CUTIE')
})

app.listen(3000, () =>{
  console.log('Server running on port 3000.')
})
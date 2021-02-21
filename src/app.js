const express = require('express')
const app = express()
const port = 8080

app.get('/', (_request, response) => response.send('Hello Friend!'))

app.get('/comic', (request, response) => response.send(request.query))

app.listen(port, () => console.log('Our app is now listening!!!'))

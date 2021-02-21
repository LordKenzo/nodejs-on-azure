const express = require('express')
const path = require('path')
const axios = require('axios')
const handlebars = require('express-handlebars')
const app = express()
const port = 8080

app.engine('handlebars', handlebars())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'handlebars')

app.get('/', (_request, response) => response.send('Hello Friend!'))

app.get('/comic', (request, response) => {
  // http://localhost:8080/comic?id=1919

  if (request.query.id) {
    axios.get(`https://xkcd.com/${request.query.id}/info.0.json`)
      .then(res => {
        const bodyToJSON = res.data
        const dataToRender = {
          title: bodyToJSON.safe_title,
          img: bodyToJSON.img,
          desc: bodyToJSON.alt
        }
        response.render('comic', dataToRender)
      })
  }
})

app.listen(port, () => console.log('Our app is now listening!!!'))

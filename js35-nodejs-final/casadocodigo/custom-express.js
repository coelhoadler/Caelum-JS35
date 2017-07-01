const express = require('express')
const load = require('express-load')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressValidator({
  customValidators : {
    maiorQue: function(value, number) {
      return value > number
    }
  }
}))

load('routes').into(app)

module.exports = app

const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')

const app = express()

app.set('host', 'localhost')
app.set('port', 5000)
app.use(compression())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.disable('x-powered-by')

const api = express.Router()
const propertiesController = require('./controllers/properties')
const usersController = require('./controllers/users')
const worksheetsController = require('./controllers/worksheets')

app.get('/properties', propertiesController.list)
app.get('/properties/:id', propertiesController.get)
app.get('/users', usersController.list)
app.get('/users/:id', usersController.get)
app.get('/worksheets', worksheetsController.list)
app.get('/worksheets/:id', worksheetsController.get)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send('Server Error')
})

module.exports = app

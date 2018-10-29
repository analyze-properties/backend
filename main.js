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

api.get('/properties', propertiesController.list)
api.get('/properties/:id', propertiesController.get)
api.get('/users', usersController.list)
api.get('/users/:id', usersController.get)
api.get('/worksheets', worksheetsController.list)
api.get('/worksheets/:id', worksheetsController.get)
app.use('/api', api)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send('Server Error')
})

module.exports = app

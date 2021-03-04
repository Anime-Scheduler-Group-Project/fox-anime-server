require('dotenv').config()
const express = require('express')
const router = require('./routes')
const errorHandler = require('./middlewares/error-handler')
const PORT = 3000
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)
app.use(errorHandler)

app.listen(PORT, () => console.log('Listing at PORT', PORT))

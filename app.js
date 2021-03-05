require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes')
const errorHandler = require('./middlewares/error-handler')
const PORT = 3000
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use(router)
app.use(errorHandler)

app.listen(PORT, () => console.log('Listing at PORT', PORT))

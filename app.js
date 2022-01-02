const express = require('express')
const router = require('./route')
const app = express()

app.use(express.json())

app.use(router)

app.listen(5000, () => {
    'Server running on http://localhost:5000'
})
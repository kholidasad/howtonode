const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.data)
})

module.exports = router

// https://jsonplaceholder.typicode.com/users'
const express = require('express')
const router = express.Router()
const axios = require('./axiosRoute')
const student = require('./studentRouter')
const cobaapi = require('./cobaAPI')

router.use("/student", student)
// router.use("/api", cobaapi)
router.use("/axios", axios)

module.exports = router
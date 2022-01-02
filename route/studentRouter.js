const express = require('express')
const router = express.Router()
const fs = require('fs')
const student = require('../student.json')

router.get('/', (req, res) => {
    // let studentFile = JSON.parse(student)
    fs.readFile('student.json', (err) => {
        if (err) {
            res.status(404).json({
                status: 'Failed',
                message: 'Not Found'
            })
        }
        res.status(200).json({
            status: 'Success',
            message: 'Data Ditemukan',
            result: student
        })
    })
})

router.post('/new', (req, res) => {
    student.push(req.body)
    studentFile = JSON.stringify(student)
    fs.writeFile('student.json', studentFile, (err) => {
        if (err) {
            res.status(500).json({
                message: 'Failed'
            })
        }
        res.status(200).json({
            message: 'Success',
            result: student
        })
    })
})

router.put('/edit/:id', (req, res) => {
    for (let x of student) {
        if (x.id == req.params.id) {
            x.nama = req.body.nama
            break
        }
    }

    studentFile = JSON.stringify(student)
    fs.writeFile('student.json', studentFile, (err) => {
        if (err) {
            res.status(500).json({
                message: 'Failed'
            })
        }
        res.status(200).json({
            message: 'Berhasil Diubah',
            result: student
        })
    })
})

router.delete('/delete/:id', (req, res) => {
    for (let i = 0; i < student.length; i++) {
        if (student[i].id == req.params.id) {
            student.splice(i, 1)
        }
    }

    studentFile = JSON.stringify(student)
    fs.writeFile('student.json', studentFile, (err) => {
        if (err) {
            res.status(404).json({
                message: 'Data not found'
            })
        }
        res.status(200).json({
            message: 'Success',
            result: student
        })
    })
})

module.exports = router
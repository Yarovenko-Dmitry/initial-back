const express = require('express')

const router = express.Router()

router.use(async (req, res, next) => {
    console.log('testPing interceptor process', new Date().toLocaleString())
    next()
})

router.get('/add', async (req, res) => {
    const queryData = req.query
    try {
        console.log('add add add queryData :', queryData)
        res.status(200).json({'add': 'add',queryData})

    } catch (err) {
        res.status(400).json({'error': err.message, 'code': 5})
    }
})

router.get('', async (req, res) => {
    const queryData = req.query
    try {
        console.log(' queryData :', queryData)
        res.status(200).json({queryData})

    } catch (err) {
        res.status(400).json({'error': err.message, 'code': 5})
    }
})



module.exports = router

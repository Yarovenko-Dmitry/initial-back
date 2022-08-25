const express = require('express')

const router = express.Router()

router.use(async (req, res, next) => {
    console.log('testData interceptor process', new Date().toLocaleString())
    next()
})

router.post('', async (req, res) => {
    const bodyData = req.body
    try {
        console.log(' bodyData :', bodyData)
        res.status(200).json({bodyData})

    } catch (err) {
        res.status(400).json({'error': err.message, 'code': 5})
    }
})

module.exports = router

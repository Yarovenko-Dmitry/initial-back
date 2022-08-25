const express = require('express')
const bodyParser = require('body-parser')

const testData = require('./routers/testData')
const testPing = require('./routers/testPing')

const app = express()

app.use(express.json({
    limit: '50mb',
}))

app.use(express.urlencoded({
    limit: '50mb',
    extended: true,
}))

app.use(bodyParser.json())

app.use('/routers/testData', testData)
app.use('/testPing', testPing)

const PORT = 3000
//http://localhost:3000/testPing?key1=value1&key2=value2

async function start() {
    try {
        app.listen(PORT, () => {
                console.log(`App has been started on port ${PORT}`)
            },
        )
    } catch (err) {
        console.log('Server error', err.message)
        process.exit(1)
    }
}

start()

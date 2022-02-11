console.log('04 Store API')
require('dotenv').config()
require('express-async-errors') // async errors

const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')


//middleware
app.use(express.json())

// route

// home route
app.get('/', (req, res) => {
    res.send('<h1> Store API </h1> <a href="/api/v1/products">products route</a>')
})

// product route
app.use('/api/v1/products', productsRouter)


// handles errors
app.use(notFoundMiddleware)
app.use(errorMiddleware)


const port  = process.env.PORT || 3000

const start = async () => {
    try {
        // connect Db
        await connectDB(process.env.MONGO_URI)
        // listening to req
        app.listen(port, console.log(`Server is listening at ${port}... `))
    } catch (error) {
        console.log(error)
    }
}

//start server
start() 
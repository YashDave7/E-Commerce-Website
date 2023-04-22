const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/database.js')
const authRoute = require('./routes/authRoute.js')

// CONFIGURE ENV
dotenv.config()

// REST OBJECT 
const app = express()

// DATABASE CONFIG
connectDB();

// MIDDLEWARES
app.use(express.json())
app.use(morgan('dev'))

// ROUTES.
app.use('/api/v1/auth', authRoute)


// REST API
app.get('/', (req, res) => {
    res.send("<h1>Welcome to the home page </h1>")
})

// PORT 
const PORT = process.env.PORT || 8080;

// RUN LISTEN
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})

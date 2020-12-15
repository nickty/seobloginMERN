const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blog')
const authRoutes = require('./routes/auth')


//app 

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

//cors
if(process.env.NODE_ENV == 'development'){
    app.use(cors({origin: `${process.env.CLIENT_URL}`}))
}

//db
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false})
.then(()=>{
    console.log('DB connected')
})


//middleware
app.use('/api', blogRoutes)
app.use('/api', authRoutes)

//route 
// app.get('/api', (req, res) => {
//     res.json({time: Date().toString()})
// })

//port 
const port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
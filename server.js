const express = require('express')
require('./config/config')
const router = require('./routers/userRouter')
const app = express()

app.use(express())
app.use(express.json())

app.use('/api/v1', router)
app.use('/uploads', express.static('uploads'))
const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`This app is listening on port: ${PORT}`)
})
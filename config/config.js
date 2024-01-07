const mongoose = require('mongoose');
require('dotenv').config()

const db = process.env.dbLink
mongoose.connect(db)
.then(()=>{
    console.log(`Database connection established successfully`)
})
.catch((err)=>{
    console.log(`Error connecting to this database: ${err.message}`)
}) 
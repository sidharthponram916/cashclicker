require('dotenv').config(); 

const express = require('express'); 
const dbConnect = require('./config/db.config.js'); 
const app = express(); 

app.use(require('cors')()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use('/api/users', require('./routes/user.routes')); 

dbConnect(); 



app.get('/', (req,res) => { 
    res.send("Welcome to the CashClicker Backend API"); 
})

app.listen(process.env.PORT || 2022, () => { 
     console.log("CashClicker Backend is now running!"); 
}) 
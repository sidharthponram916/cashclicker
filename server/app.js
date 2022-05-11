require('dotenv').config(); 

const express = require('express'); 
const app = express(); 

app.get('/', (req,res) => { 
    res.send("Welcome to the CashClicker Backend API"); 
})

app.listen(process.env.PORT || 2022, () => { 
     console.log("CashClicker Backend is now running!"); 
}) 
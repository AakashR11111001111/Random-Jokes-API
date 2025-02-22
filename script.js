const express = require('express');
const Jokes = require('./jokes');
const app = express();


const PORT = process.env.PORT || 1000;

app.get("/jokes/random",(req, res)=>{
    

    const idx = Math.floor(Math.random() * Jokes.length);
    
    res.json(Jokes[idx]);
})


app.listen(PORT, ()=> console.log(`Server Up on PORT no ${PORT}`)
)
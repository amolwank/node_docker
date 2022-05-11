const express = require('express')
const res = require('express/lib/response')

const app = express()

const port = process.env.PORT

app.get('/',(req, res)=>res.send('Hello Loma!'))
app.get("/docker", (req,res) => {
    res.send("Hello From docker....");
} );

app.get('/nodemon', (req, res) => {
    res.send('Hello from nodemon');
});

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))

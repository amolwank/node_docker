const express = require('express')
const res = require('express/lib/response')
const mysql = require('mysql')
const app = express()

const con = mysql.createConnection({

    host : "mysql",
    user: "root",
    password: "complexpassword",
    database: 'Customers'
    });
    
    con.connect(function (err) {
        if (err) throw err;
        
        console.log("Connected!");
    });

const port = process.env.PORT





app.get('/',(req, res)=>res.send('Hello Loma!'))
app.get("/docker", (req,res) => {
    res.send("Hello From docker....");
} );

app.get('/nodemon', (req, res) => {
    res.send('Hello from nodemon');
});

app.listen(port, ()=> console.log(`Example app listening on port ${port}`));

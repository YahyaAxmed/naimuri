const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "19920531",
    database: 'Naimuri'
})

app.post('/login', (req, res)=>{
    const sql = "Select * from user where email =? And password = ?";
    db.query(sql,[req.body.email,req.body.password], (err,data)=>{
        if (err) return res.json("Login Failed");
        if (data.length > 0){
            return(res.json('Login Success'))
        } else{
            return res.json("No Record")
        }
    })
})

app.listen(8081, () =>{
    console.log("listening...");
})
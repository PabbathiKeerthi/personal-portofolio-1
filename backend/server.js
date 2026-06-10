const express = require("express");
const mysql = require("mysql2");
const path = require("path");

const app = express();

app.use(express.json());
const path = require("path");
app.use(express.static(path.join(__dirname, "../public")));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Root_321",
    database: "portfolio_db"
});

db.connect((err) => {
    if(err){
        console.log(err);
    } else {
        console.log("MySQL Connected");
    }
});

app.get("/api/projects", (req,res)=>{

    db.query(
        "SELECT * FROM projects",
        (err,result)=>{

            if(err){
                res.status(500).json(err);
            }else{
                res.json(result);
            }
        }
    );
});

app.listen(5000,()=>{
    console.log("Server Running on Port 5000");
});
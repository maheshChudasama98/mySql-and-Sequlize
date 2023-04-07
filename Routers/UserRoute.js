const express = require('express');
const router = express.Router();
const data = require('../Src/databaseMysql')
const con = data.cos
require('../Models/index')

router.get("/api/user", (req, res) => {
    
    res.send("send ")
})

router.get('/sql/user', (req, res) => {
    console.log("ser");
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM USER", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.json(result)
        });
    });
    // INSERT INTO `mydemo`.`user` (`id`, `firstName`, `lastName`, `email`, `password`) VALUES ('1', 'manish', 'chudasma ', 'demo@123', 'demo@123');
})

module.exports = router
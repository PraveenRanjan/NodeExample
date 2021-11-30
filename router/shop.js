const express = require('express');
const path = require('path');
const adminData = require('./admin');

const router = express.Router();

router.get("/",(req, res, next) => {
    console.log("in product middleware req: ", req.body);
    // res.send("<h1>Hello from express!!");
    
    console.log("in Shop: ", adminData.reqData);
    res.sendFile(path.join(__dirname, "../", "views", "shop.html"))
    // next();
});

module.exports = router;
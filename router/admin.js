const express = require('express');
const path = require('path');

const router = express.Router();

const reqData = [];
router.get("/add-product",(req, res, next) => {
    console.log("in middleware req: ");
    // res.send('<form action="/product" method="POST"><input type="text" name="productName" /> <button type="submit">Add</button></form>');
    res.sendFile(path.join(__dirname, "../", "views", "add-product.html"))
    // next();
});

router.post("/product",(req, res, next) => {
    console.log("in product middleware req: ", req.body);
    reqData.push(req.body.productName);
    res.redirect("/");
    // next();
});
exports.router = router;
exports.reqData = reqData;

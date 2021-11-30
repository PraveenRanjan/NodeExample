const express = require('express');
const bodyParser = require('body-parser');

const adminData = require('./router/admin');
const shopRoute = require('./router/shop');

const app = express();

app.set("view engine", 'pug');
app.set("view", "view");

app.use(bodyParser.urlencoded({extended:false}));

app.use("/admin",adminData.router);

app.use(shopRoute);

app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found!!</h1>");
    console.log("page not found");
});
console.log("Staring node server-------------");
const server = app.listen(3000);
console.log("Node server started on port 3000");
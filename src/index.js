const express = require('express');
const routes = require('./routes/route');

const app=express();
app.set('port', process.env.PORT || 8080);
app.use('/', routes);
app.listen(app.get('port'),()=>{
    console.log("Begin begin fizzBuzz...");
});

app.use(function(e, req, res, next) {
    if (e.message === "Route not found") {
        res.status(404).json({error: {msg: e.message}});
    }
    else  if (e.message === "Bad request") {
        res.status(400).json({error: {msg: e.message, stack: e.stack}});
    }
});
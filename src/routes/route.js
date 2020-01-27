const express = require('express');
const fizzBuzz = require('../controller/fizzbuzz');
const router = express.Router();

router.get('/fizzbuzz/:count',(req,res)=>{
    fizzBuzz(req,res);
});

router.all('*',(req,res)=>{
    throw new Error("Route not found");
})

module.exports = router;
const express = require('express');

const exp = express();

exp.listen(3000, ()=>{
    console.log('Server Running on Port 3000');
});

module.exports = exp;

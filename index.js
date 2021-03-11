    // const server = require('./server');
const express = require('express');
const cors = require('cors');
const http = require('http');   
const mongoose = require('./db');
const dbRoute = require('./routes/dbRoute');
const app = express();
const socketIO = require('socket.io');

    
app.use(express.json());
app.use(cors());
mongoose();

app.use('/db', dbRoute);


const server = http.Server(app);
server.listen(3001, ()=>{
    
    console.log('Server Running on Port 3001');
})
// var dbConnection = app.listen(3001, ()=>{
// });

const io = socketIO(server);

io.on('connection', socket => {
    socket.emit('connection', {
        log: 'Connected'
    })
})

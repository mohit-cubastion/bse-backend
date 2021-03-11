const mongoose = require('mongoose');

const mongoString = `mongodb+srv://admin:admin@cluster0.wrp3b.mongodb.net/bse_data?retryWrites=true&w=majority`;

const mongoConnection = async ()=>{

    try {
        const connected = await mongoose.connect(mongoString,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Database connected!!!');
        
    } catch (error) {
        console.log(error.message, "Database not connected");
        
    }
        
}

module.exports = mongoConnection;
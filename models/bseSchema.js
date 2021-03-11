const mongoose = require('mongoose');

const bseSchema = new mongoose.Schema({
    Date:{
        type: String
    },
    Open: {
        type: String
    },
    Close: {
        type: String
    }
});

module.exports =BSESChema=  mongoose.model('records', bseSchema)
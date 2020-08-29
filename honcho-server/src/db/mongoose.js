const mongoose = require('mongoose');

mongoose.connect('mongodb://127:0.0.1:27017/honcho', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        
    }
})
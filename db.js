const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://username:password@cluster0.nldzu.mongodb.net/mydb?retryWrites=true&w=majority', { useMongoClient: true });
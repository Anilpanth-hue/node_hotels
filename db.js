const mongoose = require('mongoose');

//Define the MongoDB connection URL
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';

//setup MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//It is a default connection, mongosoe mantains a default connectoion object representing the MongoDB connection
const db = mongoose.connection;

//Defining event listners for database connection
db.on('connected',() => {
    console.log('Connected to MongoDB server');
})
db.on('error',() => {
    console.log('MongoDB connection error');
})
db.on('disconnected',() => {
    console.log('Disconnected to MongoDB server');
})

//Export the database connection
module.exports = db;
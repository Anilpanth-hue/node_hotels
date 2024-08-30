const mongoose = require('mongoose');
require('dotenv').config();


//Define the MongoDB connection URL
// const mongoURL = process.env.MONGODB_URL_LOCAL // this server is runnig at env file
const mongoURL = process.env.MONGODB_URL;

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
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');


app.use(cors());
app.use(express.json());

const connectionString = 'mongodb+srv://ruwinmp:mern_app@mern-app-cluster.3rfzg.mongodb.net/?retryWrites=true&w=majority&appName=mern-app-cluster';

const connect = async () => {
    try {
        await mongoose.connect(connectionString);    
        console.log('Database is Successfully Connected');
    } 
    catch (error) {
        console.log('Database is Unable to Connect');
    }
};

connect();

const server = app.listen(3001, '127.0.0.1', () => {
    console.log('Server is running on ' + server.address().port);
});

app.use('/api', router);
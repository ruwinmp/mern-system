const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');


app.use(cors());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.get('/GetUsers', (req, res) => {
    controller.getUsers((req, res, next) => {
        res.send();
    });
});

app.post('/SaveUser', (req, res) => {
    controller.addUser(req, (callback) => {
        res.send();
    });
});

app.put('/UpdateUser', (req, res) => {
    controller.updateUser(req, (callback) => {
        res.send(callback);
    });
});

app.delete('/DeleteUser', (req, res) => {
    controller.deleteUser(req, (callback) => {
        res.send(callback);
    });
});

module.exports = app;
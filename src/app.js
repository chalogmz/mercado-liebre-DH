const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 7000;

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './view/home.html'));
});

app.post('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './view/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './view/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './view/login.html'));
});

app.listen(port, () => console.log('Server listening on port'));
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs').promises;

app.use(express.json());  // Middleware to parse JSON requests

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, pub_path, 'index.html'));
});

app.get('/get-req', async (req, res) => {
    res.send({"payload": "somedata"})
})

app.post('/post-req', async (req, res) => {
    console.log(req.body)
    res.send({'payload': "somedata"});
})

app.use(express.static(path.join(__dirname, pub_path)));

app.listen('3000', () => {
    console.log(`Server is running on http://localhost:3000`);
});
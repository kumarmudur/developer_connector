const express = require('express');

const app = express();

const {
    port
} = require('./config/config');

app.get('/', (req, res) => {
    res.send('Hello Shiva');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
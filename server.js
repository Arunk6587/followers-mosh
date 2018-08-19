
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/CRUD'));

app.all('*', (req, res) =>{
    res.status(200).sendFile(__dirname + '/dist/CRUD/index.html');
});

app.listen(process.env.PORT || 8080);
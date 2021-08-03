const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req, res)=>{
    res.sendFile('../views/index.html', {root: __dirname})
});

app.get('/add0-item', (req, res)=>{
    res.sendFile('../views/add-items.html', {root: __dirname})
})


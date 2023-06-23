const express = require('express');

const app = express();

app.get('/home', (req, res) =>{
  res.end('hello, express !!!')  
});

app.get('/', (req, res) =>{
    res.end('This is home page')  
  });

app.post('/login', (req, res) => {
    res.end('This is login page ')
});

app.all('/test', (req, res) => {
    res.end('This is lall method ')
});

//404 error if cannot find any match router, then go /*
app.all('/*', (req, res) => {
    res.end('404 not found')
})


app.listen(3000, () => {
    console.log('server is running, port 3000 under monitor')
})
const express = require('express');

const app = express();

app.get('/home', (req, res) =>{
    res.end('hello, express !!!')  
})

app.listen(3000, () => {
    console.log('server is running, port 3000 under monitor')
})
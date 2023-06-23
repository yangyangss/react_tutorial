const express = require('express');

const app = express();

app.get('/request', (req, res) =>{
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.headers);

    console.log(req.path);
    console.log(req.query);
    console.log(req.ip);

    res.end('hello, express !!!')  
})

app.listen(3000, () => {
    console.log('server is running, port 3000 under monitor')
})
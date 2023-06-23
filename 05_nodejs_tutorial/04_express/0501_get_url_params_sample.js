const express = require('express');

const app = express();

app.get('/singer/:id.html', (req, res) =>{
    let id = req.params.id;
    //简写 可以写成
    // let {id} = req.params;

    res.end('hello, express !!!')  
})

app.listen(3000, () => {
    console.log('server is running, port 3000 under monitor')
})
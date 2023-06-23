const express = require('express');

const app = express();

app.get('/:id.html', (req, res) =>{
    res.setHeader('content-type', 'text/html;charset=utf-8')
    console.log(req.params.id) // 这里的id 要保证和 route的占位符名字保持一致
    res.end('商品详情')  
})

app.listen(3000, () => {
    console.log('server is running, port 3000 under monitor')
})
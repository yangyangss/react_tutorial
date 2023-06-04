//这里是业务层
const queryString = require('querystring')
const handleBolgRoute = require('./src/routes/blog')
const serverHandler = (req, res) => {
    //数据绑定, 要求json 类型数据
    res.setHeader('Content-Type', 'application/json')
    const url = req.url
    req.path = url.split('?')[0]

    req.query = queryString.parse(url.split('?')[1]) // 转换成obj
    
    const blogData = handleBolgRoute(req, res);

    if(blogData){
        res.end(    
            JSON.stringify(blogData) // 有数据，就发送给前端
        )
        return;
    }

    //异常处理 => 404, 504
    res.writeHead(404, {'Content-Type': 'text-plain'})
    res.write('404 Not Found')
    res.end()

}
module.exports = serverHandler;
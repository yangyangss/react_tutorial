// /api/blog/list?name='hello'&age=20
const http = require('http')
const queryString = require('querystring')

const server = http.createServer((req, res) => {
    const method = req.method;
    console.log(method)

    const url = req.url;
    req.query = queryString.parse(url.split('?')[1]) // 转换成obj

    res.end(
        JSON.stringify(req.query)
    )
})

server.listen(8000, () => {
    console.log("server runing ... ")
})
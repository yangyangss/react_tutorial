// 服务器的核心文件
const http = require('http')

//业务层
const serverHandler = require('../app.js')
const server = http.createServer(serverHandler)
const PORT = 8000;

server.listen(PORT, () => {
    console.log('server is running at 8000 .....')
})
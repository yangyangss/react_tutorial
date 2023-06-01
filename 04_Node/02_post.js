 const http = require('http')
 const server = http.createServer((req, res) => {
    if (req.method == 'POST'){
        let postData = '';
        req.on('data', chunk => {
            postData += chunk.toString();
        })
        

        req.on('end', () => {
            res.end('Receive has completed')
        })
    }
 })

 server.listen(8000, () => {
    console.log('server is running ...')
 })
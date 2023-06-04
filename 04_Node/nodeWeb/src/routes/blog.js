//路由文件，接口文件 => 去数据库查数据
const { getList } = require('../controller/blog')

const {SuccessModel} = require('../model/resModel')

const handleBolgRoute = (req, res) => {
    const method = req.method;
    //Get 请求
    if(method === 'GET' && req.path === "/api/blog/list"){
        const name = req.query.name || '';
        const keyword = req.query.keyword || '';

        // 去数据库查东西， 统称为controller
        const listData = getList(name, keyword)
        return new SuccessModel(listData)
    }

    //POST 请求
    if(method === "POST" && req.path === '/api/blog/new'){
        const name = req.query.name || '';
        const keyword = req.query.keywork || '';
        const listData = getList(name, keyword)
        return new SuccessModel(listData)
    }
}
module.exports = handleBolgRoute;
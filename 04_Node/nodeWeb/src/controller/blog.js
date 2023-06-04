const getList = (name, keyword) => {
    //连接数据库 => 拿到两个input params 去数据库查东西
    return [
        {
            id: 1,
            title: '我很帅',
            text: '赶紧学node',
            name: 'yangyangss'
        },
        {
            id: 2,
            title: '我很狗',
            text: '赶紧学架构',
            name: 'He Gouzi'
        }
    ]
}
module.exports = {
    getList
}
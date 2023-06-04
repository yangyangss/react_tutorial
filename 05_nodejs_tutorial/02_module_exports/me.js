function module_test(){
    console.log('this is module test')
}

function module_test_2(){
    console.log('this is module test 2')
}

// 1. 暴露方法 module.exports
// module.exports = {
//     module_test,
//     module_test_2
// };


// 2.暴露方法 exports
exports.test = module_test;
exports.test2 = module_test_2;


// 3. module.exports 暴露数据
// module.exports = 'iloveyou';
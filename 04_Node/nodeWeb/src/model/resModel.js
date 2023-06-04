// 这是一个父类
class BaseModel {
    //构造器用来初始化数据
    constructor(data, message){
        if(typeof data === 'string'){
            this.message = data;
            data = null;
            message = null;
        }
        if(data){
            this.data = data;
        }
        if(message){
            this.message = message;
        }
    }
}

class SuccessModel extends BaseModel {
    constructor(data, message){
        super(data, message)
        this.code = 200
    }
}

class FailureModel extends BaseModel {
    constructor(data, message){
        super(data, message)
        this.code = 500
    }
}

module.exports = {
    SuccessModel,
    FailureModel
}
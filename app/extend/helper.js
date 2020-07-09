let path = require('path')
let fs = require('fs')
let { errCode } = require('../util/const')


function isObject(o){
    return Object.prototype.toString.call(o) == '[object Object]'
}

module.exports = {
    filterDatabaseField(tableName = '', param = {}) {
        let modelPath = path.resolve(__dirname, `../model/${tableName}.js`)
        let exists = fs.existsSync(modelPath)

        if(!exists){
            return errCode['modelFileNotExist']
        }

        // 获取model，即数据库tableName表的初始值
        let model = require(modelPath)
        
        if(!isObject(model)){
            return errCode['modelNotObject']
        } 

        if(!isObject(param)){
            return errCode['optsNotObject']
        }

        // this 是 helper 对象，在其中可以调用其他 helper 方法
        // this.ctx => context 对象
        // this.app => application 对象
        let result = Object.keys(model).reduce((prev, item) => {
            param[item] ? (prev[item] = param[item]) : (prev[item] = model[item])
            return prev
        }, {})
        return result
    },
};
let { filterDatabaseField } = require('../extend/helper')
let { errCode } = require('../util/const')

module.exports = {
    async insert(tableName = '', body = {}){
        // 过滤参数，返回的结果跟数据库表的字段一致
        let opts = filterDatabaseField(tableName, body)
        
        if(opts.code < 0) return opts

        if(opts.id) delete opts.id
        return await this.mysql.insert(tableName, opts)
    },
    async update(tableName = '', body = {}){
        if(!body.id) return errCode['idNotExist']

        // 过滤参数，返回的结果跟数据库表的字段一致
        let opts = filterDatabaseField(tableName, body)

        if(opts.code < 0) return opts

        return await this.mysql.update(tableName, opts)
    }
};
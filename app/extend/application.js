let db = require('../../config/db')


function createSql(tableName){
    return `select COLUMN_NAME from information_schema.COLUMNS where table_name = '${tableName}' and table_schema = '${db.database}'`
}


module.exports = {
    async insert(tableName = '', body = {}){
        /*---过滤参数，返回的结果跟数据库表的字段一致---*/
        let sql = createSql(tableName)
        let fieldNames = await this.mysql.query(sql)
        let opts = fieldNames.reduce((memo, item) => {
            // console.log(item.COLUMN_NAME)
            body[item.COLUMN_NAME] && (memo[item.COLUMN_NAME] = body[item.COLUMN_NAME])
            return memo
        }, {});


        if(opts.id) delete opts.id
        return await this.mysql.insert(tableName, opts)
    },
    async update(tableName = '', body = {}){
        if(!body.id){
            this.ctx.throw(500, '缺少id')
        }

        
        /*---过滤参数，返回的结果跟数据库表的字段一致---*/
        let sql = createSql(tableName)
        let fieldNames = await this.mysql.query(sql)
        let opts = fieldNames.reduce((memo, item) => {
            // console.log(item.COLUMN_NAME)
            body[item.COLUMN_NAME] && (memo[item.COLUMN_NAME] = body[item.COLUMN_NAME])
            return memo
        }, {});


        return await this.mysql.update(tableName, opts)
    }
};
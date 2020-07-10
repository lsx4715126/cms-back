const Service = require('egg').Service;


const delay = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}




class BaseService extends Service {
    async list(pageNum, pageSize, where) {
        let { app, ctx } = this
        // console.log('--------------list-------------')
        // console.log(pageNum, pageSize, where)

        
        // let body = {
        //     name: 'abc',
        //     age: 18
        // }
        // console.log(this.ctx.helper.filterDatabaseField(this.tableName, body), '-----ctx.helper-----')
        
        
        const list = await app.mysql.select(this.tableName, {
            where,//1.where
            orders: [['id', 'desc']],
            offset: (pageNum - 1) * pageSize,
            limit: pageSize
        })
        let total = await app.mysql.count(this.tableName, where)//2.where
        // console.log(list)

        // await delay(5000)
        return { total, list };
        // return new Error()
    }

    async insert(body = {}) {
        let { app, ctx } = this
        // console.log('-------------insert--------------')
        const result = await app.insert(this.tableName, body)
        // console.log(result)
        return result.affectedRows > 0 ? result.insertId : '新增失败';
    }

    async update(body = {}) {
        let { app, ctx } = this
        // console.log('--------------update-------------')
        const result = await app.update(this.tableName, body)
        // console.log(result)
        return result.affectedRows > 0 ? '更新成功' : '更新失败';
    }

    async delete(ids=[]) {
        let { app, ctx } = this
        // console.log('--------------delete-------------', ids)

        let result = { affectedRows: 0 }
        for(let i=0; i<ids.length; i++){
            let id = ids[i]
            let res = await app.mysql.delete(this.tableName, {id})
            result.affectedRows += res.affectedRows
        }
        // console.log(result)
        return result.affectedRows > 0 ? '删除成功' : '删除失败';
    }
}

module.exports = BaseService;
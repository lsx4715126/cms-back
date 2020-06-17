const Service = require('egg').Service;
let { okCode } = require('../util/const')


const delay = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}




class BaseService extends Service {
    async list(pageNum, pageSize, where) {
        let { app, ctx } = this
        console.log('--------------list-------------')
        console.log(pageNum, pageSize, where)

        
        let body = {
            name: 'abc',
            age: 18
        }
        console.log(this.ctx.helper.filterDatabaseField(this.model, body), '-----ctx.helper-----')
        
        
        const list = await app.mysql.select(this.model, {
            where,//1.where
            orders: [['id', 'desc']],
            offset: (pageNum - 1) * pageSize,
            limit: pageSize
        })
        let total = await app.mysql.count(this.model, where)//2.where
        console.log(list)

        // await delay(5000)
        return { total, list };
        // return new Error()
    }

    async insert(body = {}) {
        let { app, ctx } = this
        console.log('-------------insert--------------')
        const result = await app.insert(this.model, body)
        console.log(result)
        return result.affectedRows > 0 ? result.insertId : 'error';
    }

    async update(body = {}) {
        let { app, ctx } = this
        console.log('--------------update-------------')
        const result = await app.update(this.model, body)
        console.log(result)
        return result.affectedRows > 0 ? okCode['updateOk'] : 'error';
    }

    async delete(id) {
        let { app, ctx } = this
        console.log('--------------delete-------------', id)
        const result = await app.mysql.delete(this.model, {id})
        console.log(result)
        return result.affectedRows > 0 ? okCode['deleteOk'] : 'error';
    }
}

module.exports = BaseService;
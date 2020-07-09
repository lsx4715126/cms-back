const BaseService = require('./base');

class UserService extends BaseService {
    constructor(...args){
		super(...args)
		this.tableName = 'user'
	}

	async login({username, password}){
		let { app, ctx, service } = this
		
        const user = await app.mysql.get(this.tableName, {
            username, password
		})

		if(user == null){
			ctx.throw(500, '账号或密码错误')
		}

		let permission = await service[this.tableName].getResourceByUserId(user.id)
        return permission
	}
}

module.exports = UserService;
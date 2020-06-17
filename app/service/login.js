const BaseService = require('./base');

class UserService extends BaseService {
    constructor(...args){
		super(...args)
		this.model = 'user'
	}

	async login({username, password}){
		let { app, ctx, service } = this
		
        const user = await app.mysql.get(this.model, {
            username, password
		})

		if(user == null){
			return {
				code: -1,
				msg: '账号或密码错误'
			}
		}

		let res = await service[this.model].getResourceByUserId(user.id)
        return {
			code: 1,
			msg: '查询成功',
			permission: res
		}
	}
}

module.exports = UserService;
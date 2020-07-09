let BaseController = require('./base')

class UserController extends BaseController {
	constructor(...args){
		super(...args)
		this.serviceName = 'login'
	}

	async login(){
		const { ctx, service } = this;
		let body = ctx.request.body
		if(!body.username || !body.password) {
			ctx.err('账号或密码必传！')
			return
		}

		let permission = await service[this.serviceName].login(body)
		ctx.ok(permission)
	}
}

module.exports = UserController;

let BaseController = require('./base')

class UserController extends BaseController {
	constructor(...args){
		super(...args)
		this.serviceName = 'login'
	}

	async login(){
		const { ctx, service } = this;
		let body = ctx.request.body
		if(!body.username || !body.password) return { msg: '账号或密码必传！' }

		let result = await service[this.serviceName].login(body)
		console.log(result, '---result---')
		ctx.body = result
	}
}

module.exports = UserController;

let BaseController = require('./base')

class UserController extends BaseController {
	constructor(...args){
		super(...args)
		this.serviceName = 'login'
	}

	async login(){
		const { ctx, service } = this;

		ctx.validate({
			username: 'string',
			password: 'string'
		})


		let body = ctx.request.body
		let permission = await service[this.serviceName].login(body)
		ctx.ok(permission)
	}
}

module.exports = UserController;

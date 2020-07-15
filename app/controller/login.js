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

		ctx.logger.info('login request data: %j', ctx.request.body)// 登陆日志
		// ctx.logger.warn('WARNNING!!!!');
		
		let permission = await service[this.serviceName].login(body)
		ctx.ok(permission)
	}
}

module.exports = UserController;

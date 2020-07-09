let BaseController = require('../base')

class UserController extends BaseController {
	constructor(...args) {
		super(...args)
		this.serviceName = 'user'
	}

	async create() {
		const { ctx, service } = this;
		
		// 校验参数
		// 如果不传第二个参数会自动校验 `ctx.request.body`
		ctx.validate({
			name: 'string?',
			username: 'string',
			password: { 
				type: 'string',
				required: true,
				min: 3,
				max: 9
			},
		})

		let body = ctx.request.body
		let result = await service[this.serviceName].insert(body)
		ctx.ok(result)
	}
}

module.exports = UserController;

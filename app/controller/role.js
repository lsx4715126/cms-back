let BaseController = require('./base')

class RoleController extends BaseController {
	constructor(...args){
		super(...args)
		this.model = 'role'
	}

	async getResource() {
		const { ctx, service } = this;
		let result = await service[this.model].getResource()
		ctx.body = result
	}

	async setResource() {
		const { ctx, service } = this;
		let body = ctx.request.body
		let result = await service[this.model].setResource(body)
		ctx.body = result
	}

	async getUser() {
		const { ctx, service } = this;
		let result = await service[this.model].getUser()
		ctx.body = result
	}

	async setUser() {
		const { ctx, service } = this;
		let body = ctx.request.body
		let result = await service[this.model].setUser(body)
		ctx.body = result
	}
}

module.exports = RoleController;

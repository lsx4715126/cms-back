let BaseController = require('./base')

class RoleController extends BaseController {
	constructor(...args){
		super(...args)
		this.serviceName = 'role'
	}

	async getResource() {
		const { ctx, service } = this;
		let result = await service[this.serviceName].getResource()
		ctx.body = result
	}

	async setResource() {
		const { ctx, service } = this;
		let body = ctx.request.body
		let result = await service[this.serviceName].setResource(body)
		ctx.body = result
	}

	async getUser() {
		const { ctx, service } = this;
		let result = await service[this.serviceName].getUser()
		ctx.body = result
	}

	async setUser() {
		const { ctx, service } = this;
		let body = ctx.request.body
		let result = await service[this.serviceName].setUser(body)
		ctx.body = result
	}
}

module.exports = RoleController;

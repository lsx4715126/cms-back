'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
	async index() {
		const { ctx, service, config } = this;
		let { pageNum, pageSize, ...where } = ctx.query
		
		pageNum = isNaN(pageNum) ? 1 : parseInt(pageNum)
		pageSize = isNaN(pageSize) ? config.PAGE_SIZE : parseInt(pageSize)

		let result = await service[this.serviceName].list(pageNum, pageSize, where)
		ctx.body = result
		// setTimeout(() => ctx.body = result, 3000)
	}

	async create() {
		const { ctx, service } = this;
		let body = ctx.request.body
		console.log(body)
		let result = await service[this.serviceName].insert(body)
		ctx.body = result
	}

	async update() {
		const { ctx, service } = this;
		let body = ctx.request.body
		let id = ctx.params.id
		body.id = id
		console.log(body)
		let result = await service[this.serviceName].update(body)
		ctx.body = result
	}

	async destroy() {
		const { ctx, service } = this;
		let id = ctx.params.id
		let ids = ctx.request.body
		if(!ids){
			ids = [id]
		}
		let result = await service[this.serviceName].delete(ids)
		ctx.body = result
	}
}

module.exports = BaseController;

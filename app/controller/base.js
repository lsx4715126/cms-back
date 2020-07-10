'use strict';

const Controller = require('egg').Controller;
let { type } = require('../extend/helper')





class BaseController extends Controller {
	async index() {
		const { ctx, service, config } = this;
		let { pageNum, pageSize, ...where } = ctx.query
		
		pageNum = isNaN(pageNum) ? 1 : parseInt(pageNum)
		pageSize = isNaN(pageSize) ? config.PAGE_SIZE : parseInt(pageSize)

		let result = await service[this.serviceName].list(pageNum, pageSize, where)
		ctx.ok(result)
		// setTimeout(() => ctx.ok(result), 3000)
	}

	async create() {
		const { ctx, service } = this;
		let body = ctx.request.body
		// console.log(body)
		let result = await service[this.serviceName].insert(body)
		ctx.ok(result)
	}

	async update() {
		const { ctx, service } = this;
		let body = ctx.request.body
		let id = ctx.params.id
		body.id = id
		// console.log(body)
		let result = await service[this.serviceName].update(body)
		ctx.ok(result)
	}

	async destroy() {
		const { ctx, service } = this;
		let id = ctx.params.id
		let ids = ctx.request.body// 未传参数体的话  ctx.request.body默认为{}
		if(type(ids) === 'object'){
			ids = [id]
		}
		let result = await service[this.serviceName].delete(ids)
		ctx.ok(result)
	}
}

module.exports = BaseController;

const BaseService = require('./base');


const delay = ms => {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms)
	})
}


class RoleService extends BaseService {
	constructor(...args) {
		super(...args)
		this.tableName = 'role'
	}

	async list(pageNum, pageSize, where) {
		pageSize = parseInt(pageSize)
		pageNum = parseInt(pageNum)
		// console.log('----------------------RoleService list-------------------------')
		const list = await this.app.mysql.select(this.tableName, {
			where,
			order: [['id', 'desc']],
			offset: (pageNum - 1) * pageSize,
			limit: pageSize,
		});
		//console.log(list)


		/*查找出每种角色所拥有的资源和用户*/
		for (let i = 0; i < list.length; i++) {
			let rows = await this.app.mysql.select('role_resource', {
				where: { role_id: list[i].id }
			});
			list[i].resourceIds = rows.map(item => item.resource_id)

			rows = await this.app.mysql.select('role_user', {
				where: { role_id: list[i].id }
			});
			list[i].userIds = rows.map(item => item.user_id)
		}

		/*查找出每种角色所拥有的资源和用户*/
		/*
		let rows = await this.app.mysql.select('role_resource', {
			where: {role_id: list.map(item => item.id)}
		});
		rows.forEach(row => {
			let i
			list.some((item, index) => {
				if(item.id === row.role_id){
					i = index
					return true
				}
			})

			if(list[i]){
				list[i].resourceIds || (list[i].resourceIds = [])

				list[i].resourceIds.push(row.resource_id)
			}
		})
		*/


		const total = await this.app.mysql.count(this.tableName, where);

		// await delay(1000)
		return { list, total };
	}

	async getResource() {
		let { app, ctx } = this
		// console.log('--------------getResource-------------')
		let list = await app.mysql.select('resource')
		// console.log(list)
		let rootMenu = []
		let outherMenu = []
		let map = {}

		list.forEach(item => {
			item.children = []
			map[item.id] = item

			if (item.parent_id == 0) {
				rootMenu.push(item)
			} else {
				outherMenu.push(item)
			}
		})

		outherMenu.forEach(item => {
			map[item.parent_id].children.push(item)
		})

		return rootMenu
	}

	async setResource(values) {
		const { app } = this;

		await app.mysql.query(`DELETE FROM role_resource WHERE role_id = ?`, [values.roleId]);
		for (let i = 0; i < values.resourceIds.length; i++) {
			await this.app.mysql.insert('role_resource', {
				role_id: values.roleId,
				resource_id: values.resourceIds[i]
			});
		}
		return '修改权限成功';
	}


	async getUser() {
		let { app, ctx } = this
		// console.log('--------------getUser-------------')
		let list = await app.mysql.select('user')
		// console.log(list)

		return list
	}

	async setUser(values) {
		const { app } = this;

		await app.mysql.query(`DELETE FROM role_user WHERE role_id = ?`, [values.roleId]);
		for (let i = 0; i < values.userIds.length; i++) {
			await this.app.mysql.insert('role_user', {
				role_id: values.roleId,
				user_id: values.userIds[i]
			});
		}
		return '修改用户成功';
	}
}

module.exports = RoleService;
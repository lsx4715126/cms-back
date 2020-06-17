const BaseService = require('./base');

class UserService extends BaseService {
    constructor(...args){
		super(...args)
		this.model = 'user'
	}

	async getResourceByUserId(userId){
		const { app } = this;

		let sql = `
			SELECT * FROM ${this.model} 
			INNER JOIN role_user ON role_user.user_id = user.id
			INNER JOIN role ON role.id = role_user.role_id
			INNER JOIN role_resource ON role_resource.role_id = role_user.role_id
			INNER JOIN resource ON resource.id = role_resource.resource_id
			WHERE user.id = ${userId}
		`

		let result = await app.mysql.query(sql);
		return result
	}
}

module.exports = UserService;
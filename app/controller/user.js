let BaseController = require('./base')

class UserController extends BaseController {
	constructor(...args){
		super(...args)
		this.serviceName = 'user'
	}
}

module.exports = UserController;

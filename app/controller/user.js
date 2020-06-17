let BaseController = require('./base')

class UserController extends BaseController {
	constructor(...args){
		super(...args)
		this.model = 'user'
	}
}

module.exports = UserController;

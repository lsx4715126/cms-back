let BaseController = require('./base')

class ResourceController extends BaseController {
	constructor(...args){
		super(...args)
		this.serviceName = 'resource'
	}
}

module.exports = ResourceController;

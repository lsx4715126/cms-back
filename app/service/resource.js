const BaseService = require('./base');

class ResourceService extends BaseService {
    constructor(...args){
		super(...args)
		this.tableName = 'resource'
	}
}

module.exports = ResourceService;
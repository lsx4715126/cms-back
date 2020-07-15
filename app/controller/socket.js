let BaseController = require('./base')

class SocketController extends BaseController {
	
	async list(){
		const { ctx, app } = this;
		const namespace = app.io.of('/');
		
		ctx.ok(Object.keys(namespace.sockets))
	}
}

module.exports = SocketController;

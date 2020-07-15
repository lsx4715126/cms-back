'use strict';

const Controller = require('egg').Controller;



class ChatController extends Controller {
    async index() {
        let ctx = this.ctx
        const { app, socket, logger, helper } = ctx;
        
        const nsp = app.io.of('/');
        const message = ctx.args[0] || {};
        const client = socket.id;

        try {
            const { target, payload } = message;
            if (!target) return;
            const msg = ctx.helper.parseMsg('chat', payload, { client, target });
            nsp.emit(target, msg);
        } catch (error) {
            app.logger.error(error);
        }
    }
}

module.exports = ChatController;

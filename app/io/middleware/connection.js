const room = 'default_room';

module.exports = app => {
    return async (ctx, next) => {
        const { app, socket, logger, helper, query } = ctx;
        const id = socket.id;
        const namespace = app.io.of('/');

        if(!query.jwt){// 身份效验不通过
            ctx.socket.disconnect();
            return;
        }

        // 根据id给指定连接发送消息
        // namespace.sockets[id].emit('res', 'hello');
        // socket.emit('res', ctx.args);


        // 加入房间
        socket.join(room);
        // 给指定房间的每个人发送消息
        namespace.to(room).emit('online', socket.id + "上线了");
        // 断开连接
        // socket.disconnect();


        await next();
        // execute when disconnect.
        console.log('disconnection!');
    };
};
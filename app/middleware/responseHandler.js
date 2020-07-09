module.exports = options => {
    return async function responseHandler(ctx, next) {
        ctx.ok = function(data, msg='success', code=1){
            ctx.body = {
                code,
                msg,
                data
            }
        }

        ctx.err = function(msg='err', code=-1){
            ctx.body = {
                code,
                msg
            }
        }

        await next();
    };
};
module.exports = options => {
    return async function responseHandler(ctx, next) {
        ctx.ok = function(){

        }

        ctx.err = function(){

        }

        await next();
    };
};
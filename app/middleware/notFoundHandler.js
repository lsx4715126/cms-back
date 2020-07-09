const NOTFOUND = 404;
const NORMAL = 200;

module.exports = () => {
    return async function notFoundHandler(ctx, next) {
        // console.log('中间件经过');
        await next();
    
        // console.log('中间件notFoundHandler错误拦截', ctx.status, ctx.request.url);
        if (ctx.status !== NORMAL && ctx.request.url.indexOf('/gql/') > -1) {
            ctx.body = { code: -1, message: 'gql解析错误', data: null };
            ctx.status = NORMAL;
        }
        if (ctx.status === NOTFOUND) {
            ctx.body = { code: -1, message: 'Not Found' };
        }
    };
}
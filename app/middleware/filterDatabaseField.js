module.exports = options => {
    return async function filterDatabaseField(ctx, next) {
        // ctx.abc = 'abc'
        // console.log(this.app, '--------app')

        await next();
    };
};
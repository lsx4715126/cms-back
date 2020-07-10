module.exports = options => {
    return async function errorHandler(ctx, next) {
        try {
            await next();
        } catch (error) {
            console.log('errorHandler ->', error)
            
            ctx.body = {
                code: -1,
                msg: error.message || JSON.stringify(error),
                errors: error.errors || ''
            }
        }
        
    };
};
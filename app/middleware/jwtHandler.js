let whitelist = require('../../config/whitelist')

module.exports = options => {
    return async function jwtHandler(ctx, next) {
        
        await next();
    };
};
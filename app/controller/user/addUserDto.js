let Validator = require('../../util/Validator')
let validate = new Validator()



let dto = {
    username: [
        {
            strategy: 'isNonEmpty',
            errorMsg: '用户名不能为空'
        },
        {
            strategy: 'minLength:6',
            // errorMsg: '用户名长度不能少于6位'
        },
    ],
    password: [
        {
            strategy: 'isNonEmpty',
            errorMsg: '用户名不能为空'
        },
        {
            strategy: 'minLength:6',
            // errorMsg: '用户名长度不能少于6位'
        },
    ]
}



Object.keys(dto).forEach(key => validate.add(key, dto[key]))
module.exports = validate
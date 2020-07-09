let Validator = require('../../util/Validator')
let validate = new Validator()



let dto = {
    resourceIds: [
        {
            strategy: 'isNonEmpty',
            errorMsg: '不能为空'
        },
        {
            strategy: 'isArray',
        },
    ],
    roleId: [
        {
            strategy: 'isNonEmpty',
            errorMsg: '不能为空'
        },
    ]
}



Object.keys(dto).forEach(key => validate.add(key, dto[key]))
module.exports = validate
let errCode = {
    'modelFileNotExist': {
        code: -1,
        msg: 'model文件不存在'
    },
    'modelNotObject': {
        code: -2,
        msg: 'model必须为对象'
    },
    'optsNotObject': {
        code: -3,
        msg: '参数必须为对象'
    },
    'idNotExist': {
        code: -11,
        msg: 'id不存在'
    },
}


let okCode = {
    'updateOk': {
        code: 1,
        msg: '更新成功'
    },
    'insertOk': {
        code: 1,
        msg: '新增成功'
    },
    'deleteOk': {
        code: 1,
        msg: '删除成功'
    },
    'findOk': {
        code: 1,
        msg: '查询成功'
    },
} 


module.exports = {
    errCode,
    okCode
}
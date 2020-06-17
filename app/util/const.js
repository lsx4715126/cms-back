let errCode = {
    'modelFileNotExist': {
        affectedRows: -1,
        msg: 'model文件不存在'
    },
    'modelNotObject': {
        affectedRows: -2,
        msg: 'model必须为对象'
    },
    'optsNotObject': {
        affectedRows: -3,
        msg: '参数必须为对象'
    },
    'idNotExist': {
        affectedRows: -11,
        msg: 'id不存在'
    },
}


let okCode = {
    'updateOk': {
        affectedRows: 1,
        msg: '更新成功'
    },
    'insertOk': {
        affectedRows: 1,
        msg: '新增成功'
    },
    'deleteOk': {
        affectedRows: 1,
        msg: '删除成功'
    },
    'findOk': {
        affectedRows: 1,
        msg: '查询成功'
    },
} 


module.exports = {
    errCode,
    okCode
}
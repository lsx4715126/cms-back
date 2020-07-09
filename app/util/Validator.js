var strategies = {
    isNonEmpty: function ({ value, errorMsg='不为空' }) { //不为空  
        if(value === undefined){
            return '缺少字段';
        }

        if (value == '') {
            return errorMsg;
        }
    },
    isArray: function ({ value, errorMsg='必须为数组' }) {  
        if(value === undefined){
            return '缺少字段';
        }

        if (!Array.isArray(value)) {
            return errorMsg;
        }
    },
    minLength: function ({ value, length, errorMsg='长度太短' }) {
        if(value === undefined){
            return '缺少字段';
        }

        if (value.length < length) {
            return errorMsg
        }
    },
    maxLength: function ({ value, length, errorMsg='长度太长' }) {
        if(value === undefined){
            return '缺少字段';
        }
        
        if (value.length > length) {
            return errorMsg
        }
    },
    isMobile: function ({ value, errorMsg='手机号格式不对' }) {
        if (!/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/.test(value)) {
            return errorMsg;
        }
    }
};



var Validator = function () {
    this.cache = [];
    this.valObj = {};
    this.fieldNameList = [];
}
Validator.prototype.add = function (fieldName, rules) {
    var self = this;
    this.fieldNameList.push(fieldName)

    for (var i = 0, rule; rule = rules[i++];) {
        (function (rule) {
            var [ method, length ] = rule.strategy.split(':');
            var errorMsg = rule.errorMsg;

            self.cache.push(function () {
                let opts = {
                    value: self.valObj[fieldName],
                    length,
                    errorMsg
                }

                return {
                    fieldName,
                    err: strategies[method].call(null, opts) || ''
                }
            });
        })(rule)
    }
};

Validator.prototype.start = function (valObj) {
    this.valObj = valObj || {}
    // console.log(this.valObj, '---this.valObj---')

    // 1.有错误。返回错误信息
    for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
        var msgObj = validatorFunc(); //开始校验，并取得校验后的返回信息  
        if (msgObj.err) {
            return msgObj;
        }
    }

    // 2.没错误。返回被限定的字段数据
    return this.fieldNameList.reduce((memo, fieldName) => {
        memo[fieldName] = valObj[fieldName]
        return memo
    }, {})
}



/*
var validator = new Validator();
validator.add('username', [
    {
        strategy: 'isNonEmpty',
        errorMsg: '用户名不能为空'
    },
    {
        strategy: 'minLength:6',
        // errorMsg: '用户名长度不能少于6位'
    },
]);



let valObj = {
    username: '1234',
    password: '111'
}
var res = validator.start(valObj);

console.log(res, '---')
*/

module.exports = Validator
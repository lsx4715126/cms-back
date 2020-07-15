let path = require('path')
let fs = require('fs')

function isObject(o) {
	return Object.prototype.toString.call(o) == '[object Object]'
}

function type(obj) {
	var toString = Object.prototype.toString;
	var map = {
		'[object Boolean]': 'boolean',
		'[object Number]': 'number',
		'[object String]': 'string',
		'[object Function]': 'function',
		'[object Array]': 'array',
		'[object Date]': 'date',
		'[object RegExp]': 'regExp',
		'[object Undefined]': 'undefined',
		'[object Null]': 'null',
		'[object Object]': 'object'
	};
	// if(obj instanceof Element) {
	//     return 'element';
	// }
	return map[toString.call(obj)];
}

function parseMsg(action, payload = {}, metadata = {}) {
	const meta = Object.assign({}, {
		timestamp: Date.now(),
	}, metadata);

	return {
		meta,
		data: {
			action,
			payload,
		},
	};
}

module.exports = {
	type,
	parseMsg,// 给 WebSocket 使用
};
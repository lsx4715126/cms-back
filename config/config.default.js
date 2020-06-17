/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = exports = {};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1560867731488_4423';

	// add your middleware config here
	config.middleware = [ 'filterDatabaseField' ];

	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};




	config.PAGE_SIZE = 3



	config.mysql = {
		// database configuration
		client: {
			// host
			host: '127.0.0.1',
			// port
			port: '3306',
			// username
			user: 'root',
			// password
			password: 'root',
			// database
			database: 'cms',
		},
		// load into app, default is open
		app: true,
		// load into agent, default is close
		agent: false,
	};

	//关闭跨域表单验证(post请求)
	config.security = {
		csrf: false,
		domainWhiteList: [ 'http://localhost:8000' ]
	}
	// 跨域
	config.cors = {
		// origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
		credentials: true, // 允许跨域请求携带cookies
		allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
	}

	return {
		...config,
		...userConfig,
	};
};

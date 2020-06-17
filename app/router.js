'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	router.get('/', controller.home.index);
	router.post('/login', controller.login.login);
	router.resources('user', '/user', controller.user)
	router.resources('role', '/role', controller.role)
	router.resources('resource', '/resource', controller.resource)
	router.get('/role/getResource',controller.role.getResource);
	router.post('/role/setResource',controller.role.setResource);
	router.get('/role/getUser',controller.role.getUser);
	router.post('/role/setUser',controller.role.setUser);
};

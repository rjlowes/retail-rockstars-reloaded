'use strict';

const Hapi = require('hapi');
const hapiAuthCookie = require('hapi-auth-cookie');
const inert = require('inert');
const chalk = require('chalk');
const path = require('path');


exports.connect = function (server) {
	server.connection({
		host: 'localhost',
		port: 3000
		// routes: {
		// 	files: {
		// 		relativeTo: path.join(__dirname, 'public')
		// 	}
		// }
	});
};

exports.initServerRoutes = function (server) {
	server.register([inert, hapiAuthCookie], (err) => {
		if (err) {
			console.log(chalk.bgRed('Error registering inert'));
			throw err;
		}

		// Hapi auth strategy
		server.auth.strategy('session', 'cookie', {
			password: 'thisisasecret',	// cookie secret
			cookie: 'session',	// cookie name
			redirectTo: false,
			isSecure: false,
			ttl: 24 * 60 * 60 * 1000	// set session to one day
		});

		
		require(__rootdir + 'modules/catalogue/routes/catalogue.routes')(server);
	});
};


exports.init = function () {
	const server = new Hapi.Server();

	this.connect(server);
	this.initServerRoutes(server);

	server.route({
		method: 'GET',
		path: '/scripts/{file*}',
		handler: {
			directory: {
				path: 'public/scripts/'
			}
		}
	});

    server.route({
        method: 'GET',
        path: '/styles/{file*}',
        handler: {
            directory: {
                path: 'public/styles/'
            }
        }
    });

	server.route({
        method: 'GET',
        path: '/images/{file*}',
        handler: {
            directory: {
                path: 'public/images/'
            }
        }
    });

	// server.route({
	// 	method: 'GET',
	// 	path: '/{file*}',
	// 	handler: {
	// 		file: function(request) {
	// 			return request.param.filename;
	// 		}
	// 	}
	// });

    server.route({
        method: 'GET',
        path: '/{p*}',
        handler: function (request, reply) {
            reply.file('./public/index.html');
        }
    });

	return server;
};

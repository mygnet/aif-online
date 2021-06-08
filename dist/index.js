'use strict';var _net=require('net');
/**
 * Check if there is internet connectivity
 * @param {function} callback Function that is invoked with parameter success or failure
 * @param {string} host Host to check, By default ers nodejs.org
 * @param {number} port Port to check, by default port 80
 */module.exports=function(callback,host,port){function a(a,d){b&&(c&&clearTimeout(c),b.unref(),b.end(),c=null,b=null),callback(a,d)}var b=(0,_net.connect)({port:port||80,host:host||'nodejs.org'}),c=null;c=setTimeout(function(){a(!1,'Timeout for connection timed out')},5e3),b.on('error',function(){a(!1,'Error: getaddrinfo ENOTFOUND')}),b.on('connect',function(){a(!0)})};
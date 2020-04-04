'use strict';

var _net = require('net');

module.exports = function (callback, host, port) {
  var socket = (0, _net.connect)({
    port: port || 80,
    host: host || 'nodejs.org'
  });

  var timer = null;
  function done(success, err) {
    if (socket) {
      timer && clearTimeout(timer);
      socket.unref();
      socket.end();
      timer = null;
      socket = null;
    }
    callback(success, err);
  }

  timer = setTimeout(function () {
    done(false, 'Timeout for connection timed out');
  }, 5000);

  socket.on('error', function () {
    done(false, 'Error: getaddrinfo ENOTFOUND');
  });

  socket.on('connect', function () {
    done(true);
  });
};
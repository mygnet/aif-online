import { connect } from 'net'

module.exports = function(callback, host, port) {
  let socket = connect({
    port: port || 80,
    host: host || 'nodejs.org'
  })

  let timer = null
  function done(success, err) {
    if (socket) {
      timer && clearTimeout(timer)
      socket.unref()
      socket.end()
      timer = null
      socket = null
    }
    callback(success, err)
  }

  timer = setTimeout(() => {
    done(false, 'Timeout for connection timed out')
  }, 5000)

  socket.on('error', () => {
    done(false, 'Error: getaddrinfo ENOTFOUND')
  })

  socket.on('connect', () => {
    done(true)
  })
}

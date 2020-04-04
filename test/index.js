const online = require('../dist/index')
// const cipher = require('aif-cipher')
online(function(success, err) {
  if (success) {
    console.log('internet available')
  } else {
    console.log(err)
  }
})

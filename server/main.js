const express = require('express')
const http = require('http')
var app = express()
var setApi = require('./api')
var setRouter = require('./router')
var server = http.createServer(app)

let port = 3001;
server.listen(port, function() {
  let host = server.address().address
  let port = server.address().port
  console.log('Web Server listening at http://localhost:%s:%s', host, port)
})

setApi(app)
setRouter(app)
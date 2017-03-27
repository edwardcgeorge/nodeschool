const http = require('http')
const url = require('url')
const querystring = require('querystring')
var server = http.createServer(function(req, res) {
    var u = url.parse(req.url)
    var qu = querystring.parse(u.query);
    res.writeHead(200, { 'Content-Type': 'application/json' })
    if(u.pathname === '/api/parsetime') {
        var time = new Date(qu.iso)
        var data = {
            hour:time.getHours(),
            minute:time.getMinutes(),
            second:time.getSeconds()
        }
        res.end(JSON.stringify(data))
    }
    if('/api/unixtime' === u.pathname){
        var time = new Date(qu.iso)
        var data = {unixtime: time.getTime()}
        res.end(JSON.stringify(data))
    }
})
server.listen(process.argv[2])
//Solution
// var http = require('http')
// var url = require('url')
//
// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }
//
// function unixtime (time) {
//   return { unixtime: time.getTime() }
// }
//
// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result
//
//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }
//
//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))

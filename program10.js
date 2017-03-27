var net = require('net')
var server = net.createServer(function (socket) {
  // socket 处理逻辑
  var data = ''
  var date = new Date()
  var month = date.getMonth() >= 10 ? (date.getMonth()+1)*1 : '0'+(date.getMonth()+1)*1
  data = date.getFullYear()+'-'+month+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()
  socket.end(data+'\n')
})
server.listen(process.argv[2])

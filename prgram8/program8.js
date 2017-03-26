var http = require('http')
const bl = require('bl')
http.get(process.argv[2], function callback(response) {
    response.pipe(bl(function (err, data) {
        var str = data.toString()
        console.log(str.length);
        console.log(str);
    }))
})

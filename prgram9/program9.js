var http = require('http')
const bl = require('bl')
var res = new Array(3)
var judge = new Array(3)
http.get(process.argv[2], function callback(response) {
    response.pipe(bl(function (err, data) {
        var str = data.toString()
        res[0] = str
        judge[0] = true
        if(judge[0]&&judge[1]&&judge[2]) print()
    }))
})

http.get(process.argv[3], function callback(response) {
    response.pipe(bl(function (err, data) {
        var str = data.toString()
        res[1] = str
        judge[1] = true
        if(judge[0]&&judge[1]&&judge[2]) print()
    }))
})

http.get(process.argv[4], function callback(response) {
    response.pipe(bl(function (err, data) {
        var str = data.toString()
        res[2] = str
        judge[2] = true
        if(judge[0]&&judge[1]&&judge[2]) print()
    }))
})

function print() {
    console.log(res[0]);
    console.log(res[1]);
    console.log(res[2]);
}

//Solution:
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }
//
// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }
//
//       results[index] = data.toString()
//       count++
//
//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }
//
// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }

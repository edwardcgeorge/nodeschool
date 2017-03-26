var fs = require('fs');
const url = process.argv;
var bu = fs.readFileSync(url[2]);
var str = bu.toString();
var arr = str.split('\n');
var n = arr.length;
console.log(n - 1);

//answer

// var fs = require('fs')
//
// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)
//
// // 只要把 'utf8' 作为 readFileSync 的第二个参数传入
// // 就可以不用 .toString() 来得到一个字符串
// //
// // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

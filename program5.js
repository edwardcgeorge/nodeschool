var fs = require('fs');
const key = process.argv[3];
fs.readdir(process.argv[2], function cal(err, list) {
    if (err) {
        return console.log(err)
      }
    list = list.filter(value => value.length > key.length && value.substring(value.length - key.length) === key);
    list.forEach(function(value, i) {
      console.log(value);
    });
});

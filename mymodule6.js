var fs = require('fs')
module.exports = function(dir, key, callback) {
    fs.readdir(dir, function(err, list) {
        if (err) {
            return callback(err)
          }
        list = list.filter(value => value.length > key.length && value.substring(value.length - key.length) === key);
        callback(null, list)
    })
}

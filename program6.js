var mym = require('./mymodule6')
mym(process.argv[2], process.argv[3], function(err, data) {
    if (err) {
        return console.log(err)
      }
    data.forEach(function(value, i) {
      console.log(value);
    })
})

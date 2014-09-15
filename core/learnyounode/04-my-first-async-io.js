  var fs = require('fs');

  fs.readFile(process.argv[2], function (err, data) {
	    if (err) throw err;
	      var buf = data.toString();
		console.log(buf.split('\n').length-1);
  });


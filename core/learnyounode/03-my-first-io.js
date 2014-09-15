 var fs = require('fs');

 var buf = fs.readFileSync(process.argv[2]);
 var myString = buf.toString();
 var toCountWords = myString.split('\n');

 console.log(toCountWords.length-1);

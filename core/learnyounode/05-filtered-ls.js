var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, file){
			if (err) throw err;
//			console.log(file);
			if(process.argv.length-1 >1){
//				console.log('filterdext'+process.argv[3]);
				for(var i=0;i<file.length;i++){
//					console.log(path.extname(file[i]));
					if((path.extname(file[i]))  == '.'+process.argv[3]){
						console.log(file[i]);
					} 
				}

			}else{
				for(var i=0;i<file.length-1;i++){
					console.log('second stuff');
						console.log(file[i]);
				}
			}
});


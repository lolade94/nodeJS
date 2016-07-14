const 
 fs = require('fs');
 file = process.argv[2];
 
 if(!file){
	 throw Error('A file to watch must be specified');
 }
 
 fs.watch(file, function(){
	 
	console.log("File" + file + " just changed!");
	
 });
 
 console.log("Now watching " + file + " for changes..." );
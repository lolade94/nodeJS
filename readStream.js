const fs= require('fs'), 
stream = fs.createReadStream(process.argv[2]);
stream.on('data', function(chunk){
	//process.stdout.write == console.log()
	process.stdout.write(chunk);
	
});

stream.on('error', function(err){
	
	process.stderr.write("Error: " + err.message + "\n");
});
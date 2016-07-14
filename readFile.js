const fs= require('fs');
 fs.readFile('target.js', function(err, data){
	 if(err){
		 throw err;
	 }
	 console.log(data.toString());
 });
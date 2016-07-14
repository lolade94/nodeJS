const fs= require('fs');
fs.writeFile('target.js', 'a witty message',  function(err){
	
	 if(err){
		 throw err;
	 }
});

console.log("File Saved!");
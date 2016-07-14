const fs = require ('fs');
//const value
// require gets node module
//fs is node module for file system
// module is special javascript functionality kind of likepoll the file  library
// import java.util.scanner include io.stream

fs.watch('target.js', function(){
       console.log("File 'target.js' just changed!");
});
// watch method() polls the file or looks for changes
// and invokes the callback function

console.log("Now watching target.js  for changes....");
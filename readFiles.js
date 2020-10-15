var fs = require('fs');

const directoryPath = process.env.DIR_NAME||"/app/resources";
const destinationFile = process.env.DEST_FILE_NAME||null;


function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
      onFileContent(filename);
	  
	  if(destinationFile){
		  const destFilePath = directoryPath+'/'+destinationFile
		  const newLine = filename+"/n"
		  fs.writeFile(destFilePath, newLine, function (err) {
			  if (err) throw err;
			  console.log('Saved!');
			});
	  }
	  
    });
  });
}

setInterval(()=>readFiles(directoryPath,console.log,console.log),5000)



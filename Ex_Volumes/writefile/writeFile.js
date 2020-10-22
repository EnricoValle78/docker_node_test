var fs = require('fs');

const directoryPath = process.env.DIR_NAME||".";
const destinationFile = process.env.DEST_FILE_NAME||"pippo";


function readFiles(dirname) {
	const epoch = (new Date()).getTime();
	  if(destinationFile){
		  const destFilePath = directoryPath+'/'+destinationFile+"_"+epoch
		  fs.appendFile(destFilePath, "ciao", function (err) {
			  if (err) throw err;
			  console.log('Saved file '+destFilePath);
			});
	  }
}

setInterval(()=>readFiles(directoryPath),10000)



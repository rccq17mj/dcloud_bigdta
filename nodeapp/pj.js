const fs = require('fs');
const path = './';


var filelis = {

};

fs.readdir(path, 'utf8', (error, file)=>{
	if(error) {
		console.log(error);
	} else {
		console.log(file)  //data.tostring()=utf8
	}
})


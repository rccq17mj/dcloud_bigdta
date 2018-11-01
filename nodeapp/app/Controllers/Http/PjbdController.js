'use strict'

class PjbdController {
	/**
	** 读取文件列表
	**/
	showpj({ request }){
		let filelist = this.readpj()
		return filelist;
	}

	//读取项目目录文件名
	readpj(){
		var filesArr 	= [];
		const fs 		= require('fs');

		const path      = require('path');
		let pjsfile     = path.join(__dirname,'../../../../projects/');

		var readDir 	= fs.readdirSync(pjsfile);

		readDir.forEach(function(ele,index){
			var itempath = pjsfile+""+ele
			var readfile = itempath+'/.CN'
			var info = fs.statSync(itempath)	
			if(info.isDirectory() && ele!='ag6ready'){
				var checkDir = fs.existsSync(readfile);
				if(checkDir){
					var readcntstr = fs.readFileSync(readfile)
					var readcnt = JSON.parse(readcntstr)
					filesArr.push(readcnt);
				}
				
			}
		})
		return filesArr;
	}

	/**
	** 测试调用系统命令
	**/

	runcommand(){
		const execSync = require('child_process').execSync;
		let cmd = execSync('npm -v');
		// console.log(cmd)
		return 'aaaa'
	}

	/**
	** 显示文件内容
	**/
	showfile(){
		const path  = require('path');
		let pj_path = 'pj111/src/app/app.module.ts';
		let pjfile  = path.join(__dirname,'../../../../projects/' + pj_path);
		return this.readsimple(pjfile);
	}

	/**
	 * 
	 * @param startPath  起始目录文件夹路径
	 * @returns {Array}
	 */
	findSync(startPath) {
	    let result=[];
	    function finder(path) {
	        let files=fs.readdirSync(path);
	        files.forEach((val,index) => {
	            let fPath=join(path,val);
	            let stats=fs.statSync(fPath);
	            if(stats.isDirectory()) {
	                result.push(fPath);
	                // 递归读取文件夹下文件
	                // finder(fPath)
	            };
	            // 读取文件名
	            // if(stats.isFile()) result.push(fPath);
	        });

	    }
	    finder(startPath);
	    console.log(result)
	    return result;
	}




	//测试我的延迟
	delay(data) {
		return new Promise((resolve,reject)=>{
		   resolve(data)
		})
	}





	//读取单个文件的内容并以字符串形式解构出来
	readsimple(filename){
		const fs = require('fs');
		return fs.readFileSync(filename)
	}

	writesimple($filename, codestr) {
		const fs = require('fs');
		return fs.writeFileSync($filename, codestr)
	}

	//显示整个文件目录
	getpjfull(){
		// const fs = require('fs');
		const path = './';
		fs.readdir(path, 'utf8', (error, file)=>{
			if(error) {
				console.log(error);
			} else {
				console.log(file)  //data.tostring()=utf8
			}
		})
	}


	//读写文件流

	filestream(rdfilename,wdfilename) {
		// const fs = require('fs');
		var fileReadStream = fs.createReadStream(readfname);
		var fileWriteStream = fs.createWriteStream(wdfilename);//2
		var count = 0;


		//3
		//fileReadStream.pipe(fileWriteStream);


		fileReadStream.once('data', (chunk) => {
			console.log(chunk.toString());

			//同时操作写入
			fileWriteStream.write(chunk);//2
		})

		fileReadStream.on('data', (chunk) => {
			console.log(` ${++count}读取到: ${chunk.length}`);
		})

		fileReadStream.on('end', () => {
			console.log('--结束--');
		})

		fileReadStream.on('error', (error) => {
			console.log(error);
		})




	}


	//操作文件流，检查写入模块中相应语句

}

module.exports = PjbdController

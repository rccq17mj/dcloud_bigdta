'use strict'

class PjmakeController {

	//拷贝
	async pjinit({ request }){
		//路径设置
		const path  = require('path');
		let pjsfile  = path.join(__dirname,'../../../../projects/');
		var name     = request.input('name');
		var discript = request.input('discript');
		//生成项目名
		let filename = this.get_filename()
		let filepath = this.filesmake(pjsfile,filename)
		
		//copy文件夹
		await this.sys_copy(pjsfile + 'ag6ready/*', filepath+"/")  //ag6ready

		//标记项目
		let cnfile  = filepath+"/CN.txt"
		let codestr = JSON.stringify({'id':filename, 'name':name, 'discript':discript})
		let witcn   = this.writesimple(cnfile,codestr)


		console.log(witcn)

		//安装
		// this.pjinstall(filepath);
		return codestr;
	}

	writesimple(filename, codestr) {
		const fs = require('fs');
		return fs.writeFileSync(filename, codestr)
	}


	/**
	** pjsfile  项目所在路径名. ../projects/date
	** filename 文件名
	**/
	filesmake(pjsfile, filename ) {
		const fs  = require('fs')
		var filepath  = pjsfile+filename
		fs.mkdirSync(filepath)
		return filepath
	}

	sys_copy(src, dst) {
	  const spawn = require('child_process').spawn;
	  
	  return new Promise((resolve,reject)=>{
        let ls = spawn('cp', ['-r', src, dst], {
			stdio: ['pipe', 'pipe', 'pipe']
		})
           
		ls.on('close', (code) => {
			console.log(`子进程退出码：${code}`);
			resolve(code)
		});
    })


	  //cmd = execSync('cp '+src+' '+dst);
	  //console.log(cmd)
	}


	copy(src, dst) {
	  const fs  = require('fs')
	  fs.writeFileSync(dst, fs.readFileSync(src));
	}


	//更改文件名称
	changname(){

	}

	//进行安装
	pjinstall(filepath){
		const execSync = require('child_process').execSync;
		let cmd = execSync('cd '+filepath+' && cnpm install');
		console.log(cmd)
	}

	//生成项目文件名称：格式为，年月日时分秒
	get_filename(){
		var date   = new Date();
		var year   = date.getFullYear();
		var month  = date.getMonth()+1;
		var day    = date.getDate();
		var hour   = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();

		hour       = this.checkTime(hour) 
		minute     = this.checkTime(minute) 
		second     = this.checkTime(second) 
		return year+''+month+''+day+''+hour+''+minute+''+second;
	}

	checkTime(i) 
	{ 
		if (i<10) 
		{ 
		  i="0" + i 
		} 
		return i 
	} 

}

module.exports = PjmakeController

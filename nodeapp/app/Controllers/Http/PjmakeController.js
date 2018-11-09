'use strict'
const PATH       = require('path');
const PROCESS    = require('child_process');
const FS 		 = require('fs');
class PjmakeController {

	constructor() {
		this.pjfile_path = '';
	}

	//设置项目文件路径
	set_pj_pyth(pj_id) {
		let pjfile_path  	= '../../../../projects/' + pj_id; //打包文件目录
		
		this.pjfile_path    = PATH.join(__dirname, pjfile_path);

		if(!FS.existsSync(this.pjfile_path)) {
			FS.mkdirSync(this.pjfile_path)
		}
	}

	//拷贝初始项目
	async pjinit({ request }){
		//路径设置
		let ag6ready = PATH.join(__dirname,'../../../../templates/ag6ready');

		var name     = request.input('name');
		var discript = request.input('discript');

		//生成项目名
		let filename = this.get_filename()
		this.set_pj_pyth(filename);
		let pj_path = this.pjfile_path;
		
		

		//copy文件夹
		await this.sys_copy(ag6ready+'/.', pj_path)

		//标记项目
		let cnfile  = pj_path+"/.CN"
		let savetag = {'id':filename, 'name':name, 'discript':discript};
		let codestr = JSON.stringify(savetag)
		this.writesimple(cnfile,codestr)

		//安装
		await this.pjInstallOnline() //

		return savetag;
	}

	//进行安装 独立入口
	async pjinstall({ request }){
		let pj_id = request.input('id')
		this.set_pj_pyth(pj_id);
		await this.pjInstallOnline()
		return {'status':200}
	}

	pjInstallOnline () {
		let timestape 	    = this.get_filename('T');
		let pjfile_path 	= this.pjfile_path;
    pjfile_path = pjfile_path.replace(" ",'\\ ');

		console.log(`\n======安装开始执行时间：${timestape} --\n`);

		return new Promise((resolve, reject)=>{
			let ls = PROCESS.exec('cd '+ pjfile_path + ' && cnpm install');

		    ls.stdout.on('data', (data) => {
		      console.log(`======安装stdout: ${data}`);
		    });

			ls.stderr.on('data', (data) => {
				console.log(`======安装stderr: ${data}`);
				resolve('end')
			});

			ls.stdout.on('end', () => {
				timestape = this.get_filename('T')
				console.log(`\n======安装退出时间点：${timestape} --\n`);
				resolve('end')
			});
		 })
	}












	writesimple(filename, codestr) {
		return FS.writeFileSync(filename, codestr)
	}

	/**
	 *
	 * @param {*} src 被拷文件
	 * @param {*} dst 拷送到目标地
	 */
	sys_copy(src, dst) {
      src = src.replace(" ",'\\ ');
      dst = dst.replace(" ",'\\ ');
	  let timestape = this.get_filename('T');
	  console.log(`\n======开始执行copy时间点：${timestape} --\n`);

	  let cmd = 'cp -R '+ src + ' ' + dst;
	  console.log(cmd)

	  return new Promise((resolve, reject)=>{

        let ls = PROCESS.exec(cmd);
		// const ls = spawn('ls', ['-lh', './']);

		// ls.stdout.on('data', (data) => {
		// 	console.log(`======stdout: ${da	ta}`);
		// });

		ls.stderr.on('data', (data) => {
			console.log(`======stderr: ${data}`);
		});

		ls.stdout.on('end', () => {
			timestape = this.get_filename('T')
			console.log(`\n======退出时间点：${timestape} --\n`);
			resolve('end')
		});
     })
	}


	copy(src, dst) {
	    FS.writeFileSync(dst, fs.readFileSync(src));
	}


	//更改文件名称
	changname(){

	}

	//生成项目文件名称：格式为，年月日时分秒
	get_filename( s = 'F'){
		var date   = new Date();
		var year   = date.getFullYear();
		var month  = date.getMonth()+1;
		var day    = date.getDate();
		var hour   = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();

		month      = this.checkTime(month)
		day        = this.checkTime(day)
		hour       = this.checkTime(hour)
		minute     = this.checkTime(minute)
		second     = this.checkTime(second)

		let backstr = '';
		if(s == 'T'){
			backstr = `${year}-${month}-${day} ${hour}:${minute}:${second}`
		} else {
			backstr = `${year}${month}${day}${hour}${minute}${second}`;
		}
		return backstr
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

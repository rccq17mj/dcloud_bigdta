'use strict'

const fs 		 = require('fs');
const PATH       = require('path');
const PROCESS    = require('child_process');

class PjbdController {
	constructor() {
		this.bdfile_path = '';
	}

	//返回打包文件路径
	set_bundle_pyth(pj_id) {
		let bdfile_path  = '../../../../projects/' + pj_id; //打包文件目录
		this.bdfile_path = PATH.join(__dirname, bdfile_path);
	}

	/**
	** 读取文件列表
	** 取得.CN文件信息，及文件压缩包是否己存在
	**/
	showpj({ request }){
		let filelist = this.readpj()
		return filelist;
	}


	//读取项目目录文件名
	readpj() {


		var filesArr 	= [];

		const path      = require('path');

		let pjsfile     = path.join(__dirname,'../../../../projects/');

		var readDir 	= fs.readdirSync(pjsfile);


		readDir.map(function(ele){
			var itempath = pjsfile+""+ele
			var readfile = itempath+'/.CN'
			var info = fs.statSync(itempath)
			if(info.isDirectory() && ele!='ag6ready'){
				var checkDir = fs.existsSync(readfile);
				if(checkDir){

					//取得.CN文件
					var readcntstr = fs.readFileSync(readfile)
					var readcnt = JSON.parse(readcntstr)
					//检测压缩文件是否己生成过
					var zipfile = itempath + '/dist/custom-tag/clound_data.gz'

					if(fs.existsSync(zipfile)) {
						readcnt['bdflag'] = true
					}else{
						readcnt['bdflag'] = false
					}
					filesArr.push(readcnt);
				}

			}
		})

		return filesArr;
	}


	/**
	 * 设置文件预览准备：1.读取文件，2替换关键字
	 */
	setshow({ request }) {
		let cnt = ''
		let s = false;
		let pj_id = request.input('pj_id')
		if(pj_id) {
			cnt = this.changecnt(pj_id)
		}
		return cnt//{'id': pj_id}
	}

	/**
	 *
	 * @param {*} 项目id 即目录
	 * function 1.打包 2.文件合并cat js>>  3文件压缩
	 */
	async bundledown({ request }) {
		let link = ''
		let pj_id = request.input('id')
		if(pj_id) {

			this.set_bundle_pyth(pj_id); //依据项目编号设置打包文件路径

			//文件打包
			await this.bundlefile()

			//文件合并
			//await this.bundlefileToOne()

			//文件压缩处理
			await this.bundlefileToZlib()

			// await this.bundledownFile()
		}

		return {'status': 'ok'}
	}

	/**
	 *
	 * @param {*} param0
	 * 下载
	 */
	bundledownFile({ request, response }){
		let pj_id = request.input('id')
		this.set_bundle_pyth(pj_id);
		let fs			= require("fs");
		let bdfile      = this.bdfile_path + '/dist/custom-tag/clound_data.gz'
		return response.attachment(bdfile)

	}





	/**
	 * 压缩文件
	 */
	bundlefileToZlib(){
		let bdfile_path  = this.bdfile_path + '/dist/custom-tag/' //打包文件路径
		const archiver   = require('archiver')
		const fs 		 = require('fs');

		//需压缩文件列表
		let files = ['index.html','main.js','polyfills.js','runtime.js','scripts.js','styles.js', 'vendor.js', '3rdpartylicenses.txt','favicon.ico'];
		//let files =fs.readdirSync(bdfile_path);


		// 创建生成的压缩包路径
		var output = fs.createWriteStream(bdfile_path + 'clound_data.gz');
		var archive = archiver('zip');

		return new Promise((resolve, reject)=>{

			// 'close' 事件监听
			output.on('close', function() {
				console.log('close:' + archive.pointer() + ' total bytes');
				resolve('end')
			});

			// 'end' 事件监听
			output.on('end', function() {
				console.log(`======end: 正常压缩完成`);
				resolve('end')
			});

			// 'warnings' 事件监听
			archive.on('warning', function(err) {
				console.log(`======warning: ${warning}`);
			});

			// 'error' 事件监听
			archive.on('error', function(err) {
				console.log(`======error: ${err}`);
				resolve('end')
			});

			// pipe 方法
			archive.pipe(output);

			// 添加流文件
			files.map((filename)=>{
				let filepath = bdfile_path + filename
				archive.append(fs.createReadStream(filepath), {
					name: filename
				});
			})
			// archive.directory(bdfile_path)

			//执行
			archive.finalize();

	    })
	}

	bundlefileToOne(){
		let bdfile_path  = this.bdfile_path + '/dist/custom-tag/' //打包文件路径
		console.log(bdfile_path)
		let timestape 	 = this.get_filename('T');
		console.log(`\n======合并开始执行时间：${timestape} --\n`);
		const exec = require('child_process').exec;
		return new Promise((resolve, reject)=>{
			let ls = exec('cd '+ bdfile_path + ' && cat runtime.js polyfills.js scripts.js main.js > custom-items.js');


		    ls.stdout.on('data', (data) => {
		      console.log(`======stdout: ${data}`);
		    });

			ls.stderr.on('data', (data) => {
				console.log(`======stderr: ${data}`);
				resolve('end')
			});

			ls.stdout.on('end', () => {
				timestape = this.get_filename('T')
				console.log(`\n======合并退出时间点：${timestape} --\n`);
				resolve('end')
			});
		 })
	}

	//调用系统打包文件
	bundlefile() {
		let bdfile_path  = this.bdfile_path //打包文件路径
    bdfile_path = bdfile_path.replace(" ",'\\ ');


		let timestape = this.get_filename('T');
		console.log(`\n======打包开始执行时间：${timestape} --\n`);
		const exec = require('child_process').exec;
		return new Promise((resolve, reject)=>{
			let ls = exec('cd '+ bdfile_path + ' && npm run frist:build');
			//const ls = exec('ls ' + bdfile_path);

		    ls.stdout.on('data', (data) => {
		      console.log(`======stdout: ${data}`);
		    });

			ls.stderr.on('data', (data) => {
				console.log(`======stderr: ${data}`);
				resolve('end')
			});

			ls.stdout.on('end', () => {
				timestape = this.get_filename('T')
				console.log(`\n======打包退出时间点：${timestape} --\n`);
				resolve('end')
			});
		 })
	}


	/**
	** 读取更改文件内容
	**/
	changecnt(pj_id) {
		const path  = require('path');
		let cnt = ''
		let filepath = ''
		let chang_file 	= ['pjshow.module.ts', 'pjshow-routing.module.ts'];
		let upfile_path = '../../../../src/app/routes/pjshow/';


		for(let i=0; i < chang_file.length; i++) {
			//拼凑文件路径
			let filepath = path.join(__dirname, upfile_path + chang_file[i]);
		    //文件内容取得
			cnt = this.readsimple(filepath);
			//修改替换
			//let rpstr = 'projects/' + pj_id
			cnt = cnt.toString().replace(/(ag6ready|\d{14})/, pj_id)
			// if(cnt.toString().indexOf("ag6ready") == -1) {
			// 	cnt = cnt.toString().replace(/(\d{14})/, pj_id)
			// } else {
			// 	cnt = cnt.toString().replace(/(ag6ready)/, rpstr)
			// }

			//重写回去
			this.writesimple(filepath, cnt)

		}

		return true
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
		fs.writeFileSync($filename, codestr)
		return true;
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


	//格式当前时间为，年月日时分秒
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

	//时间补位前导零
	checkTime(i)
	{
		if (i<10)
		{
		  i="0" + i
		}
		return i
	}
}

module.exports = PjbdController

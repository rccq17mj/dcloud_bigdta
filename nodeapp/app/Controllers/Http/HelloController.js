'use strict'

class HelloController {
	render({ request }){
		var name = request.input('name');
		//返回读取到的目标
		return `${name}这是返回接口：1.将在这里处理文件目录读取。2.操作标签写入`;
	}
}

module.exports = HelloController

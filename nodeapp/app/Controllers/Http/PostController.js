'use strict'

class PostController {
	///posts 资源列表  get请求
	index () {
		return `List of posts.`
	}
	///posts创建资源的请求，使用控制器里的 store 方法来处理   post请求
	store () {
		return `Post has been created.`
	}

	///posts/:id显示单个资源 get请求
	show ({params}) {
		return `You're watching post ${params.id}.`
	}

	///posts/:id 更新资源  patch请求
	update ({params}) {
		return `Post ${params.id} has been updated.`
	}

	///posts/:id 删除资源的请求 delete请求
	destory ({params}) {
		return `Post ${params.id} has been removed.`
	}

	///posts/create 返回一个创建资源用的表单  get请求
	create () {
		return `Created Post.`
	}

	///posts/:id/edit  根据路由地址里的资源的 id 号 .. 从数据库里查询出这个资源 ... 把它们填充到编辑资源用的表单上  get请求
	edit ({params}) {
		return `Editing post ${params.id}.`
	}

}

module.exports = PostController

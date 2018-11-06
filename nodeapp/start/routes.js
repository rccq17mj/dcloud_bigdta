'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.on('/').render('welcome');

//Route.resource('posts', 'PostController')
Route.resource('pjbds', 'PjbdController')


// .apiOnly() //明确地设置一下需要的路由
// .only(['index','show']) 会去掉创建还有编辑资源用的路由
// .except(['index'])设置一下不需要的路由 

Route.get('/pjbd', 'PjbdController.render'); 

//读取显示项目文件目录等信息
Route.get('/showpj', 'PjbdController.showpj'); 

//创建项目
Route.get('/pjinit', 'PjmakeController.pjinit'); //创建项目

//项目安装
Route.get('/pjinstall', 'PjmakeController.pjinstall'); //创建项目

//读取操作项目
Route.get('/showfile', 'PjbdController.showfile');//读取指定文件


//文件打包下载
Route.get('/bundledown', 'PjbdController.bundledown');

//设置预览文件
Route.get('/setshow', 'PjbdController.setshow');

//下载测试
Route.get('/bundledownFile', 'PjbdController.bundledownFile');


Route.get('/runcommand', 'PjbdController.runcommand');




const delay = (data,time) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve(data)
        }, time)
    })

}


Route.get('/posts', async({reponse}) =>{
    const data = await delay({'name':'test'}, 10000);
    return data;
})
import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Project } from '../project';
import { NzNotificationService } from 'ng-zorro-antd';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Observable, Observer } from 'rxjs'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  pj: Project = {
    id: 1,
    name: '',
    discript: '',
    installis: true,
    bdflag: false,
  };
  datas : any;  //项目清单
  isVisible   = false; //弹框可见否
  loadvisible = false; //载入提示可见否

  constructor(private http: _HttpClient, private notification: NzNotificationService) {}

    /**
     * 弹框系列方法
     */
    showModal(): void {
      this.isVisible = true;
    }

    //点击确认建立项目
    handleOk(): void {
      console.log('Button ok clicked!');

      this.isVisible = false;//隐藏弹出模型层

      this.pjmake()//创建项目
      this.getpjs()//请求并更新项目列表

      // setTimeout(function() {
      //   this.loadvisible = false;
      //   this.datas.unshift('project'+l)
      // }.bind(this), 3000);

    }

    handleCancel(): void {
      console.log('Button cancel clicked!');
      this.isVisible = false;
    }

    pjmake(){
      this.loadvisible = true;
      let url = '/api/pjinit'
      //debugger;
      this.http.get( url, {name: this.pj.name, discript: this.pj.discript}).subscribe( res => {

        this.datas.unshift(res);

        this.pj.name = ''
        this.pj.discript = ''
        this.loadvisible = false;
      });
    }

    //取得项目清单信息
    getpjs(){
     let url = '/api/showpj'
     this.http.get( url ).subscribe( res => {
       this.datas = res//.sort( this.getSortFun('desc','id') );
       //console.log(res)
     });
    }

    //倒序排序项目
    getSortFun(order, sortBy) {
      var ordAlpah = (order == 'asc') ? '>' : '<';
      var sortFun = new Function('a', 'b', 'return a.' + sortBy + ordAlpah + 'b.' + sortBy + '?1:-1');
      return sortFun;
    }

    trackByPj(id: number, datas): number {
        return datas.id
    }

    //安装项目
    pjinstall(pj_id) {
      let url = '/api/pjinstall'
      this.http.get( url, {id: pj_id}).subscribe( res => {

        this.notification.blank( '初始化提示', '己完成初始化.');

        this.datas.map((ele)=>{
          if(ele.id == pj_id) {
            ele.bdflag = true
          }
        })
        console.log(this.datas)
      });
    }


    //发送指定文件夹的打包请求
    bundledown(pj_id) {
      let url = '/api/bundledown'
      this.http.get( url, {id: pj_id}).subscribe( res => {
        console.log("bundle complate!")
        this.datas.map((ele)=>{
          
          if(ele.id == pj_id) {
            ele.bdflag = true
          }
        })
        console.log(this.datas)
      });
    }

    //下载文件
    downfile(pj_id) {
      window.location.href = 'http://localhost:3333/bundledownFile?id=' + pj_id
    }



   ngOnInit() {
    this.getpjs()
  }

}

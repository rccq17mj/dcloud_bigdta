import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { forEach } from '@angular/router/src/utils/collection';
import { Project } from '../project';


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
    discript: ''
  };
  datas:any;
  isVisible = false;
  loadvisible = false;
  constructor(
    private http: _HttpClient
  ) {

   }

    showModal(): void {
      this.isVisible = true;
    }

    //点击确认建立项目
    handleOk(): void {
      console.log('Button ok clicked!');
      this.loadvisible = true;
      
      this.isVisible = false;//隐藏弹出模型层
      let l = this.datas.length
      l++;

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
      //console.log(this.pj.name)
      let url = '/api/pjinit'
      this.http.get( url,{name: this.pj.name, discript: this.pj.discript}).subscribe( res => {
        this.datas = res;

        this.pj.name = ''
        this.pj.discript = ''
      });
    }

    getpjs(){
     let url = '/api/showpj'
     this.http.get( url ).subscribe( res => {
       this.datas = res;//res.sort( this.getSortFun('desc','id') );

       this.loadvisible = false; //隐藏
     });
    }

    getSortFun(order, sortBy) {
      var ordAlpah = (order == 'asc') ? '>' : '<';
      var sortFun = new Function('a', 'b', 'return a.' + sortBy + ordAlpah + 'b.' + sortBy + '?1:-1');
      return sortFun;
    }


    


   ngOnInit() {
    this.getpjs()
  }

}

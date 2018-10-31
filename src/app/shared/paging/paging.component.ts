import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit,OnChanges,DoCheck{
  @Input()
  private strleng:number;    //数据总数量
  @Output()
  currentPag:EventEmitter<number> = new EventEmitter();
  @Output()
  pagNums:EventEmitter<number> = new EventEmitter();
  private pagNum:number = 5;    //每页显示数据数量
  private numPag:number;    //共有几页
  private pags:Array<number>;   //用于存放全部页码的数组
  private pagCurren:number = 1;     //当前页码
  private oldPagNum:number = 5;

  constructor() { }

  //默认当前显示页是1，每页显示数量5
  ngOnInit() {
    this.currentPag.emit(this.pagCurren);
    this.pagNums.emit(this.pagNum);
  }

  //当输入分页组件的数据数量发生变化，重新改变页码
  ngOnChanges(changes: SimpleChanges): void {
    this.pags = [];     //这里必须初始化pags数组
    this.numPag = (+this.strleng)%(+this.pagNum) == 0?(+this.strleng)/(+this.pagNum):Math.floor((+this.strleng)/(+this.pagNum))+1;
    for(let i=1;i<=this.numPag;i++){
      this.pags.push(i);
    }
  }

  ngDoCheck(): void {
    if(this.pagNum != this.oldPagNum){
      this.pagCurren = 1;
      this.currentPag.emit(this.pagCurren);
      this.pagNums.emit(this.pagNum);
      this.oldPagNum = this.pagNum;
    }
  }

  //获取每页显示数量函数
  gitPagNum(){
    this.pags = [];     //这里必须初始化pags数组
    this.numPag = (+this.strleng)%(+this.pagNum) == 0?(+this.strleng)/(+this.pagNum):Math.floor((+this.strleng)/(+this.pagNum))+1;
    for(let i=1;i<=this.numPag;i++){
      this.pags.push(i);
    }
  }

  //获取当前显示页函数
  gitPag(pag){
    this.pagCurren = pag;
    this.currentPag.emit(this.pagCurren);
    this.pagNums.emit(this.pagNum);
  }

  //显示下一页函数
  next(){
    if(this.pagCurren != this.pags[this.pags.length-1]){
      this.pagCurren = this.pagCurren + 1;
    }else {
      this.pagCurren = this.pags[this.pags.length-1];
    }
    this.currentPag.emit(this.pagCurren);
    this.pagNums.emit(this.pagNum);
  }

  //显示上一页函数
  previous(){
    if(this.pagCurren != 1){
      this.pagCurren = this.pagCurren - 1;
    }else {
      this.pagCurren = 1;
    }
    this.currentPag.emit(this.pagCurren);
    this.pagNums.emit(this.pagNum);
  }
}
import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pjshow-prview',
  templateUrl: './prview.component.html',
})
export class PjshowPrviewComponent implements OnInit {
  start = 0
  constructor(private router: Router, private route: ActivatedRoute,private http: _HttpClient) { }

  setshow(pj_id) {
   let url = '/api/setshow'
   this.http.get( url , {pj_id: pj_id}).subscribe( res => {
    console.log(res)
   });
  }
  
  ngOnInit() {
      //取得项目id
      const id = +this.route.snapshot.paramMap.get('id');
      
      //请求进后台预览文件处理
          

      //载入预览
      let clrt= setInterval(function() {
        this.start+=1
        if(this.start > 99){
          clearInterval(clrt);
          this.setshow(id)
        }
      }.bind(this), 10);
      this.router.navigate(['/pjshow/goshow'], {replaceUrl: true});
      
        
  }

}

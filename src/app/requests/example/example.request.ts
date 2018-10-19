import { Injectable } from '@angular/core';
import { HttpService } from '@ang-kit/http';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpApiUrls } from '@appConfig/http.config';
import { ExampleMenu, ExampleUserModel } from '@models/data-models/example/example.model';

@Injectable()
export class ExampleRequest {
  constructor(private http: HttpService) {}

  login(username: string, password: string): Observable<ExampleUserModel> {
    return this.http.post(HttpApiUrls.example.getUser, {username: username, password: password}).pipe(
      map(res => res.flag ? res.data['data'] : null)
    )
  }

  getUserInfo(exampleUserModel?: ExampleUserModel): Observable<ExampleUserModel> {
    return this.http.post(HttpApiUrls.example.getUser, exampleUserModel).pipe(
      map(res => res.flag ? res.data['data'] : null)
    )
  }

  getUserMenusSwitchToMenu(): Observable<ExampleMenu[]> {
    return this.http.post(HttpApiUrls.example.getMenus).pipe(
      map(res => res.flag ? res.data['data'] : null)
    )
  }

  /**
   * 合并上面两个请求
   */
  getUserAndMenus(exampleUserModel?: ExampleUserModel): Observable<[ExampleUserModel, ExampleMenu[]]> {
    const getUserInfo$ = this.getUserInfo();
    const getUserMenus$ = this.getUserMenusSwitchToMenu();
    return zip(getUserInfo$, getUserMenus$);
  }
}

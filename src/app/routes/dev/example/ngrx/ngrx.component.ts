import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '@components/base/base.component';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '@ngrxs/reducers';
import { Observable } from 'rxjs';
import { ExampleUserModel } from '@models/data-models/example/example.model';
import { ExampleUserLoginSuccessAction } from '@ngrxs/actions/example.action';


@Component({
  templateUrl: './ngrx.component.html',
})
export class ExampleNgrxComponent extends BaseComponent implements OnInit {
  user$: Observable<ExampleUserModel>;

  constructor(
    protected injector: Injector,
    private store: Store<fromRoot.State>,
  ) {
    super(injector);
  }

  ngOnInit() {
    // 模拟数据
    this.store.dispatch(new ExampleUserLoginSuccessAction({id: 1, username: '小明'}));

    this.user$ = this.store.pipe(select(fromRoot.getExampleUser));
  }
}

import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '@components/base/base.component';
import { ExampleUserModel } from '@models/data-models/example/example.model';
import { ExampleRequest } from '@requests/example/example.request';

@Component({
  templateUrl: './http.component.html',
})
export class ExampleHttpComponent extends BaseComponent implements OnInit {
  constructor(
    protected injector: Injector,
    private exampleRequest: ExampleRequest
  ) {
    super(injector);
  }

  ngOnInit() {
    const exampleUserModel: ExampleUserModel = {
      id: 1
    };
    this.exampleRequest.getUserAndMenus(exampleUserModel).subscribe(res => {
      const user  = res[0];
      const menus = res[1];
    });
  }
}

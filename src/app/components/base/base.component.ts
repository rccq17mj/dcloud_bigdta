import { Component, Injector } from '@angular/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { FormBuilder, FormGroup } from '@angular/forms';

import { HttpService } from '@ang-kit/http';
import { HttpApiUrls } from '@appConfig/http.config';

@Component({
  template: ``,
})
export class BaseComponent {
  // 是否正在加载
  isLoading = false;

  // 验证表单
  validateForm: FormGroup;

  // 消息服务
  msgService = this.injector.get(NzMessageService);
  // 弹出层服务
  modalService = this.injector.get(NzModalService);
  // FormBuilder
  fb = this.injector.get(FormBuilder);
  // http服务
  http = this.injector.get(HttpService);

  // API数据
  apiUrls = HttpApiUrls;

  constructor(
    protected injector: Injector
  ) {}

  /**
   * 获取当前表单Control
   * @param name
   * @returns {AbstractControl}
   */
  getFormControl(name) {
    return this.validateForm.controls[name];
  }

  /**
   * 标识
   */
  markAsDirty(ignoreControls: Array<string> = []) {
    for (const i in this.validateForm.controls) {
      if (ignoreControls.indexOf(i) === -1) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }
}

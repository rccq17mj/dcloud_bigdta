import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-g2',
  templateUrl: './g2.component.html',
  styles: []
})
export class G2Component implements OnInit {
  component = {
      "axis-label": {
        image: './datav/g2/axis-label/preview.png',
        title: 'axis-label',
        component: `<app-axis-label></app-axis-label>`
      }
  }
  attr: any[] = [];

  constructor() {
    this.getComponentList();
  }

  trackByPj(id: number, datas): number {
    return datas.id
  }

  getComponentList() {
    for (let key in this.component) {
      this.attr.push(this.component[key])
    }
  }

  ngOnInit() {
  }

}

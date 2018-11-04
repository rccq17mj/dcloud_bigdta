import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PjshowPrviewComponent } from './prview.component';

describe('PjshowPrviewComponent', () => {
  let component: PjshowPrviewComponent;
  let fixture: ComponentFixture<PjshowPrviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PjshowPrviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PjshowPrviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

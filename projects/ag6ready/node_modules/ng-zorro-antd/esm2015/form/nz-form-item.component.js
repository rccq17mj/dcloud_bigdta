/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
import { NzRowComponent } from '../grid/nz-row.component';
/**
 * should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 *
 */
export class NzFormItemComponent extends NzRowComponent {
    constructor() {
        super(...arguments);
        this._flex = false;
        this.withHelp = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzFlex(value) {
        this._flex = toBoolean(value);
        if (this._flex) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
        }
        else {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
        }
    }
    /**
     * @return {?}
     */
    enableHelp() {
        this.withHelp++;
    }
    /**
     * @return {?}
     */
    disableHelp() {
        this.withHelp--;
    }
}
NzFormItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-form-item',
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                template: "<ng-content></ng-content>",
                host: {
                    '[class.ant-form-item]': 'true',
                    '[class.ant-form-item-with-help]': 'withHelp>0'
                },
                styles: [`:host {
    display: block;
  }`]
            }] }
];
NzFormItemComponent.propDecorators = {
    nzFlex: [{ type: Input }]
};
function NzFormItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzFormItemComponent.prototype._flex;
    /** @type {?} */
    NzFormItemComponent.prototype.withHelp;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJmb3JtL256LWZvcm0taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFnQjFELE1BQU0sMEJBQTJCLFNBQVEsY0FBYzs7O3FCQUNyQyxLQUFLO3dCQUNWLENBQUM7Ozs7OztJQUVaLElBQ0ksTUFBTSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzFFO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNyRTtLQUNGOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNqQjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGNBQWM7Z0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFNBQVMsRUFBWSxDQUFFLHdCQUF3QixDQUFFO2dCQUNqRCxxQ0FBb0Q7Z0JBQ3BELElBQUksRUFBaUI7b0JBQ25CLHVCQUF1QixFQUFZLE1BQU07b0JBQ3pDLGlDQUFpQyxFQUFFLFlBQVk7aUJBQ2hEO3lCQUNzQjs7SUFFckI7YUFDSDs7O3FCQUtFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpSb3dDb21wb25lbnQgfSBmcm9tICcuLi9ncmlkL256LXJvdy5jb21wb25lbnQnO1xuXG4vKiogc2hvdWxkIGFkZCBuei1yb3cgZGlyZWN0aXZlIHRvIGhvc3QsIHRyYWNrIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzg3ODUgKiovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWZvcm0taXRlbScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1mb3JtLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtXScgICAgICAgICAgOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscF0nOiAnd2l0aEhlbHA+MCdcbiAgfSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9YCBdXG59KVxuZXhwb3J0IGNsYXNzIE56Rm9ybUl0ZW1Db21wb25lbnQgZXh0ZW5kcyBOelJvd0NvbXBvbmVudCB7XG4gIHByaXZhdGUgX2ZsZXggPSBmYWxzZTtcbiAgd2l0aEhlbHAgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekZsZXgodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9mbGV4ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fZmxleCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnZmxleCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xuICAgIH1cbiAgfVxuXG4gIGVuYWJsZUhlbHAoKTogdm9pZCB7XG4gICAgdGhpcy53aXRoSGVscCsrO1xuICB9XG5cbiAgZGlzYWJsZUhlbHAoKTogdm9pZCB7XG4gICAgdGhpcy53aXRoSGVscC0tO1xuICB9XG59XG4iXX0=
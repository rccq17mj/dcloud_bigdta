/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
import { NzRowComponent } from '../grid/nz-row.component';
/**
 * should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 *
 */
var NzFormItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzFormItemComponent, _super);
    function NzFormItemComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._flex = false;
        _this.withHelp = 0;
        return _this;
    }
    Object.defineProperty(NzFormItemComponent.prototype, "nzFlex", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._flex = toBoolean(value);
            if (this._flex) {
                this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
            }
            else {
                this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzFormItemComponent.prototype.enableHelp = /**
     * @return {?}
     */
    function () {
        this.withHelp++;
    };
    /**
     * @return {?}
     */
    NzFormItemComponent.prototype.disableHelp = /**
     * @return {?}
     */
    function () {
        this.withHelp--;
    };
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
                    styles: [":host {\n    display: block;\n  }"]
                }] }
    ];
    NzFormItemComponent.propDecorators = {
        nzFlex: [{ type: Input }]
    };
    return NzFormItemComponent;
}(NzRowComponent));
export { NzFormItemComponent };
function NzFormItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzFormItemComponent.prototype._flex;
    /** @type {?} */
    NzFormItemComponent.prototype.withHelp;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJmb3JtL256LWZvcm0taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztJQWdCakIsK0NBQWM7OztzQkFDckMsS0FBSzt5QkFDVixDQUFDOzs7SUFFWixzQkFDSSx1Q0FBTTs7Ozs7UUFEVixVQUNXLEtBQWM7WUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUMxRTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQzthQUNyRTtTQUNGOzs7T0FBQTs7OztJQUVELHdDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNqQjs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNqQjs7Z0JBakNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsY0FBYztvQkFDbkMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsU0FBUyxFQUFZLENBQUUsd0JBQXdCLENBQUU7b0JBQ2pELHFDQUFvRDtvQkFDcEQsSUFBSSxFQUFpQjt3QkFDbkIsdUJBQXVCLEVBQVksTUFBTTt3QkFDekMsaUNBQWlDLEVBQUUsWUFBWTtxQkFDaEQ7NkJBQ3NCLG1DQUVyQjtpQkFDSDs7O3lCQUtFLEtBQUs7OzhCQXZCUjtFQW1CeUMsY0FBYztTQUExQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpSb3dDb21wb25lbnQgfSBmcm9tICcuLi9ncmlkL256LXJvdy5jb21wb25lbnQnO1xuXG4vKiogc2hvdWxkIGFkZCBuei1yb3cgZGlyZWN0aXZlIHRvIGhvc3QsIHRyYWNrIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzg3ODUgKiovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWZvcm0taXRlbScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1mb3JtLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtXScgICAgICAgICAgOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscF0nOiAnd2l0aEhlbHA+MCdcbiAgfSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9YCBdXG59KVxuZXhwb3J0IGNsYXNzIE56Rm9ybUl0ZW1Db21wb25lbnQgZXh0ZW5kcyBOelJvd0NvbXBvbmVudCB7XG4gIHByaXZhdGUgX2ZsZXggPSBmYWxzZTtcbiAgd2l0aEhlbHAgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekZsZXgodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9mbGV4ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fZmxleCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnZmxleCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xuICAgIH1cbiAgfVxuXG4gIGVuYWJsZUhlbHAoKTogdm9pZCB7XG4gICAgdGhpcy53aXRoSGVscCsrO1xuICB9XG5cbiAgZGlzYWJsZUhlbHAoKTogdm9pZCB7XG4gICAgdGhpcy53aXRoSGVscC0tO1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { NzOptionComponent } from './nz-option.component';
var NzOptionLiComponent = /** @class */ (function () {
    function NzOptionLiComponent(elementRef) {
        this.elementRef = elementRef;
        this.selected = false;
        this.active = false;
        this.nzShowActive = true;
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(NzOptionLiComponent.prototype, "nzActiveOption", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.active = this.compareWith(value.nzValue, this.nzOption.nzValue);
            }
            else {
                this.active = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzOptionLiComponent.prototype, "nzListOfSelectedValue", {
        set: /**
         * @param {?} valueList
         * @return {?}
         */
        function (valueList) {
            var _this = this;
            this.selected = isNotNil(valueList.find(function (v) { return _this.compareWith(v, _this.nzOption.nzValue); }));
        },
        enumerable: true,
        configurable: true
    });
    NzOptionLiComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-option-li]',
                    template: "<ng-container *ngIf=\"nzOption.nzCustomContent\">\n  <ng-template [ngTemplateOutlet]=\"nzOption.template\"></ng-template>\n</ng-container>\n<ng-container *ngIf=\"!nzOption.nzCustomContent\">\n  {{nzOption.nzLabel}}\n</ng-container>",
                    host: {
                        '[class.ant-select-dropdown-menu-item]': 'true',
                        '[class.ant-select-dropdown-menu-item-selected]': 'selected && !nzOption.nzDisabled',
                        '[class.ant-select-dropdown-menu-item-disabled]': 'nzOption.nzDisabled',
                        '[class.ant-select-dropdown-menu-item-active]': 'active && !nzOption.nzDisabled && nzShowActive && !selected',
                        '[attr.unselectable]': '"unselectable"',
                        '[style.user-select]': '"none"'
                    }
                }] }
    ];
    /** @nocollapse */
    NzOptionLiComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    NzOptionLiComponent.propDecorators = {
        nzOption: [{ type: Input }],
        nzShowActive: [{ type: Input }],
        compareWith: [{ type: Input }],
        nzActiveOption: [{ type: Input }],
        nzListOfSelectedValue: [{ type: Input }]
    };
    return NzOptionLiComponent;
}());
export { NzOptionLiComponent };
function NzOptionLiComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzOptionLiComponent.prototype.el;
    /** @type {?} */
    NzOptionLiComponent.prototype.selected;
    /** @type {?} */
    NzOptionLiComponent.prototype.active;
    /** @type {?} */
    NzOptionLiComponent.prototype.nzOption;
    /** @type {?} */
    NzOptionLiComponent.prototype.nzShowActive;
    /** @type {?} */
    NzOptionLiComponent.prototype.compareWith;
    /** @type {?} */
    NzOptionLiComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWxpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotb3B0aW9uLWxpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7SUFzQ3hELDZCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO3dCQXRCL0IsS0FBSztzQkFDUCxLQUFLOzRCQUVVLElBQUk7UUFvQjFCLElBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztLQUNwQztJQWpCRCxzQkFDSSwrQ0FBYzs7Ozs7UUFEbEIsVUFDbUIsS0FBd0I7WUFDekMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0RTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNyQjtTQUNGOzs7T0FBQTtJQUVELHNCQUVJLHNEQUFxQjs7Ozs7UUFGekIsVUFFMEIsU0FBZ0I7WUFGMUMsaUJBSUM7WUFEQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQyxDQUFDLENBQUM7U0FDM0Y7OztPQUFBOztnQkFsQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBSyxnQkFBZ0I7b0JBQzdCLG1QQUE0QztvQkFDNUMsSUFBSSxFQUFTO3dCQUNYLHVDQUF1QyxFQUFXLE1BQU07d0JBQ3hELGdEQUFnRCxFQUFFLGtDQUFrQzt3QkFDcEYsZ0RBQWdELEVBQUUscUJBQXFCO3dCQUN2RSw4Q0FBOEMsRUFBSSw2REFBNkQ7d0JBQy9HLHFCQUFxQixFQUE2QixnQkFBZ0I7d0JBQ2xFLHFCQUFxQixFQUE2QixRQUFRO3FCQUMzRDtpQkFDRjs7OztnQkFmbUIsVUFBVTs7OzJCQW9CM0IsS0FBSzsrQkFDTCxLQUFLOzhCQUVMLEtBQUs7aUNBRUwsS0FBSzt3Q0FTTCxLQUFLOzs4QkFsQ1I7O1NBZ0JhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnW256LW9wdGlvbi1saV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotb3B0aW9uLWxpLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtXScgICAgICAgICA6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkXSc6ICdzZWxlY3RlZCAmJiAhbnpPcHRpb24ubnpEaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1kaXNhYmxlZF0nOiAnbnpPcHRpb24ubnpEaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1hY3RpdmVdJyAgOiAnYWN0aXZlICYmICFuek9wdGlvbi5uekRpc2FibGVkICYmIG56U2hvd0FjdGl2ZSAmJiAhc2VsZWN0ZWQnLFxuICAgICdbYXR0ci51bnNlbGVjdGFibGVdJyAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ1widW5zZWxlY3RhYmxlXCInLFxuICAgICdbc3R5bGUudXNlci1zZWxlY3RdJyAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ1wibm9uZVwiJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56T3B0aW9uTGlDb21wb25lbnQge1xuICBlbDogRWxlbWVudDtcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgYWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56T3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudDtcbiAgQElucHV0KCkgbnpTaG93QWN0aXZlID0gdHJ1ZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBjb21wYXJlV2l0aDogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IG56QWN0aXZlT3B0aW9uKHZhbHVlOiBOek9wdGlvbkNvbXBvbmVudCkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLmNvbXBhcmVXaXRoKHZhbHVlLm56VmFsdWUsIHRoaXMubnpPcHRpb24ubnpWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBzZXQgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlKHZhbHVlTGlzdDogYW55W10pIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gaXNOb3ROaWwodmFsdWVMaXN0LmZpbmQodiA9PiB0aGlzLmNvbXBhcmVXaXRoKHYsIHRoaXMubnpPcHRpb24ubnpWYWx1ZSkpKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { NzOptionComponent } from './nz-option.component';
export class NzOptionLiComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.selected = false;
        this.active = false;
        this.nzShowActive = true;
        this.el = elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzActiveOption(value) {
        if (value) {
            this.active = this.compareWith(value.nzValue, this.nzOption.nzValue);
        }
        else {
            this.active = false;
        }
    }
    /**
     * @param {?} valueList
     * @return {?}
     */
    set nzListOfSelectedValue(valueList) {
        this.selected = isNotNil(valueList.find(v => this.compareWith(v, this.nzOption.nzValue)));
    }
}
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
NzOptionLiComponent.ctorParameters = () => [
    { type: ElementRef }
];
NzOptionLiComponent.propDecorators = {
    nzOption: [{ type: Input }],
    nzShowActive: [{ type: Input }],
    compareWith: [{ type: Input }],
    nzActiveOption: [{ type: Input }],
    nzListOfSelectedValue: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWxpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotb3B0aW9uLWxpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQWMxRCxNQUFNOzs7O0lBd0JKLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7d0JBdEIvQixLQUFLO3NCQUNQLEtBQUs7NEJBRVUsSUFBSTtRQW9CMUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ3BDOzs7OztJQWpCRCxJQUNJLGNBQWMsQ0FBQyxLQUF3QjtRQUN6QyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEU7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO0tBQ0Y7Ozs7O0lBRUQsSUFFSSxxQkFBcUIsQ0FBQyxTQUFnQjtRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0Y7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFLLGdCQUFnQjtnQkFDN0IsbVBBQTRDO2dCQUM1QyxJQUFJLEVBQVM7b0JBQ1gsdUNBQXVDLEVBQVcsTUFBTTtvQkFDeEQsZ0RBQWdELEVBQUUsa0NBQWtDO29CQUNwRixnREFBZ0QsRUFBRSxxQkFBcUI7b0JBQ3ZFLDhDQUE4QyxFQUFJLDZEQUE2RDtvQkFDL0cscUJBQXFCLEVBQTZCLGdCQUFnQjtvQkFDbEUscUJBQXFCLEVBQTZCLFFBQVE7aUJBQzNEO2FBQ0Y7Ozs7WUFmbUIsVUFBVTs7O3VCQW9CM0IsS0FBSzsyQkFDTCxLQUFLOzBCQUVMLEtBQUs7NkJBRUwsS0FBSztvQ0FTTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICdbbnotb3B0aW9uLWxpXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1vcHRpb24tbGkuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW1dJyAgICAgICAgIDogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWRdJzogJ3NlbGVjdGVkICYmICFuek9wdGlvbi5uekRpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkXSc6ICduek9wdGlvbi5uekRpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWFjdGl2ZV0nICA6ICdhY3RpdmUgJiYgIW56T3B0aW9uLm56RGlzYWJsZWQgJiYgbnpTaG93QWN0aXZlICYmICFzZWxlY3RlZCcsXG4gICAgJ1thdHRyLnVuc2VsZWN0YWJsZV0nICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnXCJ1bnNlbGVjdGFibGVcIicsXG4gICAgJ1tzdHlsZS51c2VyLXNlbGVjdF0nICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnXCJub25lXCInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpPcHRpb25MaUNvbXBvbmVudCB7XG4gIGVsOiBFbGVtZW50O1xuICBzZWxlY3RlZCA9IGZhbHNlO1xuICBhY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpPcHRpb246IE56T3B0aW9uQ29tcG9uZW50O1xuICBASW5wdXQoKSBuelNob3dBY3RpdmUgPSB0cnVlO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoOiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpBY3RpdmVPcHRpb24odmFsdWU6IE56T3B0aW9uQ29tcG9uZW50KSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMuY29tcGFyZVdpdGgodmFsdWUubnpWYWx1ZSwgdGhpcy5uek9wdGlvbi5uelZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHNldCBuekxpc3RPZlNlbGVjdGVkVmFsdWUodmFsdWVMaXN0OiBhbnlbXSkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBpc05vdE5pbCh2YWx1ZUxpc3QuZmluZCh2ID0+IHRoaXMuY29tcGFyZVdpdGgodiwgdGhpcy5uek9wdGlvbi5uelZhbHVlKSkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, Component, ElementRef, HostBinding, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
export class NzRadioGroupComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this._size = 'default';
        // ngModel Access
        this.onChange = () => null;
        this.onTouched = () => null;
        this.radios = [];
        this.nzButtonStyle = 'outline';
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSize(value) {
        this._size = value;
    }
    /**
     * @return {?}
     */
    get nzSize() {
        return this._size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabled(value) {
        this._disabled = toBoolean(value);
        this.updateDisabledState();
    }
    /**
     * @return {?}
     */
    get nzDisabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzName(value) {
        this._name = value;
        this.updateChildrenName();
    }
    /**
     * @return {?}
     */
    get nzName() {
        return this._name;
    }
    /**
     * @return {?}
     */
    updateDisabledState() {
        if (isNotNil(this.nzDisabled)) {
            this.radios.forEach((radio) => {
                radio.nzDisabled = this.nzDisabled;
            });
        }
    }
    /**
     * @return {?}
     */
    updateChildrenName() {
        if (this.nzName) {
            this.radios.forEach((item) => {
                item.name = this.nzName;
            });
        }
    }
    /**
     * @return {?}
     */
    syncCheckedValue() {
        this.radios.forEach((item) => {
            item.nzChecked = item.nzValue === this.value;
        });
    }
    /**
     * @return {?}
     */
    get isLarge() {
        return this.nzSize === 'large';
    }
    /**
     * @return {?}
     */
    get isSmall() {
        return this.nzSize === 'small';
    }
    /**
     * @return {?}
     */
    get isSolid() {
        return this.nzButtonStyle === 'solid';
    }
    /**
     * @param {?} radio
     * @return {?}
     */
    addRadio(radio) {
        this.radios.push(radio);
        radio.nzChecked = radio.nzValue === this.value;
    }
    /**
     * @param {?} radio
     * @return {?}
     */
    selectRadio(radio) {
        this.updateValue(radio.nzValue, true);
    }
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    updateValue(value, emit) {
        this.value = value;
        this.syncCheckedValue();
        if (emit) {
            this.onChange(value);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.syncCheckedValue();
        this.updateChildrenName();
        Promise.resolve().then(() => {
            this.updateDisabledState();
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.updateValue(value, false);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
    }
}
NzRadioGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-radio-group',
                preserveWhitespaces: false,
                template: "<ng-content></ng-content>",
                host: {
                    '[class.ant-radio-group]': 'true'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzRadioGroupComponent),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
NzRadioGroupComponent.ctorParameters = () => [
    { type: ElementRef }
];
NzRadioGroupComponent.propDecorators = {
    nzSize: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzName: [{ type: Input }],
    nzButtonStyle: [{ type: Input }],
    isLarge: [{ type: HostBinding, args: ['class.ant-radio-group-large',] }],
    isSmall: [{ type: HostBinding, args: ['class.ant-radio-group-small',] }],
    isSolid: [{ type: HostBinding, args: ['class.ant-radio-group-solid',] }]
};
function NzRadioGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzRadioGroupComponent.prototype._size;
    /** @type {?} */
    NzRadioGroupComponent.prototype._name;
    /** @type {?} */
    NzRadioGroupComponent.prototype._disabled;
    /** @type {?} */
    NzRadioGroupComponent.prototype.el;
    /** @type {?} */
    NzRadioGroupComponent.prototype.value;
    /** @type {?} */
    NzRadioGroupComponent.prototype.onChange;
    /** @type {?} */
    NzRadioGroupComponent.prototype.onTouched;
    /** @type {?} */
    NzRadioGroupComponent.prototype.radios;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzButtonStyle;
    /** @type {?} */
    NzRadioGroupComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInJhZGlvL256LXJhZGlvLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFFVixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUF1QmpELE1BQU07Ozs7SUFrR0osWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtxQkFqR0osU0FBUzs7d0JBT2YsR0FBRyxFQUFFLENBQUMsSUFBSTt5QkFDbEIsR0FBRyxFQUFFLENBQUMsSUFBSTtzQkFFeUIsRUFBRTs2QkErQmhCLFNBQVM7UUF5RHBELElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDekM7Ozs7O0lBdkZELElBQ0ksTUFBTSxDQUFDLEtBQTJCO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3BCOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COzs7OztJQUVELElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7S0FDNUI7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBRUQsSUFDSSxNQUFNLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztLQUMzQjs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNuQjs7OztJQUlELG1CQUFtQjtRQUNqQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDNUIsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ3BDLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3pCLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzlDLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQztLQUNoQzs7OztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUM7S0FDaEM7Ozs7SUFFRCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssT0FBTyxDQUFDO0tBQ3ZDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFnRDtRQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNoRDs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBZ0Q7UUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3ZDOzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBYSxFQUFFLElBQWE7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO0tBQ0Y7Ozs7SUFNRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDNUIsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDaEM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBdUI7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztLQUNyQjs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztLQUM5Qjs7O1lBM0lGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsZ0JBQWdCO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixxQ0FBc0Q7Z0JBQ3RELElBQUksRUFBaUI7b0JBQ25CLHlCQUF5QixFQUFFLE1BQU07aUJBQ2xDO2dCQUNELFNBQVMsRUFBWTtvQkFDbkI7d0JBQ0UsT0FBTyxFQUFNLGlCQUFpQjt3QkFDOUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzt3QkFDcEQsS0FBSyxFQUFRLElBQUk7cUJBQ2xCO2lCQUNGO2FBQ0Y7Ozs7WUE1QkMsVUFBVTs7O3FCQTBDVCxLQUFLO3lCQVNMLEtBQUs7cUJBVUwsS0FBSzs0QkFVTCxLQUFLO3NCQXdCTCxXQUFXLFNBQUMsNkJBQTZCO3NCQUt6QyxXQUFXLFNBQUMsNkJBQTZCO3NCQUt6QyxXQUFXLFNBQUMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmV4cG9ydCB0eXBlIE56UmFkaW9Hcm91cFNpemVUeXBlID0gJ2xhcmdlJyB8ICdkZWZhdWx0JyB8ICdzbWFsbCc7XG5leHBvcnQgdHlwZSBOelJhZGlvQnV0dG9uU3R5bGUgPSAnb3V0bGluZScgfCAnc29saWQnO1xuXG5pbXBvcnQgeyBOelJhZGlvQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1yYWRpby1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IE56UmFkaW9Db21wb25lbnQgfSBmcm9tICcuL256LXJhZGlvLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotcmFkaW8tZ3JvdXAnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotcmFkaW8tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tZ3JvdXBdJzogJ3RydWUnXG4gIH0sXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFtcbiAgICB7XG4gICAgICBwcm92aWRlICAgIDogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelJhZGlvR3JvdXBDb21wb25lbnQpLFxuICAgICAgbXVsdGkgICAgICA6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpSYWRpb0dyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIF9zaXplOiBOelJhZGlvR3JvdXBTaXplVHlwZSA9ICdkZWZhdWx0JztcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcbiAgZWw6IEhUTUxFbGVtZW50O1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIC8vIG5nTW9kZWwgQWNjZXNzXG4gIG9uQ2hhbmdlOiAoXzogc3RyaW5nKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcblxuICByYWRpb3M6IEFycmF5PE56UmFkaW9Db21wb25lbnQgfCBOelJhZGlvQnV0dG9uQ29tcG9uZW50PiA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNpemUodmFsdWU6IE56UmFkaW9Hcm91cFNpemVUeXBlKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56U2l6ZSgpOiBOelJhZGlvR3JvdXBTaXplVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZURpc2FibGVkU3RhdGUoKTtcbiAgfVxuXG4gIGdldCBuekRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuek5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuTmFtZSgpO1xuICB9XG5cbiAgZ2V0IG56TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgQElucHV0KCkgbnpCdXR0b25TdHlsZTogTnpSYWRpb0J1dHRvblN0eWxlID0gJ291dGxpbmUnO1xuXG4gIHVwZGF0ZURpc2FibGVkU3RhdGUoKTogdm9pZCB7XG4gICAgaWYgKGlzTm90TmlsKHRoaXMubnpEaXNhYmxlZCkpIHtcbiAgICAgIHRoaXMucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICAgIHJhZGlvLm56RGlzYWJsZWQgPSB0aGlzLm56RGlzYWJsZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDaGlsZHJlbk5hbWUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpOYW1lKSB7XG4gICAgICB0aGlzLnJhZGlvcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0ubmFtZSA9IHRoaXMubnpOYW1lO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3luY0NoZWNrZWRWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJhZGlvcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLm56Q2hlY2tlZCA9IGl0ZW0ubnpWYWx1ZSA9PT0gdGhpcy52YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LXJhZGlvLWdyb3VwLWxhcmdlJylcbiAgZ2V0IGlzTGFyZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpTaXplID09PSAnbGFyZ2UnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtcmFkaW8tZ3JvdXAtc21hbGwnKVxuICBnZXQgaXNTbWFsbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uelNpemUgPT09ICdzbWFsbCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1yYWRpby1ncm91cC1zb2xpZCcpXG4gIGdldCBpc1NvbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56QnV0dG9uU3R5bGUgPT09ICdzb2xpZCc7XG4gIH1cblxuICBhZGRSYWRpbyhyYWRpbzogTnpSYWRpb0NvbXBvbmVudCB8IE56UmFkaW9CdXR0b25Db21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnJhZGlvcy5wdXNoKHJhZGlvKTtcbiAgICByYWRpby5uekNoZWNrZWQgPSByYWRpby5uelZhbHVlID09PSB0aGlzLnZhbHVlO1xuICB9XG5cbiAgc2VsZWN0UmFkaW8ocmFkaW86IE56UmFkaW9Db21wb25lbnQgfCBOelJhZGlvQnV0dG9uQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVWYWx1ZShyYWRpby5uelZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKHZhbHVlOiBzdHJpbmcsIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5zeW5jQ2hlY2tlZFZhbHVlKCk7XG4gICAgaWYgKGVtaXQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN5bmNDaGVja2VkVmFsdWUoKTtcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuTmFtZSgpO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVEaXNhYmxlZFN0YXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlLCBmYWxzZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { toBoolean } from '../core/util/convert';
/**
 * @record
 */
export function NzCheckBoxOptionInterface() { }
function NzCheckBoxOptionInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCheckBoxOptionInterface.prototype.label;
    /** @type {?} */
    NzCheckBoxOptionInterface.prototype.value;
    /** @type {?|undefined} */
    NzCheckBoxOptionInterface.prototype.checked;
    /** @type {?|undefined} */
    NzCheckBoxOptionInterface.prototype.disabled;
}
var NzCheckboxGroupComponent = /** @class */ (function () {
    function NzCheckboxGroupComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._disabled = false;
        this.prefixCls = 'ant-checkbox-group';
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.el = this.elementRef.nativeElement;
    }
    Object.defineProperty(NzCheckboxGroupComponent.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCheckboxGroupComponent.prototype.onOptionChange = /**
     * @return {?}
     */
    function () {
        this.onChange(this.options);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCheckboxGroupComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.options = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCheckboxGroupComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCheckboxGroupComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzCheckboxGroupComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
    };
    /**
     * @return {?}
     */
    NzCheckboxGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.el, "" + this.prefixCls);
    };
    NzCheckboxGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-checkbox-group',
                    preserveWhitespaces: false,
                    template: "<label\n  nz-checkbox\n  *ngFor=\"let option of options\"\n  [nzDisabled]=\"option.disabled||nzDisabled\"\n  [(nzChecked)]=\"option.checked\"\n  (nzCheckedChange)=\"onOptionChange()\">\n  <span>{{ option.label }}</span>\n</label>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzCheckboxGroupComponent; }),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    NzCheckboxGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzCheckboxGroupComponent.propDecorators = {
        nzDisabled: [{ type: Input }]
    };
    return NzCheckboxGroupComponent;
}());
export { NzCheckboxGroupComponent };
function NzCheckboxGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCheckboxGroupComponent.prototype._disabled;
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.el;
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.prefixCls;
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.onChange;
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.onTouched;
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.options;
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.elementRef;
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNoZWNrYm94L256LWNoZWNrYm94LWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztJQTBEL0Msa0NBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7eUJBcENuRCxLQUFLO3lCQUVMLG9CQUFvQjt3QkFDckIsUUFBUSxDQUFDLFNBQVM7eUJBQ2pCLFFBQVEsQ0FBQyxTQUFTO1FBaUNwQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ3pDO0lBL0JELHNCQUNJLGdEQUFVOzs7O1FBSWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBUEQsVUFDZSxLQUFjO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DOzs7T0FBQTs7OztJQU1ELGlEQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzdCOzs7OztJQUVELDZDQUFVOzs7O0lBQVYsVUFBVyxLQUFrQztRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7Ozs7SUFFRCxtREFBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBMEM7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsb0RBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQVk7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDckI7Ozs7O0lBRUQsbURBQWdCOzs7O0lBQWhCLFVBQWlCLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0tBQzlCOzs7O0lBTUQsMkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFHLElBQUksQ0FBQyxTQUFXLENBQUMsQ0FBQztLQUN0RDs7Z0JBdkRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsbUJBQW1CO29CQUN4QyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixpUEFBeUQ7b0JBQ3pELFNBQVMsRUFBWTt3QkFDbkI7NEJBQ0UsT0FBTyxFQUFNLGlCQUFpQjs0QkFDOUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsd0JBQXdCLEVBQXhCLENBQXdCLENBQUM7NEJBQ3ZELEtBQUssRUFBUSxJQUFJO3lCQUNsQjtxQkFDRjtpQkFDRjs7OztnQkEzQkMsVUFBVTtnQkFHVixTQUFTOzs7NkJBaUNSLEtBQUs7O21DQXZDUjs7U0ErQmEsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuZXhwb3J0IGludGVyZmFjZSBOekNoZWNrQm94T3B0aW9uSW50ZXJmYWNlIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1jaGVja2JveC1ncm91cCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1jaGVja2JveC1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFtcbiAgICB7XG4gICAgICBwcm92aWRlICAgIDogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekNoZWNrYm94R3JvdXBDb21wb25lbnQpLFxuICAgICAgbXVsdGkgICAgICA6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpDaGVja2JveEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtY2hlY2tib3gtZ3JvdXAnO1xuICBwcml2YXRlIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcml2YXRlIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgb3B0aW9uczogTnpDaGVja0JveE9wdGlvbkludGVyZmFjZVtdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgb25PcHRpb25DaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogTnpDaGVja0JveE9wdGlvbkludGVyZmFjZVtdKTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb25zID0gdmFsdWU7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogTnpDaGVja0JveE9wdGlvbkludGVyZmFjZVtdKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLmVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsIGAke3RoaXMucHJlZml4Q2xzfWApO1xuICB9XG59XG4iXX0=
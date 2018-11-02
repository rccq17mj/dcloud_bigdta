/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, Component, ElementRef, EventEmitter, HostListener, Input, Optional, Output, Renderer2, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isEmpty } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { NzCheckboxWrapperComponent } from './nz-checkbox-wrapper.component';
var NzCheckboxComponent = /** @class */ (function () {
    function NzCheckboxComponent(elementRef, renderer, nzCheckboxWrapperComponent) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzCheckboxWrapperComponent = nzCheckboxWrapperComponent;
        this._disabled = false;
        this._indeterminate = false;
        this._autoFocus = false;
        this._checked = false;
        this.isInit = false;
        this.prefixCls = 'ant-checkbox';
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.classMap = {};
        this.nzCheckedChange = new EventEmitter();
        this.el = this.elementRef.nativeElement;
    }
    Object.defineProperty(NzCheckboxComponent.prototype, "nzAutoFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoFocus;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoFocus = toBoolean(value);
            this.updateAutoFocus();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCheckboxComponent.prototype, "nzDisabled", {
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
    Object.defineProperty(NzCheckboxComponent.prototype, "nzIndeterminate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._indeterminate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._indeterminate = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCheckboxComponent.prototype, "nzChecked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._checked = value;
            this.updateClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    NzCheckboxComponent.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        this.inputElement.nativeElement.focus();
        if (!this.nzDisabled) {
            this.updateValue(!this.nzChecked);
        }
    };
    /**
     * @return {?}
     */
    NzCheckboxComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.onTouched();
    };
    /**
     * @return {?}
     */
    NzCheckboxComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.isInit) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCheckboxComponent.prototype.updateValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.onChange(value);
        this.nzCheckedChange.emit(value);
        this.nzChecked = value;
        if (this.nzCheckboxWrapperComponent) {
            this.nzCheckboxWrapperComponent.onChange();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCheckboxComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzChecked = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCheckboxComponent.prototype.registerOnChange = /**
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
    NzCheckboxComponent.prototype.registerOnTouched = /**
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
    NzCheckboxComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
    };
    /**
     * @return {?}
     */
    NzCheckboxComponent.prototype.updateClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-checked"] = this.nzChecked && (!this.nzIndeterminate),
            _a[this.prefixCls + "-disabled"] = this.nzDisabled,
            _a[this.prefixCls + "-indeterminate"] = this.nzIndeterminate,
            _a);
    };
    /**
     * @return {?}
     */
    NzCheckboxComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.inputElement.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    NzCheckboxComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.inputElement.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    NzCheckboxComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        }
    };
    /**
     * @return {?}
     */
    NzCheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.el, this.prefixCls + "-wrapper");
        this.updateClassMap();
        if (this.nzCheckboxWrapperComponent) {
            this.nzCheckboxWrapperComponent.addCheckbox(this);
        }
    };
    /**
     * @return {?}
     */
    NzCheckboxComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateClassMap();
    };
    /**
     * @return {?}
     */
    NzCheckboxComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
        this.updateAutoFocus();
        this.checkContent();
    };
    /**
     * @return {?}
     */
    NzCheckboxComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.nzCheckboxWrapperComponent) {
            this.nzCheckboxWrapperComponent.removeCheckbox(this);
        }
    };
    NzCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-checkbox]',
                    preserveWhitespaces: false,
                    template: "<span [ngClass]=\"classMap\">\n      <input\n        #inputElement\n        [checked]=\"nzChecked\"\n        type=\"checkbox\"\n        class=\"ant-checkbox-input\"\n        (blur)=\"onBlur()\">\n      <span class=\"ant-checkbox-inner\"></span>\n    </span>\n<span #contentElement (cdkObserveContent)=\"checkContent()\"><ng-content></ng-content></span>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzCheckboxComponent; }),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    NzCheckboxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzCheckboxWrapperComponent, decorators: [{ type: Optional }] }
    ]; };
    NzCheckboxComponent.propDecorators = {
        inputElement: [{ type: ViewChild, args: ['inputElement',] }],
        contentElement: [{ type: ViewChild, args: ['contentElement',] }],
        nzCheckedChange: [{ type: Output }],
        nzValue: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzIndeterminate: [{ type: Input }],
        nzChecked: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return NzCheckboxComponent;
}());
export { NzCheckboxComponent };
function NzCheckboxComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCheckboxComponent.prototype._disabled;
    /** @type {?} */
    NzCheckboxComponent.prototype._indeterminate;
    /** @type {?} */
    NzCheckboxComponent.prototype._autoFocus;
    /** @type {?} */
    NzCheckboxComponent.prototype._checked;
    /** @type {?} */
    NzCheckboxComponent.prototype.el;
    /** @type {?} */
    NzCheckboxComponent.prototype.isInit;
    /** @type {?} */
    NzCheckboxComponent.prototype.prefixCls;
    /** @type {?} */
    NzCheckboxComponent.prototype.onChange;
    /** @type {?} */
    NzCheckboxComponent.prototype.onTouched;
    /** @type {?} */
    NzCheckboxComponent.prototype.inputElement;
    /** @type {?} */
    NzCheckboxComponent.prototype.contentElement;
    /** @type {?} */
    NzCheckboxComponent.prototype.classMap;
    /** @type {?} */
    NzCheckboxComponent.prototype.nzCheckedChange;
    /** @type {?} */
    NzCheckboxComponent.prototype.nzValue;
    /** @type {?} */
    NzCheckboxComponent.prototype.elementRef;
    /** @type {?} */
    NzCheckboxComponent.prototype.renderer;
    /** @type {?} */
    NzCheckboxComponent.prototype.nzCheckboxWrapperComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNoZWNrYm94L256LWNoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFFVixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7SUE4STNFLDZCQUFvQixVQUFzQixFQUFVLFFBQW1CLEVBQXNCLDBCQUFzRDtRQUEvSCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFzQiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO3lCQS9IL0gsS0FBSzs4QkFDQSxLQUFLOzBCQUNULEtBQUs7d0JBQ1AsS0FBSztzQkFFUCxLQUFLO3lCQUNGLGNBQWM7d0JBQ2YsUUFBUSxDQUFDLFNBQVM7eUJBQ2pCLFFBQVEsQ0FBQyxTQUFTO3dCQUkzQixFQUFFOytCQUNlLElBQUksWUFBWSxFQUFXO1FBbUhyRCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ3pDO0lBakhELHNCQUNJLDRDQUFXOzs7O1FBS2Y7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7Ozs7O1FBUkQsVUFDZ0IsS0FBYztZQUM1QixJQUFJLENBQUMsVUFB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QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3JCOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsMEJBQTBCLEVBQUU7WUFDbkMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0RDtLQUNGOztnQkF0S0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxlQUFlO29CQUNwQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQiw0V0FBbUQ7b0JBQ25ELFNBQVMsRUFBWTt3QkFDbkI7NEJBQ0UsT0FBTyxFQUFNLGlCQUFpQjs0QkFDOUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLENBQUM7NEJBQ2xELEtBQUssRUFBUSxJQUFJO3lCQUNsQjtxQkFDRjtpQkFDRjs7OztnQkE5QkMsVUFBVTtnQkFTVixTQUFTO2dCQVFGLDBCQUEwQix1QkE4SXlDLFFBQVE7OzsrQkF0SGpGLFNBQVMsU0FBQyxjQUFjO2lDQUV4QixTQUFTLFNBQUMsZ0JBQWdCO2tDQUUxQixNQUFNOzBCQUNOLEtBQUs7OEJBRUwsS0FBSzs2QkFVTCxLQUFLO2tDQVNMLEtBQUs7NEJBU0wsS0FBSzswQkFVTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUUsUUFBUSxDQUFFOzs4QkExRnJDOztTQW1DYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBOekNoZWNrYm94V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vbnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ1tuei1jaGVja2JveF0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbXG4gICAge1xuICAgICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpDaGVja2JveENvbXBvbmVudCksXG4gICAgICBtdWx0aSAgICAgIDogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekNoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9pbmRldGVybWluYXRlID0gZmFsc2U7XG4gIHByaXZhdGUgX2F1dG9Gb2N1cyA9IGZhbHNlO1xuICBwcml2YXRlIF9jaGVja2VkID0gZmFsc2U7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGlzSW5pdCA9IGZhbHNlO1xuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtY2hlY2tib3gnO1xuICBwcml2YXRlIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcml2YXRlIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JylcbiAgcHJpdmF0ZSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRFbGVtZW50JykgY29udGVudEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIGNsYXNzTWFwID0ge307XG4gIEBPdXRwdXQoKSBuekNoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBJbnB1dCgpIG56VmFsdWU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgbnpBdXRvRm9jdXModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdXRvRm9jdXMgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XG4gIH1cblxuICBnZXQgbnpBdXRvRm9jdXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Gb2N1cztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56SW5kZXRlcm1pbmF0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56SW5kZXRlcm1pbmF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5kZXRlcm1pbmF0ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekNoZWNrZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jaGVja2VkID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56Q2hlY2tlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyAnJGV2ZW50JyBdKVxuICBvbkNsaWNrKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKCF0aGlzLm56Q2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gIH1cblxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNJbml0KSB7XG4gICAgICBpZiAodGhpcy5uekF1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJywgJ2F1dG9mb2N1cycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgdGhpcy5uekNoZWNrZWRDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgdGhpcy5uekNoZWNrZWQgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5uekNoZWNrYm94V3JhcHBlckNvbXBvbmVudCkge1xuICAgICAgdGhpcy5uekNoZWNrYm94V3JhcHBlckNvbXBvbmVudC5vbkNoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56Q2hlY2tlZCA9IHZhbHVlO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGJvb2xlYW4pID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICB1cGRhdGVDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xuICAgICAgWyB0aGlzLnByZWZpeENscyBdICAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWNoZWNrZWRgIF0gICAgICA6IHRoaXMubnpDaGVja2VkICYmICghdGhpcy5uekluZGV0ZXJtaW5hdGUpLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWRgIF0gICAgIDogdGhpcy5uekRpc2FibGVkLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30taW5kZXRlcm1pbmF0ZWAgXTogdGhpcy5uekluZGV0ZXJtaW5hdGVcbiAgICB9O1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcbiAgICBpZiAoaXNFbXB0eSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekNoZWNrYm94V3JhcHBlckNvbXBvbmVudDogTnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQpIHtcbiAgICB0aGlzLmVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsIGAke3RoaXMucHJlZml4Q2xzfS13cmFwcGVyYCk7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICAgIGlmICh0aGlzLm56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLm56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50LmFkZENoZWNrYm94KHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQucmVtb3ZlQ2hlY2tib3godGhpcyk7XG4gICAgfVxuICB9XG59XG4iXX0=
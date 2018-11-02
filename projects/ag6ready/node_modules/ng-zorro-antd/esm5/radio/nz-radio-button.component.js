/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NzRadioComponent } from './nz-radio.component';
var NzRadioButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzRadioButtonComponent, _super);
    function NzRadioButtonComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefixCls = 'ant-radio-button';
        return _this;
    }
    NzRadioButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-radio-button]',
                    preserveWhitespaces: false,
                    template: "<span [ngClass]=\"classMap\">\n  <input type=\"radio\" #inputElement class=\"ant-radio-button-input\" [disabled]=\"nzDisabled\" [(ngModel)]=\"nzChecked\" (blur)=\"onBlur()\" [attr.name]=\"name\">\n  <span class=\"ant-radio-button-inner\"></span>\n</span>\n<span><ng-content></ng-content></span>",
                    host: {
                        '[class.ant-radio-button-wrapper]': 'true',
                        '[class.ant-radio-button-wrapper-checked]': 'nzChecked',
                        '[class.ant-radio-button-wrapper-disabled]': 'nzDisabled'
                    }
                }] }
    ];
    return NzRadioButtonComponent;
}(NzRadioComponent));
export { NzRadioButtonComponent };
function NzRadioButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzRadioButtonComponent.prototype.prefixCls;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJyYWRpby9uei1yYWRpby1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUFZWixrREFBZ0I7OzswQkFDOUMsa0JBQWtCOzs7O2dCQVgvQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLG1CQUFtQjtvQkFDeEMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsa1RBQXVEO29CQUN2RCxJQUFJLEVBQWlCO3dCQUNuQixrQ0FBa0MsRUFBVyxNQUFNO3dCQUNuRCwwQ0FBMEMsRUFBRyxXQUFXO3dCQUN4RCwyQ0FBMkMsRUFBRSxZQUFZO3FCQUMxRDtpQkFDRjs7aUNBZkQ7RUFnQjRDLGdCQUFnQjtTQUEvQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56UmFkaW9Db21wb25lbnQgfSBmcm9tICcuL256LXJhZGlvLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnW256LXJhZGlvLWJ1dHRvbl0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyXScgICAgICAgICA6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1yYWRpby1idXR0b24td3JhcHBlci1jaGVja2VkXScgOiAnbnpDaGVja2VkJyxcbiAgICAnW2NsYXNzLmFudC1yYWRpby1idXR0b24td3JhcHBlci1kaXNhYmxlZF0nOiAnbnpEaXNhYmxlZCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelJhZGlvQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgTnpSYWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByZWZpeENscyA9ICdhbnQtcmFkaW8tYnV0dG9uJztcbn1cbiJdfQ==
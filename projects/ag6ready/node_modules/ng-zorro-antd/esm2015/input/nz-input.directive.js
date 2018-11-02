/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostBinding, HostListener, Input, Optional, Renderer2, Self } from '@angular/core';
import { NgControl, NgModel } from '@angular/forms';
import calculateNodeHeight from '../core/util/calculate-node-height';
import { toBoolean } from '../core/util/convert';
/**
 * @record
 */
export function AutoSizeType() { }
function AutoSizeType_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    AutoSizeType.prototype.minRows;
    /** @type {?|undefined} */
    AutoSizeType.prototype.maxRows;
}
export class NzInputDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} ngModel
     * @param {?} ngControl
     */
    constructor(elementRef, renderer, ngModel, ngControl) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.ngModel = ngModel;
        this.ngControl = ngControl;
        this._size = 'default';
        this._disabled = false;
        this._autosize = false;
        this.isInit = false;
        this.el = this.elementRef.nativeElement;
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
    set nzSize(value) {
        this._size = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAutosize(value) {
        if (typeof value === 'string') {
            this._autosize = true;
        }
        else {
            this._autosize = value;
        }
    }
    /**
     * @return {?}
     */
    get nzAutosize() {
        return this._autosize;
    }
    /**
     * @return {?}
     */
    get setLgClass() {
        return this.nzSize === 'large';
    }
    /**
     * @return {?}
     */
    get setSmClass() {
        return this.nzSize === 'small';
    }
    /**
     * @return {?}
     */
    textAreaOnChange() {
        if (this.nzAutosize) {
            this.resizeTextArea();
        }
    }
    /**
     * @return {?}
     */
    resizeTextArea() {
        /** @type {?} */
        const textAreaRef = /** @type {?} */ (this.el);
        /** @type {?} */
        const maxRows = this.nzAutosize ? (/** @type {?} */ (this.nzAutosize)).maxRows || null : null;
        /** @type {?} */
        const minRows = this.nzAutosize ? (/** @type {?} */ (this.nzAutosize)).minRows || null : null;
        if ((this.previousValue === textAreaRef.value) && (this.previewsMaxRows === maxRows) && (this.previewsMinRows === minRows)) {
            return;
        }
        this.previousValue = textAreaRef.value;
        this.previewsMinRows = minRows;
        this.previewsMaxRows = maxRows;
        // eliminate jitter
        this.renderer.setStyle(textAreaRef, 'height', 'auto');
        /** @type {?} */
        const textAreaStyles = calculateNodeHeight(textAreaRef, false, minRows, maxRows);
        this.renderer.setStyle(textAreaRef, 'height', `${textAreaStyles.height}px`);
        this.renderer.setStyle(textAreaRef, 'overflowY', textAreaStyles.overflowY);
        this.renderer.setStyle(textAreaRef, 'minHeight', `${textAreaStyles.minHeight}px`);
        this.renderer.setStyle(textAreaRef, 'maxHeight', `${textAreaStyles.maxHeight}px`);
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.nzAutosize && this.isInit) {
            this.resizeTextArea();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.isInit = true;
        if (this.nzAutosize) {
            this.resizeTextArea();
        }
    }
}
NzInputDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-input]',
                host: {
                    '[class.ant-input]': 'true'
                }
            },] }
];
/** @nocollapse */
NzInputDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgModel, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
NzInputDirective.propDecorators = {
    nzSize: [{ type: Input }],
    disabled: [{ type: Input }, { type: HostBinding, args: [`class.ant-input-disabled`,] }],
    nzAutosize: [{ type: Input }],
    setLgClass: [{ type: HostBinding, args: [`class.ant-input-lg`,] }],
    setSmClass: [{ type: HostBinding, args: [`class.ant-input-sm`,] }],
    textAreaOnChange: [{ type: HostListener, args: ['input',] }]
};
function NzInputDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzInputDirective.prototype._size;
    /** @type {?} */
    NzInputDirective.prototype._disabled;
    /** @type {?} */
    NzInputDirective.prototype._autosize;
    /** @type {?} */
    NzInputDirective.prototype.el;
    /** @type {?} */
    NzInputDirective.prototype.previousValue;
    /** @type {?} */
    NzInputDirective.prototype.previewsMinRows;
    /** @type {?} */
    NzInputDirective.prototype.previewsMaxRows;
    /** @type {?} */
    NzInputDirective.prototype.isInit;
    /** @type {?} */
    NzInputDirective.prototype.elementRef;
    /** @type {?} */
    NzInputDirective.prototype.renderer;
    /** @type {?} */
    NzInputDirective.prototype.ngModel;
    /** @type {?} */
    NzInputDirective.prototype.ngControl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImlucHV0L256LWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxJQUFJLEVBQ0wsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRCxPQUFPLG1CQUFtQixNQUFNLG9DQUFvQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFhakQsTUFBTTs7Ozs7OztJQWtGSixZQUFvQixVQUFzQixFQUFVLFFBQW1CLEVBQXNCLE9BQWdCLEVBQTZCLFNBQW9CO1FBQTFJLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQXNCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBNkIsY0FBUyxHQUFULFNBQVMsQ0FBVztxQkFqRjlJLFNBQVM7eUJBQ0wsS0FBSzt5QkFDbUIsS0FBSztzQkFLaEMsS0FBSztRQTJFcEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztLQUN6Qzs7OztJQTFFRCxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbkI7Ozs7O0lBRUQsSUFBSSxNQUFNLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUNwQjs7Ozs7SUFFRCxJQUVJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7O0lB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O1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtLQUNGOzs7WUF2R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixJQUFJLEVBQU07b0JBQ1IsbUJBQW1CLEVBQUUsTUFBTTtpQkFDNUI7YUFDRjs7OztZQXZCQyxVQUFVO1lBS1YsU0FBUztZQUdTLE9BQU8sdUJBa0dpRCxRQUFRO1lBbEczRSxTQUFTLHVCQWtHZ0csUUFBUSxZQUFJLElBQUk7OztxQkF4RS9ILEtBQUs7dUJBU0wsS0FBSyxZQUNMLFdBQVcsU0FBQywwQkFBMEI7eUJBWXRDLEtBQUs7eUJBYUwsV0FBVyxTQUFDLG9CQUFvQjt5QkFLaEMsV0FBVyxTQUFDLG9CQUFvQjsrQkFLaEMsWUFBWSxTQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIERvQ2hlY2ssXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBTZWxmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sLCBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgY2FsY3VsYXRlTm9kZUhlaWdodCBmcm9tICcuLi9jb3JlL3V0aWwvY2FsY3VsYXRlLW5vZGUtaGVpZ2h0JztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuZXhwb3J0IGludGVyZmFjZSBBdXRvU2l6ZVR5cGUge1xuICBtaW5Sb3dzPzogbnVtYmVyO1xuICBtYXhSb3dzPzogbnVtYmVyO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotaW5wdXRdJyxcbiAgaG9zdCAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1pbnB1dF0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOeklucHV0RGlyZWN0aXZlIGltcGxlbWVudHMgRG9DaGVjaywgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgX3NpemUgPSAnZGVmYXVsdCc7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2F1dG9zaXplOiBib29sZWFuIHwgQXV0b1NpemVUeXBlID0gZmFsc2U7XG4gIHByaXZhdGUgZWw6IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50O1xuICBwcml2YXRlIHByZXZpb3VzVmFsdWU6IHN0cmluZztcbiAgcHJpdmF0ZSBwcmV2aWV3c01pblJvd3M6IG51bWJlcjtcbiAgcHJpdmF0ZSBwcmV2aWV3c01heFJvd3M6IG51bWJlcjtcbiAgcHJpdmF0ZSBpc0luaXQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgbnpTaXplKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBzZXQgbnpTaXplKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1kaXNhYmxlZGApXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgJiYgdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56QXV0b3NpemUodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gfCBBdXRvU2l6ZVR5cGUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fYXV0b3NpemUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hdXRvc2l6ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekF1dG9zaXplKCk6IHN0cmluZyB8IGJvb2xlYW4gfCBBdXRvU2l6ZVR5cGUge1xuICAgIHJldHVybiB0aGlzLl9hdXRvc2l6ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuYW50LWlucHV0LWxnYClcbiAgZ2V0IHNldExnQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpTaXplID09PSAnbGFyZ2UnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKGBjbGFzcy5hbnQtaW5wdXQtc21gKVxuICBnZXQgc2V0U21DbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uelNpemUgPT09ICdzbWFsbCc7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpXG4gIHRleHRBcmVhT25DaGFuZ2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpBdXRvc2l6ZSkge1xuICAgICAgdGhpcy5yZXNpemVUZXh0QXJlYSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZVRleHRBcmVhKCk6IHZvaWQge1xuICAgIGNvbnN0IHRleHRBcmVhUmVmID0gdGhpcy5lbCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIGNvbnN0IG1heFJvd3MgPSB0aGlzLm56QXV0b3NpemUgPyAodGhpcy5uekF1dG9zaXplIGFzIEF1dG9TaXplVHlwZSkubWF4Um93cyB8fCBudWxsIDogbnVsbDtcbiAgICBjb25zdCBtaW5Sb3dzID0gdGhpcy5uekF1dG9zaXplID8gKHRoaXMubnpBdXRvc2l6ZSBhcyBBdXRvU2l6ZVR5cGUpLm1pblJvd3MgfHwgbnVsbCA6IG51bGw7XG4gICAgaWYgKCh0aGlzLnByZXZpb3VzVmFsdWUgPT09IHRleHRBcmVhUmVmLnZhbHVlKSAmJiAodGhpcy5wcmV2aWV3c01heFJvd3MgPT09IG1heFJvd3MpICYmICh0aGlzLnByZXZpZXdzTWluUm93cyA9PT0gbWluUm93cykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdGV4dEFyZWFSZWYudmFsdWU7XG4gICAgdGhpcy5wcmV2aWV3c01pblJvd3MgPSBtaW5Sb3dzO1xuICAgIHRoaXMucHJldmlld3NNYXhSb3dzID0gbWF4Um93cztcbiAgICAvLyBlbGltaW5hdGUgaml0dGVyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0ZXh0QXJlYVJlZiwgJ2hlaWdodCcsICdhdXRvJyk7XG5cbiAgICBjb25zdCB0ZXh0QXJlYVN0eWxlcyA9IGNhbGN1bGF0ZU5vZGVIZWlnaHQodGV4dEFyZWFSZWYsIGZhbHNlLCBtaW5Sb3dzLCBtYXhSb3dzKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRleHRBcmVhUmVmLCAnaGVpZ2h0JywgYCR7dGV4dEFyZWFTdHlsZXMuaGVpZ2h0fXB4YCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0ZXh0QXJlYVJlZiwgJ292ZXJmbG93WScsIHRleHRBcmVhU3R5bGVzLm92ZXJmbG93WSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0ZXh0QXJlYVJlZiwgJ21pbkhlaWdodCcsIGAke3RleHRBcmVhU3R5bGVzLm1pbkhlaWdodH1weGApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGV4dEFyZWFSZWYsICdtYXhIZWlnaHQnLCBgJHt0ZXh0QXJlYVN0eWxlcy5tYXhIZWlnaHR9cHhgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBAT3B0aW9uYWwoKSBwcml2YXRlIG5nTW9kZWw6IE5nTW9kZWwsIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sKSB7XG4gICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56QXV0b3NpemUgJiYgdGhpcy5pc0luaXQpIHtcbiAgICAgIHRoaXMucmVzaXplVGV4dEFyZWEoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgIGlmICh0aGlzLm56QXV0b3NpemUpIHtcbiAgICAgIHRoaXMucmVzaXplVGV4dEFyZWEoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
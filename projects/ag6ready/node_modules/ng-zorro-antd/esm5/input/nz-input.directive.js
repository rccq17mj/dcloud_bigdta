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
var NzInputDirective = /** @class */ (function () {
    function NzInputDirective(elementRef, renderer, ngModel, ngControl) {
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
    Object.defineProperty(NzInputDirective.prototype, "nzSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputDirective.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
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
    Object.defineProperty(NzInputDirective.prototype, "nzAutosize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autosize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'string') {
                this._autosize = true;
            }
            else {
                this._autosize = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputDirective.prototype, "setLgClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzSize === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputDirective.prototype, "setSmClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzSize === 'small';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzInputDirective.prototype.textAreaOnChange = /**
     * @return {?}
     */
    function () {
        if (this.nzAutosize) {
            this.resizeTextArea();
        }
    };
    /**
     * @return {?}
     */
    NzInputDirective.prototype.resizeTextArea = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var textAreaRef = /** @type {?} */ (this.el);
        /** @type {?} */
        var maxRows = this.nzAutosize ? (/** @type {?} */ (this.nzAutosize)).maxRows || null : null;
        /** @type {?} */
        var minRows = this.nzAutosize ? (/** @type {?} */ (this.nzAutosize)).minRows || null : null;
        if ((this.previousValue === textAreaRef.value) && (this.previewsMaxRows === maxRows) && (this.previewsMinRows === minRows)) {
            return;
        }
        this.previousValue = textAreaRef.value;
        this.previewsMinRows = minRows;
        this.previewsMaxRows = maxRows;
        // eliminate jitter
        this.renderer.setStyle(textAreaRef, 'height', 'auto');
        /** @type {?} */
        var textAreaStyles = calculateNodeHeight(textAreaRef, false, minRows, maxRows);
        this.renderer.setStyle(textAreaRef, 'height', textAreaStyles.height + "px");
        this.renderer.setStyle(textAreaRef, 'overflowY', textAreaStyles.overflowY);
        this.renderer.setStyle(textAreaRef, 'minHeight', textAreaStyles.minHeight + "px");
        this.renderer.setStyle(textAreaRef, 'maxHeight', textAreaStyles.maxHeight + "px");
    };
    /**
     * @return {?}
     */
    NzInputDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.nzAutosize && this.isInit) {
            this.resizeTextArea();
        }
    };
    /**
     * @return {?}
     */
    NzInputDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
        if (this.nzAutosize) {
            this.resizeTextArea();
        }
    };
    NzInputDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-input]',
                    host: {
                        '[class.ant-input]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    NzInputDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgModel, decorators: [{ type: Optional }] },
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
    ]; };
    NzInputDirective.propDecorators = {
        nzSize: [{ type: Input }],
        disabled: [{ type: Input }, { type: HostBinding, args: ["class.ant-input-disabled",] }],
        nzAutosize: [{ type: Input }],
        setLgClass: [{ type: HostBinding, args: ["class.ant-input-lg",] }],
        setSmClass: [{ type: HostBinding, args: ["class.ant-input-sm",] }],
        textAreaOnChange: [{ type: HostListener, args: ['input',] }]
    };
    return NzInputDirective;
}());
export { NzInputDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImlucHV0L256LWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxJQUFJLEVBQ0wsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRCxPQUFPLG1CQUFtQixNQUFNLG9DQUFvQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7O0lBK0YvQywwQkFBb0IsVUFBc0IsRUFBVSxRQUFtQixFQUFzQixPQUFnQixFQUE2QixTQUFvQjtRQUExSSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFzQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQTZCLGNBQVMsR0FBVCxTQUFTLENBQVc7cUJBakY5SSxTQUFTO3lCQUNMLEtBQUs7eUJBQ21CLEtBQUs7c0JBS2hDLEtBQUs7UUEyRXBCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDekM7SUExRUQsc0JBQ0ksb0NBQU07Ozs7UUFEVjtZQUVFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNuQjs7Ozs7UUFFRCxVQUFXLEtBQWE7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7OztPQUpBO0lBTUQsc0JBRUksc0NBQVE7Ozs7UUFJWjtZQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7Z0JBQ3RE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LGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0tBQ0Y7Ozs7SUFFRCwwQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0tBQ0Y7O2dCQXZHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLElBQUksRUFBTTt3QkFDUixtQkFBbUIsRUFBRSxNQUFNO3FCQUM1QjtpQkFDRjs7OztnQkF2QkMsVUFBVTtnQkFLVixTQUFTO2dCQUdTLE9BQU8sdUJBa0dpRCxRQUFRO2dCQWxHM0UsU0FBUyx1QkFrR2dHLFFBQVEsWUFBSSxJQUFJOzs7eUJBeEUvSCxLQUFLOzJCQVNMLEtBQUssWUFDTCxXQUFXLFNBQUMsMEJBQTBCOzZCQVl0QyxLQUFLOzZCQWFMLFdBQVcsU0FBQyxvQkFBb0I7NkJBS2hDLFdBQVcsU0FBQyxvQkFBb0I7bUNBS2hDLFlBQVksU0FBQyxPQUFPOzsyQkFuRnZCOztTQTRCYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIERvQ2hlY2ssXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBTZWxmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sLCBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgY2FsY3VsYXRlTm9kZUhlaWdodCBmcm9tICcuLi9jb3JlL3V0aWwvY2FsY3VsYXRlLW5vZGUtaGVpZ2h0JztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuZXhwb3J0IGludGVyZmFjZSBBdXRvU2l6ZVR5cGUge1xuICBtaW5Sb3dzPzogbnVtYmVyO1xuICBtYXhSb3dzPzogbnVtYmVyO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotaW5wdXRdJyxcbiAgaG9zdCAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1pbnB1dF0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOeklucHV0RGlyZWN0aXZlIGltcGxlbWVudHMgRG9DaGVjaywgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgX3NpemUgPSAnZGVmYXVsdCc7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2F1dG9zaXplOiBib29sZWFuIHwgQXV0b1NpemVUeXBlID0gZmFsc2U7XG4gIHByaXZhdGUgZWw6IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50O1xuICBwcml2YXRlIHByZXZpb3VzVmFsdWU6IHN0cmluZztcbiAgcHJpdmF0ZSBwcmV2aWV3c01pblJvd3M6IG51bWJlcjtcbiAgcHJpdmF0ZSBwcmV2aWV3c01heFJvd3M6IG51bWJlcjtcbiAgcHJpdmF0ZSBpc0luaXQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgbnpTaXplKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBzZXQgbnpTaXplKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1kaXNhYmxlZGApXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgJiYgdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56QXV0b3NpemUodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gfCBBdXRvU2l6ZVR5cGUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fYXV0b3NpemUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hdXRvc2l6ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekF1dG9zaXplKCk6IHN0cmluZyB8IGJvb2xlYW4gfCBBdXRvU2l6ZVR5cGUge1xuICAgIHJldHVybiB0aGlzLl9hdXRvc2l6ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuYW50LWlucHV0LWxnYClcbiAgZ2V0IHNldExnQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpTaXplID09PSAnbGFyZ2UnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKGBjbGFzcy5hbnQtaW5wdXQtc21gKVxuICBnZXQgc2V0U21DbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uelNpemUgPT09ICdzbWFsbCc7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpXG4gIHRleHRBcmVhT25DaGFuZ2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpBdXRvc2l6ZSkge1xuICAgICAgdGhpcy5yZXNpemVUZXh0QXJlYSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZVRleHRBcmVhKCk6IHZvaWQge1xuICAgIGNvbnN0IHRleHRBcmVhUmVmID0gdGhpcy5lbCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIGNvbnN0IG1heFJvd3MgPSB0aGlzLm56QXV0b3NpemUgPyAodGhpcy5uekF1dG9zaXplIGFzIEF1dG9TaXplVHlwZSkubWF4Um93cyB8fCBudWxsIDogbnVsbDtcbiAgICBjb25zdCBtaW5Sb3dzID0gdGhpcy5uekF1dG9zaXplID8gKHRoaXMubnpBdXRvc2l6ZSBhcyBBdXRvU2l6ZVR5cGUpLm1pblJvd3MgfHwgbnVsbCA6IG51bGw7XG4gICAgaWYgKCh0aGlzLnByZXZpb3VzVmFsdWUgPT09IHRleHRBcmVhUmVmLnZhbHVlKSAmJiAodGhpcy5wcmV2aWV3c01heFJvd3MgPT09IG1heFJvd3MpICYmICh0aGlzLnByZXZpZXdzTWluUm93cyA9PT0gbWluUm93cykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdGV4dEFyZWFSZWYudmFsdWU7XG4gICAgdGhpcy5wcmV2aWV3c01pblJvd3MgPSBtaW5Sb3dzO1xuICAgIHRoaXMucHJldmlld3NNYXhSb3dzID0gbWF4Um93cztcbiAgICAvLyBlbGltaW5hdGUgaml0dGVyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0ZXh0QXJlYVJlZiwgJ2hlaWdodCcsICdhdXRvJyk7XG5cbiAgICBjb25zdCB0ZXh0QXJlYVN0eWxlcyA9IGNhbGN1bGF0ZU5vZGVIZWlnaHQodGV4dEFyZWFSZWYsIGZhbHNlLCBtaW5Sb3dzLCBtYXhSb3dzKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRleHRBcmVhUmVmLCAnaGVpZ2h0JywgYCR7dGV4dEFyZWFTdHlsZXMuaGVpZ2h0fXB4YCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0ZXh0QXJlYVJlZiwgJ292ZXJmbG93WScsIHRleHRBcmVhU3R5bGVzLm92ZXJmbG93WSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0ZXh0QXJlYVJlZiwgJ21pbkhlaWdodCcsIGAke3RleHRBcmVhU3R5bGVzLm1pbkhlaWdodH1weGApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGV4dEFyZWFSZWYsICdtYXhIZWlnaHQnLCBgJHt0ZXh0QXJlYVN0eWxlcy5tYXhIZWlnaHR9cHhgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBAT3B0aW9uYWwoKSBwcml2YXRlIG5nTW9kZWw6IE5nTW9kZWwsIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sKSB7XG4gICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56QXV0b3NpemUgJiYgdGhpcy5pc0luaXQpIHtcbiAgICAgIHRoaXMucmVzaXplVGV4dEFyZWEoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgIGlmICh0aGlzLm56QXV0b3NpemUpIHtcbiAgICAgIHRoaXMucmVzaXplVGV4dEFyZWEoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
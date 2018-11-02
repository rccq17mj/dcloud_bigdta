/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { matchMedia } from '../core/polyfill/match-media';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
/**
 * @record
 */
export function BreakpointMap() { }
function BreakpointMap_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    BreakpointMap.prototype.xs;
    /** @type {?|undefined} */
    BreakpointMap.prototype.sm;
    /** @type {?|undefined} */
    BreakpointMap.prototype.md;
    /** @type {?|undefined} */
    BreakpointMap.prototype.lg;
    /** @type {?|undefined} */
    BreakpointMap.prototype.xl;
    /** @type {?|undefined} */
    BreakpointMap.prototype.xxl;
}
/** @type {?} */
var responsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};
var NzRowComponent = /** @class */ (function () {
    function NzRowComponent(elementRef, renderer, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this._align = 'top';
        this._justify = 'start';
        this.prefixCls = 'ant-row';
        this.el = this.elementRef.nativeElement;
    }
    Object.defineProperty(NzRowComponent.prototype, "nzType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRowComponent.prototype, "nzAlign", {
        get: /**
         * @return {?}
         */
        function () {
            return this._align;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._align = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRowComponent.prototype, "nzJustify", {
        get: /**
         * @return {?}
         */
        function () {
            return this._justify;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._justify = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRowComponent.prototype, "nzGutter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gutter;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._gutter = value;
            this.updateGutter();
            this.setStyle();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzRowComponent.prototype.setStyle = /**
     * @return {?}
     */
    function () {
        this.renderer.setStyle(this.el, 'margin-left', "-" + this.actualGutter / 2 + "px");
        this.renderer.setStyle(this.el, 'margin-right', "-" + this.actualGutter / 2 + "px");
    };
    /**
     * @return {?}
     */
    NzRowComponent.prototype.calculateGutter = /**
     * @return {?}
     */
    function () {
        if (typeof this.nzGutter !== 'object') {
            return this.nzGutter;
        }
        else if (this.breakPoint && this.nzGutter[this.breakPoint]) {
            return this.nzGutter[this.breakPoint];
        }
        else {
            return;
        }
    };
    /**
     * @return {?}
     */
    NzRowComponent.prototype.updateGutter = /**
     * @return {?}
     */
    function () {
        this.actualGutter = this.calculateGutter();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzRowComponent.prototype.onWindowResize = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.watchMedia();
    };
    /**
     * @return {?}
     */
    NzRowComponent.prototype.watchMedia = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(responsiveMap).map(function (screen) {
            /** @type {?} */
            var matchBelow = matchMedia(responsiveMap[screen]).matches;
            if (matchBelow) {
                _this.breakPoint = screen;
            }
        });
        this.updateGutter();
        this.setStyle();
    };
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    NzRowComponent.prototype.setClassMap = /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a["" + this.prefixCls] = !this.nzType,
            _a[this.prefixCls + "-" + this.nzType] = this.nzType,
            _a[this.prefixCls + "-" + this.nzType + "-" + this.nzAlign] = this.nzType && this.nzAlign,
            _a[this.prefixCls + "-" + this.nzType + "-" + this.nzJustify] = this.nzType && this.nzJustify,
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    /**
     * @return {?}
     */
    NzRowComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.watchMedia();
    };
    NzRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-row',
                    preserveWhitespaces: false,
                    providers: [NzUpdateHostClassService],
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    NzRowComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService }
    ]; };
    NzRowComponent.propDecorators = {
        nzType: [{ type: Input }],
        nzAlign: [{ type: Input }],
        nzJustify: [{ type: Input }],
        nzGutter: [{ type: Input }],
        onWindowResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return NzRowComponent;
}());
export { NzRowComponent };
function NzRowComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzRowComponent.prototype._gutter;
    /** @type {?} */
    NzRowComponent.prototype._type;
    /** @type {?} */
    NzRowComponent.prototype._align;
    /** @type {?} */
    NzRowComponent.prototype._justify;
    /** @type {?} */
    NzRowComponent.prototype.el;
    /** @type {?} */
    NzRowComponent.prototype.prefixCls;
    /** @type {?} */
    NzRowComponent.prototype.breakPoint;
    /** @type {?} */
    NzRowComponent.prototype.actualGutter;
    /** @type {?} */
    NzRowComponent.prototype.elementRef;
    /** @type {?} */
    NzRowComponent.prototype.renderer;
    /** @type {?} */
    NzRowComponent.prototype.nzUpdateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJncmlkL256LXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnRGLElBQU0sYUFBYSxHQUFrQjtJQUNuQyxFQUFFLEVBQUcsb0JBQW9CO0lBQ3pCLEVBQUUsRUFBRyxvQkFBb0I7SUFDekIsRUFBRSxFQUFHLG9CQUFvQjtJQUN6QixFQUFFLEVBQUcsb0JBQW9CO0lBQ3pCLEVBQUUsRUFBRyxxQkFBcUI7SUFDMUIsR0FBRyxFQUFFLHFCQUFxQjtDQUMzQixDQUFDOztJQXlHQSx3QkFBbUIsVUFBc0IsRUFBUyxRQUFtQixFQUFTLHdCQUFrRDtRQUE3RyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFTLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7c0JBOUZ0RyxLQUFLO3dCQUNELE9BQU87eUJBRWpCLFNBQVM7UUE0RjNCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDekM7SUF6RkQsc0JBQ0ksa0NBQU07Ozs7UUFLVjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNuQjs7Ozs7UUFSRCxVQUNXLEtBQWE7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCOzs7T0FBQTtJQU1ELHNCQUNJLG1DQUFPOzs7O1FBS1g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7Ozs7O1FBUkQsVUFDWSxLQUFjO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjs7O09BQUE7SUFNRCxzQkFDSSxxQ0FBUzs7OztRQUtiO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCOzs7OztRQVJELFVBQ2MsS0FBZ0I7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCOzs7T0FBQTtJQU1ELHNCQUNJLG9DQUFROzs7O1FBRFo7WUFFRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckI7Ozs7O1FBRUQsVUFBYSxLQUFzQjtZQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCOzs7T0FOQTs7OztJQVFELGlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsYUFBYSxFQUFFLE1BQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLE9BQUksQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLE1BQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLE9BQUksQ0FBQyxDQUFDO0tBQ2hGOzs7O0lBRUQsd0NBQWU7OztJQUFmO1FBQ0UsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0QjthQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBQyxVQUFVLENBQUUsRUFBRTtZQUM5RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBRSxDQUFDO1NBQ3pDO2FBQU07WUFDTCxPQUFPO1NBQ1I7S0FDRjs7OztJQUVELHFDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQzVDOzs7OztJQUdELHVDQUFjOzs7O0lBRGQsVUFDZSxDQUFVO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUNuQjs7OztJQUVELG1DQUFVOzs7SUFBVjtRQUFBLGlCQVNDO1FBUkMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFrQjs7WUFDaEQsSUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBRSxNQUFNLENBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUMvRCxJQUFJLFVBQVUsRUFBRTtnQkFDZCxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQzthQUMxQjtTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7SUFFRCx1R0FBdUc7Ozs7O0lBQ3ZHLG9DQUFXOzs7O0lBQVg7OztRQUNFLElBQU0sUUFBUTtZQUNaLEdBQUUsS0FBRyxJQUFJLENBQUMsU0FBVyxJQUFxQyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ3RFLEdBQUssSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsTUFBUSxJQUFzQixJQUFJLENBQUMsTUFBTTtZQUNyRSxHQUFLLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLE1BQU0sU0FBSSxJQUFJLENBQUMsT0FBUyxJQUFNLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU87WUFDckYsR0FBSyxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxNQUFNLFNBQUksSUFBSSxDQUFDLFNBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTO2dCQUN2RjtRQUNGLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNsRTs7OztJQU1ELGlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDbkI7O2dCQTlHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLFFBQVE7b0JBQzdCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFNBQVMsRUFBWSxDQUFFLHdCQUF3QixDQUFFO29CQUNqRCxxQ0FBOEM7aUJBQy9DOzs7O2dCQXRDQyxVQUFVO2dCQUlWLFNBQVM7Z0JBSUYsd0JBQXdCOzs7eUJBeUM5QixLQUFLOzBCQVVMLEtBQUs7NEJBVUwsS0FBSzsyQkFVTCxLQUFLO2lDQThCTCxZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUUsUUFBUSxDQUFFOzt5QkEvRzdDOztTQXlDYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgbWF0Y2hNZWRpYSB9IGZyb20gJy4uL2NvcmUvcG9seWZpbGwvbWF0Y2gtbWVkaWEnO1xuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcblxuZXhwb3J0IHR5cGUgTnpKdXN0aWZ5ID0gJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnc3BhY2UtYXJvdW5kJyB8ICdzcGFjZS1iZXR3ZWVuJztcbmV4cG9ydCB0eXBlIE56QWxpZ24gPSAndG9wJyB8ICdtaWRkbGUnIHwgJ2JvdHRvbSc7XG5leHBvcnQgdHlwZSBOelR5cGUgPSAnZmxleCcgfCBudWxsO1xuZXhwb3J0IHR5cGUgQnJlYWtwb2ludCA9ICd4eGwnIHwgJ3hsJyB8ICdsZycgfCAnbWQnIHwgJ3NtJyB8ICd4cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJlYWtwb2ludE1hcCB7XG4gIHhzPzogc3RyaW5nO1xuICBzbT86IHN0cmluZztcbiAgbWQ/OiBzdHJpbmc7XG4gIGxnPzogc3RyaW5nO1xuICB4bD86IHN0cmluZztcbiAgeHhsPzogc3RyaW5nO1xufVxuXG5jb25zdCByZXNwb25zaXZlTWFwOiBCcmVha3BvaW50TWFwID0ge1xuICB4cyA6ICcobWF4LXdpZHRoOiA1NzVweCknLFxuICBzbSA6ICcobWluLXdpZHRoOiA1NzZweCknLFxuICBtZCA6ICcobWluLXdpZHRoOiA3NjhweCknLFxuICBsZyA6ICcobWluLXdpZHRoOiA5OTJweCknLFxuICB4bCA6ICcobWluLXdpZHRoOiAxMjAwcHgpJyxcbiAgeHhsOiAnKG1pbi13aWR0aDogMTYwMHB4KSdcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotcm93JyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXJvdy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9ndXR0ZXI6IG51bWJlciB8IG9iamVjdDtcbiAgcHJpdmF0ZSBfdHlwZTogTnpUeXBlO1xuICBwcml2YXRlIF9hbGlnbjogTnpBbGlnbiA9ICd0b3AnO1xuICBwcml2YXRlIF9qdXN0aWZ5OiBOekp1c3RpZnkgPSAnc3RhcnQnO1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LXJvdyc7XG4gIHByaXZhdGUgYnJlYWtQb2ludDogQnJlYWtwb2ludDtcbiAgYWN0dWFsR3V0dGVyOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgc2V0IG56VHlwZSh2YWx1ZTogTnpUeXBlKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBuelR5cGUoKTogTnpUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekFsaWduKHZhbHVlOiBOekFsaWduKSB7XG4gICAgdGhpcy5fYWxpZ24gPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgbnpBbGlnbigpOiBOekFsaWduIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpZ247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpKdXN0aWZ5KHZhbHVlOiBOekp1c3RpZnkpIHtcbiAgICB0aGlzLl9qdXN0aWZ5ID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56SnVzdGlmeSgpOiBOekp1c3RpZnkge1xuICAgIHJldHVybiB0aGlzLl9qdXN0aWZ5O1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IG56R3V0dGVyKCk6IG51bWJlciB8IG9iamVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlcjtcbiAgfVxuXG4gIHNldCBuekd1dHRlcih2YWx1ZTogbnVtYmVyIHwgb2JqZWN0KSB7XG4gICAgdGhpcy5fZ3V0dGVyID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVHdXR0ZXIoKTtcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gIH1cblxuICBzZXRTdHlsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdtYXJnaW4tbGVmdCcsIGAtJHt0aGlzLmFjdHVhbEd1dHRlciAvIDJ9cHhgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdtYXJnaW4tcmlnaHQnLCBgLSR7dGhpcy5hY3R1YWxHdXR0ZXIgLyAyfXB4YCk7XG4gIH1cblxuICBjYWxjdWxhdGVHdXR0ZXIoKTogbnVtYmVyIHtcbiAgICBpZiAodHlwZW9mIHRoaXMubnpHdXR0ZXIgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gdGhpcy5uekd1dHRlcjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJlYWtQb2ludCAmJiB0aGlzLm56R3V0dGVyWyB0aGlzLmJyZWFrUG9pbnQgXSkge1xuICAgICAgcmV0dXJuIHRoaXMubnpHdXR0ZXJbIHRoaXMuYnJlYWtQb2ludCBdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlR3V0dGVyKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0dWFsR3V0dGVyID0gdGhpcy5jYWxjdWxhdGVHdXR0ZXIoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbICckZXZlbnQnIF0pXG4gIG9uV2luZG93UmVzaXplKGU6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLndhdGNoTWVkaWEoKTtcbiAgfVxuXG4gIHdhdGNoTWVkaWEoKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXMocmVzcG9uc2l2ZU1hcCkubWFwKChzY3JlZW46IEJyZWFrcG9pbnQpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoQmVsb3cgPSBtYXRjaE1lZGlhKHJlc3BvbnNpdmVNYXBbIHNjcmVlbiBdKS5tYXRjaGVzO1xuICAgICAgaWYgKG1hdGNoQmVsb3cpIHtcbiAgICAgICAgdGhpcy5icmVha1BvaW50ID0gc2NyZWVuO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlR3V0dGVyKCk7XG4gICAgdGhpcy5zZXRTdHlsZSgpO1xuICB9XG5cbiAgLyoqIHRlbXAgc29sdXRpb24gc2luY2Ugbm8gbWV0aG9kIGFkZCBjbGFzc01hcCB0byBob3N0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzcyODkqL1xuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9YCBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAhdGhpcy5uelR5cGUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpUeXBlfWAgXSAgICAgICAgICAgICAgICAgIDogdGhpcy5uelR5cGUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpUeXBlfS0ke3RoaXMubnpBbGlnbn1gIF0gIDogdGhpcy5uelR5cGUgJiYgdGhpcy5uekFsaWduLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56VHlwZX0tJHt0aGlzLm56SnVzdGlmeX1gIF06IHRoaXMubnpUeXBlICYmIHRoaXMubnpKdXN0aWZ5XG4gICAgfTtcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UpIHtcbiAgICB0aGlzLmVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy53YXRjaE1lZGlhKCk7XG4gIH1cbn1cbiJdfQ==
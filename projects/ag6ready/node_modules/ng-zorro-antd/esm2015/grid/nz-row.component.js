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
const responsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};
export class NzRowComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzUpdateHostClassService
     */
    constructor(elementRef, renderer, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this._align = 'top';
        this._justify = 'start';
        this.prefixCls = 'ant-row';
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzType(value) {
        this._type = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get nzType() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAlign(value) {
        this._align = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get nzAlign() {
        return this._align;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzJustify(value) {
        this._justify = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get nzJustify() {
        return this._justify;
    }
    /**
     * @return {?}
     */
    get nzGutter() {
        return this._gutter;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzGutter(value) {
        this._gutter = value;
        this.updateGutter();
        this.setStyle();
    }
    /**
     * @return {?}
     */
    setStyle() {
        this.renderer.setStyle(this.el, 'margin-left', `-${this.actualGutter / 2}px`);
        this.renderer.setStyle(this.el, 'margin-right', `-${this.actualGutter / 2}px`);
    }
    /**
     * @return {?}
     */
    calculateGutter() {
        if (typeof this.nzGutter !== 'object') {
            return this.nzGutter;
        }
        else if (this.breakPoint && this.nzGutter[this.breakPoint]) {
            return this.nzGutter[this.breakPoint];
        }
        else {
            return;
        }
    }
    /**
     * @return {?}
     */
    updateGutter() {
        this.actualGutter = this.calculateGutter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onWindowResize(e) {
        this.watchMedia();
    }
    /**
     * @return {?}
     */
    watchMedia() {
        Object.keys(responsiveMap).map((screen) => {
            /** @type {?} */
            const matchBelow = matchMedia(responsiveMap[screen]).matches;
            if (matchBelow) {
                this.breakPoint = screen;
            }
        });
        this.updateGutter();
        this.setStyle();
    }
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = {
            [`${this.prefixCls}`]: !this.nzType,
            [`${this.prefixCls}-${this.nzType}`]: this.nzType,
            [`${this.prefixCls}-${this.nzType}-${this.nzAlign}`]: this.nzType && this.nzAlign,
            [`${this.prefixCls}-${this.nzType}-${this.nzJustify}`]: this.nzType && this.nzJustify
        };
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.watchMedia();
    }
}
NzRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-row',
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                template: "<ng-content></ng-content>"
            }] }
];
/** @nocollapse */
NzRowComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzUpdateHostClassService }
];
NzRowComponent.propDecorators = {
    nzType: [{ type: Input }],
    nzAlign: [{ type: Input }],
    nzJustify: [{ type: Input }],
    nzGutter: [{ type: Input }],
    onWindowResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJncmlkL256LXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnRGLE1BQU0sYUFBYSxHQUFrQjtJQUNuQyxFQUFFLEVBQUcsb0JBQW9CO0lBQ3pCLEVBQUUsRUFBRyxvQkFBb0I7SUFDekIsRUFBRSxFQUFHLG9CQUFvQjtJQUN6QixFQUFFLEVBQUcsb0JBQW9CO0lBQ3pCLEVBQUUsRUFBRyxxQkFBcUI7SUFDMUIsR0FBRyxFQUFFLHFCQUFxQjtDQUMzQixDQUFDO0FBUUYsTUFBTTs7Ozs7O0lBaUdKLFlBQW1CLFVBQXNCLEVBQVMsUUFBbUIsRUFBUyx3QkFBa0Q7UUFBN0csZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBUyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO3NCQTlGdEcsS0FBSzt3QkFDRCxPQUFPO3lCQUVqQixTQUFTO1FBNEYzQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ3pDOzs7OztJQXpGRCxJQUNJLE1BQU0sQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNuQjs7Ozs7SUFFRCxJQUNJLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQjs7Ozs7SUFFRCxJQUNJLFNBQVMsQ0FBQyxLQUFnQjtRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDdEI7Ozs7SUFFRCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBc0I7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNqQjs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNoRjs7OztJQUVELGVBQWU7UUFDYixJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCO2FBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBRSxFQUFFO1lBQzlELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFFLENBQUM7U0FDekM7YUFBTTtZQUNMLE9BQU87U0FDUjtLQUNGOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQzVDOzs7OztJQUdELGNBQWMsQ0FBQyxDQUFVO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUNuQjs7OztJQUVELFVBQVU7UUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQWtCLEVBQUUsRUFBRTs7WUFDcEQsTUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBRSxNQUFNLENBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUMvRCxJQUFJLFVBQVUsRUFBRTtnQkFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQzthQUMxQjtTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7Ozs7O0lBR0QsV0FBVzs7UUFDVCxNQUFNLFFBQVEsR0FBRztZQUNmLENBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUUsRUFBbUMsQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUN0RSxDQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUUsRUFBb0IsSUFBSSxDQUFDLE1BQU07WUFDckUsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUUsRUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQ3JGLENBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUztTQUN4RixDQUFDO1FBQ0YsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ2xFOzs7O0lBTUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDbkI7OztZQTlHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLFFBQVE7Z0JBQzdCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFNBQVMsRUFBWSxDQUFFLHdCQUF3QixDQUFFO2dCQUNqRCxxQ0FBOEM7YUFDL0M7Ozs7WUF0Q0MsVUFBVTtZQUlWLFNBQVM7WUFJRix3QkFBd0I7OztxQkF5QzlCLEtBQUs7c0JBVUwsS0FBSzt3QkFVTCxLQUFLO3VCQVVMLEtBQUs7NkJBOEJMLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBRSxRQUFRLENBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBtYXRjaE1lZGlhIH0gZnJvbSAnLi4vY29yZS9wb2x5ZmlsbC9tYXRjaC1tZWRpYSc7XG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuXG5leHBvcnQgdHlwZSBOekp1c3RpZnkgPSAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyB8ICdzcGFjZS1hcm91bmQnIHwgJ3NwYWNlLWJldHdlZW4nO1xuZXhwb3J0IHR5cGUgTnpBbGlnbiA9ICd0b3AnIHwgJ21pZGRsZScgfCAnYm90dG9tJztcbmV4cG9ydCB0eXBlIE56VHlwZSA9ICdmbGV4JyB8IG51bGw7XG5leHBvcnQgdHlwZSBCcmVha3BvaW50ID0gJ3h4bCcgfCAneGwnIHwgJ2xnJyB8ICdtZCcgfCAnc20nIHwgJ3hzJztcblxuZXhwb3J0IGludGVyZmFjZSBCcmVha3BvaW50TWFwIHtcbiAgeHM/OiBzdHJpbmc7XG4gIHNtPzogc3RyaW5nO1xuICBtZD86IHN0cmluZztcbiAgbGc/OiBzdHJpbmc7XG4gIHhsPzogc3RyaW5nO1xuICB4eGw/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHJlc3BvbnNpdmVNYXA6IEJyZWFrcG9pbnRNYXAgPSB7XG4gIHhzIDogJyhtYXgtd2lkdGg6IDU3NXB4KScsXG4gIHNtIDogJyhtaW4td2lkdGg6IDU3NnB4KScsXG4gIG1kIDogJyhtaW4td2lkdGg6IDc2OHB4KScsXG4gIGxnIDogJyhtaW4td2lkdGg6IDk5MnB4KScsXG4gIHhsIDogJyhtaW4td2lkdGg6IDEyMDBweCknLFxuICB4eGw6ICcobWluLXdpZHRoOiAxNjAwcHgpJ1xufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1yb3cnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotcm93LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2d1dHRlcjogbnVtYmVyIHwgb2JqZWN0O1xuICBwcml2YXRlIF90eXBlOiBOelR5cGU7XG4gIHByaXZhdGUgX2FsaWduOiBOekFsaWduID0gJ3RvcCc7XG4gIHByaXZhdGUgX2p1c3RpZnk6IE56SnVzdGlmeSA9ICdzdGFydCc7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtcm93JztcbiAgcHJpdmF0ZSBicmVha1BvaW50OiBCcmVha3BvaW50O1xuICBhY3R1YWxHdXR0ZXI6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpUeXBlKHZhbHVlOiBOelR5cGUpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56VHlwZSgpOiBOelR5cGUge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56QWxpZ24odmFsdWU6IE56QWxpZ24pIHtcbiAgICB0aGlzLl9hbGlnbiA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBuekFsaWduKCk6IE56QWxpZ24ge1xuICAgIHJldHVybiB0aGlzLl9hbGlnbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekp1c3RpZnkodmFsdWU6IE56SnVzdGlmeSkge1xuICAgIHRoaXMuX2p1c3RpZnkgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgbnpKdXN0aWZ5KCk6IE56SnVzdGlmeSB7XG4gICAgcmV0dXJuIHRoaXMuX2p1c3RpZnk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgbnpHdXR0ZXIoKTogbnVtYmVyIHwgb2JqZWN0IHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyO1xuICB9XG5cbiAgc2V0IG56R3V0dGVyKHZhbHVlOiBudW1iZXIgfCBvYmplY3QpIHtcbiAgICB0aGlzLl9ndXR0ZXIgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUd1dHRlcigpO1xuICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgfVxuXG4gIHNldFN0eWxlKCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ21hcmdpbi1sZWZ0JywgYC0ke3RoaXMuYWN0dWFsR3V0dGVyIC8gMn1weGApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ21hcmdpbi1yaWdodCcsIGAtJHt0aGlzLmFjdHVhbEd1dHRlciAvIDJ9cHhgKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUd1dHRlcigpOiBudW1iZXIge1xuICAgIGlmICh0eXBlb2YgdGhpcy5uekd1dHRlciAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm56R3V0dGVyO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmVha1BvaW50ICYmIHRoaXMubnpHdXR0ZXJbIHRoaXMuYnJlYWtQb2ludCBdKSB7XG4gICAgICByZXR1cm4gdGhpcy5uekd1dHRlclsgdGhpcy5icmVha1BvaW50IF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVHdXR0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5hY3R1YWxHdXR0ZXIgPSB0aGlzLmNhbGN1bGF0ZUd1dHRlcigpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsgJyRldmVudCcgXSlcbiAgb25XaW5kb3dSZXNpemUoZTogVUlFdmVudCk6IHZvaWQge1xuICAgIHRoaXMud2F0Y2hNZWRpYSgpO1xuICB9XG5cbiAgd2F0Y2hNZWRpYSgpOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyhyZXNwb25zaXZlTWFwKS5tYXAoKHNjcmVlbjogQnJlYWtwb2ludCkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hCZWxvdyA9IG1hdGNoTWVkaWEocmVzcG9uc2l2ZU1hcFsgc2NyZWVuIF0pLm1hdGNoZXM7XG4gICAgICBpZiAobWF0Y2hCZWxvdykge1xuICAgICAgICB0aGlzLmJyZWFrUG9pbnQgPSBzY3JlZW47XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVHdXR0ZXIoKTtcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gIH1cblxuICAvKiogdGVtcCBzb2x1dGlvbiBzaW5jZSBubyBtZXRob2QgYWRkIGNsYXNzTWFwIHRvIGhvc3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNzI4OSovXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc31gIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICF0aGlzLm56VHlwZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelR5cGV9YCBdICAgICAgICAgICAgICAgICAgOiB0aGlzLm56VHlwZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelR5cGV9LSR7dGhpcy5uekFsaWdufWAgXSAgOiB0aGlzLm56VHlwZSAmJiB0aGlzLm56QWxpZ24sXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpUeXBlfS0ke3RoaXMubnpKdXN0aWZ5fWAgXTogdGhpcy5uelR5cGUgJiYgdGhpcy5uekp1c3RpZnlcbiAgICB9O1xuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCBjbGFzc01hcCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSkge1xuICAgIHRoaXMuZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB0aGlzLndhdGNoTWVkaWEoKTtcbiAgfVxufVxuIl19
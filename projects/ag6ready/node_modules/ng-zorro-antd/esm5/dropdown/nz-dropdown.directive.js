/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
var NzDropDownDirective = /** @class */ (function () {
    function NzDropDownDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.$mouseenter = new Subject();
        this.$mouseleave = new Subject();
        this.$click = new Subject();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    NzDropDownDirective.prototype.onMouseEnter = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.$mouseenter.next(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzDropDownDirective.prototype.onMouseLeave = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.$mouseleave.next(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzDropDownDirective.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.$click.next(e);
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.elementRef.nativeElement.nodeName === 'A') {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-dropdown-link');
        }
    };
    NzDropDownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-dropdown]',
                    host: {
                        '[class.ant-dropdown-trigger]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    NzDropDownDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzDropDownDirective.propDecorators = {
        onMouseEnter: [{ type: HostListener, args: ['mouseenter', ['$event'],] }],
        onMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return NzDropDownDirective;
}());
export { NzDropDownDirective };
function NzDropDownDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDropDownDirective.prototype.$mouseenter;
    /** @type {?} */
    NzDropDownDirective.prototype.$mouseleave;
    /** @type {?} */
    NzDropDownDirective.prototype.$click;
    /** @type {?} */
    NzDropDownDirective.prototype.elementRef;
    /** @type {?} */
    NzDropDownDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRyb3Bkb3duL256LWRyb3Bkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTRCN0IsNkJBQW1CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7MkJBbkJ4RCxJQUFJLE9BQU8sRUFBYzsyQkFDekIsSUFBSSxPQUFPLEVBQWM7c0JBQzlCLElBQUksT0FBTyxFQUFjO0tBa0JqQzs7Ozs7SUFmRCwwQ0FBWTs7OztJQURaLFVBQ2EsQ0FBYTtRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMxQjs7Ozs7SUFHRCwwQ0FBWTs7OztJQURaLFVBQ2EsQ0FBYTtRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMxQjs7Ozs7SUFHRCxxQ0FBTzs7OztJQURQLFVBQ1EsQ0FBYTtRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNyQjs7OztJQUtELHNDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxLQUFLLEdBQUcsRUFBRTtZQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1NBQzVFO0tBQ0Y7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLElBQUksRUFBTTt3QkFDUiw4QkFBOEIsRUFBRSxNQUFNO3FCQUN2QztpQkFDRjs7OztnQkFSbUIsVUFBVTtnQkFBd0IsU0FBUzs7OytCQWM1RCxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUUsUUFBUSxDQUFFOytCQUt2QyxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUUsUUFBUSxDQUFFOzBCQUt2QyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUUsUUFBUSxDQUFFOzs4QkF4QnJDOztTQVNhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotZHJvcGRvd25dJyxcbiAgaG9zdCAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi10cmlnZ2VyXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56RHJvcERvd25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAkbW91c2VlbnRlciA9IG5ldyBTdWJqZWN0PE1vdXNlRXZlbnQ+KCk7XG4gICRtb3VzZWxlYXZlID0gbmV3IFN1YmplY3Q8TW91c2VFdmVudD4oKTtcbiAgJGNsaWNrID0gbmV3IFN1YmplY3Q8TW91c2VFdmVudD4oKTtcblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJywgWyAnJGV2ZW50JyBdKVxuICBvbk1vdXNlRW50ZXIoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuJG1vdXNlZW50ZXIubmV4dChlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbICckZXZlbnQnIF0pXG4gIG9uTW91c2VMZWF2ZShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy4kbW91c2VsZWF2ZS5uZXh0KGUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbICckZXZlbnQnIF0pXG4gIG9uQ2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuJGNsaWNrLm5leHQoZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQubm9kZU5hbWUgPT09ICdBJykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1kcm9wZG93bi1saW5rJyk7XG4gICAgfVxuICB9XG59XG4iXX0=
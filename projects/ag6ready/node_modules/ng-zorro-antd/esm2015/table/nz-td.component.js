/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
export class NzTdComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._showExpand = false;
        this._expand = false;
        this._showCheckbox = false;
        this.isIndentSizeSet = false;
        this.nzChecked = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzCheckedChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzIndentSize(value) {
        this._indentSize = value;
        this.isIndentSizeSet = isNotNil(value);
        this.updateExpandIconClass();
    }
    /**
     * @return {?}
     */
    get nzIndentSize() {
        return this._indentSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzExpand(value) {
        this._expand = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzExpand() {
        return this._expand;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowExpand(value) {
        this._showExpand = toBoolean(value);
        this.updateExpandIconClass();
    }
    /**
     * @return {?}
     */
    get nzShowExpand() {
        return this._showExpand;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowCheckbox(value) {
        this._showCheckbox = toBoolean(value);
        if (this._showCheckbox) {
            this.renderer.addClass(this.el, 'ant-table-selection-column');
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-selection-column');
        }
    }
    /**
     * @return {?}
     */
    get nzShowCheckbox() {
        return this._showCheckbox;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzLeft(value) {
        if (isNotNil(value)) {
            this.renderer.addClass(this.el, 'ant-table-td-left-sticky');
            this.renderer.setStyle(this.el, 'left', value);
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-td-left-sticky');
            this.renderer.removeStyle(this.el, 'left');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzRight(value) {
        if (isNotNil(value)) {
            this.renderer.addClass(this.el, 'ant-table-td-right-sticky');
            this.renderer.setStyle(this.el, 'right', value);
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-td-right-sticky');
            this.renderer.removeStyle(this.el, 'right');
        }
    }
    /**
     * @return {?}
     */
    updateExpandIconClass() {
        if (this.nzShowExpand && !this.isIndentSizeSet) {
            this.renderer.addClass(this.el, 'ant-table-row-expand-icon-cell');
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-row-expand-icon-cell');
        }
    }
    /**
     * @return {?}
     */
    expandChange() {
        this.nzExpand = !this.nzExpand;
        this.nzExpandChange.emit(this.nzExpand);
    }
}
NzTdComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'td:not(.nz-disable-td)',
                template: "<span class=\"ant-table-row-indent\" *ngIf=\"nzIndentSize >= 0\" [style.padding-left.px]=\"nzIndentSize\"></span>\n<label\n  *ngIf=\"nzShowCheckbox\"\n  nz-checkbox\n  [nzDisabled]=\"nzDisabled\"\n  [(ngModel)]=\"nzChecked\"\n  [nzIndeterminate]=\"nzIndeterminate\"\n  (ngModelChange)=\"nzCheckedChange.emit($event)\">\n</label>\n<span\n  *ngIf=\"!nzShowExpand && nzIndentSize != null\"\n  class=\"ant-table-row-expand-icon ant-table-row-spaced\"></span>\n<span\n  *ngIf=\"nzShowExpand\"\n  class=\"ant-table-row-expand-icon\"\n  (click)=\"expandChange()\"\n  [class.ant-table-row-expanded]=\"nzExpand\"\n  [class.ant-table-row-collapsed]=\"!nzExpand\"></span>\n<ng-content></ng-content>"
            }] }
];
/** @nocollapse */
NzTdComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzTdComponent.propDecorators = {
    nzChecked: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzIndeterminate: [{ type: Input }],
    nzCheckedChange: [{ type: Output }],
    nzExpandChange: [{ type: Output }],
    nzIndentSize: [{ type: Input }],
    nzExpand: [{ type: Input }],
    nzShowExpand: [{ type: Input }],
    nzShowCheckbox: [{ type: Input }],
    nzLeft: [{ type: Input }],
    nzRight: [{ type: Input }]
};
function NzTdComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTdComponent.prototype._showExpand;
    /** @type {?} */
    NzTdComponent.prototype._indentSize;
    /** @type {?} */
    NzTdComponent.prototype._expand;
    /** @type {?} */
    NzTdComponent.prototype._showCheckbox;
    /** @type {?} */
    NzTdComponent.prototype.isIndentSizeSet;
    /** @type {?} */
    NzTdComponent.prototype.el;
    /** @type {?} */
    NzTdComponent.prototype.nzChecked;
    /** @type {?} */
    NzTdComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTdComponent.prototype.nzIndeterminate;
    /** @type {?} */
    NzTdComponent.prototype.nzCheckedChange;
    /** @type {?} */
    NzTdComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTdComponent.prototype.elementRef;
    /** @type {?} */
    NzTdComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPakQsTUFBTTs7Ozs7SUE0RkosWUFBb0IsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVzsyQkEzRmpELEtBQUs7dUJBRVQsS0FBSzs2QkFDQyxLQUFLOytCQUNYLEtBQUs7eUJBRUYsS0FBSzswQkFDSixLQUFLOytCQUNBLEtBQUs7K0JBQ0osSUFBSSxZQUFZLEVBQVc7OEJBQzVCLElBQUksWUFBWSxFQUFXO1FBa0ZwRCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ3pDOzs7OztJQWpGRCxJQUNJLFlBQVksQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0tBQzlCOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7OztJQUVELElBQ0ksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakM7Ozs7SUFF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OzhCQUNMLEtBQUs7OEJBQ0wsTUFBTTs2QkFDTixNQUFNOzJCQUVOLEtBQUs7dUJBV0wsS0FBSzsyQkFTTCxLQUFLOzZCQVVMLEtBQUs7cUJBY0wsS0FBSztzQkFXTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvciAgIDogJ3RkOm5vdCgubnotZGlzYWJsZS10ZCknLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56VGRDb21wb25lbnQge1xuICBwcml2YXRlIF9zaG93RXhwYW5kID0gZmFsc2U7XG4gIHByaXZhdGUgX2luZGVudFNpemU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfZXhwYW5kID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dDaGVja2JveCA9IGZhbHNlO1xuICBpc0luZGVudFNpemVTZXQgPSBmYWxzZTtcbiAgZWw6IEhUTUxFbGVtZW50O1xuICBASW5wdXQoKSBuekNoZWNrZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBuekluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgQE91dHB1dCgpIG56Q2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIG56RXhwYW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekluZGVudFNpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2luZGVudFNpemUgPSB2YWx1ZTtcbiAgICB0aGlzLmlzSW5kZW50U2l6ZVNldCA9IGlzTm90TmlsKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZUV4cGFuZEljb25DbGFzcygpO1xuICB9XG5cbiAgZ2V0IG56SW5kZW50U2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pbmRlbnRTaXplO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RXhwYW5kKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZXhwYW5kID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekV4cGFuZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd0V4cGFuZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dFeHBhbmQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMudXBkYXRlRXhwYW5kSWNvbkNsYXNzKCk7XG4gIH1cblxuICBnZXQgbnpTaG93RXhwYW5kKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93RXhwYW5kO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd0NoZWNrYm94KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0NoZWNrYm94ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fc2hvd0NoZWNrYm94KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbicpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelNob3dDaGVja2JveCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0NoZWNrYm94O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56TGVmdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXRkLWxlZnQtc3RpY2t5Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdsZWZ0JywgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtdGQtbGVmdC1zdGlja3knKTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbCwgJ2xlZnQnKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpSaWdodCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXRkLXJpZ2h0LXN0aWNreScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncmlnaHQnLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS10ZC1yaWdodC1zdGlja3knKTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbCwgJ3JpZ2h0Jyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRXhwYW5kSWNvbkNsYXNzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56U2hvd0V4cGFuZCAmJiAhdGhpcy5pc0luZGVudFNpemVTZXQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1yb3ctZXhwYW5kLWljb24tY2VsbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtcm93LWV4cGFuZC1pY29uLWNlbGwnKTtcbiAgICB9XG4gIH1cblxuICBleHBhbmRDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5uekV4cGFuZCA9ICF0aGlzLm56RXhwYW5kO1xuICAgIHRoaXMubnpFeHBhbmRDaGFuZ2UuZW1pdCh0aGlzLm56RXhwYW5kKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Host, HostBinding, Input, Optional, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { isNotNil } from '../core/util/check';
import { NzRowComponent } from './nz-row.component';
import { NzRowDirective } from './nz-row.directive';
/**
 * @record
 */
export function EmbeddedProperty() { }
function EmbeddedProperty_tsickle_Closure_declarations() {
    /** @type {?} */
    EmbeddedProperty.prototype.span;
    /** @type {?} */
    EmbeddedProperty.prototype.pull;
    /** @type {?} */
    EmbeddedProperty.prototype.push;
    /** @type {?} */
    EmbeddedProperty.prototype.offset;
    /** @type {?} */
    EmbeddedProperty.prototype.order;
}
export class NzColComponent {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     * @param {?} nzRowComponent
     * @param {?} nzRowDirective
     * @param {?} renderer
     */
    constructor(nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective, renderer) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzRowComponent = nzRowComponent;
        this.nzRowDirective = nzRowDirective;
        this.renderer = renderer;
        this.prefixCls = 'ant-col';
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    get paddingLeft() {
        return this.nzRow && this.nzRow.actualGutter / 2;
    }
    /**
     * @return {?}
     */
    get paddingRight() {
        return this.nzRow && this.nzRow.actualGutter / 2;
    }
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = Object.assign({ [`${this.prefixCls}-${this.nzSpan}`]: isNotNil(this.nzSpan), [`${this.prefixCls}-order-${this.nzOrder}`]: isNotNil(this.nzOrder), [`${this.prefixCls}-offset-${this.nzOffset}`]: isNotNil(this.nzOffset), [`${this.prefixCls}-pull-${this.nzPull}`]: isNotNil(this.nzPull), [`${this.prefixCls}-push-${this.nzPush}`]: isNotNil(this.nzPush) }, this.generateClass());
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    /**
     * @return {?}
     */
    generateClass() {
        /** @type {?} */
        const listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        /** @type {?} */
        const listClassMap = {};
        listOfSizeInputName.forEach(name => {
            /** @type {?} */
            const sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil(this[name])) {
                if ((typeof (this[name]) === 'number') || (typeof (this[name]) === 'string')) {
                    listClassMap[`${this.prefixCls}-${sizeName}-${this[name]}`] = true;
                }
                else {
                    listClassMap[`${this.prefixCls}-${sizeName}-${this[name].span}`] = this[name] && isNotNil(this[name].span);
                    listClassMap[`${this.prefixCls}-${sizeName}-pull-${this[name].pull}`] = this[name] && isNotNil(this[name].pull);
                    listClassMap[`${this.prefixCls}-${sizeName}-push-${this[name].push}`] = this[name] && isNotNil(this[name].push);
                    listClassMap[`${this.prefixCls}-${sizeName}-offset-${this[name].offset}`] = this[name] && isNotNil(this[name].offset);
                    listClassMap[`${this.prefixCls}-${sizeName}-order-${this[name].order}`] = this[name] && isNotNil(this[name].order);
                }
            }
        });
        return listClassMap;
    }
    /**
     * @return {?}
     */
    get nzRow() {
        return this.nzRowComponent || this.nzRowDirective;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
}
NzColComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-col',
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                template: "<ng-content></ng-content>"
            }] }
];
/** @nocollapse */
NzColComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: NzRowComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
    { type: Renderer2 }
];
NzColComponent.propDecorators = {
    paddingLeft: [{ type: HostBinding, args: ['style.padding-left.px',] }],
    paddingRight: [{ type: HostBinding, args: ['style.padding-right.px',] }],
    nzSpan: [{ type: Input }],
    nzOrder: [{ type: Input }],
    nzOffset: [{ type: Input }],
    nzPush: [{ type: Input }],
    nzPull: [{ type: Input }],
    nzXs: [{ type: Input }],
    nzSm: [{ type: Input }],
    nzMd: [{ type: Input }],
    nzLg: [{ type: Input }],
    nzXl: [{ type: Input }],
    nzXXl: [{ type: Input }]
};
function NzColComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzColComponent.prototype.el;
    /** @type {?} */
    NzColComponent.prototype.prefixCls;
    /** @type {?} */
    NzColComponent.prototype.nzSpan;
    /** @type {?} */
    NzColComponent.prototype.nzOrder;
    /** @type {?} */
    NzColComponent.prototype.nzOffset;
    /** @type {?} */
    NzColComponent.prototype.nzPush;
    /** @type {?} */
    NzColComponent.prototype.nzPull;
    /** @type {?} */
    NzColComponent.prototype.nzXs;
    /** @type {?} */
    NzColComponent.prototype.nzSm;
    /** @type {?} */
    NzColComponent.prototype.nzMd;
    /** @type {?} */
    NzColComponent.prototype.nzLg;
    /** @type {?} */
    NzColComponent.prototype.nzXl;
    /** @type {?} */
    NzColComponent.prototype.nzXXl;
    /** @type {?} */
    NzColComponent.prototype.nzUpdateHostClassService;
    /** @type {?} */
    NzColComponent.prototype.elementRef;
    /** @type {?} */
    NzColComponent.prototype.nzRowComponent;
    /** @type {?} */
    NzColComponent.prototype.nzRowDirective;
    /** @type {?} */
    NzColComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJncmlkL256LWNvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixXQUFXLEVBQ1gsS0FBSyxFQUdMLFFBQVEsRUFDUixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JwRCxNQUFNOzs7Ozs7OztJQW9FSixZQUFvQix3QkFBa0QsRUFBVSxVQUFzQixFQUE2QixjQUE4QixFQUE2QixjQUE4QixFQUFVLFFBQW1CO1FBQXJPLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQTZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUE2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO3lCQWxFck8sU0FBUztRQW1FM0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztLQUN6Qzs7OztJQWxFRCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0tBQ2xEOzs7O0lBRUQsSUFDSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxH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bnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5cbmltcG9ydCB7IE56Um93Q29tcG9uZW50IH0gZnJvbSAnLi9uei1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IE56Um93RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1yb3cuZGlyZWN0aXZlJztcblxuZXhwb3J0IGludGVyZmFjZSBFbWJlZGRlZFByb3BlcnR5IHtcbiAgc3BhbjogbnVtYmVyO1xuICBwdWxsOiBudW1iZXI7XG4gIHB1c2g6IG51bWJlcjtcbiAgb2Zmc2V0OiBudW1iZXI7XG4gIG9yZGVyOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotY29sJyxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWNvbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpDb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtY29sJztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctbGVmdC5weCcpXG4gIGdldCBwYWRkaW5nTGVmdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm56Um93ICYmIHRoaXMubnpSb3cuYWN0dWFsR3V0dGVyIC8gMjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1yaWdodC5weCcpXG4gIGdldCBwYWRkaW5nUmlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uelJvdyAmJiB0aGlzLm56Um93LmFjdHVhbEd1dHRlciAvIDI7XG4gIH1cblxuICBASW5wdXQoKSBuelNwYW46IG51bWJlcjtcbiAgQElucHV0KCkgbnpPcmRlcjogbnVtYmVyO1xuICBASW5wdXQoKSBuek9mZnNldDogbnVtYmVyO1xuICBASW5wdXQoKSBuelB1c2g6IG51bWJlcjtcbiAgQElucHV0KCkgbnpQdWxsOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56WHM6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XG4gIEBJbnB1dCgpIG56U206IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XG4gIEBJbnB1dCgpIG56TWQ6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XG4gIEBJbnB1dCgpIG56TGc6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XG4gIEBJbnB1dCgpIG56WGw6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XG4gIEBJbnB1dCgpIG56WFhsOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuXG4gIC8qKiB0ZW1wIHNvbHV0aW9uIHNpbmNlIG5vIG1ldGhvZCBhZGQgY2xhc3NNYXAgdG8gaG9zdCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy83Mjg5Ki9cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpTcGFufWAgXSAgICAgICAgIDogaXNOb3ROaWwodGhpcy5uelNwYW4pLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tb3JkZXItJHt0aGlzLm56T3JkZXJ9YCBdICA6IGlzTm90TmlsKHRoaXMubnpPcmRlciksXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1vZmZzZXQtJHt0aGlzLm56T2Zmc2V0fWAgXTogaXNOb3ROaWwodGhpcy5uek9mZnNldCksXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1wdWxsLSR7dGhpcy5uelB1bGx9YCBdICAgIDogaXNOb3ROaWwodGhpcy5uelB1bGwpLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tcHVzaC0ke3RoaXMubnpQdXNofWAgXSAgICA6IGlzTm90TmlsKHRoaXMubnpQdXNoKSxcbiAgICAgIC4uLnRoaXMuZ2VuZXJhdGVDbGFzcygpXG4gICAgfTtcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xuICB9XG5cbiAgZ2VuZXJhdGVDbGFzcygpOiBvYmplY3Qge1xuICAgIGNvbnN0IGxpc3RPZlNpemVJbnB1dE5hbWUgPSBbICduelhzJywgJ256U20nLCAnbnpNZCcsICduekxnJywgJ256WGwnLCAnbnpYWGwnIF07XG4gICAgY29uc3QgbGlzdENsYXNzTWFwID0ge307XG4gICAgbGlzdE9mU2l6ZUlucHV0TmFtZS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgY29uc3Qgc2l6ZU5hbWUgPSBuYW1lLnJlcGxhY2UoJ256JywgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoaXNOb3ROaWwodGhpc1sgbmFtZSBdKSkge1xuICAgICAgICBpZiAoKHR5cGVvZih0aGlzWyBuYW1lIF0pID09PSAnbnVtYmVyJykgfHwgKHR5cGVvZiAodGhpc1sgbmFtZSBdKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgICAgbGlzdENsYXNzTWFwWyBgJHt0aGlzLnByZWZpeENsc30tJHtzaXplTmFtZX0tJHt0aGlzWyBuYW1lIF19YCBdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaXN0Q2xhc3NNYXBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfS0ke3RoaXNbIG5hbWUgXS5zcGFufWAgXSA9IHRoaXNbIG5hbWUgXSAmJiBpc05vdE5pbCh0aGlzWyBuYW1lIF0uc3Bhbik7XG4gICAgICAgICAgbGlzdENsYXNzTWFwWyBgJHt0aGlzLnByZWZpeENsc30tJHtzaXplTmFtZX0tcHVsbC0ke3RoaXNbIG5hbWUgXS5wdWxsfWAgXSA9IHRoaXNbIG5hbWUgXSAmJiBpc05vdE5pbCh0aGlzWyBuYW1lIF0ucHVsbCk7XG4gICAgICAgICAgbGlzdENsYXNzTWFwWyBgJHt0aGlzLnByZWZpeENsc30tJHtzaXplTmFtZX0tcHVzaC0ke3RoaXNbIG5hbWUgXS5wdXNofWAgXSA9IHRoaXNbIG5hbWUgXSAmJiBpc05vdE5pbCh0aGlzWyBuYW1lIF0ucHVzaCk7XG4gICAgICAgICAgbGlzdENsYXNzTWFwWyBgJHt0aGlzLnByZWZpeENsc30tJHtzaXplTmFtZX0tb2Zmc2V0LSR7dGhpc1sgbmFtZSBdLm9mZnNldH1gIF0gPSB0aGlzWyBuYW1lIF0gJiYgaXNOb3ROaWwodGhpc1sgbmFtZSBdLm9mZnNldCk7XG4gICAgICAgICAgbGlzdENsYXNzTWFwWyBgJHt0aGlzLnByZWZpeENsc30tJHtzaXplTmFtZX0tb3JkZXItJHt0aGlzWyBuYW1lIF0ub3JkZXJ9YCBdID0gdGhpc1sgbmFtZSBdICYmIGlzTm90TmlsKHRoaXNbIG5hbWUgXS5vcmRlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pO1xuICAgIHJldHVybiBsaXN0Q2xhc3NNYXA7XG4gIH1cblxuICBnZXQgbnpSb3coKTogTnpSb3dDb21wb25lbnQge1xuICAgIHJldHVybiB0aGlzLm56Um93Q29tcG9uZW50IHx8IHRoaXMubnpSb3dEaXJlY3RpdmU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFsgcHJvcGVydHlOYW1lOiBzdHJpbmcgXTogU2ltcGxlQ2hhbmdlIH0pOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIG56Um93Q29tcG9uZW50OiBOelJvd0NvbXBvbmVudCwgQE9wdGlvbmFsKCkgQEhvc3QoKSBwdWJsaWMgbnpSb3dEaXJlY3RpdmU6IE56Um93RGlyZWN0aXZlLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLmVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cbn1cbiJdfQ==
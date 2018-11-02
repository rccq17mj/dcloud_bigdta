/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { isNotNil } from '../core/util/check';
import { InputBoolean } from '../core/util/convert';
import { NzTreeNode } from './nz-tree-node';
import { NzTreeService } from './nz-tree.service';
var NzTreeComponent = /** @class */ (function () {
    function NzTreeComponent(nzTreeService) {
        this.nzTreeService = nzTreeService;
        this.nzShowIcon = false;
        this.nzShowLine = false;
        this.nzCheckStrictly = false;
        this.nzCheckable = false;
        this.nzShowExpand = true;
        this.nzAsyncData = false;
        this.nzDraggable = false;
        this.nzMultiple = false;
        this.nzExpandAll = false;
        /**
         * @deprecated use
         * nzExpandAll instead
         */
        this.nzDefaultExpandAll = false;
        // model bind
        this.nzExpandedKeysChange = new EventEmitter();
        this.nzSelectedKeysChange = new EventEmitter();
        this.nzCheckedKeysChange = new EventEmitter();
        this.nzSearchValueChange = new EventEmitter();
        /**
         * @deprecated use
         * nzSearchValueChange instead
         */
        this.nzOnSearchNode = new EventEmitter();
        this.nzClick = new EventEmitter();
        this.nzDblClick = new EventEmitter();
        this.nzContextMenu = new EventEmitter();
        this.nzCheckBoxChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.nzOnDragStart = new EventEmitter();
        this.nzOnDragEnter = new EventEmitter();
        this.nzOnDragOver = new EventEmitter();
        this.nzOnDragLeave = new EventEmitter();
        this.nzOnDrop = new EventEmitter();
        this.nzOnDragEnd = new EventEmitter();
        this._searchValue = '';
        // tslint:disable-next-line:no-any
        this.nzDefaultSubject = new Subject();
        this.nzNodes = [];
        this.prefixCls = 'ant-tree';
        this.nzTreeClass = {};
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
    }
    Object.defineProperty(NzTreeComponent.prototype, "nzData", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (Array.isArray(value) && value.length > 0) {
                if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
                    // has not been new NzTreeNode
                    this.nzNodes = value.map(function (item) { return (new NzTreeNode(item)); });
                }
                else {
                    this.nzNodes = value;
                }
                this.nzTreeService.conductOption.isCheckStrictly = this.nzCheckStrictly;
                this.nzTreeService.initTree(this.nzNodes);
            }
            else {
                if (value !== null) {
                    console.warn('ngModel only accepts an array and should be not empty');
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzDefaultExpandedKeys", {
        /**
         * @deprecated use
         * nzExpandedKeys instead
         */
        set: /**
         * @deprecated use
         * nzExpandedKeys instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            setTimeout(function () {
                _this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzDefaultSelectedKeys", {
        /**
         * @deprecated use
         * nzSelectedKeys instead
         */
        set: /**
         * @deprecated use
         * nzSelectedKeys instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            setTimeout(function () {
                _this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzDefaultCheckedKeys", {
        /**
         * @deprecated use
         * nzCheckedKeys instead
         */
        set: /**
         * @deprecated use
         * nzCheckedKeys instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            setTimeout(function () {
                _this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzExpandedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            setTimeout(function () {
                _this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzSelectedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            setTimeout(function () {
                _this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzCheckedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            setTimeout(function () {
                _this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzSearchValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._searchValue = value;
            this.nzTreeService.searchExpand(value);
            if (isNotNil(value)) {
                this.nzSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
                this.nzOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.getTreeNodes = /**
     * @return {?}
     */
    function () {
        return this.nzNodes;
    };
    /**
     * public function
     */
    /**
     * public function
     * @return {?}
     */
    NzTreeComponent.prototype.getCheckedNodeList = /**
     * public function
     * @return {?}
     */
    function () {
        return this.nzTreeService.getCheckedNodeList();
    };
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.getSelectedNodeList = /**
     * @return {?}
     */
    function () {
        return this.nzTreeService.getSelectedNodeList();
    };
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.getHalfCheckedNodeList = /**
     * @return {?}
     */
    function () {
        return this.nzTreeService.getHalfCheckedNodeList();
    };
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.getExpandedNodeList = /**
     * @return {?}
     */
    function () {
        return this.nzTreeService.getExpandedNodeList();
    };
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.getMatchedNodeList = /**
     * @return {?}
     */
    function () {
        return this.nzTreeService.getMatchedNodeList();
    };
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.nzTreeClass = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + '-show-line'] = this.nzShowLine,
            _a[this.prefixCls + "-icon-hide"] = !this.nzShowIcon,
            _a['draggable-tree'] = this.nzDraggable,
            _a);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (Array.isArray(value) && value.length > 0) {
            this.nzNodes = value;
            this.nzTreeService.conductOption.isCheckStrictly = this.nzCheckStrictly;
            this.nzTreeService.initTree(this.nzNodes);
        }
        else {
            if (value !== null) {
                console.warn('ngModel only accepts an array and should be not empty');
            }
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTreeComponent.prototype.registerOnChange = /**
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
    NzTreeComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setClassMap();
        this.nzDefaultSubscription = this.nzDefaultSubject.subscribe(function (data) {
            if (data.keys.length === 0) {
                return;
            }
            switch (data.type) {
                case 'nzExpandedKeys':
                    _this.nzTreeService.calcExpandedKeys(data.keys, _this.nzNodes);
                    _this.nzExpandedKeysChange.emit(data.keys);
                    break;
                case 'nzSelectedKeys':
                    _this.nzTreeService.calcSelectedKeys(data.keys, _this.nzNodes, _this.nzMultiple);
                    _this.nzSelectedKeysChange.emit(data.keys);
                    break;
                case 'nzCheckedKeys':
                    _this.nzTreeService.calcCheckedKeys(data.keys, _this.nzNodes, _this.nzCheckStrictly);
                    _this.nzCheckedKeysChange.emit(data.keys);
                    break;
            }
        });
    };
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.nzDefaultSubscription) {
            this.nzDefaultSubscription.unsubscribe();
            this.nzDefaultSubscription = null;
        }
    };
    NzTreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tree',
                    template: "<ul\n  role=\"tree\"\n  unselectable=\"on\"\n  [ngClass]=\"nzTreeClass\">\n  <nz-tree-node\n    *ngFor=\"let node of nzNodes\"\n    [nzTreeNode]=\"node\"\n    [nzShowLine]=\"nzShowLine\"\n    [nzDraggable]=\"nzDraggable\"\n    [nzCheckable]=\"nzCheckable\"\n    [nzShowExpand]=\"nzShowExpand\"\n    [nzAsyncData]=\"nzAsyncData\"\n    [nzMultiple]=\"nzMultiple\"\n    [nzSearchValue]=\"nzSearchValue\"\n    [nzBeforeDrop]=\"nzBeforeDrop\"\n    [nzCheckStrictly]=\"nzCheckStrictly\"\n    [nzExpandAll]=\"nzExpandAll\"\n    [nzDefaultExpandAll]=\"nzDefaultExpandAll\"\n    [nzTreeTemplate]=\"nzTreeTemplate\"\n    (clickNode)=\"nzClick.emit($event)\"\n    (dblClick)=\"nzDblClick.emit($event)\"\n    (contextMenu)=\"nzContextMenu.emit($event)\"\n    (clickExpand)=\"nzExpandChange.emit($event)\"\n    (clickCheckBox)=\"nzCheckBoxChange.emit($event)\"\n    (nzDragStart)=\"nzOnDragStart.emit($event)\"\n    (nzDragEnter)=\"nzOnDragEnter.emit($event)\"\n    (nzDragOver)=\"nzOnDragOver.emit($event)\"\n    (nzDragLeave)=\"nzOnDragLeave.emit($event)\"\n    (nzDrop)=\"nzOnDrop.emit($event)\"\n    (nzDragEnd)=\"nzOnDragEnd.emit($event)\">\n  </nz-tree-node>\n</ul>",
                    providers: [
                        NzTreeService,
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzTreeComponent; }),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    NzTreeComponent.ctorParameters = function () { return [
        { type: NzTreeService }
    ]; };
    NzTreeComponent.propDecorators = {
        nzShowIcon: [{ type: Input }],
        nzShowLine: [{ type: Input }],
        nzCheckStrictly: [{ type: Input }],
        nzCheckable: [{ type: Input }],
        nzShowExpand: [{ type: Input }],
        nzAsyncData: [{ type: Input }],
        nzDraggable: [{ type: Input }],
        nzMultiple: [{ type: Input }],
        nzExpandAll: [{ type: Input }],
        nzDefaultExpandAll: [{ type: Input }],
        nzBeforeDrop: [{ type: Input }],
        nzData: [{ type: Input }],
        nzDefaultExpandedKeys: [{ type: Input }],
        nzDefaultSelectedKeys: [{ type: Input }],
        nzDefaultCheckedKeys: [{ type: Input }],
        nzExpandedKeys: [{ type: Input }],
        nzSelectedKeys: [{ type: Input }],
        nzCheckedKeys: [{ type: Input }],
        nzSearchValue: [{ type: Input }],
        nzExpandedKeysChange: [{ type: Output }],
        nzSelectedKeysChange: [{ type: Output }],
        nzCheckedKeysChange: [{ type: Output }],
        nzSearchValueChange: [{ type: Output }],
        nzOnSearchNode: [{ type: Output }],
        nzClick: [{ type: Output }],
        nzDblClick: [{ type: Output }],
        nzContextMenu: [{ type: Output }],
        nzCheckBoxChange: [{ type: Output }],
        nzExpandChange: [{ type: Output }],
        nzOnDragStart: [{ type: Output }],
        nzOnDragEnter: [{ type: Output }],
        nzOnDragOver: [{ type: Output }],
        nzOnDragLeave: [{ type: Output }],
        nzOnDrop: [{ type: Output }],
        nzOnDragEnd: [{ type: Output }],
        nzTreeTemplate: [{ type: ContentChild, args: ['nzTreeTemplate',] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzShowIcon", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzShowLine", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzCheckStrictly", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzCheckable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzShowExpand", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzAsyncData", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzDraggable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzMultiple", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzExpandAll", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzDefaultExpandAll", void 0);
    return NzTreeComponent;
}());
export { NzTreeComponent };
function NzTreeComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTreeComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzTreeComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckStrictly;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckable;
    /** @type {?} */
    NzTreeComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeComponent.prototype.nzAsyncData;
    /** @type {?} */
    NzTreeComponent.prototype.nzDraggable;
    /** @type {?} */
    NzTreeComponent.prototype.nzMultiple;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandAll;
    /**
     * @deprecated use
     * nzExpandAll instead
     * @type {?}
     */
    NzTreeComponent.prototype.nzDefaultExpandAll;
    /** @type {?} */
    NzTreeComponent.prototype.nzBeforeDrop;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzSelectedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzSearchValueChange;
    /**
     * @deprecated use
     * nzSearchValueChange instead
     * @type {?}
     */
    NzTreeComponent.prototype.nzOnSearchNode;
    /** @type {?} */
    NzTreeComponent.prototype.nzClick;
    /** @type {?} */
    NzTreeComponent.prototype.nzDblClick;
    /** @type {?} */
    NzTreeComponent.prototype.nzContextMenu;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckBoxChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragStart;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragEnter;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragOver;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragLeave;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDrop;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragEnd;
    /** @type {?} */
    NzTreeComponent.prototype.nzTreeTemplate;
    /** @type {?} */
    NzTreeComponent.prototype._searchValue;
    /** @type {?} */
    NzTreeComponent.prototype.nzDefaultSubject;
    /** @type {?} */
    NzTreeComponent.prototype.nzDefaultSubscription;
    /** @type {?} */
    NzTreeComponent.prototype.nzNodes;
    /** @type {?} */
    NzTreeComponent.prototype.prefixCls;
    /** @type {?} */
    NzTreeComponent.prototype.nzTreeClass;
    /** @type {?} */
    NzTreeComponent.prototype.onChange;
    /** @type {?} */
    NzTreeComponent.prototype.onTouched;
    /** @type {?} */
    NzTreeComponent.prototype.nzTreeService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidHJlZS9uei10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUVHLE1BQU0sRUFBRSxXQUFXLEVBQzVCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFxTmhELHlCQUFtQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTswQkFyTVQsS0FBSzswQkFDTCxLQUFLOytCQUNBLEtBQUs7MkJBQ1QsS0FBSzs0QkFDSixJQUFJOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTixLQUFLOzJCQUNLLEtBQUs7Ozs7O2tDQUtFLEtBQUs7O29DQTJGSCxJQUFJLFlBQVksRUFBWTtvQ0FDNUIsSUFBSSxZQUFZLEVBQVk7bUNBQzdCLElBQUksWUFBWSxFQUFZO21DQUVuQixJQUFJLFlBQVksRUFBRTs7Ozs7OEJBS3ZCLElBQUksWUFBWSxFQUFFO3VCQUV6QixJQUFJLFlBQVksRUFBRTswQkFDZixJQUFJLFlBQVksRUFBRTs2QkFDZixJQUFJLFlBQVksRUFBRTtnQ0FDZixJQUFJLFlBQVksRUFBRTs4QkFDcEIsSUFBSSxZQUFZLEVBQUU7NkJBRW5CLElB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LFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OztRQUtkLFlBQVksRUFBRTs7OzBCQTVDMUI7O1NBOEJhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsIE91dHB1dCwgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQsIE56Rm9ybWF0RW1pdEV2ZW50IH0gZnJvbSAnLi4vdHJlZS9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJy4vbnotdHJlZS1ub2RlJztcbmltcG9ydCB7IE56VHJlZVNlcnZpY2UgfSBmcm9tICcuL256LXRyZWUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ256LXRyZWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotdHJlZS5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVycyAgOiBbXG4gICAgTnpUcmVlU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlICAgIDogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelRyZWVDb21wb25lbnQpLFxuICAgICAgbXVsdGkgICAgICA6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOelRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dJY29uID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dMaW5lID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrU3RyaWN0bHkgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hlY2thYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dFeHBhbmQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBc3luY0RhdGEgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RHJhZ2dhYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek11bHRpcGxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekV4cGFuZEFsbDogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlXG4gICAqIG56RXhwYW5kQWxsIGluc3RlYWRcbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRlZmF1bHRFeHBhbmRBbGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbnpCZWZvcmVEcm9wOiAoY29uZmlybTogTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgQElucHV0KClcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBzZXQgbnpEYXRhKHZhbHVlOiBhbnlbXSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoIXRoaXMubnpUcmVlU2VydmljZS5pc0FycmF5T2ZOelRyZWVOb2RlKHZhbHVlKSkge1xuICAgICAgICAvLyBoYXMgbm90IGJlZW4gbmV3IE56VHJlZU5vZGVcbiAgICAgICAgdGhpcy5uek5vZGVzID0gdmFsdWUubWFwKGl0ZW0gPT4gKG5ldyBOelRyZWVOb2RlKGl0ZW0pKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm56Tm9kZXMgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jb25kdWN0T3B0aW9uLmlzQ2hlY2tTdHJpY3RseSA9IHRoaXMubnpDaGVja1N0cmljdGx5O1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmluaXRUcmVlKHRoaXMubnpOb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ25nTW9kZWwgb25seSBhY2NlcHRzIGFuIGFycmF5IGFuZCBzaG91bGQgYmUgbm90IGVtcHR5Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZVxuICAgKiBuekV4cGFuZGVkS2V5cyBpbnN0ZWFkXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbnpEZWZhdWx0RXhwYW5kZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpFeHBhbmRlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2VcbiAgICogbnpTZWxlY3RlZEtleXMgaW5zdGVhZFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IG56RGVmYXVsdFNlbGVjdGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256U2VsZWN0ZWRLZXlzJywga2V5czogdmFsdWUgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlXG4gICAqIG56Q2hlY2tlZEtleXMgaW5zdGVhZFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IG56RGVmYXVsdENoZWNrZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpDaGVja2VkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RXhwYW5kZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpFeHBhbmRlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNlbGVjdGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256U2VsZWN0ZWRLZXlzJywga2V5czogdmFsdWUgfSk7XG4gICAgfSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpDaGVja2VkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256Q2hlY2tlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNlYXJjaFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWFyY2hWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMubnpUcmVlU2VydmljZS5zZWFyY2hFeHBhbmQodmFsdWUpO1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMubnpTZWFyY2hWYWx1ZUNoYW5nZS5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnc2VhcmNoJywgbnVsbCwgbnVsbCkpO1xuICAgICAgdGhpcy5uek9uU2VhcmNoTm9kZS5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnc2VhcmNoJywgbnVsbCwgbnVsbCkpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelNlYXJjaFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZhbHVlO1xuICB9XG5cbiAgLy8gbW9kZWwgYmluZFxuICBAT3V0cHV0KCkgbnpFeHBhbmRlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuICBAT3V0cHV0KCkgbnpTZWxlY3RlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuICBAT3V0cHV0KCkgbnpDaGVja2VkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG5cbiAgQE91dHB1dCgpIG56U2VhcmNoVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2VcbiAgICogbnpTZWFyY2hWYWx1ZUNoYW5nZSBpbnN0ZWFkXG4gICAqL1xuICBAT3V0cHV0KCkgbnpPblNlYXJjaE5vZGU6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIG56Q2xpY2s6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBuekRibENsaWNrOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbnpDb250ZXh0TWVudTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG56Q2hlY2tCb3hDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBuekV4cGFuZENoYW5nZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KCkgbnpPbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG56T25EcmFnRW50ZXI6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBuek9uRHJhZ092ZXI6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBuek9uRHJhZ0xlYXZlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbnpPbkRyb3A6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBuek9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBDb250ZW50Q2hpbGQoJ256VHJlZVRlbXBsYXRlJykgbnpUcmVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIF9zZWFyY2hWYWx1ZSA9ICcnO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG56RGVmYXVsdFN1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuICBuekRlZmF1bHRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgbnpOb2RlczogTnpUcmVlTm9kZVtdID0gW107XG4gIHByZWZpeENscyA9ICdhbnQtdHJlZSc7XG4gIG56VHJlZUNsYXNzID0ge307XG5cbiAgb25DaGFuZ2U6ICh2YWx1ZTogTnpUcmVlTm9kZVtdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcblxuICBnZXRUcmVlTm9kZXMoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uek5vZGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIHB1YmxpYyBmdW5jdGlvblxuICAgKi9cbiAgZ2V0Q2hlY2tlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRDaGVja2VkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIGdldEhhbGZDaGVja2VkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldEhhbGZDaGVja2VkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIGdldEV4cGFuZGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldEV4cGFuZGVkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIGdldE1hdGNoZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0TWF0Y2hlZE5vZGVMaXN0KCk7XG4gIH1cblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLm56VHJlZUNsYXNzID0ge1xuICAgICAgWyB0aGlzLnByZWZpeENscyBdICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyB0aGlzLnByZWZpeENscyArICctc2hvdy1saW5lJyBdOiB0aGlzLm56U2hvd0xpbmUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1pY29uLWhpZGVgIF06ICF0aGlzLm56U2hvd0ljb24sXG4gICAgICBbICdkcmFnZ2FibGUtdHJlZScgXSAgICAgICAgICAgICA6IHRoaXMubnpEcmFnZ2FibGVcbiAgICB9O1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogTnpUcmVlTm9kZVtdKTogdm9pZCB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMubnpOb2RlcyA9IHZhbHVlO1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3RPcHRpb24uaXNDaGVja1N0cmljdGx5ID0gdGhpcy5uekNoZWNrU3RyaWN0bHk7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaW5pdFRyZWUodGhpcy5uek5vZGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignbmdNb2RlbCBvbmx5IGFjY2VwdHMgYW4gYXJyYXkgYW5kIHNob3VsZCBiZSBub3QgZW1wdHknKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogTnpUcmVlTm9kZVtdKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIG56VHJlZVNlcnZpY2U6IE56VHJlZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB0aGlzLm56RGVmYXVsdFN1YnNjcmlwdGlvbiA9IHRoaXMubnpEZWZhdWx0U3ViamVjdC5zdWJzY3JpYmUoKGRhdGE6IHsgdHlwZTogc3RyaW5nLCBrZXlzOiBzdHJpbmdbXSB9KSA9PiB7XG4gICAgICBpZiAoZGF0YS5rZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKGRhdGEudHlwZSkge1xuICAgICAgICBjYXNlICduekV4cGFuZGVkS2V5cyc6XG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNFeHBhbmRlZEtleXMoZGF0YS5rZXlzLCB0aGlzLm56Tm9kZXMpO1xuICAgICAgICAgIHRoaXMubnpFeHBhbmRlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICduelNlbGVjdGVkS2V5cyc6XG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNTZWxlY3RlZEtleXMoZGF0YS5rZXlzLCB0aGlzLm56Tm9kZXMsIHRoaXMubnpNdWx0aXBsZSk7XG4gICAgICAgICAgdGhpcy5uelNlbGVjdGVkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ256Q2hlY2tlZEtleXMnOlxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjQ2hlY2tlZEtleXMoZGF0YS5rZXlzLCB0aGlzLm56Tm9kZXMsIHRoaXMubnpDaGVja1N0cmljdGx5KTtcbiAgICAgICAgICB0aGlzLm56Q2hlY2tlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEZWZhdWx0U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm56RGVmYXVsdFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5uekRlZmF1bHRTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19
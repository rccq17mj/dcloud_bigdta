/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { NzTreeNode } from './nz-tree-node';
import { isCheckDisabled, isInArray } from './nz-tree-util';
var NzTreeService = /** @class */ (function () {
    function NzTreeService() {
        this.DRAG_SIDE_RANGE = 0.25;
        this.DRAG_MIN_GAP = 2;
        this.conductOption = {
            isCheckStrictly: false
        };
        this.rootNodes = [];
        this.selectedNodeList = [];
        this.expandedNodeList = [];
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        this.matchedNodeList = [];
    }
    /**
     * reset tree nodes will clear default node list
     */
    /**
     * reset tree nodes will clear default node list
     * @param {?} nzNodes
     * @return {?}
     */
    NzTreeService.prototype.initTree = /**
     * reset tree nodes will clear default node list
     * @param {?} nzNodes
     * @return {?}
     */
    function (nzNodes) {
        var _this = this;
        this.rootNodes = nzNodes;
        this.expandedNodeList = [];
        this.selectedNodeList = [];
        this.halfCheckedNodeList = [];
        this.checkedNodeList = [];
        this.expandedNodeList = [];
        this.matchedNodeList = [];
        setTimeout(function () {
            _this.refreshCheckState(_this.conductOption.isCheckStrictly);
        });
    };
    /**
     * @return {?}
     */
    NzTreeService.prototype.getSelectedNode = /**
     * @return {?}
     */
    function () {
        return this.selectedNode;
    };
    /**
     * get some list
     */
    /**
     * get some list
     * @return {?}
     */
    NzTreeService.prototype.getSelectedNodeList = /**
     * get some list
     * @return {?}
     */
    function () {
        return this.selectedNodeList;
    };
    /**
     * return checked nodes
     */
    /**
     * return checked nodes
     * @return {?}
     */
    NzTreeService.prototype.getCheckedNodeList = /**
     * return checked nodes
     * @return {?}
     */
    function () {
        return this.conductCheck('check');
    };
    /**
     * @return {?}
     */
    NzTreeService.prototype.getHalfCheckedNodeList = /**
     * @return {?}
     */
    function () {
        return this.conductCheck('halfCheck');
    };
    /**
     * return expanded nodes
     */
    /**
     * return expanded nodes
     * @return {?}
     */
    NzTreeService.prototype.getExpandedNodeList = /**
     * return expanded nodes
     * @return {?}
     */
    function () {
        return this.expandedNodeList;
    };
    /**
     * return search matched nodes
     */
    /**
     * return search matched nodes
     * @return {?}
     */
    NzTreeService.prototype.getMatchedNodeList = /**
     * return search matched nodes
     * @return {?}
     */
    function () {
        return this.matchedNodeList;
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeService.prototype.isArrayOfNzTreeNode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.every(function (item) { return item instanceof NzTreeNode; });
    };
    /**
     * reset selectedNodeList
     */
    /**
     * reset selectedNodeList
     * @param {?} selectedKeys
     * @param {?} nzNodes
     * @param {?=} isMulti
     * @return {?}
     */
    NzTreeService.prototype.calcSelectedKeys = /**
     * reset selectedNodeList
     * @param {?} selectedKeys
     * @param {?} nzNodes
     * @param {?=} isMulti
     * @return {?}
     */
    function (selectedKeys, nzNodes, isMulti) {
        var _this = this;
        if (isMulti === void 0) { isMulti = false; }
        this.selectedNodeList = [];
        /** @type {?} */
        var calc = function (nodes) {
            nodes.forEach(function (node) {
                if (isInArray(node.key, selectedKeys)) {
                    node.setSelected(true);
                }
                else {
                    node.setSelected(false);
                }
                _this.setSelectedNodeList(node, isMulti);
                if (node.getChildren().length > 0) {
                    calc(node.getChildren());
                }
            });
        };
        calc(nzNodes);
    };
    /**
     * reset expandedNodeList
     */
    /**
     * reset expandedNodeList
     * @param {?} expandedKeys
     * @param {?} nzNodes
     * @return {?}
     */
    NzTreeService.prototype.calcExpandedKeys = /**
     * reset expandedNodeList
     * @param {?} expandedKeys
     * @param {?} nzNodes
     * @return {?}
     */
    function (expandedKeys, nzNodes) {
        var _this = this;
        this.expandedNodeList = [];
        /** @type {?} */
        var calc = function (nodes) {
            nodes.forEach(function (node) {
                if (isInArray(node.key, expandedKeys)) {
                    node.setExpanded(true);
                    _this.setExpandedNodeList(node);
                }
                else {
                    node.setExpanded(false);
                }
                if (node.getChildren().length > 0) {
                    calc(node.getChildren());
                }
            });
        };
        calc(nzNodes);
    };
    /**
     * reset checkedNodeList
     */
    /**
     * reset checkedNodeList
     * @param {?} checkedKeys
     * @param {?} nzNodes
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    NzTreeService.prototype.calcCheckedKeys = /**
     * reset checkedNodeList
     * @param {?} checkedKeys
     * @param {?} nzNodes
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    function (checkedKeys, nzNodes, isCheckStrictly) {
        var _this = this;
        if (isCheckStrictly === void 0) { isCheckStrictly = false; }
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        /** @type {?} */
        var calc = function (nodes) {
            nodes.forEach(function (node) {
                if (isInArray(node.key, checkedKeys)) {
                    node.setChecked(true);
                    _this.setCheckedNodeList(node);
                }
                else {
                    node.setChecked(false);
                }
                if (node.getChildren().length > 0) {
                    calc(node.getChildren());
                }
            });
        };
        calc(nzNodes);
        // controlled state
        this.refreshCheckState(isCheckStrictly);
    };
    /**
     * set drag node
     */
    /**
     * set drag node
     * @param {?=} node
     * @return {?}
     */
    NzTreeService.prototype.setSelectedNode = /**
     * set drag node
     * @param {?=} node
     * @return {?}
     */
    function (node) {
        this.selectedNode = null;
        if (node) {
            this.selectedNode = node;
        }
    };
    /**
     * set node selected status
     */
    /**
     * set node selected status
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    NzTreeService.prototype.setNodeActive = /**
     * set node selected status
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    function (node, isMultiple) {
        if (isMultiple === void 0) { isMultiple = false; }
        /** @type {?} */
        var isSelected = node.isSelected;
        if (node.isDisabled) {
            return;
        }
        if (!isMultiple) {
            this.selectedNodeList.forEach(function (n) {
                n.setSelected(false);
            });
            this.selectedNodeList = [];
        }
        node.setSelected(!isSelected);
        this.setSelectedNodeList(node, isMultiple);
    };
    /**
     * add or remove node to selectedNodeList
     */
    /**
     * add or remove node to selectedNodeList
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    NzTreeService.prototype.setSelectedNodeList = /**
     * add or remove node to selectedNodeList
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    function (node, isMultiple) {
        if (isMultiple === void 0) { isMultiple = false; }
        /** @type {?} */
        var index = this.selectedNodeList.findIndex(function (n) { return node.key === n.key; });
        if (isMultiple) {
            if (node.isSelected && index === -1) {
                this.selectedNodeList.push(node);
            }
        }
        else {
            if (node.isSelected && index === -1) {
                this.selectedNodeList = [node];
            }
        }
        if (!node.isSelected && index > -1) {
            this.selectedNodeList.splice(index, 1);
        }
    };
    /**
     * merge checked nodes
     */
    /**
     * merge checked nodes
     * @param {?} node
     * @return {?}
     */
    NzTreeService.prototype.setHalfCheckedNodeList = /**
     * merge checked nodes
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var index = this.halfCheckedNodeList.findIndex(function (n) { return node.key === n.key; });
        if (node.isHalfChecked && index === -1) {
            this.halfCheckedNodeList.push(node);
        }
        else if (!node.isHalfChecked && index > -1) {
            this.halfCheckedNodeList.splice(index, 1);
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    NzTreeService.prototype.setCheckedNodeList = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var index = this.checkedNodeList.findIndex(function (n) { return node.key === n.key; });
        if (node.isChecked && index === -1) {
            this.checkedNodeList.push(node);
        }
        else if (!node.isChecked && index > -1) {
            this.checkedNodeList.splice(index, 1);
        }
    };
    /**
     * conduct checked keys
     */
    /**
     * conduct checked keys
     * @param {?=} type
     * @return {?}
     */
    NzTreeService.prototype.conductCheck = /**
     * conduct checked keys
     * @param {?=} type
     * @return {?}
     */
    function (type) {
        var _this = this;
        if (type === void 0) { type = 'check'; }
        /** @type {?} */
        var checkedNodeList = [];
        /** @type {?} */
        var loop = function (node) {
            switch (type) {
                case 'check':
                    if (node.isChecked) {
                        checkedNodeList.push(node);
                    }
                    if (!_this.conductOption.isCheckStrictly) {
                        if (!node.isChecked) {
                            node.getChildren().forEach(function (child) {
                                loop(child);
                            });
                        }
                    }
                    else {
                        node.getChildren().forEach(function (child) {
                            loop(child);
                        });
                    }
                    break;
                case 'halfCheck':
                    if (!_this.conductOption.isCheckStrictly) {
                        if (node.isHalfChecked) {
                            checkedNodeList.push(node);
                            node.getChildren().forEach(function (child) {
                                loop(child);
                            });
                        }
                    }
                    break;
            }
        };
        this.rootNodes.forEach(function (node) {
            loop(node);
        });
        return checkedNodeList;
    };
    /**
     * set expanded nodes
     */
    /**
     * set expanded nodes
     * @param {?} node
     * @return {?}
     */
    NzTreeService.prototype.setExpandedNodeList = /**
     * set expanded nodes
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (node.isLeaf) {
            return;
        }
        /** @type {?} */
        var index = this.expandedNodeList.findIndex(function (n) { return node.key === n.key; });
        if (node.isExpanded && index === -1) {
            this.expandedNodeList.push(node);
        }
        else if (!node.isExpanded && index > -1) {
            this.expandedNodeList.splice(index, 1);
        }
    };
    /**
     * check state
     * @param node
     */
    /**
     * check state
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    NzTreeService.prototype.refreshCheckState = /**
     * check state
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    function (isCheckStrictly) {
        var _this = this;
        if (isCheckStrictly === void 0) { isCheckStrictly = false; }
        if (isCheckStrictly) {
            return;
        }
        this.checkedNodeList.forEach(function (node) {
            _this.conduct(node);
        });
    };
    /**
     * @param {?} node
     * @return {?}
     */
    NzTreeService.prototype.conduct = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var isChecked = node.isChecked;
        if (node) {
            this.conductUp(node);
            this.conductDown(node, isChecked);
        }
    };
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     */
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     * @param {?} node
     * @return {?}
     */
    NzTreeService.prototype.conductUp = /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var parentNode = node.getParentNode();
        // 全禁用节点不选中
        if (parentNode) {
            if (!isCheckDisabled(parentNode)) {
                if (parentNode.getChildren().every(function (child) { return isCheckDisabled(child) || (!child.isHalfChecked && child.isChecked); })) {
                    parentNode.setChecked(true);
                }
                else if (parentNode.getChildren().some(function (child) { return child.isHalfChecked || child.isChecked; })) {
                    parentNode.setChecked(false, true);
                }
                else {
                    parentNode.setChecked(false);
                }
            }
            this.setHalfCheckedNodeList(parentNode);
            this.conductUp(parentNode);
        }
    };
    /**
     * reset child check state
     */
    /**
     * reset child check state
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    NzTreeService.prototype.conductDown = /**
     * reset child check state
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    function (node, value) {
        var _this = this;
        if (!isCheckDisabled(node)) {
            node.setChecked(value);
            node.children.forEach(function (n) {
                _this.conductDown(n, value);
            });
        }
    };
    /**
     * search value & expand node
     * should add expandlist
     */
    /**
     * search value & expand node
     * should add expandlist
     * @param {?} value
     * @return {?}
     */
    NzTreeService.prototype.searchExpand = /**
     * search value & expand node
     * should add expandlist
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.matchedNodeList = [];
        if (!isNotNil(value)) {
            return;
        }
        // to reset expandedNodeList
        this.expandedNodeList = [];
        /** @type {?} */
        var expandParent = function (p) {
            // expand parent node
            if (p.getParentNode()) {
                p.getParentNode().setExpanded(true);
                _this.setExpandedNodeList(p.getParentNode());
                expandParent(p.getParentNode());
            }
        };
        /** @type {?} */
        var searchChild = function (n) {
            if (value && n.title.includes(value)) {
                // match the node
                // match the node
                _this.matchedNodeList.push(n);
                // expand parentNode
                expandParent(n);
            }
            else {
                n.setExpanded(false);
                _this.setExpandedNodeList(n);
            }
            n.children.forEach(function (g) {
                searchChild(g);
            });
        };
        this.rootNodes.forEach(function (child) {
            searchChild(child);
        });
    };
    /**
     * drag event
     */
    /**
     * drag event
     * @param {?} node
     * @return {?}
     */
    NzTreeService.prototype.refreshDragNode = /**
     * drag event
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        if (node.getChildren().length === 0) {
            // until root
            this.conductUp(node);
        }
        else {
            node.children.forEach(function (child) {
                _this.refreshDragNode(child);
            });
        }
    };
    // reset node level
    /**
     * @param {?} node
     * @return {?}
     */
    NzTreeService.prototype.resetNodeLevel = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var e_1, _a;
        if (node.getParentNode()) {
            node.level = node.getParentNode().level + 1;
        }
        else {
            node.level = 0;
        }
        try {
            for (var _b = tslib_1.__values(node.getChildren()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                this.resetNodeLevel(child);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTreeService.prototype.calcDropPosition = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var clientY = event.clientY;
        var _a = event.srcElement ? event.srcElement.getBoundingClientRect() : (/** @type {?} */ (event.target)).getBoundingClientRect(), top = _a.top, bottom = _a.bottom, height = _a.height;
        /** @type {?} */
        var des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);
        if (clientY <= top + des) {
            return -1;
        }
        else if (clientY >= bottom - des) {
            return 1;
        }
        return 0;
    };
    /**
     * drop
     * 0: inner -1: pre 1: next
     */
    /**
     * drop
     * 0: inner -1: pre 1: next
     * @param {?} targetNode
     * @param {?=} dragPos
     * @return {?}
     */
    NzTreeService.prototype.dropAndApply = /**
     * drop
     * 0: inner -1: pre 1: next
     * @param {?} targetNode
     * @param {?=} dragPos
     * @return {?}
     */
    function (targetNode, dragPos) {
        var _this = this;
        if (dragPos === void 0) { dragPos = -1; }
        if (!targetNode || dragPos > 1) {
            return;
        }
        /** @type {?} */
        var targetParent = targetNode.getParentNode();
        /** @type {?} */
        var isSelectedRootNode = this.selectedNode.getParentNode();
        // remove the dragNode
        if (isSelectedRootNode) {
            isSelectedRootNode.getChildren().splice(isSelectedRootNode.getChildren().indexOf(this.selectedNode), 1);
        }
        else {
            this.rootNodes.splice(this.rootNodes.indexOf(this.selectedNode), 1);
        }
        switch (dragPos) {
            case 0:
                targetNode.addChildren([this.selectedNode]);
                this.resetNodeLevel(targetNode);
                break;
            case -1:
            case 1:
                /** @type {?} */
                var tIndex = dragPos === 1 ? 1 : 0;
                if (targetParent) {
                    targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
                    if (this.selectedNode.getParentNode()) {
                        this.resetNodeLevel(this.selectedNode.getParentNode());
                    }
                }
                else {
                    /** @type {?} */
                    var targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
                    // 根节点插入
                    this.rootNodes.splice(targetIndex, 0, this.selectedNode);
                    this.rootNodes[targetIndex].parentNode = null;
                    this.rootNodes[targetIndex].level = 0;
                }
                break;
        }
        // flush all nodes
        this.rootNodes.forEach(function (child) {
            _this.refreshDragNode(child);
        });
    };
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     */
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     * @param {?} eventName
     * @param {?} node
     * @param {?} event
     * @return {?}
     */
    NzTreeService.prototype.formatEvent = /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     * @param {?} eventName
     * @param {?} node
     * @param {?} event
     * @return {?}
     */
    function (eventName, node, event) {
        /** @type {?} */
        var emitStructure = {
            'eventName': eventName,
            'node': node,
            'event': event
        };
        switch (eventName) {
            case 'dragstart':
            case 'dragenter':
            case 'dragover':
            case 'dragleave':
            case 'drop':
            case 'dragend':
                Object.assign(emitStructure, { 'dragNode': this.getSelectedNode() });
                break;
            case 'click':
            case 'dblclick':
                // TODO: Deprecated
                Object.assign(emitStructure, { 'selectedKeys': this.getSelectedNodeList() });
                Object.assign(emitStructure, { 'nodes': this.getSelectedNodeList() });
                Object.assign(emitStructure, { 'keys': this.getSelectedNodeList().map(function (n) { return n.key; }) });
                break;
            case 'check':
                // TODO: Deprecated
                Object.assign(emitStructure, { 'checkedKeys': this.getCheckedNodeList() });
                Object.assign(emitStructure, { 'nodes': this.getCheckedNodeList() });
                Object.assign(emitStructure, { 'keys': this.getCheckedNodeList().map(function (n) { return n.key; }) });
                break;
            case 'search':
                // TODO: Deprecated
                Object.assign(emitStructure, { 'matchedKeys': this.getMatchedNodeList() });
                Object.assign(emitStructure, { 'nodes': this.getMatchedNodeList() });
                Object.assign(emitStructure, { 'keys': this.getMatchedNodeList().map(function (n) { return n.key; }) });
                break;
            case 'expand':
                Object.assign(emitStructure, { 'nodes': this.getExpandedNodeList() });
                Object.assign(emitStructure, { 'keys': this.getExpandedNodeList().map(function (n) { return n.key; }) });
                break;
        }
        return emitStructure;
    };
    NzTreeService.decorators = [
        { type: Injectable }
    ];
    return NzTreeService;
}());
export { NzTreeService };
function NzTreeService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTreeService.prototype.DRAG_SIDE_RANGE;
    /** @type {?} */
    NzTreeService.prototype.DRAG_MIN_GAP;
    /** @type {?} */
    NzTreeService.prototype.conductOption;
    /** @type {?} */
    NzTreeService.prototype.selectedNode;
    /** @type {?} */
    NzTreeService.prototype.targetNode;
    /** @type {?} */
    NzTreeService.prototype.rootNodes;
    /** @type {?} */
    NzTreeService.prototype.selectedNodeList;
    /** @type {?} */
    NzTreeService.prototype.expandedNodeList;
    /** @type {?} */
    NzTreeService.prototype.checkedNodeList;
    /** @type {?} */
    NzTreeService.prototype.halfCheckedNodeList;
    /** @type {?} */
    NzTreeService.prototype.matchedNodeList;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyZWUvbnotdHJlZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OzsrQkFJeEMsSUFBSTs0QkFDUCxDQUFDOzZCQUlaO1lBQ0YsZUFBZSxFQUFFLEtBQUs7U0FDdkI7eUJBR3lCLEVBQUU7Z0NBQ0ssRUFBRTtnQ0FDRixFQUFFOytCQUNILEVBQUU7bUNBQ0UsRUFBRTsrQkFDTixFQUFFOztJQUVsQzs7T0FFRzs7Ozs7O0lBQ0gsZ0NBQVE7Ozs7O0lBQVIsVUFBUyxPQUFxQjtRQUE5QixpQkFXQztRQVZDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDNUQsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCx1Q0FBZTs7O0lBQWY7UUFDRSxPQUFPLElBQUks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bnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgTnpGb3JtYXRFbWl0RXZlbnQgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnLi9uei10cmVlLW5vZGUnO1xuaW1wb3J0IHsgaXNDaGVja0Rpc2FibGVkLCBpc0luQXJyYXkgfSBmcm9tICcuL256LXRyZWUtdXRpbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOelRyZWVTZXJ2aWNlIHtcbiAgRFJBR19TSURFX1JBTkdFID0gMC4yNTtcbiAgRFJBR19NSU5fR0FQID0gMjtcblxuICBjb25kdWN0T3B0aW9uOiB7XG4gICAgaXNDaGVja1N0cmljdGx5OiBib29sZWFuXG4gIH0gPSB7XG4gICAgaXNDaGVja1N0cmljdGx5OiBmYWxzZVxuICB9O1xuICBzZWxlY3RlZE5vZGU6IE56VHJlZU5vZGU7XG4gIHRhcmdldE5vZGU6IE56VHJlZU5vZGU7XG4gIHJvb3ROb2RlczogTnpUcmVlTm9kZVtdID0gW107XG4gIHNlbGVjdGVkTm9kZUxpc3Q6IE56VHJlZU5vZGVbXSA9IFtdO1xuICBleHBhbmRlZE5vZGVMaXN0OiBOelRyZWVOb2RlW10gPSBbXTtcbiAgY2hlY2tlZE5vZGVMaXN0OiBOelRyZWVOb2RlW10gPSBbXTtcbiAgaGFsZkNoZWNrZWROb2RlTGlzdDogTnpUcmVlTm9kZVtdID0gW107XG4gIG1hdGNoZWROb2RlTGlzdDogTnpUcmVlTm9kZVtdID0gW107XG5cbiAgLyoqXG4gICAqIHJlc2V0IHRyZWUgbm9kZXMgd2lsbCBjbGVhciBkZWZhdWx0IG5vZGUgbGlzdFxuICAgKi9cbiAgaW5pdFRyZWUobnpOb2RlczogTnpUcmVlTm9kZVtdKTogdm9pZCB7XG4gICAgdGhpcy5yb290Tm9kZXMgPSBuek5vZGVzO1xuICAgIHRoaXMuZXhwYW5kZWROb2RlTGlzdCA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdCA9IFtdO1xuICAgIHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdCA9IFtdO1xuICAgIHRoaXMuY2hlY2tlZE5vZGVMaXN0ID0gW107XG4gICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0ID0gW107XG4gICAgdGhpcy5tYXRjaGVkTm9kZUxpc3QgPSBbXTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaENoZWNrU3RhdGUodGhpcy5jb25kdWN0T3B0aW9uLmlzQ2hlY2tTdHJpY3RseSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRTZWxlY3RlZE5vZGUoKTogTnpUcmVlTm9kZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkTm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgc29tZSBsaXN0XG4gICAqL1xuICBnZXRTZWxlY3RlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWROb2RlTGlzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gY2hlY2tlZCBub2Rlc1xuICAgKi9cbiAgZ2V0Q2hlY2tlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZHVjdENoZWNrKCdjaGVjaycpO1xuICB9XG5cbiAgZ2V0SGFsZkNoZWNrZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmNvbmR1Y3RDaGVjaygnaGFsZkNoZWNrJyk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJuIGV4cGFuZGVkIG5vZGVzXG4gICAqL1xuICBnZXRFeHBhbmRlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwYW5kZWROb2RlTGlzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gc2VhcmNoIG1hdGNoZWQgbm9kZXNcbiAgICovXG4gIGdldE1hdGNoZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm1hdGNoZWROb2RlTGlzdDtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgaXNBcnJheU9mTnpUcmVlTm9kZSh2YWx1ZTogYW55W10pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoaXRlbSA9PiBpdGVtIGluc3RhbmNlb2YgTnpUcmVlTm9kZSk7XG4gIH1cblxuICAvKipcbiAgICogcmVzZXQgc2VsZWN0ZWROb2RlTGlzdFxuICAgKi9cbiAgY2FsY1NlbGVjdGVkS2V5cyhzZWxlY3RlZEtleXM6IHN0cmluZ1tdLCBuek5vZGVzOiBOelRyZWVOb2RlW10sIGlzTXVsdGk6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdCA9IFtdO1xuICAgIGNvbnN0IGNhbGMgPSAobm9kZXM6IE56VHJlZU5vZGVbXSkgPT4ge1xuICAgICAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgaWYgKGlzSW5BcnJheShub2RlLmtleSwgc2VsZWN0ZWRLZXlzKSkge1xuICAgICAgICAgIG5vZGUuc2V0U2VsZWN0ZWQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5zZXRTZWxlY3RlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZE5vZGVMaXN0KG5vZGUsIGlzTXVsdGkpO1xuICAgICAgICBpZiAobm9kZS5nZXRDaGlsZHJlbigpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjYWxjKG5vZGUuZ2V0Q2hpbGRyZW4oKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgY2FsYyhuek5vZGVzKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIHJlc2V0IGV4cGFuZGVkTm9kZUxpc3RcbiAgICovXG4gIGNhbGNFeHBhbmRlZEtleXMoZXhwYW5kZWRLZXlzOiBzdHJpbmdbXSwgbnpOb2RlczogTnpUcmVlTm9kZVtdKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0ID0gW107XG4gICAgY29uc3QgY2FsYyA9IChub2RlczogTnpUcmVlTm9kZVtdKSA9PiB7XG4gICAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBpZiAoaXNJbkFycmF5KG5vZGUua2V5LCBleHBhbmRlZEtleXMpKSB7XG4gICAgICAgICAgbm9kZS5zZXRFeHBhbmRlZCh0cnVlKTtcbiAgICAgICAgICB0aGlzLnNldEV4cGFuZGVkTm9kZUxpc3Qobm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5zZXRFeHBhbmRlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuZ2V0Q2hpbGRyZW4oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY2FsYyhub2RlLmdldENoaWxkcmVuKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNhbGMobnpOb2Rlcyk7XG4gIH1cblxuICAvKipcbiAgICogcmVzZXQgY2hlY2tlZE5vZGVMaXN0XG4gICAqL1xuICBjYWxjQ2hlY2tlZEtleXMoY2hlY2tlZEtleXM6IHN0cmluZ1tdLCBuek5vZGVzOiBOelRyZWVOb2RlW10sIGlzQ2hlY2tTdHJpY3RseTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2VkTm9kZUxpc3QgPSBbXTtcbiAgICB0aGlzLmhhbGZDaGVja2VkTm9kZUxpc3QgPSBbXTtcbiAgICBjb25zdCBjYWxjID0gKG5vZGVzOiBOelRyZWVOb2RlW10pID0+IHtcbiAgICAgIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGlmIChpc0luQXJyYXkobm9kZS5rZXksIGNoZWNrZWRLZXlzKSkge1xuICAgICAgICAgIG5vZGUuc2V0Q2hlY2tlZCh0cnVlKTtcbiAgICAgICAgICB0aGlzLnNldENoZWNrZWROb2RlTGlzdChub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLnNldENoZWNrZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLmdldENoaWxkcmVuKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNhbGMobm9kZS5nZXRDaGlsZHJlbigpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjYWxjKG56Tm9kZXMpO1xuICAgIC8vIGNvbnRyb2xsZWQgc3RhdGVcbiAgICB0aGlzLnJlZnJlc2hDaGVja1N0YXRlKGlzQ2hlY2tTdHJpY3RseSk7XG4gIH1cblxuICAvKipcbiAgICogc2V0IGRyYWcgbm9kZVxuICAgKi9cbiAgc2V0U2VsZWN0ZWROb2RlKG5vZGU/OiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZE5vZGUgPSBudWxsO1xuICAgIGlmIChub2RlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZSA9IG5vZGU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHNldCBub2RlIHNlbGVjdGVkIHN0YXR1c1xuICAgKi9cbiAgc2V0Tm9kZUFjdGl2ZShub2RlOiBOelRyZWVOb2RlLCBpc011bHRpcGxlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gbm9kZS5pc1NlbGVjdGVkO1xuICAgIGlmIChub2RlLmlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFpc011bHRpcGxlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QuZm9yRWFjaChuID0+IHtcbiAgICAgICAgbi5zZXRTZWxlY3RlZChmYWxzZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdCA9IFtdO1xuICAgIH1cbiAgICBub2RlLnNldFNlbGVjdGVkKCFpc1NlbGVjdGVkKTtcbiAgICB0aGlzLnNldFNlbGVjdGVkTm9kZUxpc3Qobm9kZSwgaXNNdWx0aXBsZSk7XG4gIH1cblxuICAvKipcbiAgICogYWRkIG9yIHJlbW92ZSBub2RlIHRvIHNlbGVjdGVkTm9kZUxpc3RcbiAgICovXG4gIHNldFNlbGVjdGVkTm9kZUxpc3Qobm9kZTogTnpUcmVlTm9kZSwgaXNNdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkTm9kZUxpc3QuZmluZEluZGV4KG4gPT4gbm9kZS5rZXkgPT09IG4ua2V5KTtcbiAgICBpZiAoaXNNdWx0aXBsZSkge1xuICAgICAgaWYgKG5vZGUuaXNTZWxlY3RlZCAmJiBpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0LnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChub2RlLmlzU2VsZWN0ZWQgJiYgaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdCA9IFsgbm9kZSBdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW5vZGUuaXNTZWxlY3RlZCAmJiBpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogbWVyZ2UgY2hlY2tlZCBub2Rlc1xuICAgKi9cbiAgc2V0SGFsZkNoZWNrZWROb2RlTGlzdChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmhhbGZDaGVja2VkTm9kZUxpc3QuZmluZEluZGV4KG4gPT4gbm9kZS5rZXkgPT09IG4ua2V5KTtcbiAgICBpZiAobm9kZS5pc0hhbGZDaGVja2VkICYmIGluZGV4ID09PSAtMSkge1xuICAgICAgdGhpcy5oYWxmQ2hlY2tlZE5vZGVMaXN0LnB1c2gobm9kZSk7XG4gICAgfSBlbHNlIGlmICghbm9kZS5pc0hhbGZDaGVja2VkICYmIGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIHNldENoZWNrZWROb2RlTGlzdChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmNoZWNrZWROb2RlTGlzdC5maW5kSW5kZXgobiA9PiBub2RlLmtleSA9PT0gbi5rZXkpO1xuICAgIGlmIChub2RlLmlzQ2hlY2tlZCAmJiBpbmRleCA9PT0gLTEpIHtcbiAgICAgIHRoaXMuY2hlY2tlZE5vZGVMaXN0LnB1c2gobm9kZSk7XG4gICAgfSBlbHNlIGlmICghbm9kZS5pc0NoZWNrZWQgJiYgaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5jaGVja2VkTm9kZUxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogY29uZHVjdCBjaGVja2VkIGtleXNcbiAgICovXG4gIGNvbmR1Y3RDaGVjayh0eXBlOiBzdHJpbmcgPSAnY2hlY2snKTogTnpUcmVlTm9kZVtdIHtcbiAgICBjb25zdCBjaGVja2VkTm9kZUxpc3QgPSBbXTtcbiAgICBjb25zdCBsb29wID0gKG5vZGU6IE56VHJlZU5vZGUpID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdjaGVjayc6XG4gICAgICAgICAgaWYgKG5vZGUuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICBjaGVja2VkTm9kZUxpc3QucHVzaChub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLmNvbmR1Y3RPcHRpb24uaXNDaGVja1N0cmljdGx5KSB7XG4gICAgICAgICAgICBpZiAoIW5vZGUuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBsb29wKGNoaWxkKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgbG9vcChjaGlsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2hhbGZDaGVjayc6XG4gICAgICAgICAgaWYgKCF0aGlzLmNvbmR1Y3RPcHRpb24uaXNDaGVja1N0cmljdGx5KSB7XG4gICAgICAgICAgICBpZiAobm9kZS5pc0hhbGZDaGVja2VkKSB7XG4gICAgICAgICAgICAgIGNoZWNrZWROb2RlTGlzdC5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICBub2RlLmdldENoaWxkcmVuKCkuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgbG9vcChjaGlsZCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucm9vdE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBsb29wKG5vZGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBjaGVja2VkTm9kZUxpc3Q7XG4gIH1cblxuICAvKipcbiAgICogc2V0IGV4cGFuZGVkIG5vZGVzXG4gICAqL1xuICBzZXRFeHBhbmRlZE5vZGVMaXN0KG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcbiAgICBpZiAobm9kZS5pc0xlYWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmV4cGFuZGVkTm9kZUxpc3QuZmluZEluZGV4KG4gPT4gbm9kZS5rZXkgPT09IG4ua2V5KTtcbiAgICBpZiAobm9kZS5pc0V4cGFuZGVkICYmIGluZGV4ID09PSAtMSkge1xuICAgICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0LnB1c2gobm9kZSk7XG4gICAgfSBlbHNlIGlmICghbm9kZS5pc0V4cGFuZGVkICYmIGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWROb2RlTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBjaGVjayBzdGF0ZVxuICAgKiBAcGFyYW0gbm9kZVxuICAgKi9cbiAgcmVmcmVzaENoZWNrU3RhdGUoaXNDaGVja1N0cmljdGx5OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAoaXNDaGVja1N0cmljdGx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja2VkTm9kZUxpc3QuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIHRoaXMuY29uZHVjdChub2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbmR1Y3Qobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xuICAgIGNvbnN0IGlzQ2hlY2tlZCA9IG5vZGUuaXNDaGVja2VkO1xuICAgIGlmIChub2RlKSB7XG4gICAgICB0aGlzLmNvbmR1Y3RVcChub2RlKTtcbiAgICAgIHRoaXMuY29uZHVjdERvd24obm9kZSwgaXNDaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogMeOAgWNoaWxkcmVuIGhhbGYgY2hlY2tlZFxuICAgKiAy44CBY2hpbGRyZW4gYWxsIGNoZWNrZWQsIHBhcmVudCBjaGVja2VkXG4gICAqIDPjgIFubyBjaGlsZHJlbiBjaGVja2VkXG4gICAqL1xuICBjb25kdWN0VXAobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub2RlLmdldFBhcmVudE5vZGUoKTtcbiAgICAvLyDlhajnpoHnlKjoioLngrnkuI3pgInkuK1cbiAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgaWYgKCFpc0NoZWNrRGlzYWJsZWQocGFyZW50Tm9kZSkpIHtcbiAgICAgICAgaWYgKHBhcmVudE5vZGUuZ2V0Q2hpbGRyZW4oKS5ldmVyeShjaGlsZCA9PiBpc0NoZWNrRGlzYWJsZWQoY2hpbGQpIHx8ICghY2hpbGQuaXNIYWxmQ2hlY2tlZCAmJiBjaGlsZC5pc0NoZWNrZWQpKSkge1xuICAgICAgICAgIHBhcmVudE5vZGUuc2V0Q2hlY2tlZCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXJlbnROb2RlLmdldENoaWxkcmVuKCkuc29tZShjaGlsZCA9PiBjaGlsZC5pc0hhbGZDaGVja2VkIHx8IGNoaWxkLmlzQ2hlY2tlZCkpIHtcbiAgICAgICAgICBwYXJlbnROb2RlLnNldENoZWNrZWQoZmFsc2UsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudE5vZGUuc2V0Q2hlY2tlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0SGFsZkNoZWNrZWROb2RlTGlzdChwYXJlbnROb2RlKTtcbiAgICAgIHRoaXMuY29uZHVjdFVwKHBhcmVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXNldCBjaGlsZCBjaGVjayBzdGF0ZVxuICAgKi9cbiAgY29uZHVjdERvd24obm9kZTogTnpUcmVlTm9kZSwgdmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIWlzQ2hlY2tEaXNhYmxlZChub2RlKSkge1xuICAgICAgbm9kZS5zZXRDaGVja2VkKHZhbHVlKTtcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChuID0+IHtcbiAgICAgICAgdGhpcy5jb25kdWN0RG93bihuLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogc2VhcmNoIHZhbHVlICYgZXhwYW5kIG5vZGVcbiAgICogc2hvdWxkIGFkZCBleHBhbmRsaXN0XG4gICAqL1xuICBzZWFyY2hFeHBhbmQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubWF0Y2hlZE5vZGVMaXN0ID0gW107XG4gICAgaWYgKCFpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gdG8gcmVzZXQgZXhwYW5kZWROb2RlTGlzdFxuICAgIHRoaXMuZXhwYW5kZWROb2RlTGlzdCA9IFtdO1xuICAgIGNvbnN0IGV4cGFuZFBhcmVudCA9IChwOiBOelRyZWVOb2RlKSA9PiB7XG4gICAgICAvLyBleHBhbmQgcGFyZW50IG5vZGVcbiAgICAgIGlmIChwLmdldFBhcmVudE5vZGUoKSkge1xuICAgICAgICBwLmdldFBhcmVudE5vZGUoKS5zZXRFeHBhbmRlZCh0cnVlKTtcbiAgICAgICAgdGhpcy5zZXRFeHBhbmRlZE5vZGVMaXN0KHAuZ2V0UGFyZW50Tm9kZSgpKTtcbiAgICAgICAgZXhwYW5kUGFyZW50KHAuZ2V0UGFyZW50Tm9kZSgpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHNlYXJjaENoaWxkID0gKG46IE56VHJlZU5vZGUpID0+IHtcbiAgICAgIGlmICh2YWx1ZSAmJiBuLnRpdGxlLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAvLyBtYXRjaCB0aGUgbm9kZVxuICAgICAgICB0aGlzLm1hdGNoZWROb2RlTGlzdC5wdXNoKG4pO1xuICAgICAgICAvLyBleHBhbmQgcGFyZW50Tm9kZVxuICAgICAgICBleHBhbmRQYXJlbnQobik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuLnNldEV4cGFuZGVkKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRFeHBhbmRlZE5vZGVMaXN0KG4pO1xuICAgICAgfVxuICAgICAgbi5jaGlsZHJlbi5mb3JFYWNoKGcgPT4ge1xuICAgICAgICBzZWFyY2hDaGlsZChnKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5yb290Tm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBzZWFyY2hDaGlsZChjaGlsZCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogZHJhZyBldmVudFxuICAgKi9cbiAgcmVmcmVzaERyYWdOb2RlKG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcbiAgICBpZiAobm9kZS5nZXRDaGlsZHJlbigpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gdW50aWwgcm9vdFxuICAgICAgdGhpcy5jb25kdWN0VXAobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoRHJhZ05vZGUoY2hpbGQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVzZXQgbm9kZSBsZXZlbFxuICByZXNldE5vZGVMZXZlbChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgaWYgKG5vZGUuZ2V0UGFyZW50Tm9kZSgpKSB7XG4gICAgICBub2RlLmxldmVsID0gbm9kZS5nZXRQYXJlbnROb2RlKCkubGV2ZWwgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLmxldmVsID0gMDtcbiAgICB9XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmdldENoaWxkcmVuKCkpIHtcbiAgICAgIHRoaXMucmVzZXROb2RlTGV2ZWwoY2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGNEcm9wUG9zaXRpb24oZXZlbnQ6IERyYWdFdmVudCk6IG51bWJlciB7XG4gICAgY29uc3QgeyBjbGllbnRZIH0gPSBldmVudDtcbiAgICAvLyB0byBmaXggZmlyZWZveCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHRvcCwgYm90dG9tLCBoZWlnaHQgfSA9IGV2ZW50LnNyY0VsZW1lbnQgPyBldmVudC5zcmNFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBkZXMgPSBNYXRoLm1heChoZWlnaHQgKiB0aGlzLkRSQUdfU0lERV9SQU5HRSwgdGhpcy5EUkFHX01JTl9HQVApO1xuXG4gICAgaWYgKGNsaWVudFkgPD0gdG9wICsgZGVzKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmIChjbGllbnRZID49IGJvdHRvbSAtIGRlcykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvKipcbiAgICogZHJvcFxuICAgKiAwOiBpbm5lciAtMTogcHJlIDE6IG5leHRcbiAgICovXG4gIGRyb3BBbmRBcHBseSh0YXJnZXROb2RlOiBOelRyZWVOb2RlLCBkcmFnUG9zOiBudW1iZXIgPSAtMSk6IHZvaWQge1xuICAgIGlmICghdGFyZ2V0Tm9kZSB8fCBkcmFnUG9zID4gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXRQYXJlbnQgPSB0YXJnZXROb2RlLmdldFBhcmVudE5vZGUoKTtcbiAgICBjb25zdCBpc1NlbGVjdGVkUm9vdE5vZGUgPSB0aGlzLnNlbGVjdGVkTm9kZS5nZXRQYXJlbnROb2RlKCk7XG4gICAgLy8gcmVtb3ZlIHRoZSBkcmFnTm9kZVxuICAgIGlmIChpc1NlbGVjdGVkUm9vdE5vZGUpIHtcbiAgICAgIGlzU2VsZWN0ZWRSb290Tm9kZS5nZXRDaGlsZHJlbigpLnNwbGljZShpc1NlbGVjdGVkUm9vdE5vZGUuZ2V0Q2hpbGRyZW4oKS5pbmRleE9mKHRoaXMuc2VsZWN0ZWROb2RlKSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm9vdE5vZGVzLnNwbGljZSh0aGlzLnJvb3ROb2Rlcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWROb2RlKSwgMSk7XG4gICAgfVxuICAgIHN3aXRjaCAoZHJhZ1Bvcykge1xuICAgICAgY2FzZSAwOlxuICAgICAgICB0YXJnZXROb2RlLmFkZENoaWxkcmVuKFsgdGhpcy5zZWxlY3RlZE5vZGUgXSk7XG4gICAgICAgIHRoaXMucmVzZXROb2RlTGV2ZWwodGFyZ2V0Tm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtMTpcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgY29uc3QgdEluZGV4ID0gZHJhZ1BvcyA9PT0gMSA/IDEgOiAwO1xuICAgICAgICBpZiAodGFyZ2V0UGFyZW50KSB7XG4gICAgICAgICAgdGFyZ2V0UGFyZW50LmFkZENoaWxkcmVuKFsgdGhpcy5zZWxlY3RlZE5vZGUgXSwgdGFyZ2V0UGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGFyZ2V0Tm9kZSkgKyB0SW5kZXgpO1xuICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZS5nZXRQYXJlbnROb2RlKCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXROb2RlTGV2ZWwodGhpcy5zZWxlY3RlZE5vZGUuZ2V0UGFyZW50Tm9kZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSB0aGlzLnJvb3ROb2Rlcy5pbmRleE9mKHRhcmdldE5vZGUpICsgdEluZGV4O1xuICAgICAgICAgIC8vIOagueiKgueCueaPkuWFpVxuICAgICAgICAgIHRoaXMucm9vdE5vZGVzLnNwbGljZSh0YXJnZXRJbmRleCwgMCwgdGhpcy5zZWxlY3RlZE5vZGUpO1xuICAgICAgICAgIHRoaXMucm9vdE5vZGVzWyB0YXJnZXRJbmRleCBdLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICAgIHRoaXMucm9vdE5vZGVzWyB0YXJnZXRJbmRleCBdLmxldmVsID0gMDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gZmx1c2ggYWxsIG5vZGVzXG4gICAgdGhpcy5yb290Tm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaERyYWdOb2RlKGNoaWxkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBlbWl0IFN0cnVjdHVyZVxuICAgKiBldmVudE5hbWVcbiAgICogbm9kZVxuICAgKiBldmVudDogTW91c2VFdmVudCAvIERyYWdFdmVudFxuICAgKiBkcmFnTm9kZVxuICAgKi9cbiAgZm9ybWF0RXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIG5vZGU6IE56VHJlZU5vZGUsIGV2ZW50OiBNb3VzZUV2ZW50IHwgRHJhZ0V2ZW50KTogTnpGb3JtYXRFbWl0RXZlbnQge1xuICAgIGNvbnN0IGVtaXRTdHJ1Y3R1cmUgPSB7XG4gICAgICAnZXZlbnROYW1lJzogZXZlbnROYW1lLFxuICAgICAgJ25vZGUnICAgICA6IG5vZGUsXG4gICAgICAnZXZlbnQnICAgIDogZXZlbnRcbiAgICB9O1xuICAgIHN3aXRjaCAoZXZlbnROYW1lKSB7XG4gICAgICBjYXNlICdkcmFnc3RhcnQnOlxuICAgICAgY2FzZSAnZHJhZ2VudGVyJzpcbiAgICAgIGNhc2UgJ2RyYWdvdmVyJzpcbiAgICAgIGNhc2UgJ2RyYWdsZWF2ZSc6XG4gICAgICBjYXNlICdkcm9wJzpcbiAgICAgIGNhc2UgJ2RyYWdlbmQnOlxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ2RyYWdOb2RlJzogdGhpcy5nZXRTZWxlY3RlZE5vZGUoKSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbGljayc6XG4gICAgICBjYXNlICdkYmxjbGljayc6XG4gICAgICAgIC8vIFRPRE86IERlcHJlY2F0ZWRcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdzZWxlY3RlZEtleXMnOiB0aGlzLmdldFNlbGVjdGVkTm9kZUxpc3QoKSB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdub2Rlcyc6IHRoaXMuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpIH0pO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ2tleXMnOiB0aGlzLmdldFNlbGVjdGVkTm9kZUxpc3QoKS5tYXAobiA9PiBuLmtleSkgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hlY2snOlxuICAgICAgICAvLyBUT0RPOiBEZXByZWNhdGVkXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyAnY2hlY2tlZEtleXMnOiB0aGlzLmdldENoZWNrZWROb2RlTGlzdCgpIH0pO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ25vZGVzJzogdGhpcy5nZXRDaGVja2VkTm9kZUxpc3QoKSB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdrZXlzJzogdGhpcy5nZXRDaGVja2VkTm9kZUxpc3QoKS5tYXAobiA9PiBuLmtleSkgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VhcmNoJzpcbiAgICAgICAgLy8gVE9ETzogRGVwcmVjYXRlZFxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ21hdGNoZWRLZXlzJzogdGhpcy5nZXRNYXRjaGVkTm9kZUxpc3QoKSB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdub2Rlcyc6IHRoaXMuZ2V0TWF0Y2hlZE5vZGVMaXN0KCkgfSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyAna2V5cyc6IHRoaXMuZ2V0TWF0Y2hlZE5vZGVMaXN0KCkubWFwKG4gPT4gbi5rZXkpIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2V4cGFuZCc6XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyAnbm9kZXMnOiB0aGlzLmdldEV4cGFuZGVkTm9kZUxpc3QoKSB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdrZXlzJzogdGhpcy5nZXRFeHBhbmRlZE5vZGVMaXN0KCkubWFwKG4gPT4gbi5rZXkpIH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGVtaXRTdHJ1Y3R1cmU7XG4gIH1cblxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { NzTreeNode } from './nz-tree-node';
import { isCheckDisabled, isInArray } from './nz-tree-util';
export class NzTreeService {
    constructor() {
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
     * @param {?} nzNodes
     * @return {?}
     */
    initTree(nzNodes) {
        this.rootNodes = nzNodes;
        this.expandedNodeList = [];
        this.selectedNodeList = [];
        this.halfCheckedNodeList = [];
        this.checkedNodeList = [];
        this.expandedNodeList = [];
        this.matchedNodeList = [];
        setTimeout(() => {
            this.refreshCheckState(this.conductOption.isCheckStrictly);
        });
    }
    /**
     * @return {?}
     */
    getSelectedNode() {
        return this.selectedNode;
    }
    /**
     * get some list
     * @return {?}
     */
    getSelectedNodeList() {
        return this.selectedNodeList;
    }
    /**
     * return checked nodes
     * @return {?}
     */
    getCheckedNodeList() {
        return this.conductCheck('check');
    }
    /**
     * @return {?}
     */
    getHalfCheckedNodeList() {
        return this.conductCheck('halfCheck');
    }
    /**
     * return expanded nodes
     * @return {?}
     */
    getExpandedNodeList() {
        return this.expandedNodeList;
    }
    /**
     * return search matched nodes
     * @return {?}
     */
    getMatchedNodeList() {
        return this.matchedNodeList;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isArrayOfNzTreeNode(value) {
        return value.every(item => item instanceof NzTreeNode);
    }
    /**
     * reset selectedNodeList
     * @param {?} selectedKeys
     * @param {?} nzNodes
     * @param {?=} isMulti
     * @return {?}
     */
    calcSelectedKeys(selectedKeys, nzNodes, isMulti = false) {
        this.selectedNodeList = [];
        /** @type {?} */
        const calc = (nodes) => {
            nodes.forEach(node => {
                if (isInArray(node.key, selectedKeys)) {
                    node.setSelected(true);
                }
                else {
                    node.setSelected(false);
                }
                this.setSelectedNodeList(node, isMulti);
                if (node.getChildren().length > 0) {
                    calc(node.getChildren());
                }
            });
        };
        calc(nzNodes);
    }
    /**
     * reset expandedNodeList
     * @param {?} expandedKeys
     * @param {?} nzNodes
     * @return {?}
     */
    calcExpandedKeys(expandedKeys, nzNodes) {
        this.expandedNodeList = [];
        /** @type {?} */
        const calc = (nodes) => {
            nodes.forEach(node => {
                if (isInArray(node.key, expandedKeys)) {
                    node.setExpanded(true);
                    this.setExpandedNodeList(node);
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
    }
    /**
     * reset checkedNodeList
     * @param {?} checkedKeys
     * @param {?} nzNodes
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    calcCheckedKeys(checkedKeys, nzNodes, isCheckStrictly = false) {
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        /** @type {?} */
        const calc = (nodes) => {
            nodes.forEach(node => {
                if (isInArray(node.key, checkedKeys)) {
                    node.setChecked(true);
                    this.setCheckedNodeList(node);
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
    }
    /**
     * set drag node
     * @param {?=} node
     * @return {?}
     */
    setSelectedNode(node) {
        this.selectedNode = null;
        if (node) {
            this.selectedNode = node;
        }
    }
    /**
     * set node selected status
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    setNodeActive(node, isMultiple = false) {
        /** @type {?} */
        const isSelected = node.isSelected;
        if (node.isDisabled) {
            return;
        }
        if (!isMultiple) {
            this.selectedNodeList.forEach(n => {
                n.setSelected(false);
            });
            this.selectedNodeList = [];
        }
        node.setSelected(!isSelected);
        this.setSelectedNodeList(node, isMultiple);
    }
    /**
     * add or remove node to selectedNodeList
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    setSelectedNodeList(node, isMultiple = false) {
        /** @type {?} */
        const index = this.selectedNodeList.findIndex(n => node.key === n.key);
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
    }
    /**
     * merge checked nodes
     * @param {?} node
     * @return {?}
     */
    setHalfCheckedNodeList(node) {
        /** @type {?} */
        const index = this.halfCheckedNodeList.findIndex(n => node.key === n.key);
        if (node.isHalfChecked && index === -1) {
            this.halfCheckedNodeList.push(node);
        }
        else if (!node.isHalfChecked && index > -1) {
            this.halfCheckedNodeList.splice(index, 1);
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    setCheckedNodeList(node) {
        /** @type {?} */
        const index = this.checkedNodeList.findIndex(n => node.key === n.key);
        if (node.isChecked && index === -1) {
            this.checkedNodeList.push(node);
        }
        else if (!node.isChecked && index > -1) {
            this.checkedNodeList.splice(index, 1);
        }
    }
    /**
     * conduct checked keys
     * @param {?=} type
     * @return {?}
     */
    conductCheck(type = 'check') {
        /** @type {?} */
        const checkedNodeList = [];
        /** @type {?} */
        const loop = (node) => {
            switch (type) {
                case 'check':
                    if (node.isChecked) {
                        checkedNodeList.push(node);
                    }
                    if (!this.conductOption.isCheckStrictly) {
                        if (!node.isChecked) {
                            node.getChildren().forEach(child => {
                                loop(child);
                            });
                        }
                    }
                    else {
                        node.getChildren().forEach(child => {
                            loop(child);
                        });
                    }
                    break;
                case 'halfCheck':
                    if (!this.conductOption.isCheckStrictly) {
                        if (node.isHalfChecked) {
                            checkedNodeList.push(node);
                            node.getChildren().forEach(child => {
                                loop(child);
                            });
                        }
                    }
                    break;
            }
        };
        this.rootNodes.forEach(node => {
            loop(node);
        });
        return checkedNodeList;
    }
    /**
     * set expanded nodes
     * @param {?} node
     * @return {?}
     */
    setExpandedNodeList(node) {
        if (node.isLeaf) {
            return;
        }
        /** @type {?} */
        const index = this.expandedNodeList.findIndex(n => node.key === n.key);
        if (node.isExpanded && index === -1) {
            this.expandedNodeList.push(node);
        }
        else if (!node.isExpanded && index > -1) {
            this.expandedNodeList.splice(index, 1);
        }
    }
    /**
     * check state
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    refreshCheckState(isCheckStrictly = false) {
        if (isCheckStrictly) {
            return;
        }
        this.checkedNodeList.forEach(node => {
            this.conduct(node);
        });
    }
    /**
     * @param {?} node
     * @return {?}
     */
    conduct(node) {
        /** @type {?} */
        const isChecked = node.isChecked;
        if (node) {
            this.conductUp(node);
            this.conductDown(node, isChecked);
        }
    }
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     * @param {?} node
     * @return {?}
     */
    conductUp(node) {
        /** @type {?} */
        const parentNode = node.getParentNode();
        // 全禁用节点不选中
        if (parentNode) {
            if (!isCheckDisabled(parentNode)) {
                if (parentNode.getChildren().every(child => isCheckDisabled(child) || (!child.isHalfChecked && child.isChecked))) {
                    parentNode.setChecked(true);
                }
                else if (parentNode.getChildren().some(child => child.isHalfChecked || child.isChecked)) {
                    parentNode.setChecked(false, true);
                }
                else {
                    parentNode.setChecked(false);
                }
            }
            this.setHalfCheckedNodeList(parentNode);
            this.conductUp(parentNode);
        }
    }
    /**
     * reset child check state
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    conductDown(node, value) {
        if (!isCheckDisabled(node)) {
            node.setChecked(value);
            node.children.forEach(n => {
                this.conductDown(n, value);
            });
        }
    }
    /**
     * search value & expand node
     * should add expandlist
     * @param {?} value
     * @return {?}
     */
    searchExpand(value) {
        this.matchedNodeList = [];
        if (!isNotNil(value)) {
            return;
        }
        // to reset expandedNodeList
        this.expandedNodeList = [];
        /** @type {?} */
        const expandParent = (p) => {
            // expand parent node
            if (p.getParentNode()) {
                p.getParentNode().setExpanded(true);
                this.setExpandedNodeList(p.getParentNode());
                expandParent(p.getParentNode());
            }
        };
        /** @type {?} */
        const searchChild = (n) => {
            if (value && n.title.includes(value)) {
                // match the node
                this.matchedNodeList.push(n);
                // expand parentNode
                expandParent(n);
            }
            else {
                n.setExpanded(false);
                this.setExpandedNodeList(n);
            }
            n.children.forEach(g => {
                searchChild(g);
            });
        };
        this.rootNodes.forEach(child => {
            searchChild(child);
        });
    }
    /**
     * drag event
     * @param {?} node
     * @return {?}
     */
    refreshDragNode(node) {
        if (node.getChildren().length === 0) {
            // until root
            this.conductUp(node);
        }
        else {
            node.children.forEach((child) => {
                this.refreshDragNode(child);
            });
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    resetNodeLevel(node) {
        if (node.getParentNode()) {
            node.level = node.getParentNode().level + 1;
        }
        else {
            node.level = 0;
        }
        for (const child of node.getChildren()) {
            this.resetNodeLevel(child);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    calcDropPosition(event) {
        const { clientY } = event;
        const { top, bottom, height } = event.srcElement ? event.srcElement.getBoundingClientRect() : (/** @type {?} */ (event.target)).getBoundingClientRect();
        /** @type {?} */
        const des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);
        if (clientY <= top + des) {
            return -1;
        }
        else if (clientY >= bottom - des) {
            return 1;
        }
        return 0;
    }
    /**
     * drop
     * 0: inner -1: pre 1: next
     * @param {?} targetNode
     * @param {?=} dragPos
     * @return {?}
     */
    dropAndApply(targetNode, dragPos = -1) {
        if (!targetNode || dragPos > 1) {
            return;
        }
        /** @type {?} */
        const targetParent = targetNode.getParentNode();
        /** @type {?} */
        const isSelectedRootNode = this.selectedNode.getParentNode();
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
                const tIndex = dragPos === 1 ? 1 : 0;
                if (targetParent) {
                    targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
                    if (this.selectedNode.getParentNode()) {
                        this.resetNodeLevel(this.selectedNode.getParentNode());
                    }
                }
                else {
                    /** @type {?} */
                    const targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
                    // 根节点插入
                    this.rootNodes.splice(targetIndex, 0, this.selectedNode);
                    this.rootNodes[targetIndex].parentNode = null;
                    this.rootNodes[targetIndex].level = 0;
                }
                break;
        }
        // flush all nodes
        this.rootNodes.forEach((child) => {
            this.refreshDragNode(child);
        });
    }
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
    formatEvent(eventName, node, event) {
        /** @type {?} */
        const emitStructure = {
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
                Object.assign(emitStructure, { 'keys': this.getSelectedNodeList().map(n => n.key) });
                break;
            case 'check':
                // TODO: Deprecated
                Object.assign(emitStructure, { 'checkedKeys': this.getCheckedNodeList() });
                Object.assign(emitStructure, { 'nodes': this.getCheckedNodeList() });
                Object.assign(emitStructure, { 'keys': this.getCheckedNodeList().map(n => n.key) });
                break;
            case 'search':
                // TODO: Deprecated
                Object.assign(emitStructure, { 'matchedKeys': this.getMatchedNodeList() });
                Object.assign(emitStructure, { 'nodes': this.getMatchedNodeList() });
                Object.assign(emitStructure, { 'keys': this.getMatchedNodeList().map(n => n.key) });
                break;
            case 'expand':
                Object.assign(emitStructure, { 'nodes': this.getExpandedNodeList() });
                Object.assign(emitStructure, { 'keys': this.getExpandedNodeList().map(n => n.key) });
                break;
        }
        return emitStructure;
    }
}
NzTreeService.decorators = [
    { type: Injectable }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyZWUvbnotdHJlZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc1RCxNQUFNOzsrQkFDYyxJQUFJOzRCQUNQLENBQUM7NkJBSVo7WUFDRixlQUFlLEVBQUUsS0FBSztTQUN2Qjt5QkFHeUIsRUFBRTtnQ0FDSyxFQUFFO2dDQUNGLEVBQUU7K0JBQ0gsRUFBRTttQ0FDRSxFQUFFOytCQUNOLEVBQUU7Ozs7Ozs7SUFLbEMsUUFBUSxDQUFDLE9BQXFCO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzVELENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztLQUMxQjs7Ozs7SUFLRCxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7S0FDOUI7Ozs7O0lBS0Qsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNuQzs7OztJQUVELHNCQUFzQjtRQUNwQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDdkM7Ozs7O0lBS0QsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0tBQzlCOzs7OztJQUtELGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7S0FDN0I7Ozs7O0lBR0QsbUJBQW1CLENBQUMsS0FBWTtRQUM5QixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFlBQVksVUFBVSxDQUFDLENBQUM7S0FDeEQ7Ozs7Ozs7O0lBS0QsZ0JBQWdCLENBQUMsWUFBc0IsRUFBRSxPQUFxQixFQUFFLFVBQW1CLEtBQUs7UUFDdEYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQzs7UUFDM0IsTUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFtQixFQUFFLEVBQUU7WUFDbkMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsRUFBRTtvQkFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDeEI7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDekI7Z0JBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2lCQUMxQjthQUNGLENBQUMsQ0FBQztTQUNKLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FFZjs7Ozs7OztJQUtELGdCQUFnQixDQUFDLFlBQXNCLEVBQUUsT0FBcUI7UUFDNUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQzs7UUFDM0IsTUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFtQixFQUFFLEVBQUU7WUFDbkMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsRUFBRTtvQkFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNoQztxQkFBTTtvQkFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN6QjtnQkFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7aUJBQzFCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNmOzs7Ozs7OztJQUtELGVBQWUsQ0FBQyxXQUFxQixFQUFFLE9BQXFCLEVBQUUsa0JBQTJCLEtBQUs7UUFDNUYsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQzs7UUFDOUIsTUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFtQixFQUFFLEVBQUU7WUFDbkMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsRUFBRTtvQkFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUMvQjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN4QjtnQkFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7aUJBQzFCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7UUFFZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDekM7Ozs7OztJQUtELGVBQWUsQ0FBQyxJQUFpQjtRQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzFCO0tBQ0Y7Ozs7Ozs7SUFLRCxhQUFhLENBQUMsSUFBZ0IsRUFBRSxhQUFzQixLQUFLOztRQUN6RCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDaEMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDNUM7Ozs7Ozs7SUFLRCxtQkFBbUIsQ0FBQyxJQUFnQixFQUFFLGFBQXNCLEtBQUs7O1FBQy9ELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEM7U0FDRjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUUsSUFBSSxDQUFFLENBQUM7YUFDbEM7U0FDRjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN4QztLQUNGOzs7Ozs7SUFLRCxzQkFBc0IsQ0FBQyxJQUFnQjs7UUFDckMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFFLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzQztLQUNGOzs7OztJQUVELGtCQUFrQixDQUFDLElBQWdCOztRQUNqQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RFLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0tBQ0Y7Ozs7OztJQUtELFlBQVksQ0FBQyxPQUFlLE9BQU87O1FBQ2pDLE1BQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQzs7UUFDM0IsTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFnQixFQUFFLEVBQUU7WUFDaEMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxPQUFPO29CQUNWLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDbEIsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDNUI7b0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFO3dCQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTs0QkFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQ0FDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzZCQUNiLENBQUMsQ0FBQzt5QkFDSjtxQkFDRjt5QkFBTTt3QkFDTCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFOzRCQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQ2IsQ0FBQyxDQUFDO3FCQUNKO29CQUNELE1BQU07Z0JBQ1IsS0FBSyxXQUFXO29CQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRTt3QkFDdkMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFOzRCQUN0QixlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUMzQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dDQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7NkJBQ2IsQ0FBQyxDQUFDO3lCQUNKO3FCQUNGO29CQUNELE1BQU07YUFDVDtTQUNGLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDWixDQUFDLENBQUM7UUFDSCxPQUFPLGVBQWUsQ0FBQztLQUN4Qjs7Ozs7O0lBS0QsbUJBQW1CLENBQUMsSUFBZ0I7UUFDbEMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTztTQUNSOztRQUNELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEM7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDeEM7S0FDRjs7Ozs7O0lBTUQsaUJBQWlCLENBQUMsa0JBQTJCLEtBQUs7UUFDaEQsSUFBSSxlQUFlLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQixDQUFDLENBQUM7S0FDSjs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBZ0I7O1FBQ3RCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ25DO0tBQ0Y7Ozs7Ozs7O0lBT0QsU0FBUyxDQUFDLElBQWdCOztRQUN4QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7O1FBRXhDLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFO29CQUNoSCxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3QjtxQkFBTSxJQUFJLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDekYsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ3BDO3FCQUFNO29CQUNMLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzlCO2FBQ0Y7WUFDRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM1QjtLQUNGOzs7Ozs7O0lBS0QsV0FBVyxDQUFDLElBQWdCLEVBQUUsS0FBYztRQUMxQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzVCLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7Ozs7SUFNRCxZQUFZLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE9BQU87U0FDUjs7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDOztRQUMzQixNQUFNLFlBQVksR0FBRyxDQUFDLENBQWEsRUFBRSxFQUFFOztZQUVyQyxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRTtnQkFDckIsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QyxZQUFZLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7YUFDakM7U0FDRixDQUFDOztRQUNGLE1BQU0sV0FBVyxHQUFHLENBQUMsQ0FBYSxFQUFFLEVBQUU7WUFDcEMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7O2dCQUVwQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Z0JBRTdCLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtpQkFBTTtnQkFDTCxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0I7WUFDRCxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hCLENBQUMsQ0FBQztTQUNKLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QixXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEIsQ0FBQyxDQUFDO0tBQ0o7Ozs7OztJQUtELGVBQWUsQ0FBQyxJQUFnQjtRQUM5QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFOztZQUVuQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RCO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdCLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7O0lBR0QsY0FBYyxDQUFDLElBQWdCO1FBQzdCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCO1FBQ0QsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtLQUNGOzs7OztJQUVELGdCQUFnQixDQUFDLEtBQWdCO1FBQy9CLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFFMUIsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBQyxLQUFLLENBQUMsTUFBaUIsRUFBQyxDQUFDLHFCQUFxQixFQUFFLENBQUM7O1FBQ2hKLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXZFLElBQUksT0FBTyxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFDeEIsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNYO2FBQU0sSUFBSSxPQUFPLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRTtZQUNsQyxPQUFPLENBQUMsQ0FBQztTQUNWO1FBRUQsT0FBTyxDQUFDLENBQUM7S0FDVjs7Ozs7Ozs7SUFNRCxZQUFZLENBQUMsVUFBc0IsRUFBRSxVQUFrQixDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLE9BQU87U0FDUjs7UUFDRCxNQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7O1FBQ2hELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7UUFFN0QsSUFBSSxrQkFBa0IsRUFBRTtZQUN0QixrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN6RzthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsUUFBUSxPQUFPLEVBQUU7WUFDZixLQUFLLENBQUM7Z0JBQ0osVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFFLElBQUksQ0FBQyxZQUFZLENBQUUsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNO1lBQ1IsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNSLEtBQUssQ0FBQzs7Z0JBQ0osTUFBTSxNQUFNLEdBQUcsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksWUFBWSxFQUFFO29CQUNoQixZQUFZLENBQUMsV0FBVyxDQUFDLENBQUUsSUFBSSxDQUFDLFlBQVksQ0FBRSxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO29CQUNwRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEVBQUU7d0JBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO3FCQUN4RDtpQkFDRjtxQkFBTTs7b0JBQ0wsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxDQUFDOztvQkFFaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3pELElBQUksQ0FBQyxTQUFTLENBQUUsV0FBVyxDQUFFLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBRSxXQUFXLENBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2lCQUN6QztnQkFDRCxNQUFNO1NBQ1Q7O1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCLENBQUMsQ0FBQztLQUNKOzs7Ozs7Ozs7Ozs7SUFTRCxXQUFXLENBQUMsU0FBaUIsRUFBRSxJQUFnQixFQUFFLEtBQTZCOztRQUM1RSxNQUFNLGFBQWEsR0FBRztZQUNwQixXQUFXLEVBQUUsU0FBUztZQUN0QixNQUFNLEVBQU8sSUFBSTtZQUNqQixPQUFPLEVBQU0sS0FBSztTQUNuQixDQUFDO1FBQ0YsUUFBUSxTQUFTLEVBQUU7WUFDakIsS0FBSyxXQUFXLENBQUM7WUFDakIsS0FBSyxXQUFXLENBQUM7WUFDakIsS0FBSyxVQUFVLENBQUM7WUFDaEIsS0FBSyxXQUFXLENBQUM7WUFDakIsS0FBSyxNQUFNLENBQUM7WUFDWixLQUFLLFNBQVM7Z0JBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDckUsTUFBTTtZQUNSLEtBQUssT0FBTyxDQUFDO1lBQ2IsS0FBSyxVQUFVOztnQkFFYixNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzdFLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDdEUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDckYsTUFBTTtZQUNSLEtBQUssT0FBTzs7Z0JBRVYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMzRSxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3JFLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BGLE1BQU07WUFDUixLQUFLLFFBQVE7O2dCQUVYLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDM0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRSxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRixNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDdEUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDckYsTUFBTTtTQUNUO1FBQ0QsT0FBTyxhQUFhLENBQUM7S0FDdEI7OztZQTllRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgTnpGb3JtYXRFbWl0RXZlbnQgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnLi9uei10cmVlLW5vZGUnO1xuaW1wb3J0IHsgaXNDaGVja0Rpc2FibGVkLCBpc0luQXJyYXkgfSBmcm9tICcuL256LXRyZWUtdXRpbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOelRyZWVTZXJ2aWNlIHtcbiAgRFJBR19TSURFX1JBTkdFID0gMC4yNTtcbiAgRFJBR19NSU5fR0FQID0gMjtcblxuICBjb25kdWN0T3B0aW9uOiB7XG4gICAgaXNDaGVja1N0cmljdGx5OiBib29sZWFuXG4gIH0gPSB7XG4gICAgaXNDaGVja1N0cmljdGx5OiBmYWxzZVxuICB9O1xuICBzZWxlY3RlZE5vZGU6IE56VHJlZU5vZGU7XG4gIHRhcmdldE5vZGU6IE56VHJlZU5vZGU7XG4gIHJvb3ROb2RlczogTnpUcmVlTm9kZVtdID0gW107XG4gIHNlbGVjdGVkTm9kZUxpc3Q6IE56VHJlZU5vZGVbXSA9IFtdO1xuICBleHBhbmRlZE5vZGVMaXN0OiBOelRyZWVOb2RlW10gPSBbXTtcbiAgY2hlY2tlZE5vZGVMaXN0OiBOelRyZWVOb2RlW10gPSBbXTtcbiAgaGFsZkNoZWNrZWROb2RlTGlzdDogTnpUcmVlTm9kZVtdID0gW107XG4gIG1hdGNoZWROb2RlTGlzdDogTnpUcmVlTm9kZVtdID0gW107XG5cbiAgLyoqXG4gICAqIHJlc2V0IHRyZWUgbm9kZXMgd2lsbCBjbGVhciBkZWZhdWx0IG5vZGUgbGlzdFxuICAgKi9cbiAgaW5pdFRyZWUobnpOb2RlczogTnpUcmVlTm9kZVtdKTogdm9pZCB7XG4gICAgdGhpcy5yb290Tm9kZXMgPSBuek5vZGVzO1xuICAgIHRoaXMuZXhwYW5kZWROb2RlTGlzdCA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdCA9IFtdO1xuICAgIHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdCA9IFtdO1xuICAgIHRoaXMuY2hlY2tlZE5vZGVMaXN0ID0gW107XG4gICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0ID0gW107XG4gICAgdGhpcy5tYXRjaGVkTm9kZUxpc3QgPSBbXTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaENoZWNrU3RhdGUodGhpcy5jb25kdWN0T3B0aW9uLmlzQ2hlY2tTdHJpY3RseSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRTZWxlY3RlZE5vZGUoKTogTnpUcmVlTm9kZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkTm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgc29tZSBsaXN0XG4gICAqL1xuICBnZXRTZWxlY3RlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWROb2RlTGlzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gY2hlY2tlZCBub2Rlc1xuICAgKi9cbiAgZ2V0Q2hlY2tlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZHVjdENoZWNrKCdjaGVjaycpO1xuICB9XG5cbiAgZ2V0SGFsZkNoZWNrZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmNvbmR1Y3RDaGVjaygnaGFsZkNoZWNrJyk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJuIGV4cGFuZGVkIG5vZGVzXG4gICAqL1xuICBnZXRFeHBhbmRlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwYW5kZWROb2RlTGlzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gc2VhcmNoIG1hdGNoZWQgbm9kZXNcbiAgICovXG4gIGdldE1hdGNoZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm1hdGNoZWROb2RlTGlzdDtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgaXNBcnJheU9mTnpUcmVlTm9kZSh2YWx1ZTogYW55W10pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoaXRlbSA9PiBpdGVtIGluc3RhbmNlb2YgTnpUcmVlTm9kZSk7XG4gIH1cblxuICAvKipcbiAgICogcmVzZXQgc2VsZWN0ZWROb2RlTGlzdFxuICAgKi9cbiAgY2FsY1NlbGVjdGVkS2V5cyhzZWxlY3RlZEtleXM6IHN0cmluZ1tdLCBuek5vZGVzOiBOelRyZWVOb2RlW10sIGlzTXVsdGk6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdCA9IFtdO1xuICAgIGNvbnN0IGNhbGMgPSAobm9kZXM6IE56VHJlZU5vZGVbXSkgPT4ge1xuICAgICAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgaWYgKGlzSW5BcnJheShub2RlLmtleSwgc2VsZWN0ZWRLZXlzKSkge1xuICAgICAgICAgIG5vZGUuc2V0U2VsZWN0ZWQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5zZXRTZWxlY3RlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZE5vZGVMaXN0KG5vZGUsIGlzTXVsdGkpO1xuICAgICAgICBpZiAobm9kZS5nZXRDaGlsZHJlbigpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjYWxjKG5vZGUuZ2V0Q2hpbGRyZW4oKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgY2FsYyhuek5vZGVzKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIHJlc2V0IGV4cGFuZGVkTm9kZUxpc3RcbiAgICovXG4gIGNhbGNFeHBhbmRlZEtleXMoZXhwYW5kZWRLZXlzOiBzdHJpbmdbXSwgbnpOb2RlczogTnpUcmVlTm9kZVtdKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0ID0gW107XG4gICAgY29uc3QgY2FsYyA9IChub2RlczogTnpUcmVlTm9kZVtdKSA9PiB7XG4gICAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBpZiAoaXNJbkFycmF5KG5vZGUua2V5LCBleHBhbmRlZEtleXMpKSB7XG4gICAgICAgICAgbm9kZS5zZXRFeHBhbmRlZCh0cnVlKTtcbiAgICAgICAgICB0aGlzLnNldEV4cGFuZGVkTm9kZUxpc3Qobm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5zZXRFeHBhbmRlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuZ2V0Q2hpbGRyZW4oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY2FsYyhub2RlLmdldENoaWxkcmVuKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNhbGMobnpOb2Rlcyk7XG4gIH1cblxuICAvKipcbiAgICogcmVzZXQgY2hlY2tlZE5vZGVMaXN0XG4gICAqL1xuICBjYWxjQ2hlY2tlZEtleXMoY2hlY2tlZEtleXM6IHN0cmluZ1tdLCBuek5vZGVzOiBOelRyZWVOb2RlW10sIGlzQ2hlY2tTdHJpY3RseTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2VkTm9kZUxpc3QgPSBbXTtcbiAgICB0aGlzLmhhbGZDaGVja2VkTm9kZUxpc3QgPSBbXTtcbiAgICBjb25zdCBjYWxjID0gKG5vZGVzOiBOelRyZWVOb2RlW10pID0+IHtcbiAgICAgIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGlmIChpc0luQXJyYXkobm9kZS5rZXksIGNoZWNrZWRLZXlzKSkge1xuICAgICAgICAgIG5vZGUuc2V0Q2hlY2tlZCh0cnVlKTtcbiAgICAgICAgICB0aGlzLnNldENoZWNrZWROb2RlTGlzdChub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLnNldENoZWNrZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLmdldENoaWxkcmVuKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNhbGMobm9kZS5nZXRDaGlsZHJlbigpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjYWxjKG56Tm9kZXMpO1xuICAgIC8vIGNvbnRyb2xsZWQgc3RhdGVcbiAgICB0aGlzLnJlZnJlc2hDaGVja1N0YXRlKGlzQ2hlY2tTdHJpY3RseSk7XG4gIH1cblxuICAvKipcbiAgICogc2V0IGRyYWcgbm9kZVxuICAgKi9cbiAgc2V0U2VsZWN0ZWROb2RlKG5vZGU/OiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZE5vZGUgPSBudWxsO1xuICAgIGlmIChub2RlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZSA9IG5vZGU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHNldCBub2RlIHNlbGVjdGVkIHN0YXR1c1xuICAgKi9cbiAgc2V0Tm9kZUFjdGl2ZShub2RlOiBOelRyZWVOb2RlLCBpc011bHRpcGxlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gbm9kZS5pc1NlbGVjdGVkO1xuICAgIGlmIChub2RlLmlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFpc011bHRpcGxlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QuZm9yRWFjaChuID0+IHtcbiAgICAgICAgbi5zZXRTZWxlY3RlZChmYWxzZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdCA9IFtdO1xuICAgIH1cbiAgICBub2RlLnNldFNlbGVjdGVkKCFpc1NlbGVjdGVkKTtcbiAgICB0aGlzLnNldFNlbGVjdGVkTm9kZUxpc3Qobm9kZSwgaXNNdWx0aXBsZSk7XG4gIH1cblxuICAvKipcbiAgICogYWRkIG9yIHJlbW92ZSBub2RlIHRvIHNlbGVjdGVkTm9kZUxpc3RcbiAgICovXG4gIHNldFNlbGVjdGVkTm9kZUxpc3Qobm9kZTogTnpUcmVlTm9kZSwgaXNNdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkTm9kZUxpc3QuZmluZEluZGV4KG4gPT4gbm9kZS5rZXkgPT09IG4ua2V5KTtcbiAgICBpZiAoaXNNdWx0aXBsZSkge1xuICAgICAgaWYgKG5vZGUuaXNTZWxlY3RlZCAmJiBpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0LnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChub2RlLmlzU2VsZWN0ZWQgJiYgaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdCA9IFsgbm9kZSBdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW5vZGUuaXNTZWxlY3RlZCAmJiBpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogbWVyZ2UgY2hlY2tlZCBub2Rlc1xuICAgKi9cbiAgc2V0SGFsZkNoZWNrZWROb2RlTGlzdChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmhhbGZDaGVja2VkTm9kZUxpc3QuZmluZEluZGV4KG4gPT4gbm9kZS5rZXkgPT09IG4ua2V5KTtcbiAgICBpZiAobm9kZS5pc0hhbGZDaGVja2VkICYmIGluZGV4ID09PSAtMSkge1xuICAgICAgdGhpcy5oYWxmQ2hlY2tlZE5vZGVMaXN0LnB1c2gobm9kZSk7XG4gICAgfSBlbHNlIGlmICghbm9kZS5pc0hhbGZDaGVja2VkICYmIGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIHNldENoZWNrZWROb2RlTGlzdChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmNoZWNrZWROb2RlTGlzdC5maW5kSW5kZXgobiA9PiBub2RlLmtleSA9PT0gbi5rZXkpO1xuICAgIGlmIChub2RlLmlzQ2hlY2tlZCAmJiBpbmRleCA9PT0gLTEpIHtcbiAgICAgIHRoaXMuY2hlY2tlZE5vZGVMaXN0LnB1c2gobm9kZSk7XG4gICAgfSBlbHNlIGlmICghbm9kZS5pc0NoZWNrZWQgJiYgaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5jaGVja2VkTm9kZUxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogY29uZHVjdCBjaGVja2VkIGtleXNcbiAgICovXG4gIGNvbmR1Y3RDaGVjayh0eXBlOiBzdHJpbmcgPSAnY2hlY2snKTogTnpUcmVlTm9kZVtdIHtcbiAgICBjb25zdCBjaGVja2VkTm9kZUxpc3QgPSBbXTtcbiAgICBjb25zdCBsb29wID0gKG5vZGU6IE56VHJlZU5vZGUpID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdjaGVjayc6XG4gICAgICAgICAgaWYgKG5vZGUuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICBjaGVja2VkTm9kZUxpc3QucHVzaChub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLmNvbmR1Y3RPcHRpb24uaXNDaGVja1N0cmljdGx5KSB7XG4gICAgICAgICAgICBpZiAoIW5vZGUuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBsb29wKGNoaWxkKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgbG9vcChjaGlsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2hhbGZDaGVjayc6XG4gICAgICAgICAgaWYgKCF0aGlzLmNvbmR1Y3RPcHRpb24uaXNDaGVja1N0cmljdGx5KSB7XG4gICAgICAgICAgICBpZiAobm9kZS5pc0hhbGZDaGVja2VkKSB7XG4gICAgICAgICAgICAgIGNoZWNrZWROb2RlTGlzdC5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICBub2RlLmdldENoaWxkcmVuKCkuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgbG9vcChjaGlsZCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucm9vdE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBsb29wKG5vZGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBjaGVja2VkTm9kZUxpc3Q7XG4gIH1cblxuICAvKipcbiAgICogc2V0IGV4cGFuZGVkIG5vZGVzXG4gICAqL1xuICBzZXRFeHBhbmRlZE5vZGVMaXN0KG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcbiAgICBpZiAobm9kZS5pc0xlYWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmV4cGFuZGVkTm9kZUxpc3QuZmluZEluZGV4KG4gPT4gbm9kZS5rZXkgPT09IG4ua2V5KTtcbiAgICBpZiAobm9kZS5pc0V4cGFuZGVkICYmIGluZGV4ID09PSAtMSkge1xuICAgICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0LnB1c2gobm9kZSk7XG4gICAgfSBlbHNlIGlmICghbm9kZS5pc0V4cGFuZGVkICYmIGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWROb2RlTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBjaGVjayBzdGF0ZVxuICAgKiBAcGFyYW0gbm9kZVxuICAgKi9cbiAgcmVmcmVzaENoZWNrU3RhdGUoaXNDaGVja1N0cmljdGx5OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAoaXNDaGVja1N0cmljdGx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja2VkTm9kZUxpc3QuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIHRoaXMuY29uZHVjdChub2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbmR1Y3Qobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xuICAgIGNvbnN0IGlzQ2hlY2tlZCA9IG5vZGUuaXNDaGVja2VkO1xuICAgIGlmIChub2RlKSB7XG4gICAgICB0aGlzLmNvbmR1Y3RVcChub2RlKTtcbiAgICAgIHRoaXMuY29uZHVjdERvd24obm9kZSwgaXNDaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogMeOAgWNoaWxkcmVuIGhhbGYgY2hlY2tlZFxuICAgKiAy44CBY2hpbGRyZW4gYWxsIGNoZWNrZWQsIHBhcmVudCBjaGVja2VkXG4gICAqIDPjgIFubyBjaGlsZHJlbiBjaGVja2VkXG4gICAqL1xuICBjb25kdWN0VXAobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub2RlLmdldFBhcmVudE5vZGUoKTtcbiAgICAvLyDlhajnpoHnlKjoioLngrnkuI3pgInkuK1cbiAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgaWYgKCFpc0NoZWNrRGlzYWJsZWQocGFyZW50Tm9kZSkpIHtcbiAgICAgICAgaWYgKHBhcmVudE5vZGUuZ2V0Q2hpbGRyZW4oKS5ldmVyeShjaGlsZCA9PiBpc0NoZWNrRGlzYWJsZWQoY2hpbGQpIHx8ICghY2hpbGQuaXNIYWxmQ2hlY2tlZCAmJiBjaGlsZC5pc0NoZWNrZWQpKSkge1xuICAgICAgICAgIHBhcmVudE5vZGUuc2V0Q2hlY2tlZCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXJlbnROb2RlLmdldENoaWxkcmVuKCkuc29tZShjaGlsZCA9PiBjaGlsZC5pc0hhbGZDaGVja2VkIHx8IGNoaWxkLmlzQ2hlY2tlZCkpIHtcbiAgICAgICAgICBwYXJlbnROb2RlLnNldENoZWNrZWQoZmFsc2UsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudE5vZGUuc2V0Q2hlY2tlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0SGFsZkNoZWNrZWROb2RlTGlzdChwYXJlbnROb2RlKTtcbiAgICAgIHRoaXMuY29uZHVjdFVwKHBhcmVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXNldCBjaGlsZCBjaGVjayBzdGF0ZVxuICAgKi9cbiAgY29uZHVjdERvd24obm9kZTogTnpUcmVlTm9kZSwgdmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIWlzQ2hlY2tEaXNhYmxlZChub2RlKSkge1xuICAgICAgbm9kZS5zZXRDaGVja2VkKHZhbHVlKTtcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChuID0+IHtcbiAgICAgICAgdGhpcy5jb25kdWN0RG93bihuLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogc2VhcmNoIHZhbHVlICYgZXhwYW5kIG5vZGVcbiAgICogc2hvdWxkIGFkZCBleHBhbmRsaXN0XG4gICAqL1xuICBzZWFyY2hFeHBhbmQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubWF0Y2hlZE5vZGVMaXN0ID0gW107XG4gICAgaWYgKCFpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gdG8gcmVzZXQgZXhwYW5kZWROb2RlTGlzdFxuICAgIHRoaXMuZXhwYW5kZWROb2RlTGlzdCA9IFtdO1xuICAgIGNvbnN0IGV4cGFuZFBhcmVudCA9IChwOiBOelRyZWVOb2RlKSA9PiB7XG4gICAgICAvLyBleHBhbmQgcGFyZW50IG5vZGVcbiAgICAgIGlmIChwLmdldFBhcmVudE5vZGUoKSkge1xuICAgICAgICBwLmdldFBhcmVudE5vZGUoKS5zZXRFeHBhbmRlZCh0cnVlKTtcbiAgICAgICAgdGhpcy5zZXRFeHBhbmRlZE5vZGVMaXN0KHAuZ2V0UGFyZW50Tm9kZSgpKTtcbiAgICAgICAgZXhwYW5kUGFyZW50KHAuZ2V0UGFyZW50Tm9kZSgpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHNlYXJjaENoaWxkID0gKG46IE56VHJlZU5vZGUpID0+IHtcbiAgICAgIGlmICh2YWx1ZSAmJiBuLnRpdGxlLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAvLyBtYXRjaCB0aGUgbm9kZVxuICAgICAgICB0aGlzLm1hdGNoZWROb2RlTGlzdC5wdXNoKG4pO1xuICAgICAgICAvLyBleHBhbmQgcGFyZW50Tm9kZVxuICAgICAgICBleHBhbmRQYXJlbnQobik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuLnNldEV4cGFuZGVkKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRFeHBhbmRlZE5vZGVMaXN0KG4pO1xuICAgICAgfVxuICAgICAgbi5jaGlsZHJlbi5mb3JFYWNoKGcgPT4ge1xuICAgICAgICBzZWFyY2hDaGlsZChnKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5yb290Tm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBzZWFyY2hDaGlsZChjaGlsZCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogZHJhZyBldmVudFxuICAgKi9cbiAgcmVmcmVzaERyYWdOb2RlKG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcbiAgICBpZiAobm9kZS5nZXRDaGlsZHJlbigpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gdW50aWwgcm9vdFxuICAgICAgdGhpcy5jb25kdWN0VXAobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoRHJhZ05vZGUoY2hpbGQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVzZXQgbm9kZSBsZXZlbFxuICByZXNldE5vZGVMZXZlbChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgaWYgKG5vZGUuZ2V0UGFyZW50Tm9kZSgpKSB7XG4gICAgICBub2RlLmxldmVsID0gbm9kZS5nZXRQYXJlbnROb2RlKCkubGV2ZWwgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLmxldmVsID0gMDtcbiAgICB9XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmdldENoaWxkcmVuKCkpIHtcbiAgICAgIHRoaXMucmVzZXROb2RlTGV2ZWwoY2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGNEcm9wUG9zaXRpb24oZXZlbnQ6IERyYWdFdmVudCk6IG51bWJlciB7XG4gICAgY29uc3QgeyBjbGllbnRZIH0gPSBldmVudDtcbiAgICAvLyB0byBmaXggZmlyZWZveCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHRvcCwgYm90dG9tLCBoZWlnaHQgfSA9IGV2ZW50LnNyY0VsZW1lbnQgPyBldmVudC5zcmNFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBkZXMgPSBNYXRoLm1heChoZWlnaHQgKiB0aGlzLkRSQUdfU0lERV9SQU5HRSwgdGhpcy5EUkFHX01JTl9HQVApO1xuXG4gICAgaWYgKGNsaWVudFkgPD0gdG9wICsgZGVzKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmIChjbGllbnRZID49IGJvdHRvbSAtIGRlcykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvKipcbiAgICogZHJvcFxuICAgKiAwOiBpbm5lciAtMTogcHJlIDE6IG5leHRcbiAgICovXG4gIGRyb3BBbmRBcHBseSh0YXJnZXROb2RlOiBOelRyZWVOb2RlLCBkcmFnUG9zOiBudW1iZXIgPSAtMSk6IHZvaWQge1xuICAgIGlmICghdGFyZ2V0Tm9kZSB8fCBkcmFnUG9zID4gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXRQYXJlbnQgPSB0YXJnZXROb2RlLmdldFBhcmVudE5vZGUoKTtcbiAgICBjb25zdCBpc1NlbGVjdGVkUm9vdE5vZGUgPSB0aGlzLnNlbGVjdGVkTm9kZS5nZXRQYXJlbnROb2RlKCk7XG4gICAgLy8gcmVtb3ZlIHRoZSBkcmFnTm9kZVxuICAgIGlmIChpc1NlbGVjdGVkUm9vdE5vZGUpIHtcbiAgICAgIGlzU2VsZWN0ZWRSb290Tm9kZS5nZXRDaGlsZHJlbigpLnNwbGljZShpc1NlbGVjdGVkUm9vdE5vZGUuZ2V0Q2hpbGRyZW4oKS5pbmRleE9mKHRoaXMuc2VsZWN0ZWROb2RlKSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm9vdE5vZGVzLnNwbGljZSh0aGlzLnJvb3ROb2Rlcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWROb2RlKSwgMSk7XG4gICAgfVxuICAgIHN3aXRjaCAoZHJhZ1Bvcykge1xuICAgICAgY2FzZSAwOlxuICAgICAgICB0YXJnZXROb2RlLmFkZENoaWxkcmVuKFsgdGhpcy5zZWxlY3RlZE5vZGUgXSk7XG4gICAgICAgIHRoaXMucmVzZXROb2RlTGV2ZWwodGFyZ2V0Tm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtMTpcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgY29uc3QgdEluZGV4ID0gZHJhZ1BvcyA9PT0gMSA/IDEgOiAwO1xuICAgICAgICBpZiAodGFyZ2V0UGFyZW50KSB7XG4gICAgICAgICAgdGFyZ2V0UGFyZW50LmFkZENoaWxkcmVuKFsgdGhpcy5zZWxlY3RlZE5vZGUgXSwgdGFyZ2V0UGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGFyZ2V0Tm9kZSkgKyB0SW5kZXgpO1xuICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZS5nZXRQYXJlbnROb2RlKCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXROb2RlTGV2ZWwodGhpcy5zZWxlY3RlZE5vZGUuZ2V0UGFyZW50Tm9kZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSB0aGlzLnJvb3ROb2Rlcy5pbmRleE9mKHRhcmdldE5vZGUpICsgdEluZGV4O1xuICAgICAgICAgIC8vIOagueiKgueCueaPkuWFpVxuICAgICAgICAgIHRoaXMucm9vdE5vZGVzLnNwbGljZSh0YXJnZXRJbmRleCwgMCwgdGhpcy5zZWxlY3RlZE5vZGUpO1xuICAgICAgICAgIHRoaXMucm9vdE5vZGVzWyB0YXJnZXRJbmRleCBdLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICAgIHRoaXMucm9vdE5vZGVzWyB0YXJnZXRJbmRleCBdLmxldmVsID0gMDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gZmx1c2ggYWxsIG5vZGVzXG4gICAgdGhpcy5yb290Tm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaERyYWdOb2RlKGNoaWxkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBlbWl0IFN0cnVjdHVyZVxuICAgKiBldmVudE5hbWVcbiAgICogbm9kZVxuICAgKiBldmVudDogTW91c2VFdmVudCAvIERyYWdFdmVudFxuICAgKiBkcmFnTm9kZVxuICAgKi9cbiAgZm9ybWF0RXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIG5vZGU6IE56VHJlZU5vZGUsIGV2ZW50OiBNb3VzZUV2ZW50IHwgRHJhZ0V2ZW50KTogTnpGb3JtYXRFbWl0RXZlbnQge1xuICAgIGNvbnN0IGVtaXRTdHJ1Y3R1cmUgPSB7XG4gICAgICAnZXZlbnROYW1lJzogZXZlbnROYW1lLFxuICAgICAgJ25vZGUnICAgICA6IG5vZGUsXG4gICAgICAnZXZlbnQnICAgIDogZXZlbnRcbiAgICB9O1xuICAgIHN3aXRjaCAoZXZlbnROYW1lKSB7XG4gICAgICBjYXNlICdkcmFnc3RhcnQnOlxuICAgICAgY2FzZSAnZHJhZ2VudGVyJzpcbiAgICAgIGNhc2UgJ2RyYWdvdmVyJzpcbiAgICAgIGNhc2UgJ2RyYWdsZWF2ZSc6XG4gICAgICBjYXNlICdkcm9wJzpcbiAgICAgIGNhc2UgJ2RyYWdlbmQnOlxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ2RyYWdOb2RlJzogdGhpcy5nZXRTZWxlY3RlZE5vZGUoKSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbGljayc6XG4gICAgICBjYXNlICdkYmxjbGljayc6XG4gICAgICAgIC8vIFRPRE86IERlcHJlY2F0ZWRcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdzZWxlY3RlZEtleXMnOiB0aGlzLmdldFNlbGVjdGVkTm9kZUxpc3QoKSB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdub2Rlcyc6IHRoaXMuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpIH0pO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ2tleXMnOiB0aGlzLmdldFNlbGVjdGVkTm9kZUxpc3QoKS5tYXAobiA9PiBuLmtleSkgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hlY2snOlxuICAgICAgICAvLyBUT0RPOiBEZXByZWNhdGVkXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyAnY2hlY2tlZEtleXMnOiB0aGlzLmdldENoZWNrZWROb2RlTGlzdCgpIH0pO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ25vZGVzJzogdGhpcy5nZXRDaGVja2VkTm9kZUxpc3QoKSB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdrZXlzJzogdGhpcy5nZXRDaGVja2VkTm9kZUxpc3QoKS5tYXAobiA9PiBuLmtleSkgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VhcmNoJzpcbiAgICAgICAgLy8gVE9ETzogRGVwcmVjYXRlZFxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ21hdGNoZWRLZXlzJzogdGhpcy5nZXRNYXRjaGVkTm9kZUxpc3QoKSB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdub2Rlcyc6IHRoaXMuZ2V0TWF0Y2hlZE5vZGVMaXN0KCkgfSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyAna2V5cyc6IHRoaXMuZ2V0TWF0Y2hlZE5vZGVMaXN0KCkubWFwKG4gPT4gbi5rZXkpIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2V4cGFuZCc6XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyAnbm9kZXMnOiB0aGlzLmdldEV4cGFuZGVkTm9kZUxpc3QoKSB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdrZXlzJzogdGhpcy5nZXRFeHBhbmRlZE5vZGVMaXN0KCkubWFwKG4gPT4gbi5rZXkpIH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGVtaXRTdHJ1Y3R1cmU7XG4gIH1cblxufVxuIl19
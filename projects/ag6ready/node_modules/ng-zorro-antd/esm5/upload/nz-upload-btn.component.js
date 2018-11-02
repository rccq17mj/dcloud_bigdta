/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, Optional, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
var NzUploadBtnComponent = /** @class */ (function () {
    // endregion
    function NzUploadBtnComponent(http, el, updateHostClassService, cd) {
        this.http = http;
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.cd = cd;
        this.reqs = {};
        this.inited = false;
        this.destroy = false;
        // region: fields
        this.classes = {};
        this.prefixCls = 'ant-upload';
        if (!http) {
            throw new Error("Not found 'HttpClient', You can import 'HttpClientModule' in your root module.");
        }
    }
    // endregion
    /**
     * @return {?}
     */
    NzUploadBtnComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.options.disabled) {
            return;
        }
        (/** @type {?} */ (this.file.nativeElement)).click();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzUploadBtnComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.options.disabled) {
            return;
        }
        if (e.key === 'Enter') {
            this.onClick();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzUploadBtnComponent.prototype.onFileDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if (this.options.disabled || e.type === 'dragover') {
            e.preventDefault();
            return;
        }
        if (this.options.directory) {
            this.traverseFileTree(e.dataTransfer.items);
        }
        else {
            /** @type {?} */
            var files = Array.prototype.slice.call(e.dataTransfer.files).filter(function (file) { return _this.attrAccept(file, _this.options.accept); });
            if (files.length) {
                this.uploadFiles(files);
            }
        }
        e.preventDefault();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzUploadBtnComponent.prototype.onChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.options.disabled) {
            return;
        }
        /** @type {?} */
        var hie = /** @type {?} */ (e.target);
        this.uploadFiles(hie.files);
        hie.value = '';
    };
    /**
     * @param {?} files
     * @return {?}
     */
    NzUploadBtnComponent.prototype.traverseFileTree = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var _this = this;
        var e_1, _a;
        /** @type {?} */
        var _traverseFileTree = function (item, path) {
            if (item.isFile) {
                item.file(function (file) {
                    if (_this.attrAccept(file, _this.options.accept)) {
                        _this.uploadFiles([file]);
                    }
                });
            }
            else if (item.isDirectory) {
                /** @type {?} */
                var dirReader = item.createReader();
                dirReader.readEntries(function (entries) {
                    var e_2, _a;
                    try {
                        for (var entries_1 = tslib_1.__values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
                            var entrieItem = entries_1_1.value;
                            _traverseFileTree(entrieItem, "" + path + item.name + "/");
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                });
            }
        };
        try {
            for (var files_1 = tslib_1.__values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                var file = files_1_1.value;
                _traverseFileTree(file.webkitGetAsEntry(), '');
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} file
     * @param {?} acceptedFiles
     * @return {?}
     */
    NzUploadBtnComponent.prototype.attrAccept = /**
     * @param {?} file
     * @param {?} acceptedFiles
     * @return {?}
     */
    function (file, acceptedFiles) {
        if (file && acceptedFiles) {
            /** @type {?} */
            var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
            /** @type {?} */
            var fileName_1 = '' + file.name;
            /** @type {?} */
            var mimeType_1 = '' + file.type;
            /** @type {?} */
            var baseMimeType_1 = mimeType_1.replace(/\/.*$/, '');
            return acceptedFilesArray.some(function (type) {
                /** @type {?} */
                var validType = type.trim();
                if (validType.charAt(0) === '.') {
                    return fileName_1.toLowerCase().indexOf(validType.toLowerCase(), fileName_1.toLowerCase().length - validType.toLowerCase().length) !== -1;
                }
                else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    return baseMimeType_1 === validType.replace(/\/.*$/, '');
                }
                return mimeType_1 === validType;
            });
        }
        return true;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NzUploadBtnComponent.prototype.attachUid = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        if (!file.uid) {
            file.uid = Math.random().toString(36).substring(2);
        }
        return file;
    };
    /**
     * @param {?} fileList
     * @return {?}
     */
    NzUploadBtnComponent.prototype.uploadFiles = /**
     * @param {?} fileList
     * @return {?}
     */
    function (fileList) {
        var _this = this;
        /** @type {?} */
        var postFiles = Array.prototype.slice.call(fileList);
        this.options.filters.forEach(function (f) { return postFiles = f.fn(postFiles); });
        postFiles.forEach(function (file) {
            _this.attachUid(file);
            _this.upload(file, postFiles);
        });
    };
    /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    NzUploadBtnComponent.prototype.upload = /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    function (file, fileList) {
        var _this = this;
        if (!this.options.beforeUpload) {
            return this.post(file);
        }
        /** @type {?} */
        var before = this.options.beforeUpload(file, fileList);
        if (before instanceof Observable) {
            before.subscribe(function (processedFile) {
                /** @type {?} */
                var processedFileType = Object.prototype.toString.call(processedFile);
                if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
                    _this.attachUid(processedFile);
                    _this.post(processedFile);
                }
                else if (typeof processedFile === 'boolean' && processedFile !== false) {
                    _this.post(file);
                }
            });
        }
        else if (before !== false) {
            return this.post(file);
        }
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NzUploadBtnComponent.prototype.post = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var _this = this;
        if (this.destroy) {
            return;
        }
        /** @type {?} */
        var opt = this.options;
        var uid = file.uid;
        var data = opt.data, headers = opt.headers;
        if (typeof data === 'function') {
            data = data(file);
        }
        if (typeof headers === 'function') {
            headers = headers(file);
        }
        /** @type {?} */
        var args = {
            action: opt.action,
            name: opt.name,
            headers: headers,
            file: file,
            data: data,
            withCredentials: opt.withCredentials,
            onProgress: opt.onProgress ? function (e) {
                opt.onProgress(e, file);
            } : null,
            onSuccess: function (ret, xhr) {
                delete _this.reqs[uid];
                opt.onSuccess(ret, file, xhr);
            },
            onError: function (xhr) {
                delete _this.reqs[uid];
                opt.onError(xhr, file);
            }
        };
        this.reqs[uid] = (opt.customRequest || this.xhr).call(this, args);
        opt.onStart(file);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    NzUploadBtnComponent.prototype.xhr = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        var _this = this;
        /** @type {?} */
        var formData = new FormData();
        // tslint:disable-next-line:no-any
        formData.append(args.name, /** @type {?} */ (args.file));
        if (args.data) {
            Object.keys(args.data).map(function (key) {
                formData.append(key, args.data[key]);
            });
        }
        if (!args.headers) {
            args.headers = {};
        }
        if (args.headers['X-Requested-With'] !== null) {
            args.headers['X-Requested-With'] = "XMLHttpRequest";
        }
        else {
            delete args.headers['X-Requested-With'];
        }
        /** @type {?} */
        var req = new HttpRequest('POST', args.action, formData, {
            reportProgress: true,
            withCredentials: args.withCredentials,
            headers: new HttpHeaders(args.headers)
        });
        return this.http.request(req).subscribe(function (event) {
            if (event.type === HttpEventType.UploadProgress) {
                if (event.total > 0) {
                    // tslint:disable-next-line:no-any
                    (/** @type {?} */ (event)).percent = event.loaded / event.total * 100;
                }
                args.onProgress(event, args.file);
            }
            else if (event instanceof HttpResponse) {
                args.onSuccess(event.body, args.file, event);
            }
        }, function (err) {
            _this.abort(args.file);
            args.onError(err, args.file);
        });
    };
    /**
     * @param {?=} file
     * @return {?}
     */
    NzUploadBtnComponent.prototype.abort = /**
     * @param {?=} file
     * @return {?}
     */
    function (file) {
        var _this = this;
        if (file) {
            /** @type {?} */
            var uid = file && file.uid;
            if (this.reqs[uid]) {
                this.reqs[uid].unsubscribe();
                delete this.reqs[uid];
            }
        }
        else {
            Object.keys(this.reqs).forEach(function (uid) {
                _this.reqs[uid].unsubscribe();
                delete _this.reqs[uid];
            });
        }
    };
    /**
     * @return {?}
     */
    NzUploadBtnComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = tslib_1.__assign((_a = {}, _a[this.prefixCls] = true, _a[this.prefixCls + "-disabled"] = this.options.disabled, _a), this.classes);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    NzUploadBtnComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.inited = true;
        this.setClassMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzUploadBtnComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.inited) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzUploadBtnComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy = true;
        this.abort();
    };
    NzUploadBtnComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-upload-btn]',
                    template: "<input type=\"file\" #file (change)=\"onChange($event)\"\n  [attr.accept]=\"options.accept\"\n  [attr.directory]=\"options.directory ? 'directory': null\"\n  [attr.webkitdirectory]=\"options.directory ? 'webkitdirectory': null\"\n  [multiple]=\"options.multiple\" style=\"display: none;\">\n<ng-content></ng-content>",
                    host: {
                        '[attr.tabindex]': '"0"',
                        '[attr.role]': '"button"'
                    },
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    NzUploadBtnComponent.ctorParameters = function () { return [
        { type: HttpClient, decorators: [{ type: Optional }] },
        { type: ElementRef },
        { type: NzUpdateHostClassService },
        { type: ChangeDetectorRef }
    ]; };
    NzUploadBtnComponent.propDecorators = {
        file: [{ type: ViewChild, args: ['file',] }],
        classes: [{ type: Input }],
        options: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        onFileDrop: [{ type: HostListener, args: ['drop', ['$event'],] }, { type: HostListener, args: ['dragover', ['$event'],] }]
    };
    return NzUploadBtnComponent;
}());
export { NzUploadBtnComponent };
function NzUploadBtnComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzUploadBtnComponent.prototype.reqs;
    /** @type {?} */
    NzUploadBtnComponent.prototype.inited;
    /** @type {?} */
    NzUploadBtnComponent.prototype.destroy;
    /** @type {?} */
    NzUploadBtnComponent.prototype.file;
    /** @type {?} */
    NzUploadBtnComponent.prototype.classes;
    /** @type {?} */
    NzUploadBtnComponent.prototype.options;
    /** @type {?} */
    NzUploadBtnComponent.prototype.prefixCls;
    /** @type {?} */
    NzUploadBtnComponent.prototype.http;
    /** @type {?} */
    NzUploadBtnComponent.prototype.el;
    /** @type {?} */
    NzUploadBtnComponent.prototype.updateHostClassService;
    /** @type {?} */
    NzUploadBtnComponent.prototype.cd;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidXBsb2FkL256LXVwbG9hZC1idG4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwSCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBR1IsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBRWhELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOztJQWtRcEYsWUFBWTtJQUNaLDhCQUFnQyxJQUFnQixFQUFVLEVBQWMsRUFBVSxzQkFBZ0QsRUFBVSxFQUFxQjtRQUFqSSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtvQkFwUHZILEVBQUU7c0JBQzNCLEtBQUs7dUJBQ0osS0FBSzs7dUJBS0EsRUFBRTt5QkFnT0wsWUFBWTtRQWM5QixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxnRkFBZ0YsQ0FBQyxDQUFDO1NBQ25HO0tBQ0Y7SUE5T0QsWUFBWTs7OztJQUVaLHNDQUFPOzs7SUFEUDtRQUVFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDekIsT0FBTztTQUNSO1FBQ0QsbUJBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFpQyxFQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDdkQ7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U0QsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELDBDQUFXOzs7O0lBQVgsVUFBWSxPQUE2RDtRQUN2RSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7S0FDRjs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNkOztnQkFuUkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxpQkFBaUI7b0JBQ3RDLHdVQUFxRDtvQkFDckQsSUFBSSxFQUFpQjt3QkFDbkIsaUJBQWlCLEVBQUUsS0FBSzt3QkFDeEIsYUFBYSxFQUFNLFVBQVU7cUJBQzlCO29CQUNELFNBQVMsRUFBWSxDQUFFLHdCQUF3QixDQUFFO29CQUNqRCxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7OztnQkE5QlEsVUFBVSx1QkFvUkosUUFBUTtnQkFoUnJCLFVBQVU7Z0JBYUgsd0JBQXdCO2dCQWYvQixpQkFBaUI7Ozt1QkFrQ2hCLFNBQVMsU0FBQyxNQUFNOzBCQUdoQixLQUFLOzBCQUNMLEtBQUs7MEJBR0wsWUFBWSxTQUFDLE9BQU87NEJBUXBCLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBRSxRQUFRLENBQUU7NkJBVXBDLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBRSxRQUFRLENBQUUsY0FDakMsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFFLFFBQVEsQ0FBRTs7K0JBOUR4Qzs7U0ErQmEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEV2ZW50LCBIdHRwRXZlbnRUeXBlLCBIdHRwSGVhZGVycywgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBVcGxvYWRGaWxlLCBVcGxvYWRYSFJBcmdzLCBaaXBCdXR0b25PcHRpb25zIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ1tuei11cGxvYWQtYnRuXScsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXVwbG9hZC1idG4uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdcIjBcIicsXG4gICAgJ1thdHRyLnJvbGVdJyAgICA6ICdcImJ1dHRvblwiJ1xuICB9LFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBOelVwbG9hZEJ0bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICByZXFzOiB7IFsga2V5OiBzdHJpbmcgXTogU3Vic2NyaXB0aW9uIH0gPSB7fTtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkZXN0cm95ID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgnZmlsZScpIGZpbGU6IEVsZW1lbnRSZWY7XG5cbiAgLy8gcmVnaW9uOiBmaWVsZHNcbiAgQElucHV0KCkgY2xhc3Nlczoge30gPSB7fTtcbiAgQElucHV0KCkgb3B0aW9uczogWmlwQnV0dG9uT3B0aW9ucztcblxuICAvLyBlbmRyZWdpb25cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKHRoaXMuZmlsZS5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNsaWNrKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyAnJGV2ZW50JyBdKVxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyAnJGV2ZW50JyBdKVxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsgJyRldmVudCcgXSlcbiAgb25GaWxlRHJvcChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkIHx8IGUudHlwZSA9PT0gJ2RyYWdvdmVyJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLmRpcmVjdG9yeSkge1xuICAgICAgdGhpcy50cmF2ZXJzZUZpbGVUcmVlKGUuZGF0YVRyYW5zZmVyLml0ZW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsZXM6IEZpbGVbXSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUuZGF0YVRyYW5zZmVyLmZpbGVzKS5maWx0ZXIoXG4gICAgICAgIChmaWxlOiBGaWxlKSA9PiB0aGlzLmF0dHJBY2NlcHQoZmlsZSwgdGhpcy5vcHRpb25zLmFjY2VwdClcbiAgICAgICk7XG4gICAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMudXBsb2FkRmlsZXMoZmlsZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoaWUgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRoaXMudXBsb2FkRmlsZXMoaGllLmZpbGVzKTtcbiAgICBoaWUudmFsdWUgPSAnJztcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJpdmF0ZSB0cmF2ZXJzZUZpbGVUcmVlKGZpbGVzOiBhbnkpOiB2b2lkIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgY29uc3QgX3RyYXZlcnNlRmlsZVRyZWUgPSAoaXRlbTogYW55LCBwYXRoOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChpdGVtLmlzRmlsZSkge1xuICAgICAgICBpdGVtLmZpbGUoKGZpbGUpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5hdHRyQWNjZXB0KGZpbGUsIHRoaXMub3B0aW9ucy5hY2NlcHQpKSB7XG4gICAgICAgICAgICB0aGlzLnVwbG9hZEZpbGVzKFtmaWxlXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5pc0RpcmVjdG9yeSkge1xuICAgICAgICBjb25zdCBkaXJSZWFkZXIgPSBpdGVtLmNyZWF0ZVJlYWRlcigpO1xuXG4gICAgICAgIGRpclJlYWRlci5yZWFkRW50cmllcygoZW50cmllcykgPT4ge1xuICAgICAgICAgIGZvciAoY29uc3QgZW50cmllSXRlbSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICBfdHJhdmVyc2VGaWxlVHJlZShlbnRyaWVJdGVtLCBgJHtwYXRofSR7aXRlbS5uYW1lfS9gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICBfdHJhdmVyc2VGaWxlVHJlZShmaWxlLndlYmtpdEdldEFzRW50cnkoKSwgJycpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXR0ckFjY2VwdChmaWxlOiBGaWxlLCBhY2NlcHRlZEZpbGVzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIGlmIChmaWxlICYmIGFjY2VwdGVkRmlsZXMpIHtcbiAgICAgIGNvbnN0IGFjY2VwdGVkRmlsZXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWNjZXB0ZWRGaWxlcykgPyBhY2NlcHRlZEZpbGVzIDogYWNjZXB0ZWRGaWxlcy5zcGxpdCgnLCcpO1xuICAgICAgY29uc3QgZmlsZU5hbWUgPSAnJyArIGZpbGUubmFtZTtcbiAgICAgIGNvbnN0IG1pbWVUeXBlID0gJycgKyBmaWxlLnR5cGU7XG4gICAgICBjb25zdCBiYXNlTWltZVR5cGUgPSBtaW1lVHlwZS5yZXBsYWNlKC9cXC8uKiQvLCAnJyk7XG5cbiAgICAgIHJldHVybiBhY2NlcHRlZEZpbGVzQXJyYXkuc29tZSh0eXBlID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRUeXBlID0gdHlwZS50cmltKCk7XG4gICAgICAgIGlmICh2YWxpZFR5cGUuY2hhckF0KDApID09PSAnLicpIHtcbiAgICAgICAgICByZXR1cm4gZmlsZU5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbGlkVHlwZS50b0xvd2VyQ2FzZSgpLCBmaWxlTmFtZS50b0xvd2VyQ2FzZSgpLmxlbmd0aCAtIHZhbGlkVHlwZS50b0xvd2VyQ2FzZSgpLmxlbmd0aCkgIT09IC0xO1xuICAgICAgICB9IGVsc2UgaWYgKC9cXC9cXCokLy50ZXN0KHZhbGlkVHlwZSkpIHtcbiAgICAgICAgICAvLyBUaGlzIGlzIHNvbWV0aGluZyBsaWtlIGEgaW1hZ2UvKiBtaW1lIHR5cGVcbiAgICAgICAgICByZXR1cm4gYmFzZU1pbWVUeXBlID09PSB2YWxpZFR5cGUucmVwbGFjZSgvXFwvLiokLywgJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW1lVHlwZSA9PT0gdmFsaWRUeXBlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hVaWQoZmlsZTogVXBsb2FkRmlsZSk6IFVwbG9hZEZpbGUge1xuICAgIGlmICghZmlsZS51aWQpIHtcbiAgICAgIGZpbGUudWlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHVwbG9hZEZpbGVzKGZpbGVMaXN0OiBGaWxlTGlzdCB8IEZpbGVbXSk6IHZvaWQge1xuICAgIGxldCBwb3N0RmlsZXM6IFVwbG9hZEZpbGVbXSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZpbGVMaXN0KTtcbiAgICB0aGlzLm9wdGlvbnMuZmlsdGVycy5mb3JFYWNoKGYgPT4gcG9zdEZpbGVzID0gZi5mbihwb3N0RmlsZXMpKTtcbiAgICBwb3N0RmlsZXMuZm9yRWFjaCgoZmlsZTogVXBsb2FkRmlsZSkgPT4ge1xuICAgICAgdGhpcy5hdHRhY2hVaWQoZmlsZSk7XG4gICAgICB0aGlzLnVwbG9hZChmaWxlLCBwb3N0RmlsZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGxvYWQoZmlsZTogVXBsb2FkRmlsZSwgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmJlZm9yZVVwbG9hZCkge1xuICAgICAgcmV0dXJuIHRoaXMucG9zdChmaWxlKTtcbiAgICB9XG4gICAgY29uc3QgYmVmb3JlID0gdGhpcy5vcHRpb25zLmJlZm9yZVVwbG9hZChmaWxlLCBmaWxlTGlzdCk7XG4gICAgaWYgKGJlZm9yZSBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgIGJlZm9yZS5zdWJzY3JpYmUoKHByb2Nlc3NlZEZpbGU6IFVwbG9hZEZpbGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkRmlsZVR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2Vzc2VkRmlsZSk7XG4gICAgICAgIGlmIChwcm9jZXNzZWRGaWxlVHlwZSA9PT0gJ1tvYmplY3QgRmlsZV0nIHx8IHByb2Nlc3NlZEZpbGVUeXBlID09PSAnW29iamVjdCBCbG9iXScpIHtcbiAgICAgICAgICB0aGlzLmF0dGFjaFVpZChwcm9jZXNzZWRGaWxlKTtcbiAgICAgICAgICB0aGlzLnBvc3QocHJvY2Vzc2VkRmlsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3NlZEZpbGUgPT09ICdib29sZWFuJyAmJiBwcm9jZXNzZWRGaWxlICE9PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMucG9zdChmaWxlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChiZWZvcmUgIT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5wb3N0KGZpbGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcG9zdChmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVzdHJveSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvcHQgPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgeyB1aWQgfSA9IGZpbGU7XG4gICAgbGV0IHsgZGF0YSwgaGVhZGVycyB9ID0gb3B0O1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZGF0YSA9IGRhdGEoZmlsZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaGVhZGVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMoZmlsZSk7XG4gICAgfVxuICAgIGNvbnN0IGFyZ3M6IFVwbG9hZFhIUkFyZ3MgPSB7XG4gICAgICBhY3Rpb24gICAgICAgICA6IG9wdC5hY3Rpb24sXG4gICAgICBuYW1lICAgICAgICAgICA6IG9wdC5uYW1lLFxuICAgICAgaGVhZGVycyxcbiAgICAgIGZpbGUsXG4gICAgICBkYXRhLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBvcHQud2l0aENyZWRlbnRpYWxzLFxuICAgICAgb25Qcm9ncmVzcyAgICAgOiBvcHQub25Qcm9ncmVzcyA/IGUgPT4ge1xuICAgICAgICBvcHQub25Qcm9ncmVzcyhlLCBmaWxlKTtcbiAgICAgIH0gOiBudWxsLFxuICAgICAgb25TdWNjZXNzICAgICAgOiAocmV0LCB4aHIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMucmVxc1sgdWlkIF07XG4gICAgICAgIG9wdC5vblN1Y2Nlc3MocmV0LCBmaWxlLCB4aHIpO1xuICAgICAgfSxcbiAgICAgIG9uRXJyb3IgICAgICAgIDogKHhocikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5yZXFzWyB1aWQgXTtcbiAgICAgICAgb3B0Lm9uRXJyb3IoeGhyLCBmaWxlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucmVxc1sgdWlkIF0gPSAob3B0LmN1c3RvbVJlcXVlc3QgfHwgdGhpcy54aHIpLmNhbGwodGhpcywgYXJncyk7XG4gICAgb3B0Lm9uU3RhcnQoZmlsZSk7XG4gIH1cblxuICBwcml2YXRlIHhocihhcmdzOiBVcGxvYWRYSFJBcmdzKTogU3Vic2NyaXB0aW9uIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBmb3JtRGF0YS5hcHBlbmQoYXJncy5uYW1lLCBhcmdzLmZpbGUgYXMgYW55KTtcbiAgICBpZiAoYXJncy5kYXRhKSB7XG4gICAgICBPYmplY3Qua2V5cyhhcmdzLmRhdGEpLm1hcChrZXkgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBhcmdzLmRhdGFbIGtleSBdKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIWFyZ3MuaGVhZGVycykge1xuICAgICAgYXJncy5oZWFkZXJzID0ge307XG4gICAgfVxuICAgIGlmIChhcmdzLmhlYWRlcnNbICdYLVJlcXVlc3RlZC1XaXRoJyBdICE9PSBudWxsKSB7XG4gICAgICBhcmdzLmhlYWRlcnNbICdYLVJlcXVlc3RlZC1XaXRoJyBdID0gYFhNTEh0dHBSZXF1ZXN0YDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIGFyZ3MuaGVhZGVyc1sgJ1gtUmVxdWVzdGVkLVdpdGgnIF07XG4gICAgfVxuICAgIGNvbnN0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdCgnUE9TVCcsIGFyZ3MuYWN0aW9uLCBmb3JtRGF0YSwge1xuICAgICAgcmVwb3J0UHJvZ3Jlc3MgOiB0cnVlLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBhcmdzLndpdGhDcmVkZW50aWFscyxcbiAgICAgIGhlYWRlcnMgICAgICAgIDogbmV3IEh0dHBIZWFkZXJzKGFyZ3MuaGVhZGVycylcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QocmVxKS5zdWJzY3JpYmUoKGV2ZW50OiBIdHRwRXZlbnQ8e30+KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzcykge1xuICAgICAgICBpZiAoZXZlbnQudG90YWwgPiAwKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAgIChldmVudCBhcyBhbnkpLnBlcmNlbnQgPSBldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCAqIDEwMDtcbiAgICAgICAgfVxuICAgICAgICBhcmdzLm9uUHJvZ3Jlc3MoZXZlbnQsIGFyZ3MuZmlsZSk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG4gICAgICAgIGFyZ3Mub25TdWNjZXNzKGV2ZW50LmJvZHksIGFyZ3MuZmlsZSwgZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIHRoaXMuYWJvcnQoYXJncy5maWxlKTtcbiAgICAgIGFyZ3Mub25FcnJvcihlcnIsIGFyZ3MuZmlsZSk7XG4gICAgfSk7XG4gIH1cblxuICBhYm9ydChmaWxlPzogVXBsb2FkRmlsZSk6IHZvaWQge1xuICAgIGlmIChmaWxlKSB7XG4gICAgICBjb25zdCB1aWQgPSBmaWxlICYmIGZpbGUudWlkO1xuICAgICAgaWYgKHRoaXMucmVxc1sgdWlkIF0pIHtcbiAgICAgICAgdGhpcy5yZXFzWyB1aWQgXS51bnN1YnNjcmliZSgpO1xuICAgICAgICBkZWxldGUgdGhpcy5yZXFzWyB1aWQgXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5yZXFzKS5mb3JFYWNoKCh1aWQpID0+IHtcbiAgICAgICAgdGhpcy5yZXFzWyB1aWQgXS51bnN1YnNjcmliZSgpO1xuICAgICAgICBkZWxldGUgdGhpcy5yZXFzWyB1aWQgXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlZ2lvbjogc3R5bGVzXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC11cGxvYWQnO1xuXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgWyB0aGlzLnByZWZpeENscyBdICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGAgXTogdGhpcy5vcHRpb25zLmRpc2FibGVkLFxuICAgICAgLi4udGhpcy5jbGFzc2VzXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgaWYgKCFodHRwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCAnSHR0cENsaWVudCcsIFlvdSBjYW4gaW1wb3J0ICdIdHRwQ2xpZW50TW9kdWxlJyBpbiB5b3VyIHJvb3QgbW9kdWxlLmApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ID0gdHJ1ZTtcbiAgICB0aGlzLmFib3J0KCk7XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, Optional, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
export class NzUploadBtnComponent {
    /**
     * @param {?} http
     * @param {?} el
     * @param {?} updateHostClassService
     * @param {?} cd
     */
    constructor(http, el, updateHostClassService, cd) {
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
            throw new Error(`Not found 'HttpClient', You can import 'HttpClientModule' in your root module.`);
        }
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.options.disabled) {
            return;
        }
        (/** @type {?} */ (this.file.nativeElement)).click();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (this.options.disabled) {
            return;
        }
        if (e.key === 'Enter') {
            this.onClick();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onFileDrop(e) {
        if (this.options.disabled || e.type === 'dragover') {
            e.preventDefault();
            return;
        }
        if (this.options.directory) {
            this.traverseFileTree(e.dataTransfer.items);
        }
        else {
            /** @type {?} */
            const files = Array.prototype.slice.call(e.dataTransfer.files).filter((file) => this.attrAccept(file, this.options.accept));
            if (files.length) {
                this.uploadFiles(files);
            }
        }
        e.preventDefault();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onChange(e) {
        if (this.options.disabled) {
            return;
        }
        /** @type {?} */
        const hie = /** @type {?} */ (e.target);
        this.uploadFiles(hie.files);
        hie.value = '';
    }
    /**
     * @param {?} files
     * @return {?}
     */
    traverseFileTree(files) {
        /** @type {?} */
        const _traverseFileTree = (item, path) => {
            if (item.isFile) {
                item.file((file) => {
                    if (this.attrAccept(file, this.options.accept)) {
                        this.uploadFiles([file]);
                    }
                });
            }
            else if (item.isDirectory) {
                /** @type {?} */
                const dirReader = item.createReader();
                dirReader.readEntries((entries) => {
                    for (const entrieItem of entries) {
                        _traverseFileTree(entrieItem, `${path}${item.name}/`);
                    }
                });
            }
        };
        for (const file of files) {
            _traverseFileTree(file.webkitGetAsEntry(), '');
        }
    }
    /**
     * @param {?} file
     * @param {?} acceptedFiles
     * @return {?}
     */
    attrAccept(file, acceptedFiles) {
        if (file && acceptedFiles) {
            /** @type {?} */
            const acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
            /** @type {?} */
            const fileName = '' + file.name;
            /** @type {?} */
            const mimeType = '' + file.type;
            /** @type {?} */
            const baseMimeType = mimeType.replace(/\/.*$/, '');
            return acceptedFilesArray.some(type => {
                /** @type {?} */
                const validType = type.trim();
                if (validType.charAt(0) === '.') {
                    return fileName.toLowerCase().indexOf(validType.toLowerCase(), fileName.toLowerCase().length - validType.toLowerCase().length) !== -1;
                }
                else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    return baseMimeType === validType.replace(/\/.*$/, '');
                }
                return mimeType === validType;
            });
        }
        return true;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    attachUid(file) {
        if (!file.uid) {
            file.uid = Math.random().toString(36).substring(2);
        }
        return file;
    }
    /**
     * @param {?} fileList
     * @return {?}
     */
    uploadFiles(fileList) {
        /** @type {?} */
        let postFiles = Array.prototype.slice.call(fileList);
        this.options.filters.forEach(f => postFiles = f.fn(postFiles));
        postFiles.forEach((file) => {
            this.attachUid(file);
            this.upload(file, postFiles);
        });
    }
    /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    upload(file, fileList) {
        if (!this.options.beforeUpload) {
            return this.post(file);
        }
        /** @type {?} */
        const before = this.options.beforeUpload(file, fileList);
        if (before instanceof Observable) {
            before.subscribe((processedFile) => {
                /** @type {?} */
                const processedFileType = Object.prototype.toString.call(processedFile);
                if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
                    this.attachUid(processedFile);
                    this.post(processedFile);
                }
                else if (typeof processedFile === 'boolean' && processedFile !== false) {
                    this.post(file);
                }
            });
        }
        else if (before !== false) {
            return this.post(file);
        }
    }
    /**
     * @param {?} file
     * @return {?}
     */
    post(file) {
        if (this.destroy) {
            return;
        }
        /** @type {?} */
        const opt = this.options;
        const { uid } = file;
        let { data, headers } = opt;
        if (typeof data === 'function') {
            data = data(file);
        }
        if (typeof headers === 'function') {
            headers = headers(file);
        }
        /** @type {?} */
        const args = {
            action: opt.action,
            name: opt.name,
            headers,
            file,
            data,
            withCredentials: opt.withCredentials,
            onProgress: opt.onProgress ? e => {
                opt.onProgress(e, file);
            } : null,
            onSuccess: (ret, xhr) => {
                delete this.reqs[uid];
                opt.onSuccess(ret, file, xhr);
            },
            onError: (xhr) => {
                delete this.reqs[uid];
                opt.onError(xhr, file);
            }
        };
        this.reqs[uid] = (opt.customRequest || this.xhr).call(this, args);
        opt.onStart(file);
    }
    /**
     * @param {?} args
     * @return {?}
     */
    xhr(args) {
        /** @type {?} */
        const formData = new FormData();
        // tslint:disable-next-line:no-any
        formData.append(args.name, /** @type {?} */ (args.file));
        if (args.data) {
            Object.keys(args.data).map(key => {
                formData.append(key, args.data[key]);
            });
        }
        if (!args.headers) {
            args.headers = {};
        }
        if (args.headers['X-Requested-With'] !== null) {
            args.headers['X-Requested-With'] = `XMLHttpRequest`;
        }
        else {
            delete args.headers['X-Requested-With'];
        }
        /** @type {?} */
        const req = new HttpRequest('POST', args.action, formData, {
            reportProgress: true,
            withCredentials: args.withCredentials,
            headers: new HttpHeaders(args.headers)
        });
        return this.http.request(req).subscribe((event) => {
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
        }, (err) => {
            this.abort(args.file);
            args.onError(err, args.file);
        });
    }
    /**
     * @param {?=} file
     * @return {?}
     */
    abort(file) {
        if (file) {
            /** @type {?} */
            const uid = file && file.uid;
            if (this.reqs[uid]) {
                this.reqs[uid].unsubscribe();
                delete this.reqs[uid];
            }
        }
        else {
            Object.keys(this.reqs).forEach((uid) => {
                this.reqs[uid].unsubscribe();
                delete this.reqs[uid];
            });
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = Object.assign({ [this.prefixCls]: true, [`${this.prefixCls}-disabled`]: this.options.disabled }, this.classes);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.inited = true;
        this.setClassMap();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.inited) {
            this.setClassMap();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy = true;
        this.abort();
    }
}
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
NzUploadBtnComponent.ctorParameters = () => [
    { type: HttpClient, decorators: [{ type: Optional }] },
    { type: ElementRef },
    { type: NzUpdateHostClassService },
    { type: ChangeDetectorRef }
];
NzUploadBtnComponent.propDecorators = {
    file: [{ type: ViewChild, args: ['file',] }],
    classes: [{ type: Input }],
    options: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onFileDrop: [{ type: HostListener, args: ['drop', ['$event'],] }, { type: HostListener, args: ['dragover', ['$event'],] }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidXBsb2FkL256LXVwbG9hZC1idG4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLGFBQWEsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BILE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLFFBQVEsRUFHUixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFaEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFjdEYsTUFBTTs7Ozs7OztJQXFQSixZQUFnQyxJQUFnQixFQUFVLEVBQWMsRUFBVSxzQkFBZ0QsRUFBVSxFQUFxQjtRQUFqSSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtvQkFwUHZILEVBQUU7c0JBQzNCLEtBQUs7dUJBQ0osS0FBSzs7dUJBS0EsRUFBRTt5QkFnT0wsWUFBWTtRQWM5QixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxnRkFBZ0YsQ0FBQyxDQUFDO1NBQ25HO0tBQ0Y7Ozs7SUE1T0QsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDekIsT0FBTztTQUNSO1FBQ0QsbUJBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFpQyxFQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDdkQ7Ozs7O0lBR0QsU0FBUyxD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Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQTZEO1FBQ3ZFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtLQUNGOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNkOzs7WUFuUkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxpQkFBaUI7Z0JBQ3RDLHdVQUFxRDtnQkFDckQsSUFBSSxFQUFpQjtvQkFDbkIsaUJBQWlCLEVBQUUsS0FBSztvQkFDeEIsYUFBYSxFQUFNLFVBQVU7aUJBQzlCO2dCQUNELFNBQVMsRUFBWSxDQUFFLHdCQUF3QixDQUFFO2dCQUNqRCxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCOzs7O1lBOUJRLFVBQVUsdUJBb1JKLFFBQVE7WUFoUnJCLFVBQVU7WUFhSCx3QkFBd0I7WUFmL0IsaUJBQWlCOzs7bUJBa0NoQixTQUFTLFNBQUMsTUFBTTtzQkFHaEIsS0FBSztzQkFDTCxLQUFLO3NCQUdMLFlBQVksU0FBQyxPQUFPO3dCQVFwQixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUUsUUFBUSxDQUFFO3lCQVVwQyxZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUUsUUFBUSxDQUFFLGNBQ2pDLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBRSxRQUFRLENBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXZlbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBIZWFkZXJzLCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5cbmltcG9ydCB7IFVwbG9hZEZpbGUsIFVwbG9hZFhIUkFyZ3MsIFppcEJ1dHRvbk9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnW256LXVwbG9hZC1idG5dJyxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotdXBsb2FkLWJ0bi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2F0dHIudGFiaW5kZXhdJzogJ1wiMFwiJyxcbiAgICAnW2F0dHIucm9sZV0nICAgIDogJ1wiYnV0dG9uXCInXG4gIH0sXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIE56VXBsb2FkQnRuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHJlcXM6IHsgWyBrZXk6IHN0cmluZyBdOiBTdWJzY3JpcHRpb24gfSA9IHt9O1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIGRlc3Ryb3kgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdmaWxlJykgZmlsZTogRWxlbWVudFJlZjtcblxuICAvLyByZWdpb246IGZpZWxkc1xuICBASW5wdXQoKSBjbGFzc2VzOiB7fSA9IHt9O1xuICBASW5wdXQoKSBvcHRpb25zOiBaaXBCdXR0b25PcHRpb25zO1xuXG4gIC8vIGVuZHJlZ2lvblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAodGhpcy5maWxlLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkuY2xpY2soKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbICckZXZlbnQnIF0pXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMub25DbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbICckZXZlbnQnIF0pXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyAnJGV2ZW50JyBdKVxuICBvbkZpbGVEcm9wKGU6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQgfHwgZS50eXBlID09PSAnZHJhZ292ZXInKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlyZWN0b3J5KSB7XG4gICAgICB0aGlzLnRyYXZlcnNlRmlsZVRyZWUoZS5kYXRhVHJhbnNmZXIuaXRlbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWxlczogRmlsZVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZS5kYXRhVHJhbnNmZXIuZmlsZXMpLmZpbHRlcihcbiAgICAgICAgKGZpbGU6IEZpbGUpID0+IHRoaXMuYXR0ckFjY2VwdChmaWxlLCB0aGlzLm9wdGlvbnMuYWNjZXB0KVxuICAgICAgKTtcbiAgICAgIGlmIChmaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy51cGxvYWRGaWxlcyhmaWxlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgb25DaGFuZ2UoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhpZSA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy51cGxvYWRGaWxlcyhoaWUuZmlsZXMpO1xuICAgIGhpZS52YWx1ZSA9ICcnO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIHRyYXZlcnNlRmlsZVRyZWUoZmlsZXM6IGFueSk6IHZvaWQge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBjb25zdCBfdHJhdmVyc2VGaWxlVHJlZSA9IChpdGVtOiBhbnksIHBhdGg6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKGl0ZW0uaXNGaWxlKSB7XG4gICAgICAgIGl0ZW0uZmlsZSgoZmlsZSkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmF0dHJBY2NlcHQoZmlsZSwgdGhpcy5vcHRpb25zLmFjY2VwdCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBsb2FkRmlsZXMoW2ZpbGVdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLmlzRGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGRpclJlYWRlciA9IGl0ZW0uY3JlYXRlUmVhZGVyKCk7XG5cbiAgICAgICAgZGlyUmVhZGVyLnJlYWRFbnRyaWVzKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgZm9yIChjb25zdCBlbnRyaWVJdGVtIG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgIF90cmF2ZXJzZUZpbGVUcmVlKGVudHJpZUl0ZW0sIGAke3BhdGh9JHtpdGVtLm5hbWV9L2ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIF90cmF2ZXJzZUZpbGVUcmVlKGZpbGUud2Via2l0R2V0QXNFbnRyeSgpLCAnJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhdHRyQWNjZXB0KGZpbGU6IEZpbGUsIGFjY2VwdGVkRmlsZXM6IHN0cmluZyB8IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgaWYgKGZpbGUgJiYgYWNjZXB0ZWRGaWxlcykge1xuICAgICAgY29uc3QgYWNjZXB0ZWRGaWxlc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY2NlcHRlZEZpbGVzKSA/IGFjY2VwdGVkRmlsZXMgOiBhY2NlcHRlZEZpbGVzLnNwbGl0KCcsJyk7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9ICcnICsgZmlsZS5uYW1lO1xuICAgICAgY29uc3QgbWltZVR5cGUgPSAnJyArIGZpbGUudHlwZTtcbiAgICAgIGNvbnN0IGJhc2VNaW1lVHlwZSA9IG1pbWVUeXBlLnJlcGxhY2UoL1xcLy4qJC8sICcnKTtcblxuICAgICAgcmV0dXJuIGFjY2VwdGVkRmlsZXNBcnJheS5zb21lKHR5cGUgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZFR5cGUgPSB0eXBlLnRyaW0oKTtcbiAgICAgICAgaWYgKHZhbGlkVHlwZS5jaGFyQXQoMCkgPT09ICcuJykge1xuICAgICAgICAgIHJldHVybiBmaWxlTmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsaWRUeXBlLnRvTG93ZXJDYXNlKCksIGZpbGVOYW1lLnRvTG93ZXJDYXNlKCkubGVuZ3RoIC0gdmFsaWRUeXBlLnRvTG93ZXJDYXNlKCkubGVuZ3RoKSAhPT0gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAoL1xcL1xcKiQvLnRlc3QodmFsaWRUeXBlKSkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgc29tZXRoaW5nIGxpa2UgYSBpbWFnZS8qIG1pbWUgdHlwZVxuICAgICAgICAgIHJldHVybiBiYXNlTWltZVR5cGUgPT09IHZhbGlkVHlwZS5yZXBsYWNlKC9cXC8uKiQvLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbWVUeXBlID09PSB2YWxpZFR5cGU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaFVpZChmaWxlOiBVcGxvYWRGaWxlKTogVXBsb2FkRmlsZSB7XG4gICAgaWYgKCFmaWxlLnVpZCkge1xuICAgICAgZmlsZS51aWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMik7XG4gICAgfVxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgdXBsb2FkRmlsZXMoZmlsZUxpc3Q6IEZpbGVMaXN0IHwgRmlsZVtdKTogdm9pZCB7XG4gICAgbGV0IHBvc3RGaWxlczogVXBsb2FkRmlsZVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZmlsZUxpc3QpO1xuICAgIHRoaXMub3B0aW9ucy5maWx0ZXJzLmZvckVhY2goZiA9PiBwb3N0RmlsZXMgPSBmLmZuKHBvc3RGaWxlcykpO1xuICAgIHBvc3RGaWxlcy5mb3JFYWNoKChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7XG4gICAgICB0aGlzLmF0dGFjaFVpZChmaWxlKTtcbiAgICAgIHRoaXMudXBsb2FkKGZpbGUsIHBvc3RGaWxlcyk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwbG9hZChmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuYmVmb3JlVXBsb2FkKSB7XG4gICAgICByZXR1cm4gdGhpcy5wb3N0KGZpbGUpO1xuICAgIH1cbiAgICBjb25zdCBiZWZvcmUgPSB0aGlzLm9wdGlvbnMuYmVmb3JlVXBsb2FkKGZpbGUsIGZpbGVMaXN0KTtcbiAgICBpZiAoYmVmb3JlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgICAgYmVmb3JlLnN1YnNjcmliZSgocHJvY2Vzc2VkRmlsZTogVXBsb2FkRmlsZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9jZXNzZWRGaWxlVHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzZWRGaWxlKTtcbiAgICAgICAgaWYgKHByb2Nlc3NlZEZpbGVUeXBlID09PSAnW29iamVjdCBGaWxlXScgfHwgcHJvY2Vzc2VkRmlsZVR5cGUgPT09ICdbb2JqZWN0IEJsb2JdJykge1xuICAgICAgICAgIHRoaXMuYXR0YWNoVWlkKHByb2Nlc3NlZEZpbGUpO1xuICAgICAgICAgIHRoaXMucG9zdChwcm9jZXNzZWRGaWxlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2Vzc2VkRmlsZSA9PT0gJ2Jvb2xlYW4nICYmIHByb2Nlc3NlZEZpbGUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy5wb3N0KGZpbGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGJlZm9yZSAhPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvc3QoZmlsZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwb3N0KGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZXN0cm95KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9wdCA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCB7IHVpZCB9ID0gZmlsZTtcbiAgICBsZXQgeyBkYXRhLCBoZWFkZXJzIH0gPSBvcHQ7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkYXRhID0gZGF0YShmaWxlKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBoZWFkZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycyhmaWxlKTtcbiAgICB9XG4gICAgY29uc3QgYXJnczogVXBsb2FkWEhSQXJncyA9IHtcbiAgICAgIGFjdGlvbiAgICAgICAgIDogb3B0LmFjdGlvbixcbiAgICAgIG5hbWUgICAgICAgICAgIDogb3B0Lm5hbWUsXG4gICAgICBoZWFkZXJzLFxuICAgICAgZmlsZSxcbiAgICAgIGRhdGEsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IG9wdC53aXRoQ3JlZGVudGlhbHMsXG4gICAgICBvblByb2dyZXNzICAgICA6IG9wdC5vblByb2dyZXNzID8gZSA9PiB7XG4gICAgICAgIG9wdC5vblByb2dyZXNzKGUsIGZpbGUpO1xuICAgICAgfSA6IG51bGwsXG4gICAgICBvblN1Y2Nlc3MgICAgICA6IChyZXQsIHhocikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5yZXFzWyB1aWQgXTtcbiAgICAgICAgb3B0Lm9uU3VjY2VzcyhyZXQsIGZpbGUsIHhocik7XG4gICAgICB9LFxuICAgICAgb25FcnJvciAgICAgICAgOiAoeGhyKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnJlcXNbIHVpZCBdO1xuICAgICAgICBvcHQub25FcnJvcih4aHIsIGZpbGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5yZXFzWyB1aWQgXSA9IChvcHQuY3VzdG9tUmVxdWVzdCB8fCB0aGlzLnhocikuY2FsbCh0aGlzLCBhcmdzKTtcbiAgICBvcHQub25TdGFydChmaWxlKTtcbiAgfVxuXG4gIHByaXZhdGUgeGhyKGFyZ3M6IFVwbG9hZFhIUkFyZ3MpOiBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIGZvcm1EYXRhLmFwcGVuZChhcmdzLm5hbWUsIGFyZ3MuZmlsZSBhcyBhbnkpO1xuICAgIGlmIChhcmdzLmRhdGEpIHtcbiAgICAgIE9iamVjdC5rZXlzKGFyZ3MuZGF0YSkubWFwKGtleSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIGFyZ3MuZGF0YVsga2V5IF0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghYXJncy5oZWFkZXJzKSB7XG4gICAgICBhcmdzLmhlYWRlcnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKGFyZ3MuaGVhZGVyc1sgJ1gtUmVxdWVzdGVkLVdpdGgnIF0gIT09IG51bGwpIHtcbiAgICAgIGFyZ3MuaGVhZGVyc1sgJ1gtUmVxdWVzdGVkLVdpdGgnIF0gPSBgWE1MSHR0cFJlcXVlc3RgO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgYXJncy5oZWFkZXJzWyAnWC1SZXF1ZXN0ZWQtV2l0aCcgXTtcbiAgICB9XG4gICAgY29uc3QgcmVxID0gbmV3IEh0dHBSZXF1ZXN0KCdQT1NUJywgYXJncy5hY3Rpb24sIGZvcm1EYXRhLCB7XG4gICAgICByZXBvcnRQcm9ncmVzcyA6IHRydWUsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IGFyZ3Mud2l0aENyZWRlbnRpYWxzLFxuICAgICAgaGVhZGVycyAgICAgICAgOiBuZXcgSHR0cEhlYWRlcnMoYXJncy5oZWFkZXJzKVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChyZXEpLnN1YnNjcmliZSgoZXZlbnQ6IEh0dHBFdmVudDx7fT4pID0+IHtcbiAgICAgIGlmIChldmVudC50eXBlID09PSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzKSB7XG4gICAgICAgIGlmIChldmVudC50b3RhbCA+IDApIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICAgKGV2ZW50IGFzIGFueSkucGVyY2VudCA9IGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsICogMTAwO1xuICAgICAgICB9XG4gICAgICAgIGFyZ3Mub25Qcm9ncmVzcyhldmVudCwgYXJncy5maWxlKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgYXJncy5vblN1Y2Nlc3MoZXZlbnQuYm9keSwgYXJncy5maWxlLCBldmVudCk7XG4gICAgICB9XG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgdGhpcy5hYm9ydChhcmdzLmZpbGUpO1xuICAgICAgYXJncy5vbkVycm9yKGVyciwgYXJncy5maWxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFib3J0KGZpbGU/OiBVcGxvYWRGaWxlKTogdm9pZCB7XG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIGNvbnN0IHVpZCA9IGZpbGUgJiYgZmlsZS51aWQ7XG4gICAgICBpZiAodGhpcy5yZXFzWyB1aWQgXSkge1xuICAgICAgICB0aGlzLnJlcXNbIHVpZCBdLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnJlcXNbIHVpZCBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnJlcXMpLmZvckVhY2goKHVpZCkgPT4ge1xuICAgICAgICB0aGlzLnJlcXNbIHVpZCBdLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnJlcXNbIHVpZCBdO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVnaW9uOiBzdHlsZXNcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LXVwbG9hZCc7XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbIHRoaXMucHJlZml4Q2xzIF0gICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWRpc2FibGVkYCBdOiB0aGlzLm9wdGlvbnMuZGlzYWJsZWQsXG4gICAgICAuLi50aGlzLmNsYXNzZXNcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBpZiAoIWh0dHApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kICdIdHRwQ2xpZW50JywgWW91IGNhbiBpbXBvcnQgJ0h0dHBDbGllbnRNb2R1bGUnIGluIHlvdXIgcm9vdCBtb2R1bGUuYCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kgPSB0cnVlO1xuICAgIHRoaXMuYWJvcnQoKTtcbiAgfVxufVxuIl19
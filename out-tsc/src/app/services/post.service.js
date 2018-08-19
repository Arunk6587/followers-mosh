var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/http";
var PostService = /** @class */ (function (_super) {
    __extends(PostService, _super);
    function PostService(http) {
        return _super.call(this, 'http://jsonplaceholder.typicode.com/posts', http) || this;
    }
    PostService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    PostService.ctorParameters = function () { return [
        { type: Http }
    ]; };
    PostService.ngInjectableDef = i0.defineInjectable({ factory: function PostService_Factory() { return new PostService(i0.inject(i1.Http)); }, token: PostService, providedIn: "root" });
    return PostService;
}(DataService));
export { PostService };
//# sourceMappingURL=post.service.js.map
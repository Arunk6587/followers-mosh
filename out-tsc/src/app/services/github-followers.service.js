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
var GithubFollwersService = /** @class */ (function (_super) {
    __extends(GithubFollwersService, _super);
    function GithubFollwersService(http) {
        return _super.call(this, 'https://api.github.com/users/mosh-hamedani/followers', http) || this;
    }
    GithubFollwersService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    GithubFollwersService.ctorParameters = function () { return [
        { type: Http }
    ]; };
    GithubFollwersService.ngInjectableDef = i0.defineInjectable({ factory: function GithubFollwersService_Factory() { return new GithubFollwersService(i0.inject(i1.Http)); }, token: GithubFollwersService, providedIn: "root" });
    return GithubFollwersService;
}(DataService));
export { GithubFollwersService };
//# sourceMappingURL=github-followers.service.js.map
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var GithubProfileComponent = /** @class */ (function () {
    function GithubProfileComponent(router) {
        this.router = router;
    }
    GithubProfileComponent.prototype.submit = function () {
        this.router.navigate(['/followers'], {
            queryParams: { page: 1, order: 'newest' }
        });
    };
    GithubProfileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-github-profile',
                    templateUrl: './github-profile.component.html',
                    styleUrls: ['./github-profile.component.css']
                },] },
    ];
    /** @nocollapse */
    GithubProfileComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return GithubProfileComponent;
}());
export { GithubProfileComponent };
//# sourceMappingURL=github-profile.component.js.map
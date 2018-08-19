import { Component } from '@angular/core';
import { GithubFollwersService } from '../services/github-followers.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
var MoshGithubFollowersComponent = /** @class */ (function () {
    function MoshGithubFollowersComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    MoshGithubFollowersComponent.prototype.ngOnInit = function () {
        var _this = this;
        Observable.combineLatest([
            this.route.paramMap,
            this.route.queryParamMap
        ])
            .switchMap(function (combined) {
            var id = combined[0].get('id');
            var page = combined[1].get('page');
            return _this.service.getAll();
        })
            .subscribe(function (followers) {
            _this.followers = followers;
        });
        // params and query params received can be processed at same time to load the request from server
        // this.route.queryParamMap
        // .subscribe(params => {
        //   console.log(params);
        // });
        // this.route.paramMap
        // .subscribe(params => {
        //   console.log(params);
        // });
    };
    MoshGithubFollowersComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-mosh-github-followers',
                    templateUrl: './mosh-github-followers.component.html',
                    styleUrls: ['./mosh-github-followers.component.css']
                },] },
    ];
    /** @nocollapse */
    MoshGithubFollowersComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: GithubFollwersService }
    ]; };
    return MoshGithubFollowersComponent;
}());
export { MoshGithubFollowersComponent };
//# sourceMappingURL=mosh-github-followers.component.js.map
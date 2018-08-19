import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
var PostsComponent = /** @class */ (function () {
    function PostsComponent(service) {
        this.service = service;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll()
            .subscribe(function (posts) { return _this.posts = posts; });
    };
    PostsComponent.prototype.createPost = function (input) {
        var _this = this;
        var postObj = { title: input.value };
        this.posts.splice(0, 0, postObj);
        input.value = '';
        this.service.create(postObj)
            .subscribe(function (post) {
            postObj['id'] = post.id;
            console.log(post);
        }, function (error) {
            _this.posts.splice(0, 1);
            if (error instanceof BadInput) {
                //  this.form.setErrors(error.orginalError);
            }
            else {
                throw error;
            }
        });
    };
    PostsComponent.prototype.updatePost = function (post) {
        this.service.update(post)
            .subscribe(function (post) {
            console.log(post);
        });
    };
    PostsComponent.prototype.deletePost = function (post) {
        var _this = this;
        var index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        this.service.delete(post.id)
            .subscribe(function () {
        }, function (error) {
            _this.posts.splice(index, 0, post);
            if (error instanceof NotFoundError) {
                alert('This post has already been deleted');
            }
            else {
                throw error;
            }
        });
    };
    PostsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-posts',
                    templateUrl: './posts.component.html',
                    styleUrls: ['./posts.component.css']
                },] },
    ];
    /** @nocollapse */
    PostsComponent.ctorParameters = function () { return [
        { type: PostService }
    ]; };
    return PostsComponent;
}());
export { PostsComponent };
//# sourceMappingURL=posts.component.js.map
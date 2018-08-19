import { ResponseContentType } from '@angular/http';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
var DataService = /** @class */ (function () {
    function DataService(url, http) {
        this.url = url;
        this.http = http;
    }
    DataService.prototype.getAll = function () {
        return this.http.get(this.url)
            .map(function (response) { return response.json(); })
            .pipe(catchError(this.handleError));
    };
    DataService.prototype.create = function (resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .map(function (response) { return response.json(); })
            .pipe(catchError(this.handleError));
    };
    DataService.prototype.update = function (resource) {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
            .map(function (response) { return response.json(); })
            .pipe(catchError(this.handleError));
    };
    DataService.prototype.delete = function (id) {
        return this.http.delete(this.url + '/' + id)
            .map(function (response) { return response.json(); })
            .pipe(catchError(this.handleError));
    };
    DataService.prototype.deleteWithPromise = function (id) {
        return this.http.delete(this.url + '/' + id)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    DataService.prototype.getImage = function (url) {
        return this.http.get(url, { responseType: ResponseContentType.Blob })
            .map(function (response) { return response.blob(); })
            .pipe(catchError(this.handleError));
    };
    DataService.prototype.handleError = function (err, caught) {
        if (err.status === 404) {
            return Observable.throw(new NotFoundError(err.json()));
        }
        else if (err.status === 400) {
            return Observable.throw(new BadInput(err.json()));
        }
        return Observable.throw(new AppError(err.json()));
    };
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map
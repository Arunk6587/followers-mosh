import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { catchError, map } from 'rxjs/operators';
import { HttpResponse } from 'selenium-webdriver/http';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
        .map(response => response.json())
        .pipe(catchError(this.handleError));
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
        .map(response => response.json())
        .pipe(catchError(this.handleError));
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead : true }))
        .map(response => response.json())
        .pipe(catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
        .map(response => response.json())
        .pipe(catchError(this.handleError));
  }

  deleteWithPromise(id) {
    return this.http.delete(this.url + '/' + id)
        .map(response => response.json())
        .toPromise();
  }

  getImage(url: string): Observable<Blob> {
    return this.http.get(url, {responseType: ResponseContentType.Blob})
      .map(response => response.blob())
      .pipe(catchError(this.handleError));
}

  private handleError(err: Response, caught: Observable<any>) {
    if (err.status === 404) {
      return Observable.throw(new NotFoundError(err.json()));
    } else if (err.status === 400) {
      return Observable.throw(new BadInput(err.json()));
    }
    return Observable.throw(new AppError(err.json()));
  }
}

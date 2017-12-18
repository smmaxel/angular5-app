import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const SERVER_URL: string = '/api';

@Injectable()
export class EndpointService {

  constructor(private http: Http) { }

  getServerRequest(path: string): Observable<any> {
    let API_PATH = `${SERVER_URL}/${path}`;
    return this.http
      .get(API_PATH)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  postServerRequest(path: string, payload: any): Observable<any> {
    let API_PATH = `${SERVER_URL}/${path}`;
    return this.http
      .post(API_PATH, payload)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  putServerRequest(path: string, payload: any): Observable<any> {
    let API_PATH = `${SERVER_URL}/${path}`;
    return this.http
      .put(API_PATH, payload)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

}








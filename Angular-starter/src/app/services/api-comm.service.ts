import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiCommService {

  constructor(private http: HttpClient) {
  }

  api_root = "http://127.0.0.1:8000/base-api/"

  httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type': 'application/json'}
    )
  };

  postData(data, url): Observable<any> {
    return this.http.post(this.api_root + url, data, this.httpOptions);
  }

}


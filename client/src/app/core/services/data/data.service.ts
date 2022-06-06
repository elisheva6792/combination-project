import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

//import { Promise } from 'q';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class DataService {
  constructor(private httpClient: HttpClient) {
  }


  // getAsPromise<T>(url: string, params: any = null): Promise<any> {
  //   console.log('url' , url);
  //   var r = this.httpClient.get<T>(`${url}`, {
  //     withCredentials: true,
  //     params: params
  //   })
  //     .toPromise();
  //   r.then(result => {
  //     console.log('result' , result);
  //   },
  //     error => {

  //     })
  //   return r;
  // }

  getAsPromise<T>(url: string, params: any = null) {
    console.log('url' , url);
    return this.httpClient.get<T>(`${url}`, {
      // withCredentials: true,
      params: params
    });
  }

 
}

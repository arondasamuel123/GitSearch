import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  userRequest() {
    const promise = new Promise((resolve, reject) => {
      this.http.get(environment.baseUrl, {
      headers: {
      Authorization: `Bearer ${environment.accessToken}`
      }
      }).toPromise().then(response => {
        console.log('This works', response);
        resolve();
      },
      error => {
      console.log('Not receiving response');
      reject(error);
      });

      });
    return promise;

  }
}

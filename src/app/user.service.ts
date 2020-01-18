import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
accesstoken = '94b1ef1e4a38ee64edadf4f902b608d76003eadd';


  constructor(private http: HttpClient) { }

  userRequest() {
    const promise = new Promise((resolve, reject) => {
      this.http.get('https://api.github.com/user', {
      headers: {
      Authorization: `Bearer ${this.accesstoken}`
      }
      }).toPromise().then(response => {
        console.log(response);
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

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
user: User;
  constructor(private http: HttpClient) {
    this.user = new User('', '');
   }

  userRequest() {
    interface ApiResponse {
      login: string;
      avatar_url: string;
    }
    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.baseUrl, {
      headers: {
      Authorization: `Bearer ${environment.accessToken}`
      }
      }).toPromise().then(response => {
        this.user.login = response.login;
        this.user.avatarUrl = response.avatar_url;
        console.log('This works', this.user.login);
        console.log('This works as well', this.user.avatarUrl);
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

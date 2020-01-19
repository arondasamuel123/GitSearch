import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
repos: any;
  constructor(private http: HttpClient) { }


  ngOnInit() {
    const promise = new Promise((resolve, reject) => {
      this.http.get(`${environment.baseUrl}/repos`, {
          headers: {
            Authorization: `Bearer ${environment.accessToken}`
          }
      }).toPromise().then(response => {

            this.repos = response;
          //  console.log(this.repos.id);
            console.log(this.repos);
            resolve();
      },
      error => {
        console.log('This isn\'t working');
        reject(error);
      });
    });
    return promise;
  }

}

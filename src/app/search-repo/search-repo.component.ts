import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {
repos: any;
s: string;
  constructor(private http: HttpClient) { }

  repoSearch() {
    interface ApiResponse {
      name: string;
      html_url: string;
      description: string;
      created_at: Date;
    }

    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(`${environment.searchUrl}repositories?q=${this.s}+language:javascript&sort=stars&order=desc`, {
          headers: {
            Authorization: `Bearer ${environment.accessToken}`
          }
      }).toPromise().then(response => {

            this.repos = response['items'];
          //  console.log(this.repos.id);
            console.log(this.repos);
            console.log(this.s);
            resolve();
      },
      error => {
        console.log('This isn\'t working');
        reject(error);
      });
    });
    return promise;
  }

  ngOnInit() {
  }

}

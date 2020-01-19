import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  repos;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.userRequest();
    this.user = this.userService.user;

    this.userService.repoRequest();
    this.repos = this.userService.repos;
  }

}

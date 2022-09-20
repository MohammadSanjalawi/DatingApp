import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
//import { error } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';
  users: any;

  constructor(private http: HttpClient, private accountService: AccountService) {

  }
  ngOnInit() {
    this.getUsers();
    this.setCurrentUser();
  }


  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem("user"));
    this.accountService.setCurrentUser(user);
  }

  getUsers() {
    console.log("getusers")
    //console.log("8888884555");
    this.http.get('https://localhost:44328/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log("888888");
      console.log(error)
    })
  }
}



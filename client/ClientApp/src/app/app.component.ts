import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { error } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';
  users: any;

  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.getUsers();
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



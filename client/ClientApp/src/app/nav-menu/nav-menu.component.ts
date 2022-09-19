import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  model: any = {}
  LoggedIn: boolean;


  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
      throw new Error('Method not implemented.');
  }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }


  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response)
      this.LoggedIn = true;
    }, error => {
      console.log(error);
    });
  }


  logout() {
    this.LoggedIn = false;
  }
}

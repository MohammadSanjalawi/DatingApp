
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  registerMode = false;
  

  constructor() { }

  ngOnInit(): void {
    
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

 

  cancerRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}

import { Component } from '@angular/core';
import { NavBarData } from './models/data-models/nav-bar-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logged = false;
  navBarData = new NavBarData();

  constructor() {

  }

  ngOnInit() {
    this.logged = true; // for develop test
  }

  setUserData() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(json => {
      this.navBarData.userId = json.id;
      this.navBarData.userName = json.username;
    })
  }

  login() {
    this.logged = true;
    this.setUserData();
  }

  logout() {
    this.logged = false;
  }
}

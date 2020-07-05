import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul>
  <li><a routerLink = "/">Home</a></li>
  <li><a routerLink = "/todo">Todo</a></li>
  </ul>

  <hr/>

  <router-outlet></router-outlet>
  `,
})
export class AppComponent  {}

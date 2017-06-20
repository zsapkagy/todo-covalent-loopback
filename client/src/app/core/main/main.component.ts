import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  routes: Object[] = [
    {
      title: 'TodoList single module',
      route: '/todos',
      icon: 'dashboard',
    }, {
      title: 'Over modularized todo list',
      route: '/oo-todos',
      icon: 'view_quilt',
    // }, {
    //   title: 'Product Logs',
    //   route: '/logs',
    //   icon: 'receipt',
    // }, {
    //   title: 'Manage Users',
    //   route: '/users',
    //   icon: 'people',
    // }, {
    //   title: 'Covalent Templates',
    //   route: '/templates',
    //   icon: 'view_module',
    },
  ];

  constructor() {
    console.log('main constructor');

  }

  ngOnInit() {
    console.log('main onInit');
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './over-modularized.component.html',
  styleUrls: ['./over-modularized.component.scss']
})
export class OverModularizedComponent implements OnInit {

  constructor() {
    console.log('OverModularizedComponent constructor');
  }

  ngOnInit() {
  }

}

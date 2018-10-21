import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  private progress1: number;
  private progress2: number;

  constructor() {

   }

  ngOnInit() {
    this.progress1 = 50;
    this.progress2 = 30;

  }


}

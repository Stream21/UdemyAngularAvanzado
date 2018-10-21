import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-don',
  templateUrl: './grafica-don.component.html',
  styles: []
})
export class GraficaDonComponent implements OnInit {
  @Input() doughnutChartData: number[];
  @Input() doughnutChartLabel: string[];
  @Input() doughnutChartType: string;

  /* Modificar Colores del Donnut
  public chartColors: Array<any> = [
    { // first color
      backgroundColor: 'rgba(225,10,24,0.2)',
      borderColor: 'rgba(215, 161, 0, 0.9)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }
  ];
  */
  constructor() { }

  ngOnInit() {
  }

}

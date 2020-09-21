import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  breakpoint: number;
  lineChart: Chart;
  pieChart: Chart;
  sales = [243, 156, 365, 30, 156, 265, 356, 543];
  constructor() { }

  ngOnInit(): void {
    // mat-grid-list responsive logic
    this.counterResizing(window.innerWidth);
    // Line Chart
    this.lineChart = new Chart('lineChart', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Combo Bar and line Chart'
        },
      },
      data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [
          {
            type: 'line',
            label: 'SALES DATA',
            data: this.sales,
            backgroundColor: 'rgba(255,0,255,0.4)',
            borderColor: 'rgba(255,0,255,0.4)',
            fill: false,
          },
        ]
      }
    });
    this.pieChart = new Chart('pieChart', {
      type: 'pie',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Pie Chart'
        },
        legend: {
          position: 'top',
        },
        animate: {
          animateScale: true,
          animateRotate: true
        }
      },
      data: {
        labels: ['HR admin', 'Vendors', 'Deliveries'],
        datasets: [{
          data: [1, 2, 5],
          backgroundColor: [
            'red', 'yellow', 'green'
          ]
        }
        ]
      }
    });
  }

  onResize(event): void {
    // mat-grid-list responsive logic on resize
    this.counterResizing(event.target.innerWidth);
  }

  // GENERIC FUNCTIONS
  counterResizing(target: any): void {
    if (target <= 767) {
      this.breakpoint = 1;
    }
    else if (target >= 768 && target <= 991) {
      this.breakpoint = 2;
    }
    else if (target >= 992) {
      this.breakpoint = 4;
    }
  }

}

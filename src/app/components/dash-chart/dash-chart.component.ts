import { Component, OnInit } from '@angular/core';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from '../layout/layout.service';

@Component({
  selector: 'app-dash-chart',
  standalone: false,
  templateUrl: './dash-chart.component.html',
  styleUrl: './dash-chart.component.scss'
})
export class DashChartComponent implements OnInit{
  chartData: any;

  chartOptions: any;

  subscription!: Subscription;

  constructor(public layoutService: LayoutService) {
      this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(25)).subscribe(() => {
          this.initChart();
      });
  }

  ngOnInit() {
      this.initChart();
  }

  initChart() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const borderColor = documentStyle.getPropertyValue('--surface-border');
      const textMutedColor = documentStyle.getPropertyValue('--text-color-secondary');

      this.chartData = {
          labels: ['Matemática', 'Português', 'História', 'Ciências'],
          datasets: [
              {
                  type: 'bar',
                  label: 'Exercícios completados',
                  backgroundColor: documentStyle.getPropertyValue('--p-primary-400'),
                  data: [40, 100, 150, 40],
                  barThickness: 32
              },
              {
                  type: 'bar',
                  label: 'Exercícios Abertos',
                  backgroundColor: documentStyle.getPropertyValue('--p-primary-300'),
                  data: [21, 84, 24, 75],
                  barThickness: 32
              },
              {
                  type: 'bar',
                  label: 'Meta',
                  backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
                  data: [41, 52, 34, 74],
                  borderRadius: {
                      topLeft: 8,
                      topRight: 8,
                      bottomLeft: 0,
                      bottomRight: 0
                  },
                  borderSkipped: false,
                  barThickness: 32
              }
          ]
      };

      this.chartOptions = {
          maintainAspectRatio: false,
          aspectRatio: 0.8,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  stacked: true,
                  ticks: {
                      color: textMutedColor
                  },
                  grid: {
                      color: 'transparent',
                      borderColor: 'transparent'
                  }
              },
              y: {
                  stacked: true,
                  ticks: {
                      color: textMutedColor
                  },
                  grid: {
                      color: borderColor,
                      borderColor: 'transparent',
                      drawTicks: false
                  }
              }
          }
      };
  }

  ngOnDestroy() {
      if (this.subscription) {
          this.subscription.unsubscribe();
      }
  }
}

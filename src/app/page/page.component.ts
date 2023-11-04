import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
// import { Chart } from 'node_modules/chart.js'
// import { ChartType } from 'chart.js';
import { Observable } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';
import * as Chart from 'chart.js'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'cf-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  tabledata !: any;
  dataSource: MatTableDataSource<any>;

  dataObs$: Observable<any>;

  // public getJsonValue: any;
  xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
  yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];
  toastr: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public getJsonValue: any;
  public postJsonValue: any;
  chartdata: any;
  labeldata: '';
  dataset: '';
  yAxisLabel: '';
  public chart: any;
  constructor(private service: ApiserviceService, private _changeDetectorRef: ChangeDetectorRef, private http: HttpClient, private datePipe: DatePipe) { }

  chartData: any;
  public pieColor = [
    { backgroundColor: 'red' },
    { backgroundColor: 'green' },
    { backgroundColor: 'blue' }
  ]

  ngOnInit() {
    this.fetchData();
    this.createChart();
    this.initChart();
  }



  initChart() {
    var myChart3 = new Chart("myChart3", {
      type: "line",
      data: {
        labels: this.xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: this.yValues
        }]
      },
      options: {
        legend: {display: false},
        scales: {
          yAxes: [{ticks: {min: 6, max:16}}],
        }
      }
    });
  }

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'bar', 
      //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {
            label: "Sales",
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }
  fetchData() {
    this.service.ApiData().subscribe((result) => {
      console.log(result)
      this.tabledata = result;
      this.setPagination(this.tabledata.recent_orders);
    })
  }

  canvas: any;
  ctx: any;
  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart2');
    this.ctx = this.canvas.getContext('2d');
    let myChart2 = new Chart(this.ctx,
      {
        type: 'pie', data:
        {
          labels: ["New", "In Progress", "On Hold"],
          datasets: [{
            label: '# of Votes', data: [1, 2, 3],
            backgroundColor: ['rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1
          }]
        },
        options: { responsive: false, display: true }
      });
  }
  setPagination(tableData) {
    this.dataSource = new MatTableDataSource<any>(tableData);
    this._changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.dataObs$ = this.dataSource.connect();
  }
}

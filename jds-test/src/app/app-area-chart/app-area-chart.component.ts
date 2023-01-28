import { Component, OnInit } from '@angular/core';
import { AxiosServices } from '../services/app.services.axios';


@Component({
  selector: 'app-app-area-chart',
  templateUrl: './app-area-chart.component.html',
  styleUrls: ['./app-area-chart.component.css']
})
export class AppAreaChartComponent implements OnInit {
  alldata:any=[]
  title = "chart"
  constructor(private service:AxiosServices){}
 

  ngOnInit(): void {
    this.service.fetchDataAllData().then(data => {
      this.alldata = data
    });
  }
}

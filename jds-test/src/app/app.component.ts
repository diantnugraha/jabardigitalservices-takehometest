import { Component, OnInit } from '@angular/core';
import { AxiosServices } from './services/app.services.axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  alldata:any=[]
  title = 'jds-test';
  constructor(private service:AxiosServices){}
  


  ngOnInit(): void {
    this.service.fetchDataAllData().then(data => {
      this.alldata = data
      console.log(this.alldata, 'dari home');
    });
  }
}

import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import axios from "axios";


@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})


export class PieComponent implements OnInit {
  
  categorylaut:any = []
  count2017:number = 0
  count2018:number = 0
  count2019:number = 0
  count2020:number = 0
  count2021:number = 0

  allcount:any=[]

  urlBase = "https://opendata.jabarprov.go.id/api-backend/bigdata/diskanlut/od_18465_jml_nelayan__jenis_perairan_kabupatenkota?limit=100&search=LAUT"


  private svg: any;
  private margin = 50;
  private width = 750;
  private height = 600;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors:any;

  private createSvg(): void {
    this.svg = d3.select("figure#pie")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .append("g")
    .attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 2 + ")"
    );
}

private createColors(allcount:any): void {
  this.colors = d3.scaleOrdinal()
  .domain(allcount.map((d:any) => d.jumlah.toString()))
  .range(d3.schemeSet2);
}

private drawChart(allcount:any): void {
  // Compute the position of each group on the pie:
  const pie = d3.pie<any>().value((d: any) => Number(d.jumlah));

  // Build the pie chart
  this.svg
  .selectAll('pieces')
  .data(pie(allcount))
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(this.radius)
  )
  .attr('fill', (d: any, i: any) => (this.colors(i)))

  // Add labels
  const labelLocation = d3.arc()
  .innerRadius(100)
  .outerRadius(this.radius);

  this.svg
  .selectAll('pieces')
  .data(pie(allcount))
  .enter()
  .append('text')
  .text((d: any)=> d.data.jumlah)
  .attr("transform", (d: any) => "translate(" + labelLocation.centroid(d) + ")")
  .style("text-anchor", "middle")
  .style("font-size", 15);
}

ngOnInit(): void {
  this.createSvg();
  this.createColors(this.allcount);
  axios.get(this.urlBase).then(res => { 
      this.count2017 = res.data.data.filter((x:any) => x.tahun === 2017).reduce((sum:any, x:any) => sum + x.jumlah_nelayan, 0);
      this.allcount.push({"tahun":'2017',"jumlah": this.count2017,"color":'#66c2a5'})
      this.count2018 = res.data.data.filter((x:any) => x.tahun === 2018).reduce((sum:any, x:any) => sum + x.jumlah_nelayan, 0);
      this.allcount.push({"tahun":'2018',"jumlah": this.count2018, "color":'#fc8d62'})
      this.count2019 = res.data.data.filter((x:any) => x.tahun === 2019).reduce((sum:any, x:any) => sum + x.jumlah_nelayan, 0);
      this.allcount.push({"tahun":'2019',"jumlah": this.count2019, "color":'#8da0cb'})
      this.count2020 = res.data.data.filter((x:any) => x.tahun === 2020).reduce((sum:any, x:any) => sum + x.jumlah_nelayan, 0);
      this.allcount.push({"tahun":'2020',"jumlah": this.count2020, "color":'#e78ac3'})
      this.count2021 = res.data.data.filter((x:any) => x.tahun === 2021).reduce((sum:any, x:any) => sum + x.jumlah_nelayan, 0);
      this.allcount.push({"tahun":'2021',"jumlah": this.count2021, "color":'#a6d854'})
      console.log(this.allcount, 'dari allcount');
      this.drawChart(this.allcount);
  })
  
 
}}

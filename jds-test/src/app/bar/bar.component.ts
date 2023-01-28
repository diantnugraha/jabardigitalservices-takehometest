import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'
import axios from "axios";


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit{
  // users : User[]
  urlBase = "https://opendata.jabarprov.go.id/api-backend/bigdata/diskanlut/od_18465_jml_nelayan__jenis_perairan_kabupatenkota?limit=100"
  users1:any = []
  
  private svg: any;
  private margin = 150;
  private width = 1000 - (this.margin * 2);
  private height = 700 - (this.margin * 2);

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")")
    .attr("class", "svg-style")
}
private drawBars(users1: any[]): void {
  // Create the X-axis band scale
  const x = d3.scaleBand()
  .range([0, this.width])
  .domain(users1.map((d:any) => d.nama_kabupaten_kota))
  .padding(0.2);

  // Draw the X-axis on the DOM
  this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

  // Create the Y-axis band scale
  const y = d3.scaleLinear()
  .domain([0, 50000])
  .range([this.height, 0]); 

  // Draw the Y-axis on the DOM
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Create and fill the bars
  this.svg.selectAll("bars")
  .data(users1)
  .enter()
  .append("rect")   
  .attr("x", (d: any) => x(d.nama_kabupaten_kota))
  .attr("y", (d: any) => y(d.jumlah_nelayan))
  .attr("width", x.bandwidth())
  .attr("height", (d: any) => this.height - y(d.jumlah_nelayan 
    ))
  .attr("fill", "#d04a35");
}

ngOnInit(): void {
  this.createSvg();
  axios.get(this.urlBase).then(res => { 
    this.drawBars(res.data.data);
  })
  this.drawBars(this.users1);
}
}

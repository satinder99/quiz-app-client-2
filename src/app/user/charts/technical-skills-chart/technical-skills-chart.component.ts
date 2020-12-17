import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartPoint } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-technical-skills-chart',
  templateUrl: './technical-skills-chart.component.html',
  styleUrls: ['./technical-skills-chart.component.scss']
})
export class TechnicalSkillsChartComponent implements OnInit {

  //@Input("bindingObject") data_from_parent:number[];


  //data : number[] = [this.data_from_parent[0],this.data_from_parent[1],this.data_from_parent[2]]
   
  
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  
  data  :number[];
  public pieChartLabels: Label[] = ['Correct Attempted', 'Not Attempted', 'Wrong Attempted'];
  public pieChartData: number[] = [3,3,3];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  ngOnInit() {
    this.data = [5,4,4]
   // console.log("data pushed")

  }
}

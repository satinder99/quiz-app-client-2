import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-technical-skills-chart',
  templateUrl: './technical-skills-chart.component.html',
  styleUrls: ['./technical-skills-chart.component.scss']
})
export class TechnicalSkillsChartComponent implements OnInit {

  @Input("bindingObject") data_from_parent: Number[]
  
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Correct Attempted', 'Not Attempted', 'Wrong Attempted'];
  public pieChartData: SingleDataSet = [30,5,5];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  ngOnInit() {
    console.log()
  }

}

import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-technical-skills-chart',
  templateUrl: './technical-skills-chart.component.html',
  styleUrls: ['./technical-skills-chart.component.scss']
})
export class TechnicalSkillsChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Attempted but right', 'Not Attempted', 'Attempted but wrong'];
  public pieChartData: SingleDataSet = [29, 5, 6];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}

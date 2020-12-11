import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor() {}
  data_source = element_data;  

  ngOnInit() {
  }

  tableColumns  :  string[] = ['date', 'name', 'checkresult'];

}
var element_data = [
  {date : "20/0/2020", name : "Introduction to linux.",link: "1"},
  {date : "20/0/2020", name : "Introduction to linux.",link: '2'}
]
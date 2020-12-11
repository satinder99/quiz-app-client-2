import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registered-events',
  templateUrl: './user-registered-events.component.html',
  styleUrls: ['./user-registered-events.component.scss']
})



export class UserRegisteredEventsComponent implements OnInit {

  constructor() {}

  data_source = element_data;  

  ngOnInit() {
  }

  tableColumns  :  string[] = ['date', 'name', 'link', 'syllabus'];

}
var element_data = [
  {date : "20/0/2020", name : "Introduction to linux.",link : '/user/test',syllabus:"ssssssssssssssssssss"},
  {date : "20/0/2020", name : "Introduction to linux.",link : '/user/test',syllabus:"ssssssssssssssssssss"}
]




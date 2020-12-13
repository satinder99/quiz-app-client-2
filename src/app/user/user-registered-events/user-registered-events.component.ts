import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-registered-events',
  templateUrl: './user-registered-events.component.html',
  styleUrls: ['./user-registered-events.component.scss']
})



export class UserRegisteredEventsComponent implements OnInit {

  constructor(
    private homeService : HomeService,
    private router : Router
  ) {}

  data_source = element_data;  

  ngOnInit() {
  }

  

  tableColumns  :  string[] = ['date', 'name', 'link', 'syllabus'];

}
var element_data = [
  {date : "20/0/2020", name : "Introduction to linux.",link : '/user/test',syllabus:"ssssssssssssssssssss"},
  {date : "20/0/2020", name : "Introduction to linux.",link : '/user/test',syllabus:"ssssssssssssssssssss"}
]
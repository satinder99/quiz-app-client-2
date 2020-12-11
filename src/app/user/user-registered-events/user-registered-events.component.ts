import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-registered-events',
  templateUrl: './user-registered-events.component.html',
  styleUrls: ['./user-registered-events.component.scss']
})



export class UserRegisteredEventsComponent implements OnInit {
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
          personal : {cols:1, rows : 2},
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
        personal : {cols :4,rows : 1},
      };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  data_source = element_data;  

  ngOnInit() {
  }

  tableColumns  :  string[] = ['date', 'name', 'link', 'syllabus'];

}
var element_data = [
  {date : "20/0/2020", name : "Introduction to linux.",link : '/user/test',syllabus:"ssssssssssssssssssss"},
  {date : "20/0/2020", name : "Introduction to linux.",link : '/user/test',syllabus:"ssssssssssssssssssss"}
]




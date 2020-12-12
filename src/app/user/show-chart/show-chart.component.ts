import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-show-chart',
  templateUrl: './show-chart.component.html',
  styleUrls: ['./show-chart.component.scss']
})
export class ShowChartComponent implements OnInit {

  constructor(private breakpointObserver : BreakpointObserver) { }

  ngOnInit() {
  }


  Data = {
    name : "Pyhton",
    total : 40,
    wrong_attempt : 5,
    right_attempt :30,
    
  }
  values = [40,5,30]

  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 2, rows: 2 },
      };
    })
  );
}

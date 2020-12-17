import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-teacher-nav',
  templateUrl: './teacher-nav.component.html',
  styleUrls: ['./teacher-nav.component.scss']
})
export class TeacherNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  menuItems = ['dashboard', 'edit profile', 'schedule test', 'results', 'quiz list'];

  ngOnInit() {
  }

}
